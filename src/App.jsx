import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <div className="content-area">
          <Sidebar onSelectPage={setSelectedPage} />
          <div className="content-area">
            {selectedPage === "dashboard" && <Dashboard />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
