import { Component } from "react";
import "./search-box-component.css";

const SearchBox = ({ onSearchChange, className }) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder="search monster"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
