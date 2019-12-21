import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, changeHandler }) => (
  <input
    className="searchBox"
    type="search"
    placeholder={placeholder}
    onChange={changeHandler}
  />
);
