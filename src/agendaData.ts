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
    description: "",
    speakers: [],
  },
  {
    time: "9:30 AM",
    title: "Inaugural Session: Lighting the Digital Path",
    category: "Inaugural",
    session: "Session 0: Inaugural Session",
    description: "",
    speakers: [],
  },
  {
    time: "10:00 AM",
    title: "Keynote I: National Perspectives",
    subtitle: "The Trajectory of Nepal's Digital Progress: Strategic Essentials",
    category: "Inaugural",
    session: "Session 0: Inaugural Session",
    description: "",
    speakers: [],
  },
  {
    time: "10:30 AM",
    title: "Keynote II: Global Perspectives",
    subtitle: "Transformative Digital Paradigms: Success Drivers for Emerging Economies",
    category: "Inaugural",
    session: "Session 0: Inaugural Session",
    description: "",
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
    subtitle: "Citizen-Centric Services: 100+ Agendas for a Digital Nation",
    category: "Governance",
    session: "Session 1: Governance & Digital Public Infrastructure",
    description: "",
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
    description: "",
    speakers: [],
  },
  {
    time: "1:45 PM",
    title: "Strategic Panel II: Paradigms of Data Governance",
    subtitle: "Reimagining Citizen Service Delivery: Can Nagarik App Become Nepal's Digital Gateway?",
    category: "Data",
    session: "Session 2: Data, AI & Innovation",
    description: "",
    speakers: [],
  },
  {
    time: "2:50 PM",
    title: "Keynote III: Leveraging Frontier Technologies, Data Exchange, and Solution Architecture for Digital Transformation",
    category: "Data",
    session: "Session 2: Data, AI & Innovation",
    description: "",
    speakers: [],
  },
  {
    time: "3:15 PM",
    title: "Strategic Panel III: Paradigms of Data Governance",
    subtitle: "Establishing Data Sovereignty, Uniform Standards, and Robust Architectures",
    category: "Data",
    session: "Session 2: Data, AI & Innovation",
    description: "",
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
    description: "",
    speakers: [],
  },
  {
    time: "5:00 PM",
    title: "Strategic Panel IV: Unlocking Digital Nepal",
    subtitle: "Unlocking Digital Nepal: Advancing Transparency, Innovation and the Digital Economy",
    category: "Economy",
    session: "Session 3: Digital Economy & Innovation",
    description: "",
    speakers: [],
  },
  {
    time: "6:00 PM",
    title: "Keynote IV: Building Nepal's Digital Economy",
    subtitle: "A Framework for Broad-Based Prosperity",
    category: "Economy",
    session: "Session 3: Digital Economy & Innovation",
    description: "",
    speakers: [],
  },
  {
    time: "6:30 PM",
    title: "Power Samvad @ DNC",
    subtitle: "Mobilizing Capital for Digital Transformation & Reimagining Governance.",
    category: "Economy",
    session: "Session 3: Digital Economy & Innovation",
    description: "",
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
