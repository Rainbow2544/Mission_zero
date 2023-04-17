import React from 'react';
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div id="searchBarContainer">
        <form>
            <input 
                id="inputSearch"
                type='text'
                placeholder='Search your favorite movies here'
            />
        </form>
    </div>
  )
}

export default SearchBar;