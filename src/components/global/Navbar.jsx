import React from 'react'
import "./global.css"

// LOGO
import logo from "../../assets/ncce-logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className="nav-logo">
          {/* <h1 className='bg-white font-bold'>DEMO LOGO</h1> */}
          <Link to='/'>
            <img src={logo} alt="NCCE LOGO" className='ncce-logo'/>
          </Link>
        </div>
        <div className="nav-motto">
          <ul>
            {/* <li className='text-white font-semibold' >INTEGRITY</li>
            <li className='text-white font-semibold' >FAIRNESS</li> */}
            <li className='text-white font-semibold' >About</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
