/**
 * DNC 2026 registration backend.
 *
 * Deploy: Extensions > Apps Script > Deploy > New deployment > Web app
 *   Execute as:      Me
 *   Who has access:  Anyone
 * Copy the /exec URL into APPS_SCRIPT_URL in src/pages/Registration.tsx.
 *
 * Re-deploy (New version) after every edit, otherwise the old code keeps serving.
 */

/* ------------------------------------------------------------------ config */

var CONFIG = {
  // Spreadsheet that holds the three registration sheets.
  SPREADSHEET_ID: 'PASTE_SPREADSHEET_ID_HERE',

  // Drive folders for uploaded documents.
  MEDIA_ID_FOLDER_ID: 'PASTE_MEDIA_ID_FOLDER_ID_HERE',
  STUDENT_ID_FOLDER_ID: 'PASTE_STUDENT_ID_FOLDER_ID_HERE',
  PAYMENT_FOLDER_ID: 'PASTE_PAYMENT_FOLDER_ID_HERE',

  // Acknowledgement email settings.
  EVENT_NAME: 'Digital Nepal Conclave 2026',
  SENDER_NAME: 'ICT Foundation Nepal',
  REPLY_TO: 'conclave@ictfoundation.org.np'
};

/**
 * One entry per form_type sent by the website.
 * columns: [Sheet header, incoming field name]
 * files:   [{ field, folder, header }] - field matches the <field>_data/_name/_type params
 */
var FORMS = {
  participant: {
    sheet: 'Participant Registration',
    columns: [
      ['Timestamp', '_timestamp'],
      ['Attendee Type', 'attendee_type'],
      ['First Name', 'first_name'],
      ['Last Name', 'last_name'],
      ['Email Address', 'email'],
      ['Phone Number', 'phone'],
      ['Organization / Institution', 'organization'],
      ['Designation / Title', 'designation'],
      ['How They Heard', 'heard_about']
    ],
    files: [
      { field: 'student_id', folder: 'STUDENT_ID_FOLDER_ID', header: 'Student ID Card' },
      { field: 'payment_voucher', folder: 'PAYMENT_FOLDER_ID', header: 'Payment Voucher' }
    ],
    email: {
      subject: 'We have received your participant registration',
      intro: 'Thank you for registering to attend the Digital Nepal Conclave 2026. Your details have reached us.',
      heading: 'What happens next',
      steps: [
        'Our team will verify your payment voucher against our records.',
        'If you registered as a Student Attendee, your Student ID Card will be verified as well.',
        'Once verification is complete, we will email you a confirmation along with your entry details.'
      ],
      summary: [
        ['Attendee type', 'attendee_type'],
        ['Name', '_full_name'],
        ['Organization', 'organization'],
        ['Email', 'email'],
        ['Phone', 'phone']
      ]
    }
  },

  digital_solutions: {
    sheet: 'Digital Solutions Registration',
    columns: [
      ['Timestamp', '_timestamp'],
      ['Organization Name', 'organization_name'],
      ['Organization Type', 'organization_type'],
      ['Contact Full Name', 'full_name'],
      ['Designation', 'designation'],
      ['Email Address', 'email'],
      ['Phone Number', 'phone'],
      ['Website', 'website'],
      ['Number of Representatives', 'num_representatives'],
      ['Representative 1 Name', 'rep1_name'],
      ['Representative 1 Designation', 'rep1_designation'],
      ['Representative 1 Email', 'rep1_email'],
      ['Representative 1 Phone', 'rep1_phone'],
      ['Representative 2 Name', 'rep2_name'],
      ['Representative 2 Designation', 'rep2_designation'],
      ['Representative 2 Email', 'rep2_email'],
      ['Representative 2 Phone', 'rep2_phone'],
      ['Product / Solution Name', 'product_name'],
      ['Solution Category', 'solution_category'],
      ['What They Will Showcase', 'showcase_details'],
      ['Special Requirements', 'special_requirements'],
      ['Billing Declaration', 'billing_declaration']
    ],
    files: [],
    email: {
      subject: 'We have received your digital solutions registration',
      intro: 'Thank you for applying to showcase your solution at the Digital Nepal Conclave 2026. Your application has reached us.',
      heading: 'What happens next',
      steps: [
        'Our team will review your submission and the details of your showcase.',
        'We will follow up with you directly on the billing procedure for the stall payment of Rs. 35,000 (incl. VAT).',
        'Your stall allocation is confirmed once the payment process is completed.'
      ],
      summary: [
        ['Organization', 'organization_name'],
        ['Contact person', 'full_name'],
        ['Product / solution', 'product_name'],
        ['Representatives', 'num_representatives'],
        ['Email', 'email'],
        ['Phone', 'phone']
      ]
    }
  },

  media: {
    sheet: 'Media Registration',
    columns: [
      ['Timestamp', '_timestamp'],
      ['First Name', 'first_name'],
      ['Last Name', 'last_name'],
      ['Email Address', 'email'],
      ['Phone Number', 'phone'],
      ['Organization / Institution', 'organization'],
      ['Media Outlet URL', 'media_url'],
      ['Designation / Title', 'designation'],
      ['How They Heard', 'heard_about']
    ],
    files: [
      { field: 'media_id', folder: 'MEDIA_ID_FOLDER_ID', header: 'Media ID Card' }
    ],
    email: {
      subject: 'We have received your media pass request',
      intro: 'Thank you for requesting a media pass for the Digital Nepal Conclave 2026. Your request has reached us.',
      heading: 'What happens next',
      steps: [
        'Our team will verify the media ID card you uploaded.',
        'We will also review the media outlet you represent as part of our accreditation process.',
        'Once accredited, your official invitation pass and press entry details will be sent to this email address.'
      ],
      summary: [
        ['Name', '_full_name'],
        ['Organization', 'organization'],
        ['Media outlet', 'media_url'],
        ['Email', 'email'],
        ['Phone', 'phone']
      ]
    }
  }
};

