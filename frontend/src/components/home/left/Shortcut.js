import React from "react";

const Shortcut = ({ link, img, text }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="shortcut_item">
      <img src={img} alt="" />
      <span>{text}</span>
    </a>
  );
};

export default Shortcut;
