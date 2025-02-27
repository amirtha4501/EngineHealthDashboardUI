import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import EngineHealth from "./components/EngineHealth";
import Navbar from "./components/Navbar";
import RULPrediction from "./components/RULPrediction";
import FaultClassification from "./components/FaultClassification";
import FeatureImportance from "./components/FeatureImportance";
import Maintenance from "./components/Maintenance";

function App() {
  const [page, setPage] = useState("dashboard");

  // Function to render selected page
  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard />;
      case "engine-health":
        return <EngineHealth />;
      case "rul-prediction":
        return <RULPrediction />;
      case "faults":
        return <FaultClassification />;
      case "feature-importance":
        return <FeatureImportance />;
      case "maintenance":
        return <Maintenance />;
      default:
        return <h2>Select a Page</h2>;
    }
  };

  return (
    <div className="app-container">
      {/* Full-width navbar at the top */}
      <Navbar />

      <div className="main-layout">
        {/* Fixed Sidebar on the left */}
        <Sidebar onSelectPage={setPage} currentPage={page} />

        {/* Main Content on the right */}
        <main className="content-area">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;
