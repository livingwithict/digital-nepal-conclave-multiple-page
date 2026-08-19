import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarClock,
  CheckCircle,
  Home,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  Field,
  FileUpload,
  FormCard,
  InfoPanel,
  SectionHeading,
  StatusBlock,
  SubmitButton,
  Text,
  checkFile,
  postForm,
  readableError,
  type FormState,
} from "./Registration";

// Apps Script Web App /exec URL for the volunteer form (scripts/volunteers.gs)
const VOLUNTEER_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzBOmTci0EM3WpurbfmkNCuHM4JSWvzkM4SfvcWxs7INdHL093F5mTghnWptnZuVFksKg/exec";

const POSITIONS = [
  "Volunteer (Pre-Event & Event Day)",
  "3-Month Internship (with possible extension for future events)",
  "Either / Both",
];

const PRE_EVENT_AVAILABILITY = [
  "Yes, fully available",
  "Partially available",
  "Only available on the main event day",
];

const INTERNSHIP_AVAILABILITY = ["Yes", "No", "N/A (Applying for volunteer only)"];

const INTEREST_AREAS = [
  "Invitation & Guest Relations (Database management, guest confirmations)",
  "On-field Coordination & Delivery (Delivering invitations to key invitees)",
  "Event Management & Logistics (Venue setup, ushering, stage support)",
  "Social Media & Digital Promotion (Content, graphic design, coverage)",
  "Technical / IT Support",
];

const WHY_VOLUNTEER: [string, string][] = [
  ["Boost your resume", "Be part of Nepal's biggest tech conference."],
  ["Expand your network", "Connect with industry leaders, innovators and professionals."],
  ["Experience excellence", "Witness leading startups, companies and products."],
  ["Enhance your skills", "Develop and refine your soft skills through hands-on event experience."],
  ["Certification", "Receive an official certificate after the event."],
];

const PRE_EVENT_ROLES = [
  "Work on the invitation database",
  "Deliver invitations to key invitees",
  "Communicate and confirm attendance of important guests for the Grand Finale",
  "Promote Digital Nepal Conclave 2026 across different platforms",
  "Work with the organizing team on event management",
];

const textareaClass =
  "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue focus:border-dnc-blue resize-y";

function ChoiceGroup({
  label,
  hint,
  options,
  value,
  onSelect,
  required,
  multiple,
}: {
  label: string;
  hint?: string;
  options: string[];
  value: string[];
  onSelect: (option: string) => void;
  required?: boolean;
  multiple?: boolean;
}) {
  return (
    <Field label={label} required={required} hint={hint}>
      <div className="space-y-2">
        {options.map((option) => {
          const checked = value.includes(option);
          return (
            <label
              key={option}
              className={`flex gap-3 items-start p-3.5 border rounded-xl cursor-pointer transition-colors ${
                checked
                  ? "bg-dnc-blue/5 border-dnc-blue/40"
                  : "bg-slate-50 border-slate-200 hover:border-dnc-blue/40"
              }`}
            >
              <input
                type={multiple ? "checkbox" : "radio"}
                checked={checked}
                onChange={() => onSelect(option)}
                className="mt-0.5 w-4 h-4 shrink-0 accent-dnc-blue cursor-pointer"
              />
              <span className="text-sm text-slate-600 leading-relaxed">{option}</span>
            </label>
          );
        })}
      </div>
    </Field>
  );
}

const EMPTY = {
  full_name: "",
  email: "",
  phone: "",
  location: "",
  institution: "",
  education: "",
  position: "",
  pre_event_availability: "",
  internship_availability: "",
  has_vehicle: "",
  experience: "",
  motivation: "",
};

