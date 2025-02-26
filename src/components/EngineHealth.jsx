import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import "../index.css"; // Use global styles

const mockSensorData = [
  { time: "10:00 AM", temperature: 85, pressure: 200, vibration: 0.9 },
  { time: "10:10 AM", temperature: 90, pressure: 205, vibration: 1.1 },
  { time: "10:20 AM", temperature: 95, pressure: 210, vibration: 1.4 },
  { time: "10:30 AM", temperature: 110, pressure: 215, vibration: 1.8 },
  { time: "10:40 AM", temperature: 120, pressure: 230, vibration: 2.5 },
];

const faultData = [
  { fault: "Overheating", count: 4 },
  { fault: "High Pressure", count: 3 },
  { fault: "Vibration Spike", count: 2 },
];

const COLORS = ["#FF5733", "#FFC300", "#DAF7A6"];

export default function EngineHealth() {
  const [selectedEngine, setSelectedEngine] = useState("Engine 1");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Engine Health Monitoring</h2>

      {/* Engine Selector */}
      <label style={{ fontSize: "16px", marginRight: "10px" }}>Select Engine:</label>
      <select onChange={(e) => setSelectedEngine(e.target.value)} style={{ padding: "5px" }}>
        <option value="Engine 1">Engine 1</option>
        <option value="Engine 2">Engine 2</option>
        <option value="Engine 3">Engine 3</option>
      </select>

      {/* Sensor Data Trends */}
      <div className="charts-container">
        <div className="card" style={{ flex: 1 }}>
          <h3>Sensor Data Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockSensorData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#ff5733" name="Temperature (°C)" />
              <Line type="monotone" dataKey="pressure" stroke="#ffc107" name="Pressure (kPa)" />
              <Line type="monotone" dataKey="vibration" stroke="#2196F3" name="Vibration (g)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Fault Distribution Chart */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Fault Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={faultData}>
            <XAxis dataKey="fault" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count">
              {COLORS.map((color, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
