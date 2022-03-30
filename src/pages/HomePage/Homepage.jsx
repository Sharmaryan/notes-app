import React from "react";
import './Homepage.css'
import SearchBar from "../../Components/SearchBar/SearchBar";
import Note from "../../Components/Note/Note";
const Homepage = () => {
  return (
    <div className="homepage">
    <SearchBar/>
    <Note/>
    <Note/>
    <Note/>
    </div>
  );
};

export default Homepage;
