import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMobile = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
      isActive ? "text-dnc-blue font-extrabold" : "text-slate-600 hover:text-dnc-blue"
    }`;

  const isAboutActive = pathname.startsWith("/about");
  const isPastActive = pathname.startsWith("/past-events");

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link
            id="header-logo"
            to="/"
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/images/DNC-Logo.png"
              alt="Digital Nepal Logo"
              className="w-25 h-25 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            <NavLink
              id="nav-home"
              to="/"
              end
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full" />}
                </>
              )}
            </NavLink>

            {/* About Dropdown */}
            <div className="relative group">
              <Link
                id="nav-about-dropdown"
                to="/about"
                className={`relative px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  isAboutActive ? "text-dnc-blue font-extrabold" : "text-slate-600 hover:text-dnc-blue"
                }`}
              >
                <span className="flex items-center gap-1">
                  About
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </span>
                {isAboutActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full" />}
              </Link>

              <div className="absolute top-full left-0 w-56 mt-0 bg-white border border-slate-100 rounded-xl shadow-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link
                  to="/about/event"
                  className="flex w-full px-4 py-2 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue text-slate-600"
                >
                  About the Event
                </Link>
                <Link
                  to="/about/organizer"
                  className="flex w-full px-4 py-2 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue text-slate-600"
                >
                  About the Organizer (IFN)
                </Link>
                <Link
                  to="/about/team"
                  className="flex w-full px-4 py-2 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue text-slate-600"
                >
                  Team &amp; Patrons
                </Link>
              </div>
            </div>

            <NavLink id="nav-agenda" to="/agenda" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Agenda
                  {isActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full" />}
                </>
              )}
            </NavLink>

            <NavLink id="nav-speakers" to="/speakers" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Speakers
                  {isActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full" />}
                </>
              )}
            </NavLink>

            {/* Past Events Dropdown */}
            <div className="relative group">
              <Link
                id="nav-past-dropdown"
                to="/past-events/2025"
                className={`relative px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  isPastActive ? "text-dnc-blue font-extrabold" : "text-slate-600 hover:text-dnc-blue"
                }`}
              >
                <span className="flex items-center gap-1">
                  Past Events
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </span>
                {isPastActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full" />}
              </Link>

              <div className="absolute top-full left-0 w-64 mt-0 bg-white border border-slate-100 rounded-xl shadow-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link
                  to="/past-events/2025"
                  className={`flex w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue ${pathname === "/past-events/2025" ? "text-dnc-blue font-medium bg-slate-50/50" : "text-slate-600"}`}
                >
                  Digital Nepal Conclave 2025
                </Link>
                <Link
                  to="/past-events/2024"
                  className={`flex w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue ${pathname === "/past-events/2024" ? "text-dnc-blue font-medium bg-slate-50/50" : "text-slate-600"}`}
                >
                  Digital Nepal Conclave 2024
                </Link>
                <Link
                  to="/past-events/2023"
                  className={`flex w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue ${pathname === "/past-events/2023" ? "text-dnc-blue font-medium bg-slate-50/50" : "text-slate-600"}`}
                >
                  Digital Nepal Conclave 2023
                </Link>
                <Link
                  to="/past-events/2022"
                  className={`flex w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue ${pathname === "/past-events/2022" ? "text-dnc-blue font-medium bg-slate-50/50" : "text-slate-600"}`}
                >
                  Digital Nepal Conclave 2022
                </Link>
              </div>
            </div>

            <NavLink id="nav-publications" to="/downloads" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Publications
                  {isActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full" />}
                </>
              )}
            </NavLink>

            <NavLink id="nav-media" to="/news-media" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  News &amp; Media
                  {isActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full" />}
                </>
              )}
            </NavLink>

            <NavLink id="nav-contact" to="/contact" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full" />}
                </>
              )}
            </NavLink>
          </nav>

          {/* Registration Button */}
          <div className="hidden lg:flex items-center">
            <Link
              id="desktop-register-button"
              to="/register"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#eb0000] hover:bg-[#c20000] text-white font-bold rounded-full shadow-lg shadow-red-950/20 uppercase tracking-widest text-sm transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-center block sm:inline-block"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-dnc-blue hover:bg-slate-100 focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden" style={{ contentVisibility: "auto" }}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-b border-slate-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
            <Link
              to="/"
              onClick={closeMobile}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${pathname === "/" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              Home
            </Link>

            <div className="border-t border-slate-50 pt-2">
              <div className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                About Conclave
              </div>
              <Link
                to="/about"
                onClick={closeMobile}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${isAboutActive ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                About the Event
              </Link>
              <Link
                to="/about"
                onClick={closeMobile}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${isAboutActive ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                About the Organizer
              </Link>
              <Link
                to="/about"
                onClick={closeMobile}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${isAboutActive ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                Team &amp; Patrons
              </Link>
            </div>

            <Link
              to="/agenda"
              onClick={closeMobile}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${pathname === "/agenda" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              Agenda
            </Link>

            <Link
              to="/speakers"
              onClick={closeMobile}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${pathname === "/speakers" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              Speakers
            </Link>

            <div className="border-t border-slate-50 pt-2">
              <div className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                Past Editions
              </div>
              <Link
                to="/past-events/2025"
                onClick={closeMobile}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${pathname === "/past-events/2025" ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                Conclave 2025
              </Link>
              <Link
                to="/past-events/2024"
                onClick={closeMobile}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${pathname === "/past-events/2024" ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                Conclave 2024
              </Link>
              <Link
                to="/past-events/2023"
                onClick={closeMobile}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${pathname === "/past-events/2023" ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                Conclave 2023
              </Link>
              <Link
                to="/past-events/2022"
                onClick={closeMobile}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${pathname === "/past-events/2022" ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                Conclave 2022
              </Link>
            </div>

            <Link
              to="/downloads"
              onClick={closeMobile}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${pathname === "/downloads" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              Publications
            </Link>

            <Link
              to="/news-media"
              onClick={closeMobile}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${pathname === "/news-media" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              News &amp; Media
            </Link>

            <Link
              to="/contact"
              onClick={closeMobile}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${pathname === "/contact" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              Contact
            </Link>

            <div className="px-4 pt-3">
              <Link
                to="/register"
                onClick={closeMobile}
                className="w-full px-8 py-3.5 bg-[#eb0000] hover:bg-[#c20000] text-white font-bold rounded-full shadow-lg shadow-red-950/20 uppercase tracking-widest text-sm transition-all duration-300 cursor-pointer text-center block"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
