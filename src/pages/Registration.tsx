import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  ShieldCheck,
  Users,
  Building2,
  User,
  Video,
  Upload,
  Landmark,
  Presentation,
  Check,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// Google Apps Script Web App Deployment URL
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw5f1wZJFI-OnQqAFfX6CZQjQORXy_y_ZAQOg1WIgkMTwYTY29Mubd5LmEXDcsqlE0a5Q/exec";

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const ACCEPTED_FILES = ".png,.jpg,.jpeg,.pdf";

const HEARD_ABOUT_OPTIONS = [
  "Social Media",
  "Colleague / Friend",
  "Email",
  "News",
  "Previous Attendee",
];

const ORGANIZATION_TYPES = [
  "Startup",
  "Tech Company",
  "Enterprise",
  "Government",
  "Academic",
  "NGO / INGO",
];

const SOLUTION_CATEGORIES = [
  "FinTech",
  "GovTech",
  "AI / ML",
  "Cybersecurity",
  "EdTech",
  "HealthTech",
  "AgriTech",
  "E-commerce",
  "Infrastructure",
  "Others",
];

const TICKETS = [
  {
    id: "General Attendee",
    price: "NPR 1,000",
    inclusions: ["Access to all general conference sessions only."],
  },
  {
    id: "Student Attendee",
    price: "NPR 5,000",
    inclusions: [
      "Access to all conference sessions and main hall",
      "Official Conference Kit",
      "Lunch, refreshments and dinner",
      "Standard networking access",
      "Valid Student ID Card required",
    ],
  },
  {
    id: "Standard Attendee",
    price: "NPR 7,500",
    inclusions: [
      "Access to all conference sessions and main hall",
      "Official Conference Kit",
      "Lunch, refreshments and dinner",
      "Standard networking access",
    ],
  },
];

const inputClass =
  "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue focus:border-dnc-blue";

/* ---------- small form primitives ---------- */

export function Field({
  label,
  required,
  children,
  hint,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-slate-700 mb-1.5">
        {label} {required && <span className="text-dnc-red">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

export function Text({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <Field label={label} required={required}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
      />
    </Field>
  );
}

export function Dropdown({
  label,
  name,
  value,
  onChange,
  options,
  required,
  placeholder = "Select an option",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <Field label={label} required={required}>
      <select name={name} value={value} onChange={onChange} className={inputClass}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Field>
  );
}

export function FileUpload({
  label,
  required,
  file,
  onPick,
  hint = "PNG, JPG or PDF. Max 5MB.",
}: {
  label: string;
  required?: boolean;
  file: File | null;
  onPick: (file: File | null) => void;
  hint?: string;
}) {
  return (
    <Field label={label} required={required} hint={hint}>
      <label className="flex items-center gap-3 px-4 py-3 bg-slate-50 border border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-dnc-blue/50 hover:bg-slate-100/70 transition-colors">
        <Upload className="w-4 h-4 text-dnc-blue shrink-0" />
        <span className="text-sm text-slate-600 truncate">
          {file ? file.name : "Choose a file to upload"}
        </span>
        <input
          type="file"
          accept={ACCEPTED_FILES}
          className="hidden"
          onChange={(e) => onPick(e.target.files?.[0] ?? null)}
        />
      </label>
    </Field>
  );
}

export function SectionHeading({ step, title }: { step: number; title: string }) {
  return (
    <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
      <span className="w-8 h-8 rounded-full bg-dnc-blue text-white flex items-center justify-center text-sm font-bold shrink-0">
        {step}
      </span>
      {title}
    </h3>
  );
}

export function FormCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <span className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest block mb-6">
        {title}
      </span>
      {children}
    </div>
  );
}

export function StatusBlock({
  state,
  error,
}: {
  state: "idle" | "sending" | "success" | "error";
  error: string;
}) {
  return (
    <>
      {error && (
        <div className="p-3 bg-red-50 text-red-700 text-sm font-sans rounded-xl border border-red-200/70">
          {error}
        </div>
      )}
      {state === "success" && (
        <div className="p-4 bg-emerald-50 text-emerald-800 text-sm font-sans rounded-xl border border-emerald-200 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <p className="font-bold">Registration submitted successfully</p>
          </div>
        </div>
      )}
    </>
  );
}

export function SubmitButton({
  state,
  label,
}: {
  state: "idle" | "sending" | "success" | "error";
  label: string;
}) {
  return (
    <button
      type="submit"
      disabled={state === "sending"}
      className="w-full py-3.5 bg-dnc-blue hover:bg-dnc-blue/90 transition text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Send className="w-4 h-4" />
      {state === "sending" ? "Submitting..." : label}
    </button>
  );
}

export function InfoPanel({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="p-2 bg-dnc-blue/10 text-dnc-blue rounded-xl border border-dnc-blue/10">
          {icon}
        </span>
        <h4 className="font-display font-bold text-base text-slate-900">{title}</h4>
      </div>
      <div className="space-y-3 text-sm text-slate-600 leading-relaxed">{children}</div>
    </div>
  );
}

function BankDetails() {
  const rows = [
    ["Account Name", "I.C.T. Foundation Nepal"],
    ["Account No.", "024010010000612"],
    ["Bank", "Sanima Bank Ltd."],
    ["Branch", "Teku Branch"],
  ];
  return (
    <InfoPanel icon={<Landmark className="w-5 h-5" />} title="Payment Details">
      <dl className="divide-y divide-slate-200 border-t border-slate-200">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-2">
            <dt className="text-slate-500">{k}</dt>
            <dd className="font-bold text-slate-800 text-right select-all">{v}</dd>
          </div>
        ))}
      </dl>
    </InfoPanel>
  );
}

