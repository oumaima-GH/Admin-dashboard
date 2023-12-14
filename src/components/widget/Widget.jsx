import React from "react";
import "./widget.scss";
import {
  AccountBalanceRounded,
  KeyboardArrowUpRounded,
  MonetizationOnRounded,
  PersonOutlineRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;

  const amount = 1000;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "View all users",
        icon: (
          <PersonOutlineRounded
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.15)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartRounded
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View all earnings",
        icon: (
          <MonetizationOnRounded
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.15)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "View details",
        icon: (
          <AccountBalanceRounded
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.15)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive ">
          <KeyboardArrowUpRounded /> {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
