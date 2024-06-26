import React from 'react'
import Navbar from '../../components/global/Navbar'
import Hero from '../../components/global/Hero'
import SignInForm from '../../components/auth/SignInForm'


const SignIn = () => {
  return (
    <div className="w-screen sign-in-content h-screen flex flex-col">
      <Navbar />
      <div className="hero-content">
        <Hero />
        <SignInForm />
      </div>
    </div>
  )
}

export default SignIn
