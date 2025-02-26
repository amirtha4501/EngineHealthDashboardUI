import React from "react";
import "../index.css";

export default function Sidebar({ onSelectPage }) {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => onSelectPage("dashboard")}>📊 Dashboard</li>
        <li onClick={() => onSelectPage("engine-health")}>📊 Engine Health</li>
        <li onClick={() => onSelectPage("rul-prediction")}>📊 RUL Prediction</li>
        <li onClick={() => onSelectPage("faults")}>⚠️ Fault Prediction</li>
        <li onClick={() => onSelectPage("analytics")}>📈 Engine Analytics</li>
        <li onClick={() => onSelectPage("rul")}>⏳ RUL Estimation</li>
        <li onClick={() => onSelectPage("logs")}>🛠 Maintenance Logs</li>
        <li onClick={() => onSelectPage("settings")}>⚙️ Settings</li>
      </ul>
    </aside>
  );
}
