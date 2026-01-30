import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import useAuthContext from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) navigate('/dashboard');
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