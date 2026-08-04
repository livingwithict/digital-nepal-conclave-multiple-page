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

export interface SponsorGroup {
  title: string;
  sponsors: { name: string; logoUrl: string }[];
}

export const SPONSOR_GROUPS: SponsorGroup[] = [
  { title: "Organized by", sponsors: [{ name: "ICT Foundation Nepal", logoUrl: "/images/partners/ifn.png" }] },
  {
    title: "In Association with",
    sponsors: [
      { name: "TingTing", logoUrl: "/images/partners/TingTing Logo (1).png" },
      { name: "ThirdFactor", logoUrl: "/images/partners/thirdfactor-logo.png" },
    ],
  },
  { title: "Associated Partner", sponsors: [{ name: "Ncell", logoUrl: "/images/partners/ncell_footer_logo.png" }] },
  { title: "Digital Health Partner", sponsors: [{ name: "Mavorian", logoUrl: "/images/partners/mavorian-Logo_Only-600x138.png" }] },
  { title: "Digital Education Partner", sponsors: [{ name: "Neema Education Academy", logoUrl: "/images/partners/neema_education_foundation.png" }] },
  { title: "Event Partner", sponsors: [{ name: "Global Spark", logoUrl: "/images/partners/Global Spark.png" }] },
  { title: "MSP Partner", sponsors: [{ name: "SkyIT", logoUrl: "/images/partners/skyit.jpg" }] },
];

export interface Publication {
  id: string;
  title: string;
  year: string;
  type: "Report" | "Booklet" | "Magazine";
  coverUrl: string;
  pdfUrl?: string;
  description: string;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  category: "Team" | "Patron";
  description?: string;
  avatarText?: string;
  imageUrl?: string;
}

export const STATS_COUNTERS = [
  { id: "p-exp", label: "Participants Expected", count: "500+", desc: "Visionaries and decision-makers from across sectors" },
  { id: "spk", label: "Distinguished Speakers", count: "30+", desc: "National leaders, tech creators, and global visionaries" },
  { id: "key", label: "Keynote Speakers", count: "3+", desc: "Global perspectives and national change agendas" },
  { id: "sub-t", label: "Thematic Tracks", count: "4+", desc: "In-depth sessions on governance, data, & AI" },
  { id: "pan-sam", label: "Power Samvads & Panels", count: "5+", desc: "Forums enabling crucial strategic dialogue" }
];

