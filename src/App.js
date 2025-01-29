import { useState } from "react";

export default function TimeLoggingApp() {
  const [userType, setUserType] = useState("employee"); // "employee" or "manager"
  const [entries, setEntries] = useState([
    { name: "Alice", date: "2024-01-29", hours: "8", project: "Project A" },
    { name: "Bob", date: "2024-01-29", hours: "7", project: "Project B" },
  ]);
  const [projects, setProjects] = useState([
    "Project A",
    "Project B",
    "Project C",
    "Project D",
    "Other",
  ]);
  const [newEntry, setNewEntry] = useState({
    name: "",
    date: "",
    hours: "",
    project: "",
  });

  const handleAddEntry = () => {
    setEntries([...entries, newEntry]);
    setNewEntry({ name: "", date: "", hours: "", project: "" });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        Workforce Time Logging
      </h1>
      <label>
        User Type:
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
        </select>
      </label>

      {userType === "employee" && (
        <div
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <h2>Log Work Hours</h2>
          <label>
            Name:{" "}
            <input
              type="text"
              value={newEntry.name}
              onChange={(e) =>
                setNewEntry({ ...newEntry, name: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Date:{" "}
            <input
              type="date"
              value={newEntry.date}
              onChange={(e) =>
                setNewEntry({ ...newEntry, date: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Hours Worked:{" "}
            <input
              type="number"
              placeholder="Hours worked"
              value={newEntry.hours}
              onChange={(e) =>
                setNewEntry({ ...newEntry, hours: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Project:
            <select
              value={newEntry.project}
              onChange={(e) =>
                setNewEntry({ ...newEntry, project: e.target.value })
              }
            >
              {projects.map((project, index) => (
                <option key={index} value={project}>
                  {project}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button
            onClick={handleAddEntry}
            style={{
              marginTop: "10px",
              padding: "5px 10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit Entry
          </button>
        </div>
      )}

      <h2>Submitted Entries</h2>
      <table
        border="1"
        cellPadding="5"
        style={{ width: "100%", marginTop: "10px" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Hours</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.date}</td>
              <td>{entry.hours}</td>
              <td>{entry.project}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
