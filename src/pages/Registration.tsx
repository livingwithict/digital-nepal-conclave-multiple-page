import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, ShieldCheck, Users, Building2, User } from "lucide-react";

export default function RegistrationComponent() {
  // Google Apps Script Web App Deployment URL
  // Replace with your actual deployment URL from Google Apps Script
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJ8TC3lQytHK0b53te-g964oQmA6pd-nKJ9e2ASSvKtbPlvIBJk1xgf4hPJxxlw5b5/exec";

  const [activeTab, setActiveTab] = useState<"participant" | "exhibitor">("participant");

  // Participant Form State
  const [participantData, setParticipantData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    sector: "",
    heard_about: ""
  });

  // Exhibitor Form State
  const [exhibitorData, setExhibitorData] = useState({
    organization_name: "",
    organization_type: "",
    contact_person: "",
    designation: "",
    email: "",
    phone: "",
    website: "",
    product_name: "",
    solution_category: "",
    booth_size: "",
    showcase_details: "",
    special_requirements: "",
    num_representatives: ""
  });

  const [participantState, setParticipantState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [exhibitorState, setExhibitorState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [participantError, setParticipantError] = useState("");
  const [exhibitorError, setExhibitorError] = useState("");

  // Participant Form Handlers
  const handleParticipantChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setParticipantData((prev) => ({ ...prev, [name]: value }));
    setParticipantError("");
  };

  const handleParticipantSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!participantData.first_name.trim() || !participantData.last_name.trim() || !participantData.email.trim() || !participantData.phone.trim() || !participantData.organization.trim() || !participantData.designation.trim() || !participantData.sector || !participantData.heard_about) {
      setParticipantError("Please fill out all mandatory fields (marked with *).");
      return;
    }

    if (!participantData.email.includes("@")) {
      setParticipantError("Please enter a valid email address.");
      return;
    }

    setParticipantState("sending");

    try {
      const params = new URLSearchParams({
        ...participantData,
        form_type: "participant"
      });

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: params,
        // mode: 'cors',
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded',
        // }
      });

      // If response is not ok but not a CORS error, try to parse it anyway
      if (!response.ok && response.status === 0) {
        // CORS error - response blocked
        throw new Error("CORS Error - Please ensure Apps Script is deployed correctly");
      }

      let result = null;
      let responseText = "";

      try {
        responseText = await response.text();
        console.log("Raw response:", responseText);
        
        // Try to parse as JSON
        if (responseText && responseText.trim().startsWith("{")) {
          result = JSON.parse(responseText);
        }
      } catch (parseError) {
        console.log("Could not parse as JSON:", parseError);
      }

      // If we got a valid result with success flag
      if (result && result.success === true) {
        setParticipantState("success");
        setParticipantData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          organization: "",
          designation: "",
          sector: "",
          heard_about: ""
        });

        setTimeout(() => {
          setParticipantState("idle");
          setParticipantError("");
        }, 5000);
      } else if (result && result.success === false) {
        // Server returned an error
        throw new Error(result.message || "Submission failed");
      } else {
        // Couldn't parse response - check if we got a 200 status
        if (response.ok || response.status === 200) {
          // Assume success if status is 200
          setParticipantState("success");
          setParticipantData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            organization: "",
            designation: "",
            sector: "",
            heard_about: ""
          });

          setTimeout(() => {
            setParticipantState("idle");
            setParticipantError("");
          }, 5000);
        } else {
          throw new Error("Invalid response from server");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setParticipantState("error");
      
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      if (errorMessage.includes("CORS")) {
        setParticipantError("Server configuration issue. Please check that the Apps Script is properly deployed as a Web App with 'Anyone' access. Error: " + errorMessage);
      } else if (errorMessage.includes("Failed to fetch")) {
        setParticipantError("Network error. Please check your connection and try again.");
      } else {
        setParticipantError("Error submitting form: " + errorMessage);
      }

      setTimeout(() => {
        setParticipantState("idle");
      }, 5000);
    }
  };

  // Exhibitor Form Handlers
  const handleExhibitorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setExhibitorData((prev) => ({ ...prev, [name]: value }));
    setExhibitorError("");
  };

  const handleExhibitorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!exhibitorData.organization_name.trim() || !exhibitorData.organization_type || !exhibitorData.contact_person.trim() || !exhibitorData.email.trim() || !exhibitorData.phone.trim() || !exhibitorData.product_name.trim() || !exhibitorData.solution_category || !exhibitorData.booth_size) {
      setExhibitorError("Please fill out all mandatory fields (marked with *).");
      return;
    }

    if (!exhibitorData.email.includes("@")) {
      setExhibitorError("Please enter a valid email address.");
      return;
    }

    setExhibitorState("sending");

    try {
      const params = new URLSearchParams({
        ...exhibitorData,
        form_type: "exhibitor"
      });

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: params,
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });

      // If response is not ok but not a CORS error, try to parse it anyway
      if (!response.ok && response.status === 0) {
        // CORS error - response blocked
        throw new Error("CORS Error - Please ensure Apps Script is deployed correctly");
      }

      let result = null;
      let responseText = "";

      try {
        responseText = await response.text();
        console.log("Raw response:", responseText);
        
        // Try to parse as JSON
        if (responseText && responseText.trim().startsWith("{")) {
          result = JSON.parse(responseText);
        }
      } catch (parseError) {
        console.log("Could not parse as JSON:", parseError);
      }

      // If we got a valid result with success flag
      if (result && result.success === true) {
        setExhibitorState("success");
        setExhibitorData({
          organization_name: "",
          organization_type: "",
          contact_person: "",
          designation: "",
          email: "",
          phone: "",
          website: "",
          product_name: "",
          solution_category: "",
          booth_size: "",
          showcase_details: "",
          special_requirements: "",
          num_representatives: ""
        });

        setTimeout(() => {
          setExhibitorState("idle");
          setExhibitorError("");
        }, 5000);
      } else if (result && result.success === false) {
        // Server returned an error
        throw new Error(result.message || "Submission failed");
      } else {
        // Couldn't parse response - check if we got a 200 status
        if (response.ok || response.status === 200) {
          // Assume success if status is 200
          setExhibitorState("success");
          setExhibitorData({
            organization_name: "",
            organization_type: "",
            contact_person: "",
            designation: "",
            email: "",
            phone: "",
            website: "",
            product_name: "",
            solution_category: "",
            booth_size: "",
            showcase_details: "",
            special_requirements: "",
            num_representatives: ""
          });

          setTimeout(() => {
            setExhibitorState("idle");
            setExhibitorError("");
          }, 5000);
        } else {
          throw new Error("Invalid response from server");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setExhibitorState("error");
      
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      if (errorMessage.includes("CORS")) {
        setExhibitorError("Server configuration issue. Please check that the Apps Script is properly deployed as a Web App with 'Anyone' access. Error: " + errorMessage);
      } else if (errorMessage.includes("Failed to fetch")) {
        setExhibitorError("Network error. Please check your connection and try again.");
      } else {
        setExhibitorError("Error submitting form: " + errorMessage);
      }

      setTimeout(() => {
        setExhibitorState("idle");
      }, 5000);
    }
  };

  return (
    <section id="registration-page" className="bg-white py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dnc-blue/5 text-dnc-blue text-sm font-sans font-bold rounded-full uppercase tracking-wider mb-3">
            <Users className="w-4 h-4 text-dnc-orange animate-pulse" />
            DNC 2026 Registration
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Join the Digital Nepal Conclave
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed font-sans">
            Register as a participant to attend keynotes and discussions, or register as an exhibitor to showcase your innovative solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-50 rounded-2xl p-1 border border-slate-100 shadow-sm">
            <button
              onClick={() => setActiveTab("participant")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition ${
                activeTab === "participant"
                  ? "bg-white text-dnc-blue shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <User className="w-4 h-4" />
              Participant Registration
            </button>
            <button
              onClick={() => setActiveTab("exhibitor")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition ${
                activeTab === "exhibitor"
                  ? "bg-white text-dnc-blue shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Exhibitor Registration
            </button>
          </div>
        </div>

        {/* PARTICIPANT FORM TAB */}
        {activeTab === "participant" && (
          <div className="max-w-3xl mx-auto bg-white border border-slate-50 rounded-3xl p-6.5 sm:p-8 shadow-sm">
            <span className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest block mb-6">PARTICIPANT REGISTRATION FORM</span>

            <form onSubmit={handleParticipantSubmit} className="space-y-8">
              
              {/* PERSONAL DETAILS SECTION */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-dnc-blue text-white flex items-center justify-center text-sm font-bold">1</span>
                  Personal Details
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">First Name *</label>
                    <input
                      type="text"
                      name="first_name"
                      value={participantData.first_name}
                      onChange={handleParticipantChange}
                      placeholder="Enter first name"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="last_name"
                      value={participantData.last_name}
                      onChange={handleParticipantChange}
                      placeholder="Enter last name"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={participantData.email}
                      onChange={handleParticipantChange}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={participantData.phone}
                      onChange={handleParticipantChange}
                      placeholder="+977 98..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    />
                  </div>
                </div>
              </div>

              {/* PROFESSIONAL DETAILS SECTION */}
              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-dnc-blue text-white flex items-center justify-center text-sm font-bold">2</span>
                  Professional Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Organization / Institution *</label>
                    <input
                      type="text"
                      name="organization"
                      value={participantData.organization}
                      onChange={handleParticipantChange}
                      placeholder="Organization name"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Designation / Title *</label>
                    <input
                      type="text"
                      name="designation"
                      value={participantData.designation}
                      onChange={handleParticipantChange}
                      placeholder="Your designation"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-bold text-slate-600 mb-1">Sector *</label>
                  <select
                    name="sector"
                    value={participantData.sector}
                    onChange={handleParticipantChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  >
                    <option value="">Select Sector</option>
                    <option value="Government">Government</option>
                    <option value="Private Sector">Private Sector</option>
                    <option value="Banking & Finance">Banking & Finance</option>
                    <option value="Academia">Academia</option>
                    <option value="Startup">Startup</option>
                    <option value="Development Partner">Development Partner</option>
                    <option value="Media">Media</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* ADDITIONAL NOTES SECTION */}
              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-dnc-blue text-white flex items-center justify-center text-sm font-bold">3</span>
                  Additional Information
                </h3>

                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">How did you hear about DNC 2026? *</label>
                  <select
                    name="heard_about"
                    value={participantData.heard_about}
                    onChange={handleParticipantChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  >
                    <option value="">Select Option</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Colleague / Friend">Colleague / Friend</option>
                    <option value="Email">Email</option>
                    <option value="News / Media">News / Media</option>
                    <option value="Previous Attendee">Previous Attendee</option>
                  </select>
                </div>
              </div>

              {/* Error Message */}
              {participantError && (
                <div className="p-3 bg-red-50 text-red-650 text-sm font-sans rounded-xl border border-red-200/50">
                  ⚠️ {participantError}
                </div>
              )}

              {/* Success Message */}
              {participantState === "success" && (
                <div className="p-4 bg-emerald-50 text-emerald-800 text-sm font-sans rounded-xl border border-emerald-200 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 animate-bounce" />
                  <div>
                    <p className="font-bold">Registration Submitted successfully!</p>
                    <p className="text-[10px] text-emerald-700 mt-0.5">We will send you a confirmation email shortly with event details.</p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {participantState === "error" && (
                <div className="p-4 bg-red-50 text-red-800 text-sm font-sans rounded-xl border border-red-200 flex items-center gap-2">
                  <div>
                    <p className="font-bold">Error submitting registration</p>
                    <p className="text-[10px] text-red-700 mt-0.5">Please try again or contact us directly.</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={participantState === "sending"}
                className="w-full py-3.5 bg-dnc-blue hover:bg-dnc-blue-light transition text-white font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-3.5 h-3.5 text-dnc-orange" />
                {participantState === "sending" ? "Submitting Registration..." : "Complete Registration"}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] text-slate-400 font-sans">
              <ShieldCheck className="w-4 h-4 text-slate-300" />
              Your information is secure and will only be used for event management purposes.
            </div>
          </div>
        )}

        {/* EXHIBITOR FORM TAB */}
        {activeTab === "exhibitor" && (
          <div className="max-w-3xl mx-auto bg-white border border-slate-50 rounded-3xl p-6.5 sm:p-8 shadow-sm">
            <span className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest block mb-6">EXHIBITOR REGISTRATION FORM</span>

            <form onSubmit={handleExhibitorSubmit} className="space-y-8">
              
              {/* ORGANIZATION DETAILS SECTION */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-dnc-blue text-white flex items-center justify-center text-sm font-bold">①</span>
                  Organization Details
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Organization Name *</label>
                    <input
                      type="text"
                      name="organization_name"
                      value={exhibitorData.organization_name}
                      onChange={handleExhibitorChange}
                      placeholder="Your organization name"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Organization Type *</label>
                    <select
                      name="organization_type"
                      value={exhibitorData.organization_type}
                      onChange={handleExhibitorChange}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    >
                      <option value="">Select Type</option>
                      <option value="Startup">Startup</option>
                      <option value="Enterprise">Enterprise</option>
                      <option value="Government">Government</option>
                      <option value="Academia">Academia</option>
                      <option value="NGO">NGO</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Contact Person *</label>
                    <input
                      type="text"
                      name="contact_person"
                      value={exhibitorData.contact_person}
                      onChange={handleExhibitorChange}
                      placeholder="Full name"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={exhibitorData.designation}
                      onChange={handleExhibitorChange}
                      placeholder="Job title"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={exhibitorData.email}
                      onChange={handleExhibitorChange}
                      placeholder="contact@organization.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={exhibitorData.phone}
                      onChange={handleExhibitorChange}
                      placeholder="+977 98..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-bold text-slate-600 mb-1">Website</label>
                  <input
                    type="url"
                    name="website"
                    value={exhibitorData.website}
                    onChange={handleExhibitorChange}
                    placeholder="https://www.organization.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  />
                </div>
              </div>

              {/* EXHIBIT DETAILS SECTION */}
              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-dnc-blue text-white flex items-center justify-center text-sm font-bold">②</span>
                  Exhibit Details
                </h3>

                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Product / Solution Name *</label>
                  <input
                    type="text"
                    name="product_name"
                    value={exhibitorData.product_name}
                    onChange={handleExhibitorChange}
                    placeholder="What will you be showcasing?"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Solution Category *</label>
                    <select
                      name="solution_category"
                      value={exhibitorData.solution_category}
                      onChange={handleExhibitorChange}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    >
                      <option value="">Select Category</option>
                      <option value="Fintech">Fintech</option>
                      <option value="GovTech">GovTech</option>
                      <option value="AI/ML">AI/ML</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="EdTech">EdTech</option>
                      <option value="HealthTech">HealthTech</option>
                      <option value="AgriTech">AgriTech</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Booth Size Preference *</label>
                    <select
                      name="booth_size"
                      value={exhibitorData.booth_size}
                      onChange={handleExhibitorChange}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                    >
                      <option value="">Select Booth Size</option>
                      <option value="Standard 3x3m">Standard 3×3m</option>
                      <option value="Large 3x6m">Large 3×6m</option>
                      <option value="Demo Table">Demo Table</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-bold text-slate-600 mb-1">What will you showcase? *</label>
                  <textarea
                    name="showcase_details"
                    value={exhibitorData.showcase_details}
                    onChange={handleExhibitorChange}
                    rows={3}
                    placeholder="Describe your product, solution, or service in detail..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-bold text-slate-600 mb-1">Special Requirements</label>
                  <textarea
                    name="special_requirements"
                    value={exhibitorData.special_requirements}
                    onChange={handleExhibitorChange}
                    rows={3}
                    placeholder="Any special booth setup, equipment, or logistics requirements..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  ></textarea>
                </div>
              </div>

              {/* LOGISTICS SECTION */}
              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-dnc-blue text-white flex items-center justify-center text-sm font-bold">③</span>
                  Logistics
                </h3>

                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-1">Number of Representatives</label>
                  <input
                    type="number"
                    name="num_representatives"
                    value={exhibitorData.num_representatives}
                    onChange={handleExhibitorChange}
                    placeholder="How many team members will attend?"
                    min="0"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  />
                </div>
              </div>

              {/* Error Message */}
              {exhibitorError && (
                <div className="p-3 bg-red-50 text-red-650 text-sm font-sans rounded-xl border border-red-200/50">
                  ⚠️ {exhibitorError}
                </div>
              )}

              {/* Success Message */}
              {exhibitorState === "success" && (
                <div className="p-4 bg-emerald-50 text-emerald-800 text-sm font-sans rounded-xl border border-emerald-200 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 animate-bounce" />
                  <div>
                    <p className="font-bold">Registration Submitted successfully!</p>
                    <p className="text-[10px] text-emerald-700 mt-0.5">Our sponsorship team will contact you shortly with booth assignment and logistics details.</p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {exhibitorState === "error" && (
                <div className="p-4 bg-red-50 text-red-800 text-sm font-sans rounded-xl border border-red-200 flex items-center gap-2">
                  <div>
                    <p className="font-bold">Error submitting registration</p>
                    <p className="text-[10px] text-red-700 mt-0.5">Please try again or contact us directly.</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={exhibitorState === "sending"}
                className="w-full py-3.5 bg-dnc-blue hover:bg-dnc-blue-light transition text-white font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-3.5 h-3.5 text-dnc-orange" />
                {exhibitorState === "sending" ? "Submitting Registration..." : "Submit Exhibitor Registration"}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] text-slate-400 font-sans">
              <ShieldCheck className="w-4 h-4 text-slate-300" />
              Your information is secure and will only be used for event management purposes.
            </div>
          </div>
        )}

      </div>
    </section>
  );
}