import React from "react";

const SearchBar = () => {
  return (
    <div className='search-bar my-3'>
      <input type='text' placeholder='Search here..' />
      <i className='fas fa-search'></i>
    </div>
  );
};

export default SearchBar;
