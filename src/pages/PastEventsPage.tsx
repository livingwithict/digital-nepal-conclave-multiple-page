import React from "react";
import { useParams, Navigate } from "react-router-dom";
import PastEventsComponent from "../components/PastEventsComponent";
import { EventYear } from "../eventData";

const VALID_YEARS: EventYear[] = ["2025", "2024", "2023", "2022"];

export default function PastEventsPage() {
  const { year } = useParams<{ year: string }>();

  if (!year || !VALID_YEARS.includes(year as EventYear)) {
    return <Navigate to="/past-events/2025" replace />;
  }

  return <PastEventsComponent initialYear={year as EventYear} />;
}
