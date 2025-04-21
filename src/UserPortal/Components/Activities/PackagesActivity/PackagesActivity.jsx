import React, { useState, useEffect } from 'react';
import PackageSidebar from '../../Sidebar/PackageSidebar'
import PackagesBody from '../../ActivityBodies/PackagesBody'
import Billing from '../BillingActivity/BillingActivity'

export default function PackagesActivity() {
    const [packageData, setPackageData] = useState([]); // State to store package data

    const fetchPackageData = (filters) => {
        /*const queryParams = new URLSearchParams(filters).toString();

        fetch(`http://localhost:8080/api/getCruises?${queryParams}`)
          .then((response) => response.json())
          .then((data) => {
            setPackageData(data); // Update state with the fetched data
          })
          .catch((error) => console.error('Error fetching package data:', error));
        */
        let data = {"packages": [
             {
              "packageName": "Tropical Island Escape",
              "destination": "Maldives",
              "startDate": "2025-06-15",
              "endDate": "2025-06-22",
              "packageType": "All-Inclusive",
              "duration": "1 Week",
              "price": 2999,
              "travelers": 2,
              "features": ["Free Cancellation", "Airport Transfers"],
              "imageUrl": "https://example.com/images/maldives-package.jpg"
            },
            {
              "packageName": "European Adventure Tour",
              "destination": "Italy, France, Switzerland",
              "startDate": "2025-07-01",
              "endDate": "2025-07-15",
              "packageType": "Adventure Tours",
              "duration": "10+ Days",
              "price": 4590,
              "travelers": 4,
              "features": ["Guided Tours", "Free Cancellation"],
              "imageUrl": "https://example.com/images/europe-package.jpg"
            },
            {
              "packageName": "City Lights Weekend",
              "destination": "New York City",
              "startDate": "2025-05-10",
              "endDate": "2025-05-13",
              "packageType": "Flight+Hotel",
              "duration": "Weekend Getaway (3-4 days)",
              "price": 890,
              "travelers": 1,
              "features": ["Free Cancellation"],
              "imageUrl": "https://example.com/images/nyc-package.jpg"
            }
          ]
        }
        setPackageData(data.packages); // Update state with the fetched data
    }

    useEffect(() => {
        // For now, fetch data without filters or with default ones
        fetchPackageData({});
      }, []); // Empty dependency array to run once when the component mounts
    
    return (
        <div>
            <PackageSidebar onFilterChange={fetchPackageData}></PackageSidebar>
            <PackagesBody packageData={packageData}></PackagesBody>
            <Billing id="billingModal" />
        </div>
    )
}