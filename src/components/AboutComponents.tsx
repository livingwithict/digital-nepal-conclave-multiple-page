import React from "react";
import { Info, Building2, Users, ShieldCheck, HeartHandshake, Award, ExternalLink, Globe, Sparkles } from "lucide-react";
import { TEAM_MEMBERS, PATRONS } from "../data";

export default function AboutComponents() {
  const [currentSubSection, setCurrentSubSection] = React.useState<"event" | "organizer" | "team">("event");
  const onSubSectionChange = setCurrentSubSection;

  const renderEvent = () => (
    <div id="about-event-view" className="space-y-12">

      {/* Introduction Card */}
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs">
        <div className="max-w-auto mx-auto space-y-6 text-justify">
          <span className="text-sm font-bold font-sans text-dnc-blue tracking-widest uppercase block mb-2">5th Edition</span>
          <h2 className="font-display font-extrabold text-3xl text-dnc-black mb-6 leading-tight">
            The Biggest Digital Conference in Nepal
          </h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              The <strong>Digital Nepal Conclave</strong> serves as a premier national forum for policy innovation and technological discourse, dedicated to accelerating the country&apos;s digital transformation. It functions as a primary catalyst for deliberations on digital governance, ICT infrastructure, and the expanding digital trade ecosystem, fostering a culture of innovation and sustainable economic expansion.
            </p>
            <p>
              Since its inception, this gathering has established an elite assembly of state policymakers, industry captains, and academic visionaries. By convening diverse stakeholders from the private sector and civil society, the summit facilitates high-level dialogue on evolving priorities and strategic frameworks essential for a future-ready technological landscape.
            </p>
            <p>
              Establishing itself as a credible architecture for institutional action, the Conclave has become the fundamental platform for cross-sectoral collaboration and knowledge exchange. It serves to showcase digital excellence and foster strategic partnerships that are instrumental in building a digitally resilient and globally competitive nation.
            </p>
            <p>
              Advancing the momentum toward a digitally empowered nation, the <strong>Digital Nepal Conclave 2026 – 5th Edition</strong> will explore the transformative potential of data ecosystems and robust public infrastructure as primary catalysts for socio-economic evolution.
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Focus Deliberation Blocks */}
      <div>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-905 mb-8 text-center">
          Strategic Focus Areas & Deliberations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-dnc-blue"></div>
            <h4 className="font-display font-bold text-md text-dnc-blue mb-4">
              Governance & Digital Public Infrastructure
            </h4>
            <ul className="space-y-3">
              {[
                "Institutional digital reform and transformative public service delivery",
                "Smart governance frameworks for citizen-centric excellence",
                "Integrated Digital ID and seamless public ecosystem architectures",
                "Strategic policy innovation and regulatory landscape modernization",
                "Evidence-based decision making through data-centric governance"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-600 line-height-relaxed">
                  <span className="text-dnc-blue font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-dnc-orange"></div>
            <h4 className="font-display font-bold text-md text-dnc-orange mb-4">
              Data, AI & Cybersecurity
            </h4>
            <ul className="space-y-3">
              {[
                "National data sovereignty and robust governance frameworks",
                "Ethical integration of Artificial Intelligence and frontier technologies",
                "Building digital trust and cybersecurity resilience",
                "Responsible technology adoption and ethical AI standards",
                "Cross-sectoral data interoperability and digital architecture"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-600 line-height-relaxed">
                  <span className="text-dnc-orange font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-dnc-red"></div>
            <h4 className="font-display font-bold text-md text-dnc-red mb-4">
              Digital Economy & Innovation
            </h4>
            <ul className="space-y-3">
              {[
                "Advancing fintech ecosystems and digital payment architecture",
                "Fostering startup acceleration and a culture of entrepreneurship",
                "Optimizing digital trade and e-commerce expansion",
                "Investment prospects within the burgeoning innovation economy",
                "Cultivating a future-ready digital workforce and talent pool"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-600 line-height-relaxed">
                  <span className="text-dnc-red font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Theme Insight Card */}
      <div className="bg-white text-white rounded-3xl p-8 shadow-xs border border-slate-100">
        <h4 className="font-display font-extrabold text-lg sm:text-xl text-dnc-blue mb-3">
          Behind the Theme: Reimagining Governance, Data and the Digital Economy
        </h4>
        <div className="space-y-4 text-sm sm:text-sm text-slate-900 leading-relaxed">
          <p>
            This strategic theme underscores the vital synergy between digital governance reform, secure data frameworks, and robust public infrastructure. It emphasizes the pivotal role of artificial intelligence and frontier technologies in driving Nepal’s socio-economic evolution and fostering a sustainable innovation culture.
          </p>
          <p>
            The Conclave explores the utilization of data-centric governance and cross-sectoral collaboration to refine public service delivery, enhance institutional resilience, and accelerate the digital trade ecosystem. Deliberations will further address the imperatives of cybersecurity, digital trust, and ethical technology integration, ensuring that the transition toward a global digital economy remains inclusive and equitable for all communities and sectors across the nation.
          </p>
        </div>
      </div>

    </div>
  );

  const renderOrganizer = () => (
    <div id="about-organizer-view" className="space-y-12">
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dnc-black">
              ICT Foundation Nepal (IFN)
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Founded in 2021, <strong>ICT Foundation Nepal</strong> is a nonprofit, non-distributing organization, which promotes innovation, startups, and ideas guided by the vision to build Digital Nepal promoting new ideas and startups.
              </p>
              <p>
                ICT Foundation Nepal engages and organizes a global network of public and private sector partners who develop community, national and regional innovative project models as the foundation to build e-society.
              </p>
              <p>
                ICT Foundation is an organization aimed to work towards the country’s mission of digital transformation. It works in policy level plans, discussions and execution of various ICT initiatives in collaboration to local and central level government bodies. It has been supporting the Nepali startups who work in the field of digital literacy with their growth and opportunity scalability.
              </p>
            </div>

          </div>

          {/* Parent grid item container */}
          <div className="md:col-span-4 flex flex-col gap-4">
            
            {/* 1. The Image Placeholder Box (Scaled down size) */}
            <div className="bg-slate border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center h-[200px] w-full group overflow-hidden relative">
              <img 
                src="/images/IFN-Logo.png" 
                alt="ICT Foundation Nepal Logo" 
                className="h-50 w-auto object-contain max-w-full transition-transform duration-300 group-hover:scale-105" 
              /> 
            </div>

            {/* 2. The Action Button (Positioned completely outside & below) */}
            <div className="flex justify-center">
              <a
                href="https://ictfoundation.org.np"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-dnc-blue hover:bg-opacity-90 text-white font-sans font-bold text-xs sm:text-sm rounded-xl transition duration-200 shadow-2xs hover:shadow-xs"
              >
                <Globe className="w-4 h-4 text-white" />
                Visit Official IFN Website
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Sister Initiatives list */}
      <div>
        <div className="text-center mb-8">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
            Pioneering National Initiatives
          </h3>
          <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wide">
            Our ecosystem of tech progress
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Digital Samvad", desc: "Weekly policy talk-show broadcasts", logo: "/images/logos/digital-samvad.jpg" },
            { name: "Digital Nepal Conclave", desc: "Flagship central business summit", logo: "/images/logos/dnc-logo.png" },
            { name: "Digital Karnali Conclave", desc: "Decentralized state policy forums", logo: "/images/logos/dkc-logo.png" },
            { name: "Digital Madhesh Conclave", desc: "Regional smart-services seminars", logo: "/images/logos/dmc-logo.png" },
            { name: "ICT Award", desc: "The ultimate accolade for tech champions", logo: "/images/logos/ict-award.png" },
            { name: "Startup & Idea Fest", desc: "National ecosystem pitching events", logo: "/images/logos/snif.png" },
            { name: "ICT Gyan", desc: "Centralized analytical tech encyclopedia", logo: "/images/logos/ict-gyan.png" },
            { name: "Digital Leadership Dialogue", desc: "Corporate-regulator interactions", logo: "/images/logos/dld-logo.png" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs hover:border-dnc-blue transition-all duration-200">
              {/* Logo Placeholder */}
              <div className="h-40 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={item.logo} 
                  alt={`${item.name} logo`}
                  className="h-full w-full object-contain p-2"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <h4 className="font-display font-bold text-base text-slate-900 mb-1 leading-tight">{item.name}</h4>
              {/* <p className="text-[11px] text-slate-500">{item.desc}</p> */}
            </div>
          ))}
        </div>
      </div>

    </div>
  );

  const renderTeam = () => (
  <div id="about-team-view" className="space-y-16 animate-infinite-slide">

    {/* Team Section */}
    <div>
      <div className="text-center mb-10 max-w-lg mx-auto">
        <span className="px-2 py-1 bg-dnc-blue/5 text-dnc-blue text-2xl font-bold rounded font-sans uppercase tracking-widest">
          Our Team
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-2xs flex flex-col items-center text-center hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
          >
            {/* Circular Photo Placeholder */}
            <div className="w-36 h-36 rounded-full bg-slate-50 border border-slate-100 font-display font-bold text-slate-400 flex items-center justify-center mb-4 overflow-hidden group-hover:border-dnc-orange/30 transition-colors duration-300 shrink-0">
              {member.imageUrl ? (
                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xl tracking-wider">{member.avatarText || "IFN"}</span>
              )}
            </div>

            {/* Name */}
            <h4 className="font-display font-bold text-base text-slate-900 leading-tight mb-1">
              {member.name}
            </h4>

            {/* Designation */}
            <p className="text-sm font-medium text-dnc-blue leading-snug">
              {member.role}
            </p>

          </div>
        ))}
      </div>
    </div>

    {/* Patrons Section */}
    <div id="advisory-patrons">
      <div className="text-center mb-10 max-w-lg mx-auto">
        <span className="px-2 py-1 bg-dnc-blue/5 text-dnc-blue text-2xl font-bold rounded font-sans uppercase tracking-widest">
          Our Patrons
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PATRONS.map((patron, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-2xs flex flex-col items-center text-center hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
          >
            {/* Circular Photo Placeholder matching Team profile sizes */}
            <div className="w-36 h-36 rounded-full bg-slate-50 border border-slate-100 font-display font-bold text-slate-400 flex items-center justify-center mb-4 overflow-hidden group-hover:border-dnc-blue/30 transition-colors duration-300 shrink-0">
              {patron.imageUrl ? (
                <img src={patron.imageUrl} alt={patron.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xl tracking-wider text-slate-300">Patron</span>
              )}
            </div>

            {/* Name */}
            <h4 className="font-display font-bold text-base text-slate-900 leading-tight mb-1">
              {patron.name}
            </h4>

            {/* Designation */}
            <p className="text-sm font-medium text-dnc-blue leading-snug">
              {patron.role}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>
);

  return (
    <div id="about-group-page" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-dnc-black">
            Who we are
          </h1>

          {/* Sub Navigation Pills */}
          <div className="mt-6 inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200/50">
            <button
              onClick={() => onSubSectionChange("event")}
              className={`px-5 py-2 rounded-xl text-sm sm:text-sm font-semibold transition ${currentSubSection === "event" ? "bg-white text-dnc-blue shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
            >
              About the Event
            </button>
            <button
              onClick={() => onSubSectionChange("organizer")}
              className={`px-5 py-2 rounded-xl text-sm sm:text-sm font-semibold transition ${currentSubSection === "organizer" ? "bg-white text-dnc-orange shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
            >
              The Organizer (IFN)
            </button>
            <button
              onClick={() => onSubSectionChange("team")}
              className={`px-5 py-2 rounded-xl text-sm sm:text-sm font-semibold transition ${currentSubSection === "team" ? "bg-white text-dnc-black shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Team & Patrons
            </button>
          </div>
        </div>

        {/* Selected subsection rendering */}
        {currentSubSection === "event" && renderEvent()}
        {currentSubSection === "organizer" && renderOrganizer()}
        {currentSubSection === "team" && renderTeam()}

      </div>
    </div>
  );
}
