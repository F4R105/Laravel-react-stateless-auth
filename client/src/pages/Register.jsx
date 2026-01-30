import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import useAuthContext from '../contexts/AuthContext'
import { useNavigate } from 'react-router'

function Register() {
  const { register } = useAuthContext()
  const navigate = useNavigate()

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleRegistration = async (e) => {
    e.preventDefault()

    await register({ 
      name: nameRef.current.value, 
      email: emailRef.current.value, 
      password: passwordRef.current.value
    })

    navigate('/Dashboard')
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>Register</h1>
        <form onSubmit={handleRegistration}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input type="text" name='name' ref={nameRef} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' ref={emailRef} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" name='password' ref={passwordRef} />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register