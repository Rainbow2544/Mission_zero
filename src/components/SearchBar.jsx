import React from 'react';
import "./SearchBar.css";
import {Search} from "@material-ui/icons";


const SearchBar = () => {
  return (
    <form id="searchBarContainer">
        <input 
            id="inputSearch"
            type='text'
            placeholder='Search your favorite movies here'
        />
        <Search id="searchBtn" style={{marginTop: '5px'}}/>
        <button className="searchButton">
            Search
        </button>
    </form>
  )
}

export default SearchBar;