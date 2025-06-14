import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {Icon && <Icon />}
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
