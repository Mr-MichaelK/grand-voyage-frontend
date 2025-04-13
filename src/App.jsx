import React, {useState} from 'react'
import LoginPage from './LoginPage/LoginPage'
import SignUpPage from './SignUpPage/SignUpPage'
import UserPortal from './UserPortal/UserPortal'
import './App.css'
import Navbar from './UserPortal/Components/Navbar'
import HotelSidebar from './UserPortal/Components/Sidebar/HotelSidebar'
import FlightSidebar from './UserPortal/Components/Sidebar/FlightSidebar'
import CruiseSidebar from './UserPortal/Components/Sidebar/CruiseSidebar'
import PackageSidebar from './UserPortal/Components/Sidebar/PackageSidebar'
import HotelCard from './UserPortal/Components/Cards/HotelCard'
import FlightCard from './UserPortal/Components/Cards/FlightCard'
import CruiseCard from './UserPortal/Components/Cards/CruiseCard'
import PackageCard from './UserPortal/Components/Cards/PackageCard'
import AboutUsActivity from './UserPortal/Components/Activities/AboutUsActivity/AboutUsActivity'
import ServiceProviderPortal from './ServiceProviderPortal/ServiceProviderPortal'
/*
function App() {
  const [currentPage, setCurrentPage] = useState('login');

  let page;
  if (currentPage === 'login') {
    page = <LoginPage switchToSignUp={() => setCurrentPage('signup')} />;
  } 
  else if (currentPage === 'signup') {
    page = <SignUpPage switchToLogin={() => setCurrentPage('login')}
                       goToUserPortal={() => setCurrentPage('userPortal')} />;
  }
  else if (currentPage === 'userPortal') {
    page = <UserPortal></UserPortal>
  }  

  return <>{page}</>;
}

export default App
*/
function App() {
  return (
    <div className="App">
      <ServiceProviderPortal/>
    </div>
  );
}

export default App
