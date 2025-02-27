import React from "react";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="mx-4">Engine Health Monitoring</h2>
      <div className="navbar-right">
        <span className="user-name mx-2">Hello, User</span>
        <button className="logout-btn px-2 py-1 mx-2 rounded">Logout</button>
      </div>
    </nav>
  );
}
