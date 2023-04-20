import React, { useState } from 'react';
import "./NavBar.css";
import {Menu} from "@material-ui/icons";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleClick(){
    setIsNavOpen(!isNavOpen);
  }
  return (
    <div className='nav_container'>
      <div className='logo'>
        <a src="/">
          <img 
          id='logo'
          alt='logo'
          src='http://www.pngimagesfree.com/LOGO/M/Makemytrip/Make-My-Trip-Logo-PNG.png'/>
        </a>
      </div>

      <div className='dropdownMenu'>
        <button id="dropdown-btn"
          onClick={handleClick}
        >
          <Menu />
        </button>
      </div>

      <div className='nav'>
        <ul >
              <li>Home</li>
              <li>Stays</li>
              <li>Flights</li>
              <li>Car rentals</li>
        </ul>
        <div className='btnContainer'>
          <button className='btn'>Register</button>
          <button className='btn'>Sign in</button>
        </div>
         
      </div>
        

        {isNavOpen && 
        <div className='dropdownContainer'>
          <ul>
              <li>Home</li>
              <li>Stays</li>
              <li>Flights</li>
              <li>Car rentals</li>
          </ul>
        </div>
        }
    </div>
  )
}

export default NavBar;