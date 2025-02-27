// import { useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import "../index.css";

// const maintenanceData = [
//   { engine: "E1", status: "Critical", lastMaintenance: "2024-02-10", nextMaintenance: "2024-03-05", recommendation: "Immediate attention needed" },
//   { engine: "E2", status: "Warning", lastMaintenance: "2024-01-20", nextMaintenance: "2024-03-15", recommendation: "Monitor closely" },
//   { engine: "E3", status: "Normal", lastMaintenance: "2024-02-01", nextMaintenance: "2024-04-01", recommendation: "Routine checkup" },
//   { engine: "E4", status: "Critical", lastMaintenance: "2024-02-05", nextMaintenance: "2024-02-28", recommendation: "Immediate attention needed" },
//   { engine: "E5", status: "Warning", lastMaintenance: "2024-02-15", nextMaintenance: "2024-03-20", recommendation: "Schedule maintenance soon" },
// ];

// export default function Maintenance() {
//   const [filter, setFilter] = useState("All");

//   const filteredData = filter === "All" ? maintenanceData : maintenanceData.filter((item) => item.status === filter);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Maintenance Recommendations</h2>

//       {/* Filters */}
//       <div className="mb-2 rounded">
//         <label>Filter by Status: </label>
//         <select onChange={(e) => setFilter(e.target.value)} className="rounded px-2 py-1 mx-2">
//           <option value="All">All</option>
//           <option value="Critical">Critical</option>
//           <option value="Warning">Warning</option>
//           <option value="Normal">Normal</option>
//         </select>
//       </div>

//       {/* Table */}
//       <div className="card">
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ background: "#f4f4f4" }}>
//               <th style={tableHeaderStyle}>Engine</th>
//               <th style={tableHeaderStyle}>Status</th>
//               <th style={tableHeaderStyle}>Last Maintenance</th>
//               <th style={tableHeaderStyle}>Next Maintenance</th>
//               <th style={tableHeaderStyle}>Recommendation</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((item, index) => (
//               <tr key={index} style={{ background: index % 2 === 0 ? "#fff" : "#f9f9f9" }}>
//                 <td style={tableCellStyle}>{item.engine}</td>
//                 <td style={{ ...tableCellStyle, color: statusColor(item.status), fontWeight: "bold" }}>{item.status}</td>
//                 <td style={tableCellStyle}>{item.lastMaintenance}</td>
//                 <td style={tableCellStyle}>{item.nextMaintenance}</td>
//                 <td style={tableCellStyle}>{item.recommendation}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Bar Chart for Maintenance Schedule */}
//       <div className="card" style={{ marginTop: "20px" }}>
//         <h3>Upcoming Maintenance Schedule</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={maintenanceData}>
//             <XAxis dataKey="engine" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="nextMaintenance" fill="#f97316" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// // Styles
// const tableHeaderStyle = { padding: "10px", textAlign: "left", borderBottom: "2px solid #ddd" };
// const tableCellStyle = { padding: "10px", borderBottom: "1px solid #ddd" };

// const statusColor = (status) => {
//   if (status === "Critical") return "#dc3545";
//   if (status === "Warning") return "#ffc107";
//   return "#28a745";
// };
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "../index.css";

// Function to calculate days remaining until next maintenance
const calculateDaysUntilMaintenance = (nextMaintenanceDate) => {
  const today = new Date();
  const maintenanceDate = new Date(nextMaintenanceDate);
  const timeDiff = maintenanceDate - today;
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
};

// Maintenance Data with computed daysUntilMaintenance
const maintenanceData = [
  { engine: "E1", status: "Critical", lastMaintenance: "2024-02-10", nextMaintenance: "2024-03-05", recommendation: "Immediate attention needed" },
  { engine: "E2", status: "Warning", lastMaintenance: "2024-01-20", nextMaintenance: "2024-03-15", recommendation: "Monitor closely" },
  { engine: "E3", status: "Normal", lastMaintenance: "2024-02-01", nextMaintenance: "2024-04-01", recommendation: "Routine checkup" },
  { engine: "E4", status: "Critical", lastMaintenance: "2024-02-05", nextMaintenance: "2024-02-28", recommendation: "Immediate attention needed" },
  { engine: "E5", status: "Warning", lastMaintenance: "2024-02-15", nextMaintenance: "2024-03-20", recommendation: "Schedule maintenance soon" },
].map((item) => ({
  ...item,
  daysUntilMaintenance: calculateDaysUntilMaintenance(item.nextMaintenance),
}));

export default function Maintenance() {
  const [filter, setFilter] = useState("All");

  const filteredData = filter === "All" ? maintenanceData : maintenanceData.filter((item) => item.status === filter);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Maintenance Recommendations</h2>

      {/* Filters */}
      <div className="mb-2 rounded">
        <label>Filter by Status: </label>
        <select onChange={(e) => setFilter(e.target.value)} className="rounded px-2 py-1 mx-2">
          <option value="All">All</option>
          <option value="Critical">Critical</option>
          <option value="Warning">Warning</option>
          <option value="Normal">Normal</option>
        </select>
      </div>

      {/* Table */}
      <div className="card">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f4f4f4" }}>
              <th style={tableHeaderStyle}>Engine</th>
              <th style={tableHeaderStyle}>Status</th>
              <th style={tableHeaderStyle}>Last Maintenance</th>
              <th style={tableHeaderStyle}>Next Maintenance</th>
              <th style={tableHeaderStyle}>Days Until Maintenance</th>
              <th style={tableHeaderStyle}>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} style={{ background: index % 2 === 0 ? "#fff" : "#f9f9f9" }}>
                <td style={tableCellStyle}>{item.engine}</td>
                <td style={{ ...tableCellStyle, color: statusColor(item.status), fontWeight: "bold" }}>{item.status}</td>
                <td style={tableCellStyle}>{item.lastMaintenance}</td>
                <td style={tableCellStyle}>{item.nextMaintenance}</td>
                <td style={{ ...tableCellStyle, fontWeight: "bold" }}>{item.daysUntilMaintenance} days</td>
                <td style={tableCellStyle}>{item.recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart for Maintenance Schedule */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Upcoming Maintenance Schedule (Days Until Maintenance)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={maintenanceData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="engine" label={{ value: "Engine", position: "insideBottom", dy: 10 }} />
            <YAxis label={{ value: "Days Remaining", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Bar dataKey="daysUntilMaintenance" fill="#f97316" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Styles
const tableHeaderStyle = { padding: "10px", textAlign: "left", borderBottom: "2px solid #ddd" };
const tableCellStyle = { padding: "10px", borderBottom: "1px solid #ddd" };

const statusColor = (status) => {
  if (status === "Critical") return "#dc3545";
  if (status === "Warning") return "#ffc107";
  return "#28a745";
};
