// The UsersBody activity allows the admin to manage all registered users on the platform.

// Admin can:

// View a list of users and their roles (Traveler, Provider, Admin)

// See detailed user info in an expanded view

// Suspend a user – Toggles their active/suspended status.

// Delete a user – Removes them from the list (in this case, just from the local state for now).

import React, { useState } from 'react';
import styles from './ActivitiesBody.module.css';
import UsersCard from './UsersCard';

export default function UsersBody() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "User",
      phone: "+1234567890",
      suspended: false,
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      role: "Service Provider",
      phone: "+1987654321",
      suspended: true,
    },
    {
      id: 3,
      name: "Leonard Marida",
      email: "leonard@admin.com",
      role: "Admin",
      phone: "+1122334455",
      suspended: false,
    },
  ]);

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const handleToggleSuspend = (id) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, suspended: !user.suspended } : user
      )
    );
  };

  return (
    <div className={styles.gridContainer}>
      <h2 className={styles.gridTitle}>Users</h2>
      <div className={styles.cardGrid}>
        {users.map((user) => (
          <UsersCard
            key={user.id}
            user={user}
            onDelete={handleDelete}
            onToggleSuspend={handleToggleSuspend}
          />
        ))}
      </div>
    </div>
  );
}
