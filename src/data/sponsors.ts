export interface SponsorGroup {
  title: string;
  sponsors: { name: string; logoUrl: string; url?: string }[];
}

export const SPONSOR_GROUPS: SponsorGroup[] = [
  { title: "Organized by", sponsors: [{ name: "ICT Foundation Nepal", logoUrl: "/images/partners/ifn.png", url: "https://ictfoundation.org.np" }] },
  {
    title: "In Association with",
    sponsors: [
      { name: "TingTing", logoUrl: "/images/partners/TingTing Logo (1).png", url: "https://www.tingting.io/" },
      { name: "ThirdFactor", logoUrl: "/images/partners/thirdfactor-logo.png", url: "https://thirdfactor.ai/" },
    ],
  },
  { title: "Associated Partner", sponsors: [{ name: "Ncell", logoUrl: "/images/partners/ncell_footer_logo.png", url: "https://www.ncell.com.np/" }] },
  { title: "Digital Health Partner", sponsors: [{ name: "Mavorian", logoUrl: "/images/partners/mavorian-Logo_Only-600x138.png", url: "https://mavorion.com/" }] },
  { title: "Digital Education Partner", sponsors: [{ name: "Neema Education Academy", logoUrl: "/images/partners/neema_education_foundation.png", url: "https://neemaeducation.com/" }] },
  { title: "Event Partner", sponsors: [{ name: "Global Spark", logoUrl: "/images/partners/Global Spark.png", url: "https://www.globalspark.com.np/" }] },
  { title: "MSP Partner", sponsors: [{ name: "SkyIT", logoUrl: "/images/partners/skyit.jpg", url: "https://skybroadband.com.np/" }] },
];
