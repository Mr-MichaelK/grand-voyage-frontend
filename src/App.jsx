import React, {useState} from 'react'
import LoginPage from './LoginPage/LoginPage'
import SignUpPage from './SignUpPage/SignUpPage'
import UserPortal from './UserPortal/UserPortal'
import './App.css'
import ServiceProviderPortal from './ServiceProviderPortal/ServiceProviderPortal'
import AdminPortal from './AdminPortal/AdminPortal'

function App() {
  /*
  
  const [currentPage, setCurrentPage] = useState('login');

  let page;
  if (currentPage === 'login') {
    page = <LoginPage  goToUserPortal={() => setCurrentPage('userPortal')}
                       goToServiceProviderPortal={() => setCurrentPage('serviceProviderPortal')}
                       switchToSignUp={() => setCurrentPage('signup')} />;
  } 
  else if (currentPage === 'signup') {
    page = <SignUpPage switchToLogin={() => setCurrentPage('login')}
                       goToUserPortal={() => setCurrentPage('userPortal')}
                       goToServiceProviderPortal={() => setCurrentPage('serviceProviderPortal')} />;
  }
  else if (currentPage === 'userPortal') {
    page = <UserPortal></UserPortal>
  }  
  else if (currentPage === 'serviceProviderPortal') {
    page = <ServiceProviderPortal></ServiceProviderPortal>
  }
  else if (currentPage === 'adminPortal') {
    page = <AdminPortal></AdminPortal>
  }

  return <>{page}</>;
  */
 return(
  <ServiceProviderPortal></ServiceProviderPortal>
 )
}

export default App
