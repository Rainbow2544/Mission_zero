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
        <button className="searchButton">
            <Search style={{marginTop: '5px'}}/>
        </button>
    </form>
  )
}

export default SearchBar;