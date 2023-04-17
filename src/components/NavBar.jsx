import React from 'react';
import SearchBar from './SearchBar';
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id='nav_container'>
        <ul className='nav'>
            <li>Home</li>
            <li>Movie</li>
            <li>About us</li>
        </ul>
        <SearchBar />
    </div>
  )
}

export default NavBar;