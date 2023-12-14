import React from "react";
import "./sidebar.scss";
import {
  AccountCircleRounded,
  CircleNotificationsRounded,
  DashboardRounded,
  FilterFramesRounded,
  HealthAndSafetyRounded,
  InsertChartOutlinedRounded,
  LocalShippingRounded,
  LogoutRounded,
  ProductionQuantityLimitsRounded,
  PsychologyRounded,
  SettingsRounded,
  SupervisedUserCircleOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">DASHBOARD</p>
          <li>
            <DashboardRounded className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <SupervisedUserCircleOutlined className="icon" />
            <span>Users</span>
          </li>
          <li>
            <FilterFramesRounded className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <ProductionQuantityLimitsRounded className="icon" />
            <span>Products</span>
          </li>
          <li>
            <LocalShippingRounded className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">STATS & NOTIFS</p>
          <li>
            <InsertChartOutlinedRounded className="icon" />
            <span>Statistics</span>
          </li>
          <li>
            <CircleNotificationsRounded className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <HealthAndSafetyRounded className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyRounded className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsRounded className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleRounded className="icon" />
            <span>Profil</span>
          </li>
          <li>
            <LogoutRounded className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color"></div>
        <div className="color"></div>
      </div>
    </div>
  );
};

export default Sidebar;
