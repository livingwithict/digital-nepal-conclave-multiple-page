export interface TeamMember {
  name: string;
  role: string;
  category: "Team" | "Patron";
  description?: string;
  avatarText?: string;
  imageUrl?: string;
}

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
