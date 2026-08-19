export interface SponsorGroup {
  title: string;
  sponsors: { name: string; logoUrl: string; url?: string }[];
}

const DNC_LOGO = "/images/DNC-Logo.png";

export const SPONSOR_GROUPS: SponsorGroup[] = [
  { title: "Organized by", sponsors: [{ name: "ICT Foundation Nepal", logoUrl: "/images/partners/ifn.png", url: "https://ictfoundation.org.np" }] },
  {
    title: "In Association with",
    sponsors: [
      { name: "TingTing", logoUrl: "/images/partners/TingTing Logo (1).png", url: "https://www.tingting.io/" },
      { name: "ThirdFactor", logoUrl: "/images/partners/thirdfactor-logo.png", url: "https://thirdfactor.ai/" },
    ],
  },
  {
    title: "Powered by",
    sponsors: [
      { name: "SastoTickets", logoUrl: "/images/partners/Sasto Tickets Filled.png", url: "https://sastotickets.com/" },
      // { name: "fonepay", logoUrl: DNC_LOGO, url: "https://fonepay.com/" },
    ],
  },
  { title: "Supporting Partner", sponsors: [{ name: "Ncell Business", logoUrl: "/images/partners/Ncell Business Logo JPG.jpg", url: "https://www.ncell.com.np/en/business" }] },
  { title: "Digital Education Partner", sponsors: [{ name: "CodeXSchool", logoUrl: "/images/partners/CodeXSchool.png" }] },
  { title: "MSP Partner", sponsors: [{ name: "SkyIT", logoUrl: "/images/partners/skyit.jpg", url: "https://skybroadband.com.np/" }] },
  { title: "Event Partner", sponsors: [{ name: "Global Spark", logoUrl: "/images/partners/Global Spark.png", url: "https://www.globalspark.com.np/" }] },
];
