import React, { useState, useEffect } from 'react';
import PackageSidebar from '../../Sidebar/PackageSidebar';
import PackagesBody from '../../ActivityBodies/PackagesBody';
import Billing from '../BillingActivity/BillingActivity';

const hardcodedData = {
  packages: [
    {
      id: 1,
      isBooked: false,
      packageName: "Tropical Island Escape",
      destination: "Maldives",
      startDate: "2025-06-15",
      endDate: "2025-06-22",
      packageType: "All-Inclusive",
      duration: "1 Week",
      price: 2999,
      travelers: 2,
      features: ["Free Cancellation", "Airport Transfers"],
      imageUrl: "https://example.com/images/maldives-package.jpg"
    },
    {
      id: 2,
      isBooked: false,
      packageName: "European Adventure Tour",
      destination: "Italy, France, Switzerland",
      startDate: "2025-07-01",
      endDate: "2025-07-15",
      packageType: "Adventure Tours",
      duration: "10+ Days",
      price: 4590,
      travelers: 4,
      features: ["Guided Tours", "Free Cancellation"],
      imageUrl: "https://example.com/images/europe-package.jpg"
    },
    {
      id: 3,
      isBooked: false,
      packageName: "City Lights Weekend",
      destination: "New York City",
      startDate: "2025-05-10",
      endDate: "2025-05-13",
      packageType: "Flight+Hotel",
      duration: "Weekend Getaway (3-4 days)",
      price: 890,
      travelers: 1,
      features: ["Free Cancellation"],
      imageUrl: "https://example.com/images/nyc-package.jpg"
    }
  ]
};

export default function PackagesActivity() {
  const [packageListings, setPackageListings] = useState([]);

  const fetchPackageData = () => {
    const stored = localStorage.getItem('packageListings');
    if (stored) {
      setPackageListings(JSON.parse(stored));
    } else {
      localStorage.setItem('packageListings', JSON.stringify(hardcodedData.packages));
      setPackageListings(hardcodedData.packages);
    }
  };

  useEffect(() => {
    fetchPackageData();
    
    // Add event listener for storage changes
    const handleStorageChange = (e) => {
      if (e.key === 'packageListings' || e.type === 'storage') {
        fetchPackageData();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <>
      <PackageSidebar setPackageFilters={fetchPackageData} />
      <PackagesBody packageData={packageListings} />
      <Billing id="billingModal" />
    </>
  );
}