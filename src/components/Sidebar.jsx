import React from "react";
import "../index.css";

export default function Sidebar({ onSelectPage, currentPage }) {
  return (
    <aside className="sidebar">
      <ul>
        <li className={`side-btn ${currentPage === "dashboard" ? "active" : ""}`} onClick={() => onSelectPage("dashboard")}>📊 Dashboard</li>
        <li className={`side-btn ${currentPage === "engine-health" ? "active" : ""}`} onClick={() => onSelectPage("engine-health")}>📈 Engine Health</li>
        <li className={`side-btn ${currentPage === "rul-prediction" ? "active" : ""}`} onClick={() => onSelectPage("rul-prediction")}>⏳ RUL Prediction</li>
        <li className={`side-btn ${currentPage === "faults" ? "active" : ""}`} onClick={() => onSelectPage("faults")}>⚠️ Fault Prediction</li>
        <li className="side-btn" onClick={() => onSelectPage("analytics")}>📈 Engine Analytics</li>
        <li className="side-btn" onClick={() => onSelectPage("rul")}>⏳ RUL Estimation</li>
        <li className="side-btn" onClick={() => onSelectPage("logs")}>🛠 Maintenance Logs</li>
        <li className="side-btn" onClick={() => onSelectPage("settings")}>⚙️ Settings</li>
      </ul>
    </aside>
  );
}
