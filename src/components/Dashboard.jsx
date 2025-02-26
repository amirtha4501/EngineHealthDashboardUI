import { 
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell, BarChart, Bar 
} from "recharts";
import "../index.css"; // Import global styles

const mockData = {
  avgRUL: 120,
  faults: { Normal: 50, Warning: 30, Critical: 10 },
  maintenanceSchedule: [
    { engine: "E1", count: 3 },
    { engine: "E2", count: 5 },
    { engine: "E3", count: 2 },
  ],
  rulTrend: [
    { day: "Mon", avgRUL: 130 },
    { day: "Tue", avgRUL: 125 },
    { day: "Wed", avgRUL: 118 },
    { day: "Thu", avgRUL: 110 },
    { day: "Fri", avgRUL: 100 },
  ],
};

const COLORS = ["#4CAF50", "#FFC107", "#F44336"];

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h3>Welcome to the Engine Health Dashboard</h3>
      <p>Monitor aircraft engine performance, detect faults, and estimate Remaining Useful Life (RUL).</p>

      {/* KPI Cards */}
      <div className="card-container">
        <div className="card">
          <h3>Avg. Remaining Useful Life</h3>
          <p className="highlight">{mockData.avgRUL} cycles</p>
        </div>
        <div className="card">
          <h3>Total Faults</h3>
          <p className="highlight red">
            {mockData.faults.Normal + mockData.faults.Warning + mockData.faults.Critical}
          </p>
        </div>
        <div className="card">
          <h3>Maintenance Alerts</h3>
          <p className="highlight orange">{mockData.maintenanceSchedule.length}</p>
        </div>
        <div className="card">
          <h3>Engines Monitored</h3>
          <p className="highlight green">{mockData.maintenanceSchedule.length}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        {/* RUL Trend Chart */}
        <div className="chart-card">
          <h3>Average RUL Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockData.rulTrend}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="avgRUL" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Fault Classification Pie Chart */}
        <div className="chart-card">
          <h3>Fault Classification</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: "Normal", value: mockData.faults.Normal },
                  { name: "Warning", value: mockData.faults.Warning },
                  { name: "Critical", value: mockData.faults.Critical },
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
      </div>

      {/* Maintenance Bar Chart */}
      <div className="chart-card">
        <h3>Maintenance Count per Engine</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockData.maintenanceSchedule}>
            <XAxis dataKey="engine" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
