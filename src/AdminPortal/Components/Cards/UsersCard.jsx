import React, { useState } from 'react';
import styles from './Card.module.css';
import ExpandedUsers from './ExpandedUsers';

export default function UsersCard({ user, onDelete, onToggleSuspend }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Status: {user.suspended ? "Suspended" : "Active"}</p>
      <button onClick={() => setIsExpanded(true)}>View More</button>
      {isExpanded && (
        <ExpandedUsers
          user={user}
          onClose={() => setIsExpanded(false)}
          onDelete={onDelete}
          onToggleSuspend={onToggleSuspend}
        />
      )}
    </div>
  );
}
