import React from 'react'
import useNavigationContext from '../contexts/NavigationContext'
import useAuthContext from '../contexts/AuthContext'

function Navbar() {
  const { navigateTo } = useNavigationContext()
  const { logout, user } = useAuthContext()

  return (
    <nav>
      <button onClick={() => navigateTo('home')}>Logo</button>

      <div id='navlinks'>
        {!user && (
          <>
            <button onClick={() => navigateTo('login')}>Login</button>
            <button onClick={() => navigateTo('register')}>Register</button>
          </>
        )}

        {user && (
          <>
            <p>{user.name}</p>
            <button onClick={() => logout()}>Logout</button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar