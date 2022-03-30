import React from "react";
import './Homepage.css'
import {Note, SearchBar} from '../../Components/index'
export const Homepage = () => {
  return (
    <div className="homepage">
    <SearchBar/>
    <Note/>
    <Note/>
    <Note/>
    </div>
  );
};


