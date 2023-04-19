import React, { useState } from 'react';
import SearchBar from './SearchBar';
import "./NavBar.css";
import {Menu,Search} from "@material-ui/icons";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleClick(){
    setIsNavOpen(!isNavOpen);
  }
  return (
    <div className='nav_container'>
      <div className='dropdownMenu'>
        <button id="dropdown-btn"
          onClick={handleClick}
        >
          <Menu />
        </button>
      </div>
      <div className='logo'>
        <a src="/">
          <img 
          id='logo'
          alt='logo'
          src='https://th.bing.com/th/id/OIP.-oOmnPmO7RZF0UFseeJxcwAAAA?pid=ImgDet&rs=1'/>
        </a>
      </div>
      
      <div className='nav'>
        <ul >
              <li>Home</li>
              <li>Movie</li>
              <li>News</li>
              <li>About us</li>
          </ul>
      </div>
        
        
        <div className='btnContainer'>
          <button className='btn'>Register</button>
          <button className='btn'>Sign in</button>
        </div>
        

        {isNavOpen && 
        <div className='dropdownContainer'>
          <ul>
              <li>Home</li>
              <li>Movie</li>
              <li>News</li>
              <li>About us</li>
          </ul>
        </div>
        }
    </div>
  )
}

export default NavBar;