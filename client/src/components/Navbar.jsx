import React from 'react'
import useAuthContext from '../contexts/AuthContext'
import { useNavigate } from 'react-router'

function Navbar() {
  const navigate = useNavigate()
  const { logout, user } = useAuthContext()

  const handleLogout = async () => {
    await logout()

    navigate('/login');
  }

  return (
    <nav>
      <button onClick={() => navigate('/home')}>Logo</button>

      <div id='navlinks'>
        {!user && (
          <>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
          </>
        )}

        {user && (
          <>
            <p>{user.name}</p>
            <button onClick={() => handleLogout()}>Logout</button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar