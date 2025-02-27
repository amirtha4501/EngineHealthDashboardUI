import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from "recharts";
import "../index.css"; // Import global styles
import "./FeatureImportance.css";

const featureImportanceData = [
  { feature: "Fan Speed", importance: 0.85 },
  { feature: "Oil Pressure", importance: 0.72 },
  { feature: "Exhaust Temperature", importance: 0.68 },
  { feature: "Vibration Level", importance: 0.65 },
  { feature: "Fuel Flow Rate", importance: 0.60 },
];

const shapValues = [
  { engine: "E1", feature: "Fan Speed", value: 0.3 },
  { engine: "E1", feature: "Oil Pressure", value: -0.2 },
  { engine: "E2", feature: "Exhaust Temperature", value: 0.4 },
  { engine: "E3", feature: "Vibration Level", value: -0.5 },
];

export default function FeatureImportance() {
  return (
    <div className="container">
      <h2>Feature Importance Analysis</h2>

      {/* Feature Importance Bar Chart */}
      <div className="card">
        <h3>Top 5 Features Impacting RUL</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={featureImportanceData} layout="vertical">
            <XAxis type="number" domain={[0, 1]} />
            <YAxis dataKey="feature" type="category" width={100} />
            <Tooltip />
            <Bar dataKey="importance" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* SHAP Value Scatter Plot */}
      <div className="card">
        <h3>SHAP Value Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <XAxis type="category" dataKey="feature" />
            <YAxis type="number" dataKey="value" />
            <Tooltip />
            <Scatter name="SHAP Values" data={shapValues} fill="#dc3545" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Feature Values Table */}
      <div className="card">
        <h3>Feature Value Table</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Engine ID</th>
                <th>Feature</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {shapValues.map((row, index) => (
                <tr key={index}>
                  <td>{row.engine}</td>
                  <td>{row.feature}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