export const TRANSFORMATIVE_PILLARS = [
  {
    title: "Governance & Digital Public Infrastructure",
    icon: "ShieldAlert",
    highlights: [
      "Institutional digital reform and transformative public service delivery.",
      "Citizen-centric smart services and integrated Digital ID frameworks.",
      "Strategic policy innovation and evidence-based decision making through data-centric governance."
    ]
  },
  {
    title: "Data, AI & Cybersecurity",
    icon: "Database",
    highlights: [
      "Establishing national data sovereignty and robust governance frameworks.",
      "Ethical AI integration and responsible technology adoption.",
      "Building digital trust, cybersecurity resilience, and cross-sectoral data interoperability."
    ]
  },
  {
    title: "Digital Economy & Innovation",
    icon: "TrendingUp",
    highlights: [
      "Advancing fintech ecosystems and digital payment architecture.",
      "Fostering startup acceleration and optimizing digital trade and e-commerce expansion.",
      "Cultivating a future-ready digital workforce and investment prospects within the innovation economy."
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Er. Ganesh Shah", role: "Former Minister, Ministry of Science and Technology, GoN", category: "Patron", avatarText: "GS", imageUrl: "/images/team/Ganesh Shah.jpg", },
  { name: "Mr. Manohar Kr. Bhattarai", role: "ICT Expert, Former Vice-Chairperson, HLCIT", category: "Patron", avatarText: "MB", imageUrl: "/images/team/Manohar Bhattarai.jpg", },
  { name: "Prof. Dr. Manish Pokharel", role: "Dean, Kathmandu University (KU)", category: "Patron", avatarText: "MP", imageUrl: "/images/team/Manish Pokharel.jpg", },
  { name: "Prof. Dr. Subarna Shakya", role: "Director, IT Innovation Center, TU", category: "Patron", avatarText: "SS", imageUrl: "/images/team/Subarna Shakya.jpg", },
  { name: "Mr. Ananda Raj Khanal", role: "Chairman, Nepal Digital Leads", category: "Patron", avatarText: "AK", imageUrl: "/images/team/Ananda Raj Khanal.jpg", },
  { name: "Mr. Birendra Kumar Mishra", role: "Former Joint Secretary, GoN", category: "Patron", avatarText: "BM", imageUrl: "/images/team/Birendra Mishra.jpg", },
  { name: "Mr. Vivek S. Rana", role: "Digital Enterprise Architect", category: "Patron", avatarText: "VR", imageUrl: "/images/team/Vivek Rana.jpg", },
  { name: "Mrs. Guna Keshari Pradhan", role: "President, WIIT", category: "Patron", avatarText: "GP", imageUrl: "/images/team/Guna Keshari.jpg", },
  { name: "Mr. Razan Lamsal", role: "Chairperson, ICT Foundation Nepal (ICT)", category: "Team", avatarText: "RL", imageUrl: "/images/team/Razan-Lamsal.jpg", },
  { name: "Mr. Hempal Shrestha", role: "Knowledge Management Specialist & DNC Coordinator, IFN", category: "Team", avatarText: "HS", imageUrl: "/images/team/Hempal Shrestha.jpg", },
  { name: "Ms. Krishpana Poudel", role: "Communication Officer, IFN", category: "Team", avatarText: "KP", imageUrl: "/images/team/Krishpana Poudel.jpg", },
];

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

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "dnc-25",
    title: "Digital Nepal Conclave Report 2025",
    year: "2025",
    type: "Report",
    coverUrl: "/images/Publication/DNC-25-report.jpg",
    description: "Comprehensive summary of the 2025 conclave containing policy directives on systems integration, summary of Google Street View launch, and digital health blueprints.",
    url: "https://drive.google.com/file/d/1fkIfDCeB-VlzF-Z1AoHnMKtRkaLmrUCj/view?usp=drive_link"
  },
  {
    id: "dnc-24",
    title: "Digital Nepal Conclave Report 2024",
    year: "2024",
    type: "Report",
    coverUrl: "/images/Publication/DNC-24-report.jpg",
    description: "Highlights from Prime Minister Dahal's inaugural program regarding the 'Decade of IT' and plans to generate over 1.5 million regional jobs.",
    url: "https://drive.google.com/file/d/1qbxqDC5d6xZSHEj03OfIXpPi8OtquKG-/view?usp=drive_link"
  },
  {
    id: "dnc-23",
    title: "Digital Nepal Conclave Report 2023",
    year: "2023",
    type: "Report",
    coverUrl: "/images/Publication/DNC-23-report.jpg",
    description: "Strategic papers examining 'Digital Capability' (Sakshyam Nepal) as the ultimate prerequisite to sustainable digital economy growth.",
    url: "https://drive.google.com/file/d/1CQpzmymdF3Lg4owWXI1WzghI-2VNwaAx/view?usp=drive_link"
  },
  {
    id: "dnc-22",
    title: "Digital Nepal Conclave Report 2022",
    year: "2022",
    type: "Report",
    coverUrl: "/images/Publication/DNC-22-report.jpg",
    description: "The foundational report cataloging 17 strategic working papers on expanding fiber backbones, regional server sites, and secure fintech APIs.",
    url: "https://drive.google.com/file/d/1NEucyNkpHKRXnLDVdLOe3oevxC43OwoX/view?usp=drive_link"
  },
  {
    id: "paridrishya-1",
    title: "Digital Paridrishya - Vol 1",
    year: "2024",
    type: "Booklet",
    coverUrl: "/images/Publication/Digital-Paridisya-1.jpg",
    description: "A comprehensive digital catalog tracking smart transformation achievements and provincial readiness scores across all 7 states of Nepal.",
    url: ""
  },
  {
    id: "paridrishya-2",
    title: "Digital Paridrishya - Vol 2",
    year: "2025",
    type: "Booklet",
    coverUrl: "/images/Publication/Digital-Paridisya-2.jpg",
    description: "The updated landscape document analyzing structural changes in remote sectors, cybersecurity measures, and local government digital services.",
    url: ""
  }
];

export interface NewsArticle {
  url: string;
  title?: string;
  thumbnail?: string;
}