export default function VolunteersPage() {
  const [data, setData] = useState(EMPTY);
  const [areas, setAreas] = useState<string[]>([]);
  const [cv, setCv] = useState<File | null>(null);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const pick = (field: keyof typeof EMPTY) => (option: string) => {
    setData((prev) => ({ ...prev, [field]: option }));
    setError("");
  };

  const toggleArea = (option: string) => {
    setAreas((prev) =>
      prev.includes(option) ? prev.filter((a) => a !== option) : [...prev, option]
    );
    setError("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { experience, motivation, has_vehicle, ...required } = data;
    if (Object.values(required).some((v) => !v.trim())) {
      setError("Please fill out all mandatory fields (marked with *).");
      return;
    }
    if (!data.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!areas.length) {
      setError("Please select at least one area of interest.");
      return;
    }
    const cvError = checkFile(cv, "your CV / Resume");
    if (cvError) {
      setError(cvError);
      return;
    }

    setState("sending");
    try {
      await postForm(
        { ...data, areas: areas.join(", ") },
        "volunteer",
        { cv },
        VOLUNTEER_SCRIPT_URL
      );
      setState("success");
      setData(EMPTY);
      setAreas([]);
      setCv(null);
    } catch (err) {
      setState("error");
      setError(readableError(err));
      setTimeout(() => setState("idle"), 5000);
    }
  };

  if (state === "success") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-xl">
          <span className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-200">
            <CheckCircle className="w-7 h-7" />
          </span>
          <h2 className="mt-4 font-display font-extrabold text-2xl text-slate-900 tracking-tight">
            Application Submitted
          </h2>
          <p className="mt-2 text-sm text-slate-500 leading-relaxed">
            Thank you for applying to volunteer at Digital Nepal Conclave 2026. Our team will reach
            out to shortlisted applicants over email.
          </p>
          <Link
            to="/"
            className="mt-6 w-full py-3.5 bg-dnc-blue hover:bg-dnc-blue/90 transition text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99]"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
          <button
            type="button"
            onClick={() => setState("idle")}
            className="mt-3 text-xs font-bold text-slate-500 hover:text-dnc-blue transition-colors"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Join Us as a Volunteer
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed font-sans">
            We're looking for enthusiastic and motivated volunteers to help make Digital Nepal
            Conclave 2026 a grand success.
          </p>
        </div>

        <InfoPanel icon={<Sparkles className="w-5 h-5" />} title="Why Volunteer?">
          <ul className="list-disc pl-5 space-y-1">
            {WHY_VOLUNTEER.map(([title, text]) => (
              <li key={title}>
                <span className="font-bold text-slate-800">{title}:</span> {text}
              </li>
            ))}
          </ul>
        </InfoPanel>

        <InfoPanel icon={<CalendarClock className="w-5 h-5" />} title="Volunteer Details">
          <p>
            <span className="font-bold text-slate-800">Event day:</span> 27 August 2026 (11 Bhadra
            2083), The Plaza, Pulchowk, Lalitpur — 7:30 AM.
          </p>
          <p>Volunteers are expected to participate 7–10 days prior to the main event.</p>
          <div>
            <p className="font-bold text-slate-800 mb-1.5">Your role (pre-event):</p>
            <ul className="list-disc pl-5 space-y-1">
              {PRE_EVENT_ROLES.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
          <p className="font-bold text-dnc-blue">Meals and travel expenses will be covered.</p>
          <p className="text-xs italic">
            Priority will be given to volunteers who participate in the pre-event volunteering stage.
          </p>
        </InfoPanel>

        <FormCard title="Volunteer & Internship Application">
          <form onSubmit={submit} className="space-y-8">
            <div>
              <SectionHeading step={1} title="Personal Details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Text label="Full Name" name="full_name" value={data.full_name} onChange={onChange} placeholder="Enter your full name" required />
                <Text label="Email Address" name="email" type="email" value={data.email} onChange={onChange} placeholder="name@example.com" required />
                <Text label="Phone / WhatsApp Number" name="phone" type="tel" value={data.phone} onChange={onChange} placeholder="977 98..." required />
                <Text label="Current Location / City" name="location" value={data.location} onChange={onChange} placeholder="City, District" required />
                <Text label="College / Institution / Organization" name="institution" value={data.institution} onChange={onChange} placeholder="Where you study or work" required />
                <Text label="Current Level of Education / Major" name="education" value={data.education} onChange={onChange} placeholder="e.g. Undergraduate in IT" required />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8 space-y-6">
              <SectionHeading step={2} title="Role & Commitment" />
              <ChoiceGroup
                label="Which position are you applying for?"
                options={POSITIONS}
                value={[data.position]}
                onSelect={pick("position")}
                required
              />
              <ChoiceGroup
                label="Are you available for full-time pre-event tasks (7–10 days prior to the event, during office hours)?"
                options={PRE_EVENT_AVAILABILITY}
                value={[data.pre_event_availability]}
                onSelect={pick("pre_event_availability")}
                required
              />
              <ChoiceGroup
                label="If applying for the 3-month internship, are you available for the entire 3-month duration?"
                options={INTERNSHIP_AVAILABILITY}
                value={[data.internship_availability]}
                onSelect={pick("internship_availability")}
                required
              />
            </div>

            <div className="border-t border-slate-100 pt-8 space-y-6">
              <SectionHeading step={3} title="Skills & Preferences" />
              <ChoiceGroup
                label="Which area(s) are you most interested or experienced in?"
                hint="Check all that apply."
                options={INTEREST_AREAS}
                value={areas}
                onSelect={toggleArea}
                required
                multiple
              />
              <ChoiceGroup
                label="Do you have a personal vehicle (two-wheeler) for local travel in Kathmandu Valley?"
                hint="Helpful for invitation deliveries."
                options={["Yes", "No"]}
                value={[data.has_vehicle]}
                onSelect={pick("has_vehicle")}
              />
            </div>

            <div className="border-t border-slate-100 pt-8 space-y-4">
              <SectionHeading step={4} title="Short Answer & Motivation" />
              <Field label="Briefly describe any previous event, volunteering, or internship experience">
                <textarea
                  name="experience"
                  value={data.experience}
                  onChange={onChange}
                  rows={4}
                  placeholder="Share what you have worked on before..."
                  className={textareaClass}
                />
              </Field>
              <Field label="Why do you want to join ICT Foundation Nepal for this event / internship?">
                <textarea
                  name="motivation"
                  value={data.motivation}
                  onChange={onChange}
                  rows={4}
                  placeholder="Tell us what motivates you..."
                  className={textareaClass}
                />
              </Field>
              <FileUpload label="Upload your CV / Resume" required file={cv} onPick={setCv} />
            </div>

            <StatusBlock state={state} error={error} />
            <SubmitButton state={state} label="Submit Application" />
          </form>
        </FormCard>

        <div className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6 text-sm text-slate-600">
          <p className="font-bold text-slate-900 mb-3">For more details</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href="tel:9801263604"
              className="flex items-center gap-2 whitespace-nowrap hover:text-dnc-blue transition-colors"
            >
              <Phone className="w-4 h-4 text-dnc-blue shrink-0" />
              980-1263604 / 980-1263602
            </a>
            <a
              href="mailto:krishpana.poudel@ictfoundation.org.np"
              className="flex items-center gap-2 min-w-0 hover:text-dnc-blue transition-colors"
            >
              <Mail className="w-4 h-4 text-dnc-blue shrink-0" />
              <span className="truncate">krishpana.poudel@ictfoundation.org.np</span>
            </a>
            <span className="flex items-center gap-2 whitespace-nowrap">
              <MapPin className="w-4 h-4 text-dnc-blue shrink-0" />
              Sankhamul, Kathmandu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
