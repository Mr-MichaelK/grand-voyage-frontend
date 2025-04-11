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
<UserPortal>
  <PackageSidebar />
</UserPortal>

export default App
