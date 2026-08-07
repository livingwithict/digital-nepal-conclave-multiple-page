export interface Speaker {
  id: string;
  name: string;
  title: string;
  company?: string;
  bio: string;
  avatarUrl?: string;
  tags?: string[];
  isKeynote?: boolean;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export const SPEAKERS_LIST: Speaker[] = [
  {
    id: "manohar-bhattarai",
    name: "Mr. Manohar K Bhattarai",
    title: "Former Vice-Chairperson",
    company: "HLCIT (ICT Expert)",
    bio: "",
    avatarUrl: "/images/speakers/manohar-bhattarai.jpg",
    tags: ["Policy", "Smart Governance", "ICT Core"],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "manish-pokharel",
    name: "Prof. Dr. Manish Pokharel",
    title: "Dean",
    company: "Kathmandu University (Patron, IFN)",
    bio: "",
    avatarUrl: "/images/speakers/manish-pokharel.jpg",
    tags: ["Academics", "Cloud Infrastructure", "E-Governance"],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "kyle-gardner",
    name: "Mr. Kyle Gardner",
    title: "Government Affairs & Public Policy Lead",
    company: "Google (South Asia)",
    bio: "",
    avatarUrl: "/images/speakers/kyle-gardner.jpg",
    tags: ["Global Policies", "Big Tech", "AI Sovereignity"],
    isKeynote: true,
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "gagan-thapa",
    name: "Mr. Gagan Thapa",
    title: "President",
    company: "Nepali Congress",
    bio: "",
    avatarUrl: "/images/speakers/gagan-thapa.jpg",
    tags: ["Public Leadership", "Governance", "100-Days Agendas"],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "ek-narayan",
    name: "Mr. Ek Narayan Aryal",
    title: "Former Chief Secretary",
    company: "Government of Nepal",
    bio: "",
    avatarUrl: "/images/speakers/ek-narayan-aryal.jpg",
    tags: ["Public Service", "DPI", "System Integration"],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "nishant-nair",
    name: "Mr. Nishant Nair",
    title: "Head of Street View Outsourced Operations",
    company: "Google Maps",
    bio: "",
    avatarUrl: "/images/speakers/nishant-nair.jpg",
    tags: ["Geo-Tech", "Digital Maps", "Spatials"],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "nilesh-pradhan",
    name: "Mr. Nilesh Man Singh Pradhan",
    title: "CEO",
    company: "Nepal Clearing House Ltd. (NCHL)",
    bio: "",
    avatarUrl: "/images/speakers/nilesh-pradhan.jpg",
    tags: [],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "kp-oli",
    name: "Mr. K.P. Oli",
    title: "Former Prime Minister",
    company: "Government of Nepal",
    bio: "",
    avatarUrl: "/images/speakers/kp-oli.jpg",
    tags: [],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "puspa-kamal-dahal",
    name: "Mr. Puspa Kamal Dahal",
    title: "Former Prime Minister",
    company: "Government of Nepal",
    bio: "",
    avatarUrl: "/images/speakers/puspa-kamal-dahal.jpg",
    tags: [],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "rupesh-shrestha",
    name: "Mr. Rupesh Shrestha",
    title: "News Chief",
    company: "Kantipur Television",
    bio: "",
    avatarUrl: "/images/speakers/rupesh-shrestha.jpg",
    tags: [],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "chandra-dhakal",
    name: "Mr. Chandra Dhakal",
    title: "Chairman",
    company: "IME Group",
    bio: "",
    avatarUrl: "/images/speakers/chandra-dhakal.jpg",
    tags: [],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "manish-jha",
    name: "Mr. Manish Jha",
    title: "Member of Parliament",
    company: "Rastriya Swatantra Party",
    bio: "",
    avatarUrl: "/images/speakers/manish-jha.jpg",
    tags: [],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "sobita-gautam",
    name: "Mrs. Sobita Gautam",
    title: "Minister of law, justice and parliamentary affairs",
    company: "Government of Nepal",
    bio: "",
    avatarUrl: "/images/speakers/sobita-gautam.jpg",
    tags: [],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  }
];
