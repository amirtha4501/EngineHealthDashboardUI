import React from "react";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Engine Health Monitoring</h2>
      <div className="navbar-right">
        <span className="user-name">Hello, User</span>
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
}
