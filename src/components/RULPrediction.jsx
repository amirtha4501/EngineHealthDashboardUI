// import { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import Papa from "papaparse";
// import "../index.css"; // Global CSS

// export default function RULPrediction() {
//   const [fileData, setFileData] = useState([]);
//   const [rulPredictions, setRulPredictions] = useState([]);

//   // Handle file upload
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     Papa.parse(file, {
//       header: true,
//       dynamicTyping: true,
//       complete: (result) => {
//         setFileData(result.data.slice(0, 10)); // Display first 10 rows
//       },
//     });
//   };

//   // Mock Prediction Function (Replace with API Call)
//   const predictRUL = () => {
//     if (fileData.length === 0) return;
    
//     // Simulating RUL predictions
//     const predictions = fileData.map((row, index) => ({
//       cycle: index + 1,
//       rul: Math.max(150 - index * 5, 0), // Decreasing trend
//     }));

//     setRulPredictions(predictions);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Remaining Useful Life (RUL) Prediction</h2>

//       {/* File Upload */}
//       <div className="card">
//         <input type="file" accept=".csv" onChange={handleFileUpload} />
//       </div>

//       {/* Display Uploaded Data */}
//       {fileData.length > 0 && (
//         <div className="card">
//           <h3>Sample Data (First 10 Rows)</h3>
//           <table border="1" width="100%">
//             <thead>
//               <tr>
//                 {Object.keys(fileData[0]).map((key) => (
//                   <th key={key}>{key}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {fileData.map((row, index) => (
//                 <tr key={index}>
//                   {Object.values(row).map((value, i) => (
//                     <td key={i}>{value}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Prediction Button */}
//       <button
//         onClick={predictRUL}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#28a745",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//           marginTop: "10px",
//         }}
//       >
//         Predict RUL
//       </button>

//       {/* RUL Prediction Chart */}
//       {rulPredictions.length > 0 && (
//         <div className="card">
//           <h3>Predicted RUL Over Time</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={rulPredictions}>
//               <XAxis dataKey="cycle" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="rul" stroke="#ff5733" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Papa from "papaparse";
import "../index.css"; // Global CSS

export default function RULPrediction() {
  const [fileData, setFileData] = useState([]);
  const [rulPredictions, setRulPredictions] = useState([]);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setFileData(result.data.slice(0, 10)); // Display first 10 rows
      },
    });
  };

  // Mock Prediction Function (Replace with API Call)
  const predictRUL = () => {
    if (fileData.length === 0) return;
    
    // Simulating RUL predictions
    const predictions = fileData.map((row, index) => ({
      cycle: index + 1,
      rul: Math.max(150 - index * 5, 0), // Decreasing trend
    }));

    setRulPredictions(predictions);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Remaining Useful Life (RUL) Prediction</h2>

      {/* File Upload */}
      <div className="card my-2">
        <input type="file" accept=".csv" onChange={handleFileUpload} />
      </div>

      {/* Display Uploaded Data */}
      {fileData.length > 0 && (
        <div className="card table-container">
          <h3>Sample Data (First 10 Rows)</h3>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  {Object.keys(fileData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fileData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Prediction Button */}
      <button
        onClick={predictRUL}
        className="mt-2 px-3 py-2 bg-green-500 text-white rounded"
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none"
        }}
      >
        Predict RUL
      </button>

      {/* RUL Prediction Chart */}
      {rulPredictions.length > 0 && (
        <div className="card my-2">
          <h3>Predicted RUL Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={rulPredictions}>
              <XAxis dataKey="cycle" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="rul" stroke="#ff5733" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
