import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import useAuthContext from '../contexts/AuthContext';

function Login() {
  const { login } = useAuthContext();

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleLogin = (e) => {
    e.preventDefault()

    login({
      email: emailRef.current.value, 
      password: passwordRef.current.value
    })
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' ref={emailRef} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" name='password' ref={passwordRef} />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login