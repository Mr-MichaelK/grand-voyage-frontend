import React, {useState} from 'react'
import LoginPage from './LoginPage/LoginPage'
import SignUpPage from './SignUpPage/SignUpPage'
import UserPortal from './UserPortal/UserPortal'
import './App.css'
import Navbar from './UserPortal/Components/Navbar'
import HotelSidebar from './UserPortal/Components/Sidebar/HotelSidebar'

function App() {
  const [currentPage, setCurrentPage] = useState('userPortal');

  let page;
  if (currentPage === 'login') {
    page = <LoginPage switchToSignUp={() => setCurrentPage('signup')} />;
  } 
  else if (currentPage === 'signup') {
    page = <SignUpPage switchToLogin={() => setCurrentPage('login')} />;
  }
  else if (currentPage === 'userPortal') {
    page = <UserPortal></UserPortal>
  }

  return <>{page}</>;
}
<UserPortal>
  <HotelSidebar />
</UserPortal>

export default App