/* ---------- shared submit ---------- */

/** Apps Script receives files as base64 in the form body, so no CORS preflight is triggered. */
async function fileToBase64(file: File) {
  const buffer = await file.arrayBuffer();
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

export async function postForm(
  fields: Record<string, string>,
  formType: string,
  files: Record<string, File | null> = {},
  url: string = APPS_SCRIPT_URL
) {
  const params = new URLSearchParams({ ...fields, form_type: formType });

  for (const [field, file] of Object.entries(files)) {
    if (!file) continue;
    params.set(`${field}_data`, await fileToBase64(file));
    params.set(`${field}_name`, file.name);
    params.set(`${field}_type`, file.type || "application/octet-stream");
  }

  const response = await fetch(url, { method: "POST", body: params });
  const text = await response.text().catch(() => "");
  const result = text.trim().startsWith("{") ? JSON.parse(text) : null;

  if (result && result.success === false) {
    throw new Error(result.message || "Submission failed");
  }
  if (!result && !response.ok) {
    throw new Error("Invalid response from server");
  }
}

export function readableError(error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown error";
  if (message.includes("Failed to fetch")) {
    return "Network error. Please check your connection and try again.";
  }
  return "Error submitting form: " + message;
}

export function checkFile(file: File | null, label: string) {
  if (!file) return `Please upload ${label}.`;
  if (file.size > MAX_FILE_BYTES) return `${label} must be 5MB or smaller.`;
  return "";
}

/* ---------- page ---------- */

type Tab = "participant" | "solutions" | "media";
export type FormState = "idle" | "sending" | "success" | "error";

const TRACKS: {
  id: Tab;
  label: string;
  icon: React.ReactNode;
  tagline: string;
  price: string;
  priceNote: string;
  details: string[];
}[] = [
  {
    id: "participant",
    label: "Participant Registration",
    icon: <User className="w-5 h-5" />,
    tagline: "Attend the conference sessions as a registered attendee.",
    price: "NPR 1,000 - 7,500",
    priceNote: "incl. VAT, three attendee tiers",
    details: [
      "General (NPR 1,000): all general conference sessions",
      "Student (NPR 5,000): all sessions, kit, meals, networking",
      "Standard (NPR 7,500): all sessions, kit, meals, networking",
      "Payment voucher upload required",
      "Student ID Card required for the student tier",
    ],
  },
  {
    id: "solutions",
    label: "Digital Solutions Showcase",
    icon: <Building2 className="w-5 h-5" />,
    tagline: "Showcase your product, platform, or service to key industry leaders, policymakers, and tech enthusiasts. (2 members per stall)",
    price: "Rs. 50,000",
    priceNote: "per stall, incl. VAT",
    details: [
      "Stall space of 8 ft x 8 ft",
      "Package covers 2 representatives per stall",
      "Stage slot for selected exhibitors to present",
      "Pre-Event & Event day media coverage",
      "Branding and banners managed by your team",
      "ICT Foundation follows up on billing",
    ],
  },
  {
    id: "media",
    label: "Media Registration",
    icon: <Video className="w-5 h-5" />,
    tagline: "Complimentary passes for accredited journalists, photojournalists, and official press representatives.",
    price: "Complimentary",
    priceNote: "for accredited press",
    details: [
      "Open to journalists, photojournalists and press representatives",
      "Valid press ID or media card upload required",
      "Passes issued after document verification",
      "Entry details sent to your registered email",
    ],
  },
];

export default function RegistrationComponent() {
  const [activeTab, setActiveTab] = useState<Tab | null>(null);

  return (
    <section id="registration-page" className="bg-slate-50 py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dnc-blue/5 text-dnc-blue text-sm font-sans font-bold rounded-full uppercase tracking-wider mb-3">
            <Users className="w-4 h-4 text-dnc-orange" />
            DNC 2026 Registration
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Join the Digital Nepal Conclave
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed font-sans">
            Choose how you want to take part in DNC 2026, then complete the registration form for
            that track.
          </p>
        </div>

        {/* Track chooser */}
        {activeTab === null && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {TRACKS.map((track) => (
              <div
                key={track.id}
                className="flex flex-col bg-slate-50/50 border border-slate-200 rounded-3xl p-7 hover:border-dnc-blue/40 hover:shadow-lg transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-2xl bg-dnc-blue/10 border border-dnc-blue/10 text-dnc-blue flex items-center justify-center mb-5">
                  {track.icon}
                </span>

                <h2 className="font-display font-black text-xl text-slate-900">{track.label}</h2>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{track.tagline}</p>

                <div className="mt-5 pt-5 border-t border-slate-200">
                  <p className="font-display font-black text-2xl text-dnc-blue">{track.price}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{track.priceNote}</p>
                </div>

                <ul className="mt-5 space-y-2.5 grow">
                  {track.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm text-slate-600 leading-snug">
                      <Check className="w-4 h-4 text-dnc-orange shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setActiveTab(track.id)}
                  className="mt-7 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-dnc-blue hover:bg-dnc-blue/90 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-300 group"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Selected form */}
        {activeTab !== null && (
          <>
            <div className="mb-6">
              <button
                onClick={() => setActiveTab(null)}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-dnc-blue transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to registration types
              </button>
            </div>

            <div className="flex justify-center mb-10">
              <div className="inline-flex flex-wrap justify-center bg-slate-50 rounded-2xl p-1 border border-slate-200 shadow-sm">
                {TRACKS.map((track) => (
                  <button
                    key={track.id}
                    onClick={() => setActiveTab(track.id)}
                    className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-bold text-sm transition ${
                      activeTab === track.id
                        ? "bg-white text-dnc-blue shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {track.icon}
                    {track.label}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "participant" && <ParticipantForm />}
            {activeTab === "solutions" && <SolutionsForm />}
            {activeTab === "media" && <MediaForm />}

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400 font-sans">
              <ShieldCheck className="w-4 h-4 text-slate-300 shrink-0" />
              Your information is secure and will only be used for event management purposes.
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ---------- 1. Participant ---------- */

function ParticipantForm() {
  const [data, setData] = useState({
    attendee_type: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    heard_about: "",
  });
  const [studentId, setStudentId] = useState<File | null>(null);
  const [voucher, setVoucher] = useState<File | null>(null);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const isStudent = data.attendee_type === "Student Attendee";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const required = [
      data.attendee_type,
      data.first_name,
      data.last_name,
      data.email,
      data.phone,
      data.organization,
      data.designation,
      data.heard_about,
    ];
    if (required.some((v) => !v.trim())) {
      setError("Please fill out all mandatory fields (marked with *).");
      return;
    }
    if (!data.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    const voucherError = checkFile(voucher, "a screenshot of your payment voucher");
    if (voucherError) {
      setError(voucherError);
      return;
    }
    if (isStudent) {
      const idError = checkFile(studentId, "your valid Student ID Card");
      if (idError) {
        setError(idError);
        return;
      }
    }

    setState("sending");
    try {
      await postForm(data, "participant", { student_id: studentId, payment_voucher: voucher });
      setState("success");
      setData({
        attendee_type: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        organization: "",
        designation: "",
        heard_about: "",
      });
      setStudentId(null);
      setVoucher(null);
      setTimeout(() => setState("idle"), 5000);
    } catch (err) {
      setState("error");
      setError(readableError(err));
      setTimeout(() => setState("idle"), 5000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <BankDetails />
      <div>
        <FormCard title="Participant Registration Form">
          <form onSubmit={submit} className="space-y-8">

            <div>
              <SectionHeading step={1} title="Select Your Attendee Type" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TICKETS.map((ticket) => {
                  const selected = data.attendee_type === ticket.id;
                  return (
                    <button
                      key={ticket.id}
                      type="button"
                      onClick={() => {
                        setData((p) => ({ ...p, attendee_type: ticket.id }));
                        setError("");
                      }}
                      className={`relative text-left p-4 rounded-2xl border-2 transition-all duration-300 ${
                        selected
                          ? "border-dnc-blue bg-dnc-blue/5 shadow-md ring-1 ring-dnc-blue/20"
                          : "border-slate-200 bg-slate-50/50 hover:border-dnc-blue/40 hover:bg-white"
                      }`}
                    >
                      <span
                        className={`absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                          selected ? "bg-dnc-blue border-dnc-blue" : "border-slate-300 bg-white"
                        }`}
                      >
                        {selected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                      </span>

                      <p className={`font-display font-bold text-sm pr-7 ${selected ? "text-dnc-blue" : "text-slate-900"}`}>
                        {ticket.id.replace(" Attendee", "")}
                      </p>
                      <p className="font-display font-black text-lg text-dnc-blue mt-0.5">
                        {ticket.price}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1">incl. VAT</p>
                      <ul className="mt-3 space-y-1.5">
                        {ticket.inclusions.map((inc) => (
                          <li key={inc} className="flex gap-1.5 text-[11px] text-slate-600 leading-snug">
                            <Check className="w-3 h-3 text-dnc-orange shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <SectionHeading step={2} title="Personal Details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Text label="First Name" name="first_name" value={data.first_name} onChange={onChange} placeholder="Enter first name" required />
                <Text label="Last Name" name="last_name" value={data.last_name} onChange={onChange} placeholder="Enter last name" required />
                <Text label="Email Address" name="email" type="email" value={data.email} onChange={onChange} placeholder="name@organization.com" required />
                <Text label="Phone Number" name="phone" type="tel" value={data.phone} onChange={onChange} placeholder="+977 98..." required />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <SectionHeading step={3} title="Organizational Details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Text label="Organization / Institution" name="organization" value={data.organization} onChange={onChange} placeholder="Organization name" required />
                <Text label="Designation / Title" name="designation" value={data.designation} onChange={onChange} placeholder="Your designation" required />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <SectionHeading step={4} title="Document Upload" />
              <div className="space-y-4">
                <FileUpload
                  label="Valid Student ID Card"
                  required={isStudent}
                  file={studentId}
                  onPick={setStudentId}
                  hint={
                    isStudent
                      ? "PNG, JPG or PDF. Max 5MB."
                      : "PNG, JPG or PDF. Max 5MB. Optional for General and Standard attendees."
                  }
                />
                <FileUpload
                  label="Screenshot of your payment voucher"
                  required
                  file={voucher}
                  onPick={setVoucher}
                />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <SectionHeading step={5} title="Additional Information" />
              <Dropdown
                label="How did you hear about DNC 2026?"
                name="heard_about"
                value={data.heard_about}
                onChange={onChange}
                options={HEARD_ABOUT_OPTIONS}
                required
              />
            </div>

            <StatusBlock state={state} error={error} />
            <SubmitButton state={state} label="Complete Registration" />
          </form>
        </FormCard>
      </div>

    </div>
  );
}

/* ---------- 2. Digital Solutions ---------- */

function SolutionsForm() {
  const [data, setData] = useState({
    organization_name: "",
    organization_type: "",
    full_name: "",
    designation: "",
    email: "",
    phone: "",
    website: "",
    product_name: "",
    solution_category: "",
    showcase_details: "",
    special_requirements: "",
    num_representatives: "",
    rep1_name: "",
    rep1_designation: "",
    rep1_email: "",
    rep1_phone: "",
    rep2_name: "",
    rep2_designation: "",
    rep2_email: "",
    rep2_phone: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const required = [
      data.organization_name,
      data.organization_type,
      data.full_name,
      data.designation,
      data.email,
      data.phone,
      data.product_name,
      data.solution_category,
      data.num_representatives,
    ];
    if (required.some((v) => !v.trim())) {
      setError("Please fill out all mandatory fields (marked with *).");
      return;
    }
    if (!data.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!agreed) {
      setError("Please confirm the billing declaration before submitting.");
      return;
    }

    setState("sending");
    try {
      await postForm({ ...data, billing_declaration: "Agreed" }, "digital_solutions");
      setState("success");
      setData({
        organization_name: "",
        organization_type: "",
        full_name: "",
        designation: "",
        email: "",
        phone: "",
        website: "",
        product_name: "",
        solution_category: "",
        showcase_details: "",
        special_requirements: "",
        num_representatives: "",
        rep1_name: "",
        rep1_designation: "",
        rep1_email: "",
        rep1_phone: "",
        rep2_name: "",
        rep2_designation: "",
        rep2_email: "",
        rep2_phone: "",
      });
      setAgreed(false);
      setTimeout(() => setState("idle"), 5000);
    } catch (err) {
      setState("error");
      setError(readableError(err));
      setTimeout(() => setState("idle"), 5000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <InfoPanel icon={<Presentation className="w-5 h-5" />} title="Exhibition Details">
          <p>
            Showcase your product, platform, or service to industry leaders, policymakers, and tech
            enthusiasts.
          </p>
          <dl className="divide-y divide-slate-200 border-t border-slate-200">
            {[
              ["Stall space", "8 ft x 8 ft"],
              ["Furniture", "One 6 ft table, two chairs"],
              ["Stall cost", "Rs. 50,000 incl. VAT"],
              ["Package covers", "2 representatives at the stall"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2">
                <dt className="text-slate-500">{k}</dt>
                <dd className="font-bold text-slate-800 text-right">{v}</dd>
              </div>
            ))}
          </dl>
          <p>
            Selected exhibitors get a dedicated slot to present their solution on stage during the
            conference.
          </p>
          <p>
            All promotional materials, banners, backdrops, and branding displays are the exhibiting
            organization's responsibility (Branding should be limited within 8 ft x 8 ft space). For billing procedures, the ICT Foundation team will
            follow up with you.
          </p>
      </InfoPanel>
      <div>
        <FormCard title="Digital Solutions Registration Form">
          <form onSubmit={submit} className="space-y-8">

            <div>
              <SectionHeading step={1} title="Organization and Contact Details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Text label="Organization Name" name="organization_name" value={data.organization_name} onChange={onChange} placeholder="Your organization name" required />
                <Dropdown label="Organization Type" name="organization_type" value={data.organization_type} onChange={onChange} options={ORGANIZATION_TYPES} required placeholder="Select type" />
                <Text label="Full Name" name="full_name" value={data.full_name} onChange={onChange} placeholder="Your name" required />
                <Text label="Designation" name="designation" value={data.designation} onChange={onChange} placeholder="Your designation" required />
                <Text label="Email Address" name="email" type="email" value={data.email} onChange={onChange} placeholder="contact@organization.com" required />
                <Text label="Phone Number" name="phone" type="tel" value={data.phone} onChange={onChange} placeholder="+977 98..." required />
              </div>
              <div className="mt-4">
                <Text label="Website" name="website" type="url" value={data.website} onChange={onChange} placeholder="https://www.organization.com" />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <SectionHeading step={2} title="Logistics" />

              <div className="mb-5 text-sm text-slate-600 leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <p>
                  The Rs. 50,000 package covers 2 representatives at your stall. If both will be
                  present, please fill in the details of both members.
                </p>
                <p>
                  Additional representatives can be added at an extra cost. If you need more than 2,
                  please mention it in the Special Requirements field below and our team will follow
                  up with you.
                </p>
              </div>

              <div className="mb-6">
                <Field label="Number of Representatives" required>
                <div className="flex gap-3">
                  {["1", "2"].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => {
                        setData((p) => ({ ...p, num_representatives: count }));
                        setError("");
                      }}
                      className={`px-6 py-2.5 rounded-xl border-2 text-sm font-bold transition-all duration-300 ${
                        data.num_representatives === count
                          ? "border-dnc-blue bg-dnc-blue/5 text-dnc-blue"
                          : "border-slate-200 bg-slate-50/50 text-slate-600 hover:border-dnc-blue/40"
                      }`}
                    >
                      {count}
                    </button>
                    ))}
                  </div>
                </Field>
              </div>

              {data.num_representatives !== "" && (
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-3">Representative 1</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Text label="Full Name" name="rep1_name" value={data.rep1_name} onChange={onChange} placeholder="Representative name" />
                      <Text label="Designation" name="rep1_designation" value={data.rep1_designation} onChange={onChange} placeholder="Their designation" />
                      <Text label="Email Address" name="rep1_email" type="email" value={data.rep1_email} onChange={onChange} placeholder="name@organization.com" />
                      <Text label="Phone Number" name="rep1_phone" type="tel" value={data.rep1_phone} onChange={onChange} placeholder="+977 98..." />
                    </div>
                  </div>

                  {data.num_representatives === "2" && (
                    <div>
                      <p className="text-sm font-bold text-slate-800 mb-3">Representative 2</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Text label="Full Name" name="rep2_name" value={data.rep2_name} onChange={onChange} placeholder="Representative name" />
                        <Text label="Designation" name="rep2_designation" value={data.rep2_designation} onChange={onChange} placeholder="Their designation" />
                        <Text label="Email Address" name="rep2_email" type="email" value={data.rep2_email} onChange={onChange} placeholder="name@organization.com" />
                        <Text label="Phone Number" name="rep2_phone" type="tel" value={data.rep2_phone} onChange={onChange} placeholder="+977 98..." />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="border-t border-slate-100 pt-8">
              <SectionHeading step={3} title="Digital Solution Details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Text label="Product / Solution Name" name="product_name" value={data.product_name} onChange={onChange} placeholder="What will you be showcasing?" required />
                <Dropdown label="Solution Category" name="solution_category" value={data.solution_category} onChange={onChange} options={SOLUTION_CATEGORIES} required placeholder="Select category" />
              </div>

              <div className="mt-4 space-y-4">
                <Field label="What will you showcase?">
                  <textarea
                    name="showcase_details"
                    value={data.showcase_details}
                    onChange={onChange}
                    rows={4}
                    placeholder="Describe your product, solution, or service in detail..."
                    className={inputClass}
                  />
                </Field>
                <Field label="Special Requirements">
                  <textarea
                    name="special_requirements"
                    value={data.special_requirements}
                    onChange={onChange}
                    rows={3}
                    placeholder="Any special booth setup, equipment, or logistics requirements..."
                    className={inputClass}
                  />
                </Field>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <SectionHeading step={4} title="Declaration" />
              <label className="flex gap-3 items-start p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:border-dnc-blue/40 transition-colors">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    setError("");
                  }}
                  className="mt-0.5 w-4 h-4 shrink-0 accent-dnc-blue cursor-pointer"
                />
                <span className="text-sm text-slate-600 leading-relaxed">
                  I confirm that our organization will complete the stall payment of Rs. 50,000
                  (incl. VAT) through the billing procedure shared by the ICT Foundation team during
                  their follow-up. <span className="text-dnc-red">*</span>
                </span>
              </label>
            </div>

            <StatusBlock state={state} error={error} />
            <SubmitButton state={state} label="Submit Application" />
          </form>
        </FormCard>
      </div>

    </div>
  );
}

/* ---------- 3. Media ---------- */

function MediaForm() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    organization: "",
    media_url: "",
    designation: "",
    heard_about: "",
  });
  const [mediaId, setMediaId] = useState<File | null>(null);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(data).some((v) => !v.trim())) {
      setError("Please fill out all mandatory fields (marked with *).");
      return;
    }
    if (!data.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    const idError = checkFile(mediaId, "your valid Media ID Card");
    if (idError) {
      setError(idError);
      return;
    }

    setState("sending");
    try {
      await postForm(data, "media", { media_id: mediaId });
      setState("success");
      setData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        organization: "",
        media_url: "",
        designation: "",
        heard_about: "",
      });
      setMediaId(null);
      setTimeout(() => setState("idle"), 5000);
    } catch (err) {
      setState("error");
      setError(readableError(err));
      setTimeout(() => setState("idle"), 5000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <InfoPanel icon={<Video className="w-5 h-5" />} title="Media Accreditation">
          <p>
            Media passes are complimentary for accredited journalists, photojournalists, and official
            press representatives.
          </p>
          <p>
            A valid press ID or official media card (PNG, JPG or PDF, max 5MB) must be uploaded
            during registration.
          </p>
          <p>
            Official invitation passes and press entry details are sent to the email and contact
            details provided in your form, once your documents are verified.
          </p>
      </InfoPanel>
      <div>
        <FormCard title="Media Registration Form">
          <form onSubmit={submit} className="space-y-8">

            <div>
              <SectionHeading step={1} title="Personal Details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Text label="First Name" name="first_name" value={data.first_name} onChange={onChange} placeholder="Enter first name" required />
                <Text label="Last Name" name="last_name" value={data.last_name} onChange={onChange} placeholder="Enter last name" required />
                <Text label="Email Address" name="email" type="email" value={data.email} onChange={onChange} placeholder="name@organization.com" required />
                <Text label="Phone Number" name="phone" type="tel" value={data.phone} onChange={onChange} placeholder="+977 98..." required />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <SectionHeading step={2} title="Organizational Details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Text label="Organization / Institution" name="organization" value={data.organization} onChange={onChange} placeholder="Organization name" required />
                <Text label="Designation / Title" name="designation" value={data.designation} onChange={onChange} placeholder="Your designation" required />
                <div className="sm:col-span-2">
                  <Text label="Media Outlet URL" name="media_url" type="url" value={data.media_url} onChange={onChange} placeholder="https://www.yourmedia.com" required />
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <SectionHeading step={3} title="Document Upload" />
              <FileUpload label="Valid Media ID Card" required file={mediaId} onPick={setMediaId} />
            </div>

            <div className="border-t border-slate-100 pt-8">
              <SectionHeading step={4} title="Additional Information" />
              <Dropdown
                label="How did you hear about DNC 2026?"
                name="heard_about"
                value={data.heard_about}
                onChange={onChange}
                options={HEARD_ABOUT_OPTIONS}
                required
              />
            </div>

            <StatusBlock state={state} error={error} />
            <SubmitButton state={state} label="Request Media Pass" />
          </form>
        </FormCard>
      </div>

    </div>
  );
}
