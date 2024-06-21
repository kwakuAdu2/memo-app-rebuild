import React from 'react'
import "./global.css"

const Navbar = () => {
  return (
    <div>
      <nav className='bg-red-500 navbar'>
        <div className="nav-logo">
            <h1 className='bg-white font-bold'>DEMO LOGO</h1>
        </div>
        <div className="nav-motto">
            <ul>
                <li className='text-white font-semibold' >INTEGRITY</li>
                <li className='text-white font-semibold' >FAIRNESS</li>
                <li className='text-white font-semibold' >SERVICE</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