/* ----------------------------------------------------------------- routing */

function doGet() {
  return json({ success: true, message: 'DNC 2026 registration endpoint is live.' });
}

function doPost(e) {
  try {
    var params = (e && e.parameter) || {};
    var formType = params.form_type;
    var form = FORMS[formType];

    if (!form) {
      return json({ success: false, message: 'Unknown form_type: ' + formType });
    }

    // Serialised so two submissions cannot claim the same row.
    var lock = LockService.getScriptLock();
    lock.waitLock(30000);
    try {
      var sheet = getSheet(form);
      sheet.appendRow(buildRow(form, params));
    } finally {
      lock.releaseLock();
    }

    // A failed acknowledgement must not fail the registration - the row is already saved.
    try {
      sendAcknowledgement(form, params);
    } catch (mailError) {
      console.error('Acknowledgement email failed: ' + mailError);
    }

    return json({ success: true, message: 'Registration recorded.' });
  } catch (error) {
    console.error(error);
    return json({ success: false, message: String(error && error.message ? error.message : error) });
  }
}

/* ------------------------------------------------------------------- sheet */

/** Returns the form's sheet, creating it (with a frozen header row) if missing. */
function getSheet(form) {
  var ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  var sheet = ss.getSheetByName(form.sheet) || ss.insertSheet(form.sheet);
  var headers = headersFor(form);

  var firstRow = sheet.getLastRow() === 0
    ? []
    : sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  // Write headers when the sheet is new, or repair them if they drifted.
  if (firstRow.join('|') !== headers.join('|')) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function headersFor(form) {
  var headers = form.columns.map(function (column) { return column[0]; });
  form.files.forEach(function (file) { headers.push(file.header); });
  return headers;
}

function buildRow(form, params) {
  var timestamp = new Date();

  var row = form.columns.map(function (column) {
    var key = column[1];
    if (key === '_timestamp') return timestamp;
    return params[key] || '';
  });

  form.files.forEach(function (file) {
    row.push(saveFile(file, params, timestamp));
  });

  return row;
}

/* ------------------------------------------------------------------- drive */

/**
 * Stores an uploaded document and returns its Drive URL.
 * The website sends <field>_data (base64), <field>_name and <field>_type.
 * Returns '' when the (optional) file was not provided.
 */
function saveFile(file, params, timestamp) {
  var data = params[file.field + '_data'];
  if (!data) return '';

  var folderId = CONFIG[file.folder];
  if (!folderId || folderId.indexOf('PASTE_') === 0) {
    throw new Error('Drive folder not configured: ' + file.folder);
  }

  var name = params[file.field + '_name'] || file.field;
  var mimeType = params[file.field + '_type'] || 'application/octet-stream';
  var owner = [
    params.first_name || params.organization_name || 'registrant',
    params.last_name || ''
  ].join(' ').trim();

  var blob = Utilities.newBlob(Utilities.base64Decode(data), mimeType, prefixName(owner, timestamp, name));
  return DriveApp.getFolderById(folderId).createFile(blob).getUrl();
}

/** "Ram Thapa - 2026-08-07 14-05-33 - press-card.pdf" so the folder stays scannable. */
function prefixName(owner, timestamp, name) {
  var stamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd HH-mm-ss');
  return [owner || 'registrant', stamp, name].join(' - ').replace(/[\\/:*?"<>|]/g, '_');
}

/* ------------------------------------------------------------------- email */

/** Sends the registrant the acknowledgement written for their registration type. */
function sendAcknowledgement(form, params) {
  var recipient = (params.email || '').trim();
  if (!form.email || !recipient) return;

  var copy = form.email;
  var name = fullName(params);
  var greeting = name ? 'Dear ' + name + ',' : 'Hello,';

  MailApp.sendEmail({
    to: recipient,
    replyTo: CONFIG.REPLY_TO,
    name: CONFIG.SENDER_NAME,
    subject: copy.subject + ' - ' + CONFIG.EVENT_NAME,
    body: plainBody(copy, greeting, params),
    htmlBody: htmlBody(copy, greeting, params)
  });
}

function fullName(params) {
  return [params.first_name, params.last_name].join(' ').trim() || (params.full_name || '').trim();
}

/** Resolves a summary row's value, including the synthetic _full_name key. */
function summaryValue(key, params) {
  if (key === '_full_name') return fullName(params);
  return params[key] || '';
}

function summaryRows(copy, params) {
  return (copy.summary || [])
    .map(function (row) { return [row[0], summaryValue(row[1], params)]; })
    .filter(function (row) { return row[1] !== ''; });
}

function plainBody(copy, greeting, params) {
  var lines = [greeting, '', copy.intro, '', copy.heading + ':'];

  copy.steps.forEach(function (step, index) {
    lines.push((index + 1) + '. ' + step);
  });

  var rows = summaryRows(copy, params);
  if (rows.length) {
    lines.push('', 'Your submitted details:');
    rows.forEach(function (row) { lines.push(row[0] + ': ' + row[1]); });
  }

  lines.push(
    '',
    'If any of the details above are incorrect, reply to this email and we will correct them.',
    '',
    CONFIG.SENDER_NAME,
    CONFIG.EVENT_NAME
  );
  return lines.join('\n');
}

function htmlBody(copy, greeting, params) {
  var steps = copy.steps.map(function (step) {
    return '<li style="margin-bottom:8px;">' + escapeHtml(step) + '</li>';
  }).join('');

  var rows = summaryRows(copy, params).map(function (row) {
    return '<tr>' +
      '<td style="padding:6px 16px 6px 0;color:#64748b;">' + escapeHtml(row[0]) + '</td>' +
      '<td style="padding:6px 0;color:#0f172a;font-weight:600;">' + escapeHtml(row[1]) + '</td>' +
      '</tr>';
  }).join('');

  var summaryBlock = rows
    ? '<h3 style="margin:28px 0 8px;font-size:15px;color:#0f172a;">Your submitted details</h3>' +
      '<table style="border-collapse:collapse;font-size:14px;">' + rows + '</table>'
    : '';

  return '' +
    '<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#334155;line-height:1.6;">' +
      '<div style="background:#121652;color:#ffffff;padding:20px 24px;border-radius:12px 12px 0 0;">' +
        '<div style="font-size:18px;font-weight:bold;">' + escapeHtml(CONFIG.EVENT_NAME) + '</div>' +
      '</div>' +
      '<div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">' +
        '<p style="margin:0 0 16px;">' + escapeHtml(greeting) + '</p>' +
        '<p style="margin:0 0 20px;">' + escapeHtml(copy.intro) + '</p>' +
        '<h3 style="margin:0 0 8px;font-size:15px;color:#0f172a;">' + escapeHtml(copy.heading) + '</h3>' +
        '<ol style="margin:0;padding-left:20px;">' + steps + '</ol>' +
        summaryBlock +
        '<p style="margin:28px 0 0;font-size:13px;color:#64748b;">' +
          'If any of the details above are incorrect, reply to this email and we will correct them.' +
        '</p>' +
        '<p style="margin:20px 0 0;font-size:13px;color:#64748b;">' +
          escapeHtml(CONFIG.SENDER_NAME) +
        '</p>' +
      '</div>' +
    '</div>';
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ------------------------------------------------------------------ output */

function json(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

/* -------------------------------------------------------------- setup help */

/** Run once from the editor to create all three sheets with their headers. */
function setUpSheets() {
  Object.keys(FORMS).forEach(function (formType) {
    getSheet(FORMS[formType]);
  });
}
