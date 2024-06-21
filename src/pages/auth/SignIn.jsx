import React from 'react'
import Navbar from '../../components/global/Navbar'
import Hero from '../../components/global/Hero'
import SignInForm from '../../components/auth/SignInForm'


const SignIn = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <Hero />
      <SignInForm />
    </div>
  )
}

export default SignIn
