import React from "react";
import "./Sidebar.css";
import "./twitterIconWhite.png";
import SidebarElement from "./SidebarElement";
import Home from "@material-ui/icons/Home";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <img height="40px" width="40px" src="../public/twitterIconBlue.png" />
        <SidebarElement text={"Home"} Icon={Home} />
        <SidebarElement text={"Trending"} Icon={TrendingUpIcon} />
        <SidebarElement text={"Lists"} Icon={ListAltIcon} />
        <SidebarElement text={"Bookmarks"} Icon={BookmarkBorderIcon} />
        <SidebarElement text={"More"} Icon={MoreHorizIcon} />
      </ul>
    </nav>
  );
}
