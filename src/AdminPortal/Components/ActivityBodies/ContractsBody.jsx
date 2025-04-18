import React, { useState } from 'react';
import styles from './ActivitiesBody.module.css';

export default function ContractsBody() {
    const [contracts, setContracts] = useState([
        {
            id: 1,
            user: "John Doe",
            service: "Cruise - Mediterranean Dream",
            provider: "Oceanic Travels",
            date: "2025-04-10",
            status: "Active"
        },
        {
            id: 2,
            user: "Jane Smith",
            service: "Flight - New York to Paris",
            provider: "SkyHigh Airlines",
            date: "2025-03-28",
            status: "Completed"
        },
        {
            id: 3,
            user: "David Johnson",
            service: "Hotel - Hilton Tokyo",
            provider: "Hilton Group",
            date: "2025-04-01",
            status: "Cancelled"
        }
    ]);

    return (
        <div className={styles.gridContainer}>
            <h2 className={styles.gridTitle}>Contracts Overview</h2>
            <table className={styles.contractsTable}>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Service</th>
                        <th>Provider</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {contracts.map(contract => (
                        <tr key={contract.id}>
                            <td>{contract.user}</td>
                            <td>{contract.service}</td>
                            <td>{contract.provider}</td>
                            <td>{contract.date}</td>
                            <td>{contract.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
