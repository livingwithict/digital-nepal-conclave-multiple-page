import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="app-footer" className="bg-slate-900 text-white border-t border-slate-800">

      <div className="h-1.5 bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* Logo & Description */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <img
                src="/images/logo-white.png"
                alt="Digital Nepal Logo"
                className="h-26 mb-4"
              />
            </Link>
            {/* <p className="text-base font-sans font-bold text-dnc-orange-light tracking-wide uppercase mb-2">
              Digital Nepal Conclave 2026
            </p> */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong>ICT Foundation Nepal</strong> is a non-profit organization promoting ICT, innovation, entrepreneurship, and digital transformation in Nepal. It organizes the flagship <strong>Digital Nepal Conclave</strong>, a national platform for shaping Nepal’s digital future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-slate-300 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about/event" className="hover:text-white transition">About the Event</Link></li>
              <li><Link to="/about/organizer" className="hover:text-white transition">About the Organizer</Link></li>
              <li><Link to="/agenda" className="hover:text-white transition">Conference Agenda</Link></li>
              <li><Link to="/speakers" className="hover:text-white transition">Our Speakers</Link></li>
              <li><Link to="/downloads" className="hover:text-white transition">Our Publications</Link></li>
              <li><Link to="/news-media" className="hover:text-white transition">News &amp; Media</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/register" className="hover:text-white transition">Register Now</Link></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-slate-300 font-sans">
              Office Location &amp; Contact
            </h4>

            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-dnc-orange-light shrink-0 mt-0.5" />
                <span>Sankhamul, Kathmandu-31, Nepal</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-5 h-5 text-dnc-orange-light shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block text-sm select-all">admin@ictfoundation.org.np</span>
                  <span className="block text-sm select-all">conclave@ictfoundation.org.np</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-dnc-orange-light shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block text-sm select-all">+977 9851141348 / +977 9801263604</span>
                  <span className="block text-sm select-all">01-5314322 (Landline)</span>
                </div>
              </div>

              <div className="flex gap-2.5 pt-2">
                <a
                  href="https://www.facebook.com/digitalconclave"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2.5 bg-slate-800 hover:bg-dnc-blue rounded-xl text-slate-350 hover:text-white transition-all duration-200 shadow-xs"
                  title="Follow DNC on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/digitalnepalconclave/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2.5 bg-slate-800 hover:bg-dnc-orange rounded-xl text-slate-350 hover:text-white transition-all duration-200 shadow-xs"
                  title="Follow DNC on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/digital-nepal-conclave"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2.5 bg-slate-800 hover:bg-dnc-blue-light rounded-xl text-slate-350 hover:text-white transition-all duration-200 shadow-xs"
                  title="DNC LinkedIn Company Page"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@ict.foundation"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2.5 bg-slate-800 hover:bg-dnc-red rounded-xl text-slate-350 hover:text-white transition-all duration-200 shadow-xs"
                  title="Tune in to official IFN Channel on Youtube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500">
          <p>© Digital Nepal Conclave 2026. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
