/**
 * DNC 2026 — Volunteer / Internship form backend.
 *
 * Deploy: Extensions > Apps Script > Deploy > New deployment > Web app
 *   Execute as: Me
 *   Who has access: Anyone
 * Then paste the /exec URL into APPS_SCRIPT_URL in src/pages/Registration.tsx.
 */

var SHEET_NAME = 'Volunteers';
var CV_FOLDER_ID = 'PUT_YOUR_DRIVE_FOLDER_ID_HERE'; // Drive folder that stores uploaded CVs

// Column key -> header label. Order here is the column order in the sheet.
var COLUMNS = [
  ['timestamp', 'Timestamp'],
  ['full_name', 'Full Name'],
  ['email', 'Email Address'],
  ['phone', 'Phone / WhatsApp'],
  ['location', 'Current Location / City'],
  ['institution', 'College / Institution / Organization'],
  ['education', 'Level of Education / Major'],
  ['position', 'Position Applied For'],
  ['pre_event_availability', 'Pre-Event Availability'],
  ['internship_availability', '3-Month Internship Availability'],
  ['areas', 'Areas of Interest'],
  ['has_vehicle', 'Has Two-Wheeler'],
  ['experience', 'Previous Experience'],
  ['motivation', 'Motivation'],
  ['cv_url', 'CV / Resume']
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var form = (e && e.parameter) || {};
    if (form.form_type !== 'volunteer') {
      return json({ success: false, message: 'Unknown form_type: ' + form.form_type });
    }

    var row = {};
    row.timestamp = new Date();
    for (var i = 1; i < COLUMNS.length - 1; i++) {
      row[COLUMNS[i][0]] = form[COLUMNS[i][0]] || '';
    }
    row.cv_url = saveFile(form.cv_data, form.cv_name, form.cv_type, form.full_name);

    appendRow(row);
    return json({ success: true });
  } catch (err) {
    return json({ success: false, message: String(err && err.message ? err.message : err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json({ success: true, message: 'DNC volunteer endpoint is live.' });
}

/** Appends a row, creating the sheet and header row on first use. */
function appendRow(row) {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);

  var headers = COLUMNS.map(function (column) { return column[1]; });
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#2e3192')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, headers.length, 180);
  }

  sheet.appendRow(COLUMNS.map(function (column) { return row[column[0]] || ''; }));
}

/** Stores a base64 upload in Drive and returns a shareable link ('' when nothing was sent). */
function saveFile(base64, name, type, applicant) {
  if (!base64) return '';
  if (!CV_FOLDER_ID || CV_FOLDER_ID.indexOf('PUT_YOUR') === 0) {
    throw new Error('CV_FOLDER_ID is not configured in the Apps Script.');
  }

  var blob = Utilities.newBlob(
    Utilities.base64Decode(base64),
    type || 'application/octet-stream',
    fileName(name, applicant)
  );
  var file = DriveApp.getFolderById(CV_FOLDER_ID).createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return file.getUrl();
}

function fileName(name, applicant) {
  var extension = (name && name.indexOf('.') > -1) ? name.slice(name.lastIndexOf('.')) : '';
  var who = (applicant || 'volunteer').replace(/[^\w\s-]/g, '').trim() || 'volunteer';
  var stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss');
  return who + ' - CV - ' + stamp + extension;
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
