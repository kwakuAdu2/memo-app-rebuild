import React from 'react'

// Components
import Navbar from "../components/global/Navbar"
import Sidenav from '../components/home/Sidenav'
import Dashboard from '../components/home/Dashboard'

// Styles
import "../components/home/home.css"


const Home = () => {
  return (
    <div className='overflow-none'>
      <Navbar />
     <div className="home-container">
     <Sidenav />
     <Dashboard />
     </div>
    </div>
  )
}

export default Home
