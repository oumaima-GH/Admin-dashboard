import React from "react";
import "./navbar.scss";
import {
  ChatBubbleOutlineRounded,
  DarkModeRounded,
  FullscreenExitRounded,
  LanguageRounded,
  ListAltRounded,
  ManageSearchRounded,
  NotificationsNoneRounded,
} from "@mui/icons-material";
import img from "../../assets/pexels-pixabay-220453.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <ManageSearchRounded className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageRounded className="icon" />
          </div>
          <div className="item">
            <DarkModeRounded className="icon" />
          </div>
          <div className="item">
            <FullscreenExitRounded className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneRounded className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineRounded className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListAltRounded className="icon" />
          </div>
          <div className="item">
            <img src={img} alt="avatar image" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
