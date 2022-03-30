import React from "react";
import "./Navbar.css";
import { WiMoonWaningCrescent3 } from "react-icons/wi";
export const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-heading">Notes App</h1>

      <WiMoonWaningCrescent3 className="dark-mode" />
    </div>
  );
};


