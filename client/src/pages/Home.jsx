import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import useNavigationContext from '../contexts/NavigationContext'
import useAuthContext from '../contexts/AuthContext';

function Home() {
  const { navigateTo } = useNavigationContext();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) navigateTo('dashboard');
  }, [])

  return (
    <>
      <Navbar />
      <div>
        <h1>Home</h1>
      </div>
    </>
  )
}

export default Home