import React from "react";
import Hero from "../components/Hero";
import ThemeDateVenue from "../components/ThemeDateVenue";
import HomeDetails from "../components/HomeDetails";

export default function HomePage() {
  return (
    <div id="home-subpage-container" className="animate-fade-in relative z-10">
      <Hero />
      <ThemeDateVenue />
      <HomeDetails />
    </div>
  );
}
