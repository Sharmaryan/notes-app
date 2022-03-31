import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiLabel, BiArchiveIn, BiTrash, BiUser } from "react-icons/bi";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-items">
          <span className="sidebar-text">
            <Link to="/" className="sidebar-link">
              home
            </Link>
          </span>{" "}
          <AiFillHome className="sidebar-icons" />
        </li>
        <li className="sidebar-items">
          <span className="sidebar-text">
            <Link to="labels" className="sidebar-link">
              label
            </Link>
          </span>{" "}
          <BiLabel className="sidebar-icons" />
        </li>
        <li className="sidebar-items">
          <span className="sidebar-text">
            <Link to="/archive" className="sidebar-link">
              archive
            </Link>
          </span>{" "}
          <BiArchiveIn className="sidebar-icons" />
        </li>
        <li className="sidebar-items">
          <span className="sidebar-text">
            <Link to="/trash" className="sidebar-link">
              trash
            </Link>
          </span>{" "}
          <BiTrash className="sidebar-icons" />
        </li>
        <li className="sidebar-items">
          <span className="sidebar-text">
            <Link to="/profile" className="sidebar-link">
              profile
            </Link>
          </span>{" "}
          <BiUser className="sidebar-icons" />
        </li>
      </ul>
      <button className="sidebar-btn">create new note </button>
    </div>
  );
};


