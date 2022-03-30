import React from "react";
import "./Note.css";
import { AiOutlinePushpin } from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BiLabel, BiArchiveIn, BiTrash } from "react-icons/bi";
const Note = () => {
  return (
    <div className="notes">
      <div className="notes-content">
        <div className="notes-title">
          <h2>title of the note</h2>
        </div>
        <div className="notes-body">
          <p>body of the note</p>
        </div>
        <div className="notes-date">
          <p>created at </p>
        </div>
      </div>
      <div className="notes-icons">
        <div className="icons-top">
          <AiOutlinePushpin className="icons icon-top"/>
        </div>
        <div className="icons-bottom">
          <IoColorPaletteOutline className="icons icon-bottom"/>
          <BiLabel className="icons icon-bottom"/>
          <BiArchiveIn className="icons icon-bottom"/>
          <BiTrash className="icons icon-bottom"/>
        </div>
      </div>
    </div>
  );
};

export default Note;
