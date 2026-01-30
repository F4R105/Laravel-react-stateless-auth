import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import useAuthContext from '../contexts/AuthContext'
import { useNavigate } from 'react-router'

function Dashboard() {
  const { user } = useAuthContext()
 const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login')
  },[])

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