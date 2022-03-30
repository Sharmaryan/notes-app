import React from "react";
import './Sidebar.css'
import { AiFillHome } from "react-icons/ai";
import { BiLabel, BiArchiveIn, BiTrash, BiUser } from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className='sidebar-items'>
          <span className="sidebar-text">home</span> <AiFillHome className="sidebar-icons" />
        </li>
        <li className='sidebar-items'>
          <span className="sidebar-text">label</span> <BiLabel className="sidebar-icons" />
        </li>
        <li className='sidebar-items'>
          <span className="sidebar-text">archive</span> <BiArchiveIn className="sidebar-icons" />
        </li>
        <li className='sidebar-items'>
          <span className="sidebar-text">trash</span> <BiTrash className="sidebar-icons" />
        </li>
        <li className='sidebar-items'>
          <span className="sidebar-text">profile</span> <BiUser className="sidebar-icons" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
