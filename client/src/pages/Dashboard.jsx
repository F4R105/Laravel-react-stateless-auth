import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import useNavigationContext from '../contexts/NavigationContext'
import useAuthContext from '../contexts/AuthContext'

function Dashboard() {
  const { user } = useAuthContext()
  const { currentPage, navigateTo } = useNavigationContext()

  useEffect(() => {
    if (!user) navigateTo('login')
  }, [currentPage])

  return (
    <>
      <Navbar />
      <div>
        <h1>Dashboard</h1>
      </div>
    </>
  )
}

export default Dashboard