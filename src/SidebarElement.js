import React from "react";
import "./SidebarElement.css";
export default function SidebarElement({ text, Icon }) {
  return (
    <li className="sidebar-content">
      <Icon />
      <h2>{text}</h2>
    </li>
  );
}
