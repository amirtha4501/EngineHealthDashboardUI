import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from "recharts";
import "../index.css"; 

// Sample Data
const faultData = {
  totalFaults: 90,
  normal: 40,
  warning: 30,
  critical: 20,
  faultTrend: [
    { time: "Jan", normal: 15, warning: 8, critical: 5 },
    { time: "Feb", normal: 12, warning: 10, critical: 6 },
    { time: "Mar", normal: 13, warning: 7, critical: 8 },
    { time: "Apr", normal: 14, warning: 5, critical: 3 },
    { time: "May", normal: 10, warning: 6, critical: 4 },
  ],
  engineFaults: [
    { engine: "E1", faults: 10 },
    { engine: "E2", faults: 20 },
    { engine: "E3", faults: 15 },
    { engine: "E4", faults: 25 },
    { engine: "E5", faults: 20 },
  ],
  logs: [
    { id: 1, engine: "E1", faultType: "Critical", timestamp: "2025-02-20 10:30:00" },
    { id: 2, engine: "E2", faultType: "Warning", timestamp: "2025-02-20 11:15:00" },
    { id: 3, engine: "E3", faultType: "Normal", timestamp: "2025-02-20 12:00:00" },
    { id: 4, engine: "E4", faultType: "Critical", timestamp: "2025-02-21 09:45:00" },
  ],
};

const COLORS = ["#4CAF50", "#FFC107", "#F44336"]; // Normal, Warning, Critical Colors

export default function FaultClassification() {
  return (
    <div style={{ padding: "20px" }}>
      {/* KPI Cards */}
      <div style={{ display: "flex", gap: "20px" }}>
        <div className="card">
          <h3>Total Faults</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#dc3545" }}>{faultData.totalFaults}</p>
        </div>
        <div className="card">
          <h3>Critical Faults</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#F44336" }}>
            {((faultData.critical / faultData.totalFaults) * 100).toFixed(1)}%
          </p>
        </div>
        <div className="card">
          <h3>Warning Alerts</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#FFC107" }}>{faultData.warning}</p>
        </div>
      </div>

      {/* Charts Container */}
      <div className="charts-container">
        {/* Fault Distribution Pie Chart */}
        <div className="card my-2" style={{ flex: 1 }}>
          <h3>Fault Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: "Normal", value: faultData.normal },
                  { name: "Warning", value: faultData.warning },
                  { name: "Critical", value: faultData.critical },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {COLORS.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Fault Trends Over Time */}
        <div className="card my-2" style={{ flex: 1 }}>
          <h3>Fault Trend Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={faultData.faultTrend}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="normal" stroke="#4CAF50" strokeWidth={2} />
              <Line type="monotone" dataKey="warning" stroke="#FFC107" strokeWidth={2} />
              <Line type="monotone" dataKey="critical" stroke="#F44336" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Engine-Specific Faults */}
      <div className="card my-2">
        <h3>Faults per Engine</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={faultData.engineFaults}>
            <XAxis dataKey="engine" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="faults" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Fault Logs */}
      <div className="card my-2">
        <h3>Fault Logs</h3>
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Engine</th>
              <th>Fault Type</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {faultData.logs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.engine}</td>
                <td style={{ color: log.faultType === "Critical" ? "red" : log.faultType === "Warning" ? "orange" : "green" }}>
                  {log.faultType}
                </td>
                <td>{log.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
