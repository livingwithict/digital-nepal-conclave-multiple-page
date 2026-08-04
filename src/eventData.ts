export type EventYear = "2025" | "2024" | "2023" | "2022";

export interface EventGalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: "col-span-2" | "row-span-2" | "col-span-2 row-span-2"; // For bento grid variations
}

export interface VideoPlaylist {
  id: string;
  title: string;
  url: string;
  description?: string;
}

export interface EventData {
  year: EventYear;
  theme: string;
  tagline: string;
  logo?: string;
  overviewParagraphs: string[];
  agendaDriveLink: string;
  reportDriveLink: string;
  galleryImages: EventGalleryImage[];
  videoPlaylists: VideoPlaylist[];
}

export const EVENTS_DATA: Record<EventYear, EventData> = {
  "2025": {
    year: "2025",
    theme: "Empowering Digital Nepal Together",
    tagline: "",
    logo: "/images/logos/DNC_25.png",
    overviewParagraphs: [
      "The **Digital Nepal Conclave 2025**, organized by ICT Foundation Nepal in association with TingTing and powered by Raindrop, was successfully held at The Plaza Hotel under the theme **“Empowering Digital Nepal Together”**.",
      "Centered around the broader theme **“Digital Synergy: Transforming Governance, Economy, and Society,”** the conclave brought together policymakers, government leaders, ICT experts, entrepreneurs, innovators, development partners, academia, private sector representatives, and digital ecosystem stakeholders to discuss Nepal’s evolving digital transformation journey and the collaborative efforts needed to build a digitally empowered nation.",
      "The conclave witnessed participation from more than 600 senior representatives from government institutions, development agencies, the private sector, startups, and national and international technology organizations. Over eight thematic sessions featured discussions on digital governance, digital public infrastructure, digital health, digital economy, innovation, interoperability, and the future of Nepal’s ICT industry.",
    ],
    agendaDriveLink: "https://drive.google.com/file/d/1XAHl-VTSDZJ_Q78rEjeEGx7Bbl4i1AEN/view?usp=drive_link",
    reportDriveLink: "https://drive.google.com/file/d/1fkIfDCeB-VlzF-Z1AoHnMKtRkaLmrUCj/view?usp=drive_link",
    galleryImages: [
      {id: "img-1", src: "/images/gallery/2025/25-1.jpg", alt: "",},
      {id: "img-2", src: "/images/gallery/2025/25-2.jpg", alt: "",},
      {id: "img-3", src: "/images/gallery/2025/25-3.jpg", alt: "",},
      {id: "img-4", src: "/images/gallery/2025/25-6.jpg", alt: "",},
      {id: "img-5", src: "/images/gallery/2025/25-5.jpg", alt: "",},
      {id: "img-6", src: "/images/gallery/2025/25-4.jpg", alt: "",},
    ],
    videoPlaylists: [
      {
        id: "vid-1",
        title: "Inaugural Thematic Plenary Session: 01  Digital Governance and Leadership | Driving the Digital Synergy",
        url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6qB5knF0c0N8c3_ZVNRxPfv",
        description: "Day 1 keynote presentations",
      },
      {
        id: "vid-2",
        title: "Thematic Parallel Session - 01 Readiness for Digital Foundation: Digital Economy, Innovation & Society",
        url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6pg4kXbXIU6UDGxKq0uGGAC",
        description: "Sessions on artificial intelligence and innovation",
      },
      {
        id: "vid-3",
        title: "Thematic Plenary Session - 02 Readiness for Digital Foundation: Digital Economy,Innovation & Society",
        url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6pYoL36ifAU83zl-0KD9uj4",
        description: "Government digitalization initiatives",
      },
      {
        id: "vid-4",
        title: "Plenary Session: 03 Digital Transformation & Future Readiness",
        url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6rFbp5gkXwYe7fTmK8G6P_o",
        description: "Entrepreneurship and startup funding",
      },
    ],
  },
  "2024": {
    year: "2024",
    theme: "Harmonizing Digitalization and Development",
    tagline: "",
    logo: "/images/logos/DNC_24.png",
    overviewParagraphs: [
      "The third edition of the **Digital Nepal Conclave 2024**, organized by ICT Foundation Nepal, was successfully held at Kathmandu Marriott Hotel under the theme **“Harmonizing Digitalization and Development”**.",
      "The conclave brought together policymakers, ministers, parliamentarians, government officials, technology leaders, entrepreneurs, innovators, development partners, startups, and international experts to discuss Nepal’s digital transformation journey and the importance of aligning digitalization with national development goals.",
      "The event featured five major panel sessions, over ten presentations, multiple power dialogue sessions, and technology showcases focused on digital public infrastructure, governance, digital economy, innovation, inclusion, sustainable telecommunications, and investment for Digital Nepal.",
      "More than 600 representatives from federal, provincial, and local governments, private institutions, startups, academia, development agencies, and technology companies participated in the conclave, making it one of Nepal’s largest and most influential technology and policy dialogue platforms."
    ],
    agendaDriveLink: "https://drive.google.com/file/d/1e_M49yGQesWynakuN-jclx58ydd5BcH0/view?usp=drive_link",
    reportDriveLink: "https://drive.google.com/file/d/1qbxqDC5d6xZSHEj03OfIXpPi8OtquKG-/view?usp=drive_link",
    galleryImages: [
      {id: "img-1", src: "/images/gallery/2024/24-1.jpg", alt: "",},
      {id: "img-2", src: "/images/gallery/2024/24-2.jpg", alt: "",},
      {id: "img-3", src: "/images/gallery/2024/24-3.jpg", alt: "",},
      {id: "img-4", src: "/images/gallery/2024/24-4.jpg", alt: "",},
      {id: "img-5", src: "/images/gallery/2024/24-5.jpg", alt: "",},
      {id: "img-6", src: "/images/gallery/2024/24-6.jpg", alt: "",},
      // {id: "img-7", src: "/images/gallery/2024/24-7.jpg", alt: "", span: "col-span-2",},
    ],
    videoPlaylists: [
      {
        id: "vid-1",
        title: "Session 01 Driving Digitalization and Development",
        url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6qZZ3QSOs2jQC6F9HRCCnDS",
      },
      {
        id: "vid-2",
        title: "Session 02 Sustainable Telecommunication and Policies for Digital Transformation",
        url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6pONbJqJ3Vv_4roKgT3_aeT",
      },
      {
        id: "vid-3",
        title: "Session 03 Embracing the Frontier Tech for Development",
        url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6qccaTsWXa7n1yC70cTGKib",
      },
      {
        id: "vid-4",
        title: "Session 04 Inclusion Digital Empowerment and Inclusion for Sustainable Development",
        url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6pI3cC6X4LwQXkmj6L0ZAV4",
      },
      {
        id: "vid-5",
        title: "Session 05 Digital Governance and Data for Development",
        url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6o4l9T4iqGYqj4d0_yITTHr",
      },
      {
        id: "vid-6",
        title: "Session 06 Digital Economy and Investment for Digital Nepal",
        url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6qCpoWJ79pUxkCP49tE423J",
      },
      {
        id: "vid-7",
        title: "Session 07 Way Forward for Harmonizing Digitalization and Development",
        url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6oZzBTyek9ptBlFvDpeMO0M",
      },
    ],
  },
  "2023": {
    year: "2023",
    theme: "Fostering Digitally Sakshyam Nepal",
    tagline: "",
    logo: "/images/logos/DNC_23.png",
    overviewParagraphs: [
      "The second edition of the **Huawei MNC Digital Nepal Conclave 2023**, organized by ICT Foundation Nepal, was successfully held at The Soaltee Kathmandu under the theme **“Fostering Digitally Sakshyam Nepal”**. The two-day conclave brought together policymakers, government representatives, ICT experts, entrepreneurs, innovators, academicians, development partners, and international delegates to discuss Nepal’s growing digital ecosystem and the country’s readiness for digital transformation.",
      "The conclave featured more than 15 sessions conducted across 6 major thematic areas, with participation from over 70 national and international resource persons. The discussions focused on strengthening Nepal’s digital capability through improvements in infrastructure, governance, entrepreneurship, innovation, digital economy, cybersecurity, fintech, and policy development.",
      "The event also highlighted the importance of collaboration between the government and private sector to build a digitally capable Nepal and accelerate the implementation of the Digital Nepal vision.",

    ],
    agendaDriveLink: "https://drive.google.com/file/d/1yO4XJcwyKjqVkQcE_JJdS74tbt6MsW9J/view?usp=drive_link",
    reportDriveLink: "https://drive.google.com/file/d/1CQpzmymdF3Lg4owWXI1WzghI-2VNwaAx/view?usp=drive_link",
    galleryImages: [
      {id: "img-1", src: "/images/gallery/2023/23-1.jpg", alt: "",},
      {id: "img-2", src: "/images/gallery/2023/23-2.jpg", alt: "",},
      {id: "img-3", src: "/images/gallery/2023/23-3.jpg", alt: "",},
      {id: "img-4", src: "/images/gallery/2023/23-4.jpg", alt: "",},
      {id: "img-5", src: "/images/gallery/2023/23-5.jpg", alt: "",},
      {id: "img-5", src: "/images/gallery/2023/23-6.jpg", alt: "",},

    ],
    videoPlaylists: [
      {
        id: "vid-1",
        title: "Inauguration Session",
        url: "https://www.youtube.com/live/dv-CsOcIojQ?si=KFABJLMiK-2b4VDx",
      },
      {
        id: "vid-2",
        title: "1st day - 2nd Session",
        url: "https://www.youtube.com/live/jJmOXihX-Jc?si=frMQR2MyupB0Q6F-",
      },
      {
        id: "vid-3",
        title: "2nd Day - 1st Session",
        url: "https://www.youtube.com/live/LLTChnhlD10?si=sW8L3pzVWBFzDXGT",
      },
      {
        id: "vid-4",
        title: "2nd Day - 2nd Session",
        url: "https://www.youtube.com/live/E-Az1AeXoUg?si=Xz6AnYMkv8yQhQh8",
      },
    ],
  },
  "2022": {
    year: "2022",
    theme: "Digital Nepal Framework Collaboration",
    tagline: "",
    logo: "/images/logos/DNC_22.png",
    overviewParagraphs: [
      "The two-day **Huawei Digital Nepal Conclave 2022**, organized in association with InfoDevelopers and connected by Ncell, was successfully held at The Soaltee Kathmandu with the objective of supporting Nepal’s digital transformation journey through collaboration, dialogue, and innovation.",
      "The conclave brought together policymakers, ICT leaders, entrepreneurs, academicians, innovators, development partners, and digital transformation experts from Nepal and abroad. More than 60 speakers from five countries participated in the event, contributing to 10 thematic dialogue sessions and presenting 17 working papers focused on strengthening Nepal’s digital ecosystem.",
      "The event served as a national platform for discussing opportunities, challenges, and future strategies for building a digitally empowered Nepal through advancements in infrastructure, innovation, governance, entrepreneurship, cybersecurity, fintech, and emerging technologies.",

    ],
    agendaDriveLink: "https://drive.google.com/file/d/1AoRR3xslBCOrKhUVJE_JpQ7FxVZeOtRN/view?usp=drive_link",
    reportDriveLink: "https://drive.google.com/file/d/1NEucyNkpHKRXnLDVdLOe3oevxC43OwoX/view?usp=drive_link",
    galleryImages: [
      {id: "img-1", src: "/images/gallery/2022/22-1.jpg", alt: "",},
      {id: "img-2", src: "/images/gallery/2022/22-2.jpg", alt: "",},
      {id: "img-3", src: "/images/gallery/2022/22-3.jpg", alt: "",},
      {id: "img-4", src: "/images/gallery/2022/22-4.jpg", alt: "",},
      {id: "img-5", src: "/images/gallery/2022/22-5.jpg", alt: "",},
      {id: "img-5", src: "/images/gallery/2022/22-6.jpg", alt: "",},
    ],
    videoPlaylists: [
      {
        id: "vid-1",
        title: "Inauguration Session",
        url: "https://www.youtube.com/live/VrZ_jsP7n3U?si=cnPi1AgKjDWaZxCm",
      },
      {
        id: "vid-2",
        title: "1st day - 2nd Session",
        url: "https://www.youtube.com/live/s4fmwU4heWE?si=DIHtJA_f1Tv_nYbI",
      },
      {
        id: "vid-3",
        title: "2nd Day - 1st Session",
        url: "https://www.youtube.com/live/3s1MwYfOpX8?si=nqoJVJfU16Cv8yhE",
      },
      {
        id: "vid-4",
        title: "2nd Day - 2nd Session",
        url: "https://www.youtube.com/live/XzAoCC_1njU?si=HdnTZ5TnHQN21nod",
      },
    ],
  },
};
