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
