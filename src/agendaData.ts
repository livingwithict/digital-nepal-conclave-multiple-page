export interface AgendaItem {
  time: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: "Inaugural" | "Governance" | "Data" | "Economy" | "Break";
  room?: string;
  speakers?: string[];
  panelists?: string[];
  moderators?: string[];
  sessionChairs?: string[];
}

export const AGENDA_DATA: AgendaItem[] = [
  // INAUGURAL & REGISTRATION
  {
    time: "9:00 AM",
    title: "Delegate Registration & Welcome Reception",
    category: "Inaugural",
    description: "Check-in and welcome refreshments for all delegates",
    speakers: [],
    panelists: [],
    moderators: [],
    sessionChairs: [],
  },
  {
    time: "9:30 AM",
    title: "Inaugural Session: Lighting the Digital Path",
    category: "Inaugural",
    description: "Opening remarks and setting the stage for Nepal's digital transformation",
    speakers: [],
  },
  {
    time: "10:00 AM",
    title: "Keynote I: National Perspectives",
    subtitle: "The Trajectory of Nepal's Digital Progress: Strategic Essentials",
    category: "Inaugural",
    speakers: [],
  },
  {
    time: "10:20 AM",
    title: "Keynote II: Global Perspectives",
    subtitle: "Transformative Digital Paradigms: Success Drivers for Emerging Economies",
    category: "Inaugural",
    speakers: [],
  },

  // SESSION 1: GOVERNANCE & DPI
  {
    time: "10:45 AM",
    title: "Power Samvad @ DNC",
    subtitle: "Nepal's Digital Transformation Agenda; Reimagining Governance",
    category: "Governance",
    speakers: [],
  },
  {
    time: "12:00 PM",
    title: "Strategic Panel I: Redefining Digital Governance Architecture",
    subtitle: "Citizen-Centric Services: 100 Days, 100 Agendas for a Digital Nation",
    category: "Governance",
    speakers: [],
  },

  // BREAK - LUNCH
  // {
  //   time: "12:45 PM – 1:30 PM",
  //   title: "Networking Lunch & Exhibition",
  //   subtitle: "Startup Demo Zone & Networking Opportunities",
  //   category: "Break",
  //   speakers: [],
  // },

  // SESSION 2: DATA, AI & CYBERSECURITY
  {
    time: "1:30 PM",
    title: "Nepal Startup Launchpad",
    subtitle: "Innovative Solutions in Governance & Data (1-3 Pitches)",
    category: "Data",
    speakers: [],
  },
  {
    time: "1:45 PM",
    title: "Lightning Talk / Keynote: AI & Evolving Technological Frontiers",
    subtitle: "Ethical AI Integration for Smart Governance: Leveraging Frontier Tech as a Strategic Enabler",
    category: "Data",
    speakers: [],
  },
  {
    time: "2:00 PM",
    title: "Strategic Panel II: Paradigms of Data Governance",
    subtitle: "Establishing Data Sovereignty, Uniform Standards, and Robust Architectures",
    category: "Data",
    speakers: [],
  },

  // BREAK - TEA
  // {
  //   time: "3:00 PM – 3:30 PM",
  //   title: "Tea Break & Networking",
  //   subtitle: "Exhibition Floor Open",
  //   category: "Break",
  //   speakers: [],
  // },

  // SESSION 3: DIGITAL ECONOMY & INNOVATION
  {
    time: "3:30 PM",
    title: "Nepal Startup Launchpad",
    subtitle: "Innovative Solutions in Digital Economy & Deep Tech Ideas (4-6 Pitches)",
    category: "Economy",
    speakers: [],
  },
  {
    time: "4:00 PM",
    title: "Keynote III: Building Nepal's Digital Economy",
    subtitle: "A Framework for Broad-Based Prosperity",
    category: "Economy",
    speakers: [],
  },
  {
    time: "4:30 PM",
    title: "Strategic Panel III: Re-envisioning the Digital Economy",
    subtitle: "Expediting Nepal's Digital Economy: Resource Mobilization and Global Strategic Partnerships",
    category: "Economy",
    speakers: [],
  },

  // CLOSING
  {
    time: "5:30 PM",
    title: "Closing Power Samvad @ DNC",
    subtitle: "Mobilizing Capital for Digital Transformation",
    category: "Economy",
    speakers: [],
  },
  {
    time: "6:30 PM",
    title: "Closing Note & The Road to DNC 2027",
    subtitle: "Thank you & Future Outlook",
    category: "Inaugural",
    speakers: [],
  },
];