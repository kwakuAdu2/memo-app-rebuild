import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.jsx';
import logo from "../../assets/ncce-logo.png";
import "./global.css";
import { BellAlertIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { userState } = useContext(UserContext);

  return (
    <div>
      <nav className='navbar'>
        <div className="nav-logo">
          <Link to='/'>
            <img src={logo} alt="NCCE LOGO" className='ncce-logo' />
          </Link>
        </div>
        <div className="nav-motto flex justify-around">
          <ul>
            <li className='text-white font-semibold'><Link to='/about'>About</Link></li>
          </ul>
          {userState ? (
              // <li className='text-white font-semibold'>{userState.email}</li>
              <div className="flex justify-around w-1/5 items-center">
                <div className="icon-div">
                  <BellAlertIcon className='w-6 text-white font-semibold'/>
                </div>
                <div className="icon-div">
                  <Cog6ToothIcon className='w-6 text-white font-semibold'/>
                </div>
              </div>
            ) : (
              ""
              // <li className='text-white font-semibold'><Link to='/signin'>Sign In</Link></li>
            )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
