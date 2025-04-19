// The ContractsBody component enables the admin to manage service contracts made between the agency and providers or clients. Admins can:

// View a table of contracts

// Cancel contracts

// Export contract data (e.g., for reporting)





import React, { useState } from 'react';
import styles from './ActivitiesBody.module.css';

export default function ContractsBody() {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      client: "John Doe",
      service: "7-Day Cruise",
      startDate: "2025-06-10",
      endDate: "2025-06-17",
      status: "Active",
    },
    {
      id: 2,
      client: "Jane Smith",
      service: "Europe Flight Package",
      startDate: "2025-07-01",
      endDate: "2025-07-15",
      status: "Active",
    },
  ]);

  const cancelContract = (id) => {
    const updated = contracts.map(c =>
      c.id === id ? { ...c, status: "Cancelled" } : c
    );
    setContracts(updated);
  };

  const exportData = () => {
    const csv = contracts.map(c => `${c.id},${c.client},${c.service},${c.startDate},${c.endDate},${c.status}`).join('\n');
    const blob = new Blob([`ID,Client,Service,Start,End,Status\n${csv}`], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "contracts.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.gridContainer}>
      <h2 className={styles.gridTitle}>Contracts Management</h2>
      <button onClick={exportData} style={{ marginBottom: "1rem" }}>Export Data</button>
      <table className={styles.contractsTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Service</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.client}</td>
              <td>{c.service}</td>
              <td>{c.startDate}</td>
              <td>{c.endDate}</td>
              <td>{c.status}</td>
              <td>
                {c.status !== "Cancelled" && (
                  <button onClick={() => cancelContract(c.id)}>Cancel</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
