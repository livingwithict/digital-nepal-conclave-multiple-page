export interface AgendaItem {
  time: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: "Inaugural" | "Governance" | "Data" | "Economy" | "Break";
  session: string;
  room?: string;
  speakers?: string[];
  panelists?: string[];
  moderators?: string[];
  sessionChairs?: string[];
}

export const getSessionSlug = (session: string) =>
  session.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const AGENDA_DATA: AgendaItem[] = [
  // SESSION 0: INAUGURAL SESSION
  {
    time: "9:00 AM",
    title: "Delegate Registration & Welcome Reception",
    category: "Inaugural",
    session: "Session 0: Inaugural Session",
    description: "Delegate badge issuance, exhibition engagement, and informal networking",
    speakers: [],
  },
  {
    time: "9:30 AM",
    title: "Inaugural Session: Lighting the Digital Path",
    category: "Inaugural",
    session: "Session 0: Inaugural Session",
    description: "Formal commencement, ceremonial lamp lighting, and introductory address by the organizing committee, Documentary and Flashback DNC 2022-2025",
    speakers: [],
  },
  {
    time: "10:00 AM",
    title: "Keynote I: National Perspectives",
    subtitle: "The Trajectory of Nepal's Digital Progress: Strategic Essentials",
    category: "Inaugural",
    session: "Session 0: Inaugural Session",
    description: "A profound, nationally oriented discourse by a prominent digital visionary analyzing institutional progress, structural gaps, and the transformative roadmap for the coming decade",
    speakers: [],
  },
  {
    time: "10:30 AM",
    title: "Keynote II: Global Perspectives",
    subtitle: "Transformative Digital Paradigms: Success Drivers for Emerging Economies",
    category: "Inaugural",
    session: "Session 0: Inaugural Session",
    description: "An international expert in digital governance will outline successful frameworks from pioneering nations, offering practical insights customized for Nepal's unique developmental context.",
    speakers: [],
  },

  // SESSION 1: GOVERNANCE & DIGITAL PUBLIC INFRASTRUCTURE
  {
    time: "10:50 AM",
    title: "Digital Launchpad 1 - Innovative Solutions for Digital Governance (2 Pitches)",
    category: "Governance",
    session: "Session 1: Governance & Digital Public Infrastructure",
    speakers: [],
  },
  {
    time: "11:00 AM",
    title: "Strategic Panel I: Redefining Digital Governance Architecture",
    subtitle: "Citizen-Centric Services: 100++ Agendas for a Digital Nation",
    category: "Governance",
    session: "Session 1: Governance & Digital Public Infrastructure",
    description: "A high-level, multi-stakeholder discussion focused on the evolution of Nepal's governance through the implementation of open government principles and robust digital public infrastructure.",
    speakers: [],
  },

  // BREAK - LUNCH
  // {
  //   time: "12:30 PM",
  //   title: "Lunch Break",
  //   subtitle: "Exhibition & Startup Demo Zone",
  //   category: "Break",
  //   session: "Session 1: Governance & Digital Public Infrastructure",
  //   speakers: [],
  // },

  // SESSION 2: DATA, AI & INNOVATION
  {
    time: "1:30 PM",
    title: "Digital Launchpad II - Innovative Solutions in Governance & Data (2-3 Pitches)",
    category: "Data",
    session: "Session 2: Data, AI & Innovation",
    description: "A curated showcase featuring three strategic startup presentations centered on GovTech advancements, data-centric architectures, and transformative digital public service delivery, allocating 5 minutes for each visionary pitch.",
    speakers: [],
  },
  {
    time: "1:45 PM",
    title: "Strategic Panel II: Paradigms of Data Governance",
    subtitle: "Reimagining Citizen Service Delivery: Can Nagarik App Become Nepal's Digital Gateway?",
    category: "Data",
    session: "Session 2: Data, AI & Innovation",
    description: "This session will explore the evolution of Nagarik App as a unified digital platform for citizen services, its potential to become Nepal's super app, and the opportunities and challenges in delivering seamless, secure, and citizen-centric services while advancing smart governance.",
    speakers: [],
  },
  {
    time: "2:50 PM",
    title: "Keynote III: Leveraging Frontier Technologies, Data Exchange, and Solution Architecture for Digital Transformation",
    category: "Data",
    session: "Session 2: Data, AI & Innovation",
    description: "This keynote explores how AI, interoperable data exchange, and modern digital architecture can accelerate Nepal's digital transformation. It highlights the role of frontier technologies in enabling smarter governance, improving public service delivery, strengthening digital trust, and building a secure, citizen-centric digital ecosystem.",
    speakers: [],
  },
  {
    time: "3:15 PM",
    title: "Strategic Panel III: Paradigms of Data Governance",
    subtitle: "Establishing Data Sovereignty, Uniform Standards, and Robust Architectures",
    category: "Data",
    session: "Session 2: Data, AI & Innovation",
    description: "This high-level discussion explores the critical themes of national data ownership and the necessity of technical interoperability. It aims to identify strategic methodologies for building trust and resilience within the comprehensive digital landscape.",
    speakers: [],
  },

  // BREAK - TEA
  // {
  //   time: "4:15 PM",
  //   title: "Tea Break",
  //   subtitle: "Networking & Exhibition Floor Open",
  //   category: "Break",
  //   session: "Session 2: Data, AI & Innovation",
  //   speakers: [],
  // },

  // SESSION 3: DIGITAL ECONOMY & INNOVATION
  {
    time: "4:30 PM",
    title: "Nepal Startup Launchpad - Innovative Solutions in Digital Economy & Deep Tech Ideas (3-4 Pitches)",
    category: "Economy",
    session: "Session 3: Digital Economy & Innovation",
    description: "A final showcase featuring select startup presentations centered on the digital trade landscape, fintech architectures, and AI-driven innovations, allocating 5 minutes for each visionary pitch.",
    speakers: [],
  },
  {
    time: "5:00 PM",
    title: "Strategic Panel IV: Unlocking Digital Procurement",
    subtitle: "Unlocking Digital Procurement: Driving Transparency, Innovation, and the Digital Economy",
    category: "Economy",
    session: "Session 3: Digital Economy & Innovation",
    description: "Timely procurement is a critical enabler of digital transformation. Delays and outdated procurement processes often slow innovation, increase costs, and hinder effective public service delivery. This session will explore how strategic, agile, and innovation-friendly procurement can accelerate digital transformation, enable the adoption of emerging technologies, and maximize public value.",
    speakers: [],
  },
  {
    time: "6:00 PM",
    title: "Keynote IV: Building Nepal's Digital Economy",
    subtitle: "A Framework for Broad-Based Prosperity",
    category: "Economy",
    session: "Session 3: Digital Economy & Innovation",
    description: "This visionary address will examine the development of a resilient digital economy by advancing fintech systems, e-commerce networks, and digital trade opportunities to establish the country as a prime location for international tech investment.",
    speakers: [],
  },
  {
    time: "6:30 PM",
    title: "Power Samvad @ DNC",
    subtitle: "Mobilizing Capital for Digital Transformation & Reimagining Governance.",
    category: "Economy",
    session: "Session 3: Digital Economy & Innovation",
    description: "An unscripted, high-level deliberation with the finance minister exploring the fiscal architecture of Nepal's digital journey, examining strategic investment priorities, public-private synergy models, and the catalytic role of national capital markets.",
    speakers: [],
  },

  // CLOSING
  {
    time: "7:30 PM",
    title: "Closing Note & The Road to DNC 2027",
    subtitle: "Networking Dinner",
    category: "Inaugural",
    session: "Closing",
    speakers: [],
  },
];
