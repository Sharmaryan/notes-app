import React from 'react'
import './SearchBar.css'
import { BiSearch, BiFilter } from "react-icons/bi";
const SearchBar = () => {
  return (
    <div className='searchbar'>
      <form className='searchbar-items'>
        <BiSearch className='searchbar-icons icon-search'/>
        <input type="text" placeholder="search" className='searchbar-input'/>
        <BiFilter className='searchbar-icons icon-filter'/> 
      </form>
    </div>
  );
}

export default SearchBar