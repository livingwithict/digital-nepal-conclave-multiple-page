export interface SponsorData {
  name: string | null;
  category: string;
  logoUrl: string | null;
}

export const SPONSORS: SponsorData[] = [
  // Top Tier
  { name: "Ting Ting", category: "In Association With", logoUrl: "/images/DNC-Logo.png" },
  { name: null, category: "Powered by", logoUrl: null },
  
  // Ecosystem Partners
  { name: "Google", category: "Ecosystem Partners", logoUrl: "/images/sponsors/google.png" },
  { name: "Nepal Telecom", category: "Ecosystem Partners", logoUrl: "/images/sponsors/nepal-telecom.png" },
  { name: "Thakral One", category: "Ecosystem Partners", logoUrl: "/images/sponsors/thakral-one.png" },
  { name: "eSewa", category: "Ecosystem Partners", logoUrl: "/images/sponsors/esewa.png" },
  { name: "onepoint", category: "Ecosystem Partners", logoUrl: "/images/sponsors/onepoint.png" },
  
  // Various Categories Row 1
  { name: "Ncell Business", category: "Telecom Partner", logoUrl: "/images/sponsors/ncell-business.png" },
  { name: "Khalti", category: "Digital Payment Partner", logoUrl: "/images/sponsors/khalti.png" },
  { name: null, category: "Digital Education Partner", logoUrl: null },
  { name: "Dolphin HMIS", category: "Digital Health Partner", logoUrl: "/images/sponsors/dolphin-hmis.png" },
  { name: "Dynamic Technosoft", category: "EdTech Partner", logoUrl: "/images/sponsors/dynamic-technosoft.png" },
  
  // Various Categories Row 2
  { name: "UNV", category: "Digital Security Partner", logoUrl: "/images/sponsors/unv.png" },
  { name: "SKY IT", category: "IT Infra Partner", logoUrl: "/images/sponsors/sky-it.png" },
  { name: null, category: "Ticketing Partner", logoUrl: null },
  { name: null, category: "Logistic Partner", logoUrl: null },
  { name: "VYASA", category: "Digital Media Partner", logoUrl: "/images/sponsors/vyasa.png" },
  
  // Event Management Partners
  { name: "Global Spark", category: "Event Management Partners", logoUrl: "/images/sponsors/global-spark.png" },
  { name: "ISS Pvt Ltd", category: "Event Management Partners", logoUrl: "/images/sponsors/iss-pvt-ltd.png" },
  
  // Supporting Partners
  { name: "E-Group", category: "Supporting Partners", logoUrl: "/images/sponsors/e-group.png" },
  { name: "CAN Federation", category: "Supporting Partners", logoUrl: "/images/sponsors/can-federation.png" },
  { name: "NICCI", category: "Supporting Partners", logoUrl: "/images/sponsors/nicci.png" },
  { name: "Rastriya Banijya Bank", category: "Supporting Partners", logoUrl: "/images/sponsors/rastriya-banijya-bank.png" },
  { name: "Garima Bikas Bank", category: "Supporting Partners", logoUrl: "/images/sponsors/garima-bikas-bank.png" }
];