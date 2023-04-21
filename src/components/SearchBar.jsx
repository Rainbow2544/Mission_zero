import React from "react";
import "./SearchBar.css";
import { Search } from "@material-ui/icons";

const SearchBar = () => {
  return (
    <form id="searchBarContainer">
      <input
        id="inputSearch"
        type="text"
        placeholder="Search your favorite places, hotels here"
      />
      <button className="searchButton">
        <Search id="searchLogo" />
      </button>
    </form>
  );
};

export default SearchBar;
