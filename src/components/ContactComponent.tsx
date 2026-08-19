import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";

export default function ContactComponent() {
  // Google Apps Script URL - Replace with your actual deployment URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzSMVx235ZAH1iIqL5CNU0iwM72PUo9dZjo39sn5DOIZ-6zy768aPkTZbAaDdIZ6Kmk/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "general",
    organization: "",
    message: ""
  });

  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError("");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Core client-side validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError("Please fill out all mandatory fields: Name, Email and Message.");
      return;
    }

    if (!formData.email.includes("@")) {
      setValidationError("Please enter a valid business/professional email address.");
      return;
    }

    setFormState("sending");

    try {
      // Create URLSearchParams from form data
      const params = new URLSearchParams(formData as any);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: params,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setFormState("success");
      // Reset form variables
      setFormData({
        name: "",
        email: "",
        phone: "",
        topic: "general",
        organization: "",
        message: ""
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormState("idle");
        setValidationError("");
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setFormState("error");
      setValidationError("Error submitting form. Please try again or contact us directly.");
      
      // Reset error state after 5 seconds
      setTimeout(() => {
        setFormState("idle");
      }, 5000);
    }
  };

  return (
    <section id="contact-page" className="bg-slate-50 py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          {/* <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dnc-blue/5 text-dnc-blue text-sm font-sans font-bold rounded-full uppercase tracking-wider mb-3">
            <MessageSquare className="w-4 h-4 text-dnc-orange animate-pulse" />
            24/7 Conclave Support Desk
          </span> */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Connect with Organizers
          </h1>
          {/* <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed font-sans">
            Have questions about strategic sponsorship packets, VIP invitation protocols, municipal registration, or speaker times? We are ready to assist.
          </p> */}
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="bg-white border border-slate-50 shadow-sm rounded-3xl p-6.5 text-left space-y-4">
              <div>
                {/* <span className="text-[10px] font-sans font-bold text-dnc-blue uppercase tracking-widest block mb-2">HEADQUARTERS</span> */}
                <h3 className="font-display font-bold text-base text-slate-900 flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-dnc-orange" />
                  ICT Foundation Nepal (IFN)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Sankhamul, Kathmandu-31, Nepal
                </p>
              </div>
            </div>

            {/* Support Hotline Numbers */}
            <div className="bg-white border border-slate-50 shadow-sm rounded-3xl p-6.5 text-left space-y-4">
              <span className="text-[14px] font-sans font-bold text-dnc-orange uppercase tracking-widest block">TELEPHONE SUPPORT</span>
              
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-50 border rounded-lg text-dnc-blue">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 select-all">01-5971958 (Hotline)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-50 border rounded-lg text-dnc-blue">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 select-all">01-5314322</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-50 border rounded-lg text-dnc-blue">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 select-all">+977 9851141348</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-50 border rounded-lg text-dnc-blue">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 select-all">+977 9801263604</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Email boxes */}
            <div className="bg-slate-150 text-white rounded-3xl p-6.5 text-left space-y-4 border border-slate-50 shadow-sm">
              <span className="text-[14px] font-sans font-bold text-dnc-orange uppercase tracking-widest block">SEND DIRECT EMAIL</span>
              
              <div className="space-y-3 font-sans text-[11px] sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-dnc-blue-light" />
                  <a href="mailto:conclave@ictfoundation.org.np" className="hover:underline select-all text-slate-900">conclave@ictfoundation.org.np</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-dnc-blue-light" />
                  <a href="mailto:admin@ictfoundation.org.np" className="hover:underline select-all text-slate-900">admin@ictfoundation.org.np</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-dnc-blue-light" />
                  <a href="mailto:razan@ictfoundation.org.np" className="hover:underline select-all text-slate-900">razan@ictfoundation.org.np</a>
                </div>
              </div>
            </div>

          </div>

          {/* Right form column */}
          <div className="lg:col-span-7 bg-white border border-slate-50 rounded-3xl p-6.5 sm:p-8 flex flex-col justify-between shadow-sm relative">
            <span className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest block mb-4">INQUIRY FORM</span>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Primary Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@organization.com"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="E.g., +977 98..."
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Organization / Enterprise</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Company name"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-600 mb-1">Message Subject / Topic</label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                >
                  <option value="general">General Support / Questions</option>
                  <option value="sponsorship">Strategic Sponsorship Proposals</option>
                  <option value="delegate">Group Delegate Registration</option>
                  <option value="startup">Startup Launchpad pitching inquiries</option>
                  <option value="media">Press & News Room accreditation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-600 mb-1">Your message or inquiry *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us what you would like to discuss..."
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                ></textarea>
              </div>

              {/* Error Validation Card placeholder */}
              {validationError && (
                <div className="p-3 bg-red-50 text-red-650 text-sm font-sans rounded-xl border border-red-200/50">
                  ⚠️ {validationError}
                </div>
              )}

              {/* Status messaging logic */}
              {formState === "success" && (
                <div className="p-4 bg-emerald-50 text-emerald-800 text-sm font-sans rounded-xl border border-emerald-200 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 animate-bounce" />
                  <div>
                    <p className="font-bold">Message Submitted successfully!</p>
                    <p className="text-[10px] text-emerald-700 mt-0.5">The ICT Foundation Nepal communications specialist team will contact you shortly.</p>
                  </div>
                </div>
              )}

              {formState === "error" && (
                <div className="p-4 bg-red-50 text-red-800 text-sm font-sans rounded-xl border border-red-200 flex items-center gap-2">
                  <div>
                    <p className="font-bold">Error submitting message</p>
                    <p className="text-[10px] text-red-700 mt-0.5">Please try again or contact us directly using the phone numbers provided.</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === "sending"}
                className="w-full py-3.5 bg-dnc-blue hover:bg-dnc-blue-light transition text-white font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-3.5 h-3.5 text-dnc-orange" />
                {formState === "sending" ? "Dispatching Message..." : "Send Secure Message"}
              </button>

            </form>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] text-slate-400 font-sans">
              <ShieldCheck className="w-4 h-4 text-slate-300" />
              Your standard data parameters are secure under Nepal privacy acts.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}