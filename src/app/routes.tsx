import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "./screens/HomePage";
import { WorkDetail } from "./screens/WorkDetail";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:lang/works/:projectId" element={<WorkDetail />} />
      <Route path="/:lang" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}