// After adding a new { url } entry, run `node scripts/fetch-media-metadata.mjs`
// to auto-fill title/thumbnail from each article's og:title / og:image
// (scraped once, not at runtime, so page loads never hit an external API's daily limit).
export const NEWS_ARTICLES: NewsArticle[] = [
  { url: "https://ictsamachar.com/news/digital-nepal-conclave-2025-concludes/", title: "डिजिटल नेपाल कन्क्लेभ: गगन थापादेखि सञ्चार, अर्थमन्त्रीसहित प्रधानमन्त्रीसम्मले गरे डिजिटल रुपान्तरणका कुरा", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/DNC_2025_1_8m9mQOSVGk_piZaHCW1mM.jpg" },
  { url: "https://www.nepalbahas.com/story/693941/2025/8/15/science-and-technology/the--digital-nepal-conqualive-2025--for-the/", title: "नीति सुधार र निजी क्षेत्रको सहभागिता प्रवर्द्धनका लागि ‘डिजिटल नेपाल कन्क्लेभ २०२५’", thumbnail: "https://www.nepalbahas.com/_next/image?url=https%3A%2F%2Fcdn.luminocdn.net%2Falbums%2Fdigital_Ydbplh9OOx_vgNwkuAxNW.jpeg&w=1200&q=75" },
  { url: "https://www.goodnepal.com/detail/92", title: "डिजिटल नेपाल कन्क्लेभमा प्रधानमन्त्रीदेखि गगन थापासम्मले गरे डिजिटल रुपान्तरणका कुरा", thumbnail: "https://www.goodnepal.com/uploads/posts/DNC-2025-(1)-1755441873.jpg" },
  { url: "https://hamrakura.com/news-details/196303/2025-08-17", title: "डिजिटल नेपाल कन्क्लेभमा केपी ओलीदेखि गगन थापाले गरे डिजिटल रूपान्तरणका कुरा", thumbnail: "https://hamrakura.com/uploads/news/images/gagan-thapa-digital-nepal-c.jpg" },
  { url: "https://ictsamachar.com/news/the-fourth-edition-of-digital-nepal-conclave-has-begun/", title: "सुरू भयो चौंथो संस्करणको डिजिटल नेपाल कन्क्लेभ, डिजिटल इकोसिस्टम र रूपान्तरणका विषयमा छलफल हुँदै", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/PM_O7nxlcy3s3_ideefuXw5C.jpg" },
  { url: "https://english.pardafas.com/digital-nepal-conclave-2025-highlights-policy-reform-and-private-sector-engagement/", title: "‘Digital Nepal Conclave 2025’ Highlights Policy Reform and Private Sector Engagement", thumbnail: "https://english.pardafas.com/wp-content/uploads/2025/08/Conclave-1024x576.jpg" },
  { url: "https://ictsamachar.com/news/digital-transformation-should-be-in-the-interest-of-citizens-and-society-dr-shrestha/", title: "डिजिटल रूपान्तरण नागरिक र समाजको हितमा हुनुपर्छः डा. श्रेष्ठ", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/Dr_Shrestha_dvcu9wo6RR_dLNyqn3Yy2.jpg" },
  { url: "https://ictsamachar.com/news/digitalization-cannot-be-achieved-by-typing-on-a-computer-there-must-be-interoperability-between-systems/", title: "‘कम्प्युटरमा टाइप गरेर डिजिटलाइजेनस हुँदैन, प्रणालीहरूबीच अन्तरआवद्धता हुनुपर्छ’", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/Ek_narayan_aryal_GqWKEzkGyP_JZ0hmrGcF7.jpg" },
  { url: "https://ictsamachar.com/news/google-launches-street-view-service-in-nepal/", title: "गूगलले नेपालमा सुरू गर्‍यो स्ट्रिट भ्यु सेवा, भर्चुअल रूपमा अब सुन्दर दृश्य र संस्कृति अवलोकन गर्न सकिने", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/Capture_wLD5kD9lPK_P9I31SZjKY.PNG" },
  { url: "https://www.nepalpress.com/2025/08/15/628440/", title: "एआईको प्रयोग गरेर केहीले नियतवश निराशा फैलाउन खोज्दैछन् : प्रधानमन्त्री", thumbnail: "https://www.nepalpress.com/wp-content/uploads/2025/08/kp-oli-3-e1755240001447.png" },
  { url: "https://technologykhabar.com/2025/08/15/211684/", title: "नीति सुधार र निजी क्षेत्रको सहभागिता प्रवर्द्धनका लागि ‘डिजिटल नेपाल कन्क्लेभ २०२५’ - Technology Khabar", thumbnail: "https://www.technologykhabar.com/wp-content/uploads/2025/08/Digital-Nepal-Conclave-1.jpg" },
  { url: "https://www.capitalnepal.com/detail/65434", title: "डिजिटल नेपाल कन्क्लेभः प्रधानमन्त्रीले भने– सामाजिक सन्जाल कानुनी दायरामा आउनैपर्छ", thumbnail: "https://www.capitalnepal.com/uploads/posts/pm-1755244266.jpg" },
  { url: "https://ictsamachar.com/news/nepal-can-become-a-digital-work-center-prime-minister-oli/", title: "नेपाल ‘डिजिटल वर्क सेन्टर’ बन्न सक्छः प्रधानमन्त्री ओली", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/PM_Oli_1_Xs1V1ENlL2_ohmeoUPoeh.jpg" },
  // { url: "https://www.onlinekhabar.com/2025/08/1743526/transformation-is-not-possible-without-digitalization-chief-secretary-aryal" },
  { url: "https://nepalpress.com/2025/08/15/628440/", title: "एआईको प्रयोग गरेर केहीले नियतवश निराशा फैलाउन खोज्दैछन् : प्रधानमन्त्री", thumbnail: "https://nepalpress.com/wp-content/uploads/2025/08/kp-oli-3-e1755240001447.png" },
  { url: "https://www.instagram.com/reel/DNXwPtIxKw_/", title: "Himalaya Television on Instagram", thumbnail: "https://scontent.cdninstagram.com/v/t51.82787-15/534264129_18411852229129083_6745598627504136897_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=g4KiqYcUaWUQ7kNvwFIcp-R&_nc_oc=AdpGKVvRPVkUiJtEnjXfPj56oUuUMdW-wL_xqtAgA6UerQO6TrqC-1kXF4hqD6xKdgU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3Se0ULKrHZQD797TdIR8wg&_nc_ss=7fa8c&oh=00_AQGiqER5Ox8knVWdXTCaHsdGZjH0A99pgVdsc-8sIdz3Dw&oe=6A778C22" },
  { url: "https://www.techpana.com/2025/152488/pm-kp-sharma-oli-chatgpt-and-ai-usage-digital-nepal", title: "म पनि च्याटजीपीटी चलाउँछु, तर एआईले मानव मस्तिष्कलाई जित्न सक्दैन: प्रधानमन्त्री", thumbnail: "https://techpana.prixacdn.net/media/albums/kp-sharma-oli_r9eGFRkTWX.jpg" },
  // { url: "https://www.nayapatrikadaily.com/news-details/175424/2025-08-15" },
  // { url: "https://www.onlinekhabar.com/2025/08/1742894/i-also-use-ai-chatgpt-will-tell-me-everything-kp-oli" },
  { url: "https://newsofnepal.com/2025/08/15/725445/", title: "‘डिजिटल नेपाल कन्क्लेभ २०२५’ सम्पन्न", thumbnail: "https://newsofnepal.com/wp-content/uploads/2025/08/Digital-Nepal-1-6.jpg" },
  { url: "https://businesspati.com/%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2-%E0%A4%A8%E0%A5%87%E0%A4%AA%E0%A4%BE%E0%A4%B2-%E0%A4%95%E0%A4%A8%E0%A5%8D%E0%A4%95%E0%A5%8D%E0%A4%B2%E0%A5%87%E0%A4%AD-%E0%A5%A8%E0%A5%A6/", title: "डिजिटल नेपाल कन्क्लेभ २०२५ सम्पन्न, गगन थापादेखि सञ्चार, अर्थमन्त्रीसहित प्रधानमन्त्रीसम्मले गरे डिजिटल रुपान्तरणका कुरा - Business Pati", thumbnail: "https://businesspati.com/wp-content/uploads/2025/08/PM-oli.jpg" },
  // { url: "https://clickmandu.com/2025/08/405396.html" },
  // { url: "https://ictside.com/2025/08/17/digital-nepal-conclave-2025-concludes-leaders-from-gagan-thapa-and-the-communications-and-finance-ministers-to-the-prime-minister-discuss-digital-transformation/" },
];

