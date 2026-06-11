import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AgendaPage from "./pages/AgendaPage";
import SpeakersPage from "./pages/SpeakersPage";
import PastEventsPage from "./pages/PastEventsPage";
import PublicationsPage from "./pages/PublicationsPage";
import NewsMediaPage from "./pages/NewsMediaPage";
import ContactPage from "./pages/ContactPage";
import RegistrationPage from "./pages/RegistrationPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="agenda" element={<AgendaPage />} />
        <Route path="speakers" element={<SpeakersPage />} />
        <Route path="past-events" element={<Navigate to="/past-events/2025" replace />} />
        <Route path="past-events/:year" element={<PastEventsPage />} />
        <Route path="publications" element={<PublicationsPage />} />
        <Route path="news-media" element={<NewsMediaPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="register" element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
}
