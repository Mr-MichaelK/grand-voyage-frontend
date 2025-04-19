// The PackagesBody component allows the admin to manage bundled service listings (packages). Admins can:

// View all packages

// Add a new package via a popup form

// Edit or delete packages




import React, { useState } from 'react';
import styles from './ActivitiesBody.module.css';
import CreateCard from '../Cards/CreateCard';
import PackagesCard from '../Cards/PackagesCard';
import ExpandedPackages from '../ExpandedCards/ExpandedPackages';

export default function PackagesBody() {
  const [packages, setPackages] = useState([
    {
      id: 1,
      title: "Summer Adventure",
      services: ["Flight to Hawaii", "Hotel Stay", "Island Cruise"],
      discount: "15%",
      validity: "June 1 - August 31, 2025",
      description: "An all-in-one summer escape deal!",
    }
  ]);

  const handleDelete = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  const handleEdit = (pkg) => {
    console.log('Editing package:', pkg);
  };

  return (
    <>
      <div className={styles.gridContainer}>
        <h2 className={styles.gridTitle}>Manage Discounted Packages</h2>
        <div className={styles.cardGrid}>
          <div onClick={() => document.getElementById("createPackage").showModal()}>
            <CreateCard type="package" />
          </div>
          {packages.map(pkg => (
            <PackagesCard
              key={pkg.id}
              pkg={pkg}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
      <ExpandedPackages id="createPackage" />
    </>
  );
}
