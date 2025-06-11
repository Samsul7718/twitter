import React from "react";
import "./Sidebar.css";
import XIcon from "@mui/icons-material/X";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListIcon from "@mui/icons-material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import { AdbOutlined } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <XIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      {/* <SidebarOption active Icon={AdbOutlined} text="About"/> */}
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notification" />
      <SidebarOption Icon={MessageIcon} text="Messages" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOption Icon={ListIcon} text="Lists" />
      <SidebarOption Icon={AccountCircleIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* Sidebar option */}
      {/* Sidebar option */}
      {/* Sidebar option */}
      {/* Sidebar option */}
      {/* Sidebar option */}
      {/* Sidebar option */}
      {/* Sidebar option */}

      {/* Button tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        tweet
      </Button>
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Share
      </Button>
    </div>
  );
};

export default Sidebar;
