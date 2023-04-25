import React from "react";
import "./SearchBar.css";
import { Search } from "@material-ui/icons";

const SearchBar = () => {
  return (
    <form id="searchBarContainer">
      <input
        id="searchBarContainer--input"
        type="text"
        placeholder="Search your favorite places, hotels here"
      />
      <button className="searchBarContainer--button">
        <Search id="searchBarContainer--button--searchLogo" />
      </button>
    </form>
  );
};

export default SearchBar;
