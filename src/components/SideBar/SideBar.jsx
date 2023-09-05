import { Sidebar as SidebarPro, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams, redirect } from 'react-router-dom';
import axios from 'axios';
import './Sidebar.scss';

function Sidebar() {

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SidebarPro backgroundColor="rgb(245, 245, 245)" width="220px" className="navbar">
          <Menu>
              <MenuItem component={<Link to="/" className="link" />} className="navbar__home" icon={<MenuRoundedIcon />} ><h3> HOME </h3></MenuItem>
              <MenuItem component={<Link to={"projects"} />} icon={<GridViewRoundedIcon />}> Projects </MenuItem>               
              <MenuItem component={<Link to={"instructions"} />} icon={<BubbleChartRoundedIcon />}> Instructions </MenuItem>
              <MenuItem icon={<ReceiptRoundedIcon />}> RFI's </MenuItem>
              <MenuItem icon={<MonetizationOnRoundedIcon />}> Specifications </MenuItem>
              <MenuItem icon={<AccountBalanceRoundedIcon />}> Submittals </MenuItem>
              <MenuItem icon={<BubbleChartRoundedIcon />}> Observations </MenuItem>
              <MenuItem icon={<ReceiptRoundedIcon />}> Inspections </MenuItem>
              <MenuItem icon={<TimelineRoundedIcon />}> Schedules </MenuItem>
              <MenuItem icon={<ReceiptRoundedIcon />}> Deficiency List </MenuItem>
              <MenuItem icon={<BarChartRoundedIcon />}> Reports </MenuItem>
              <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />} >
                  <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
                  <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
                  <MenuItem icon={<NotificationsRoundedIcon />}> Notifications </MenuItem>
              </SubMenu>
              <MenuItem className='navbar__logout' icon={<LogoutRoundedIcon />}> Logout </MenuItem>
          </Menu>
      </SidebarPro>

    </div>
  );
};

export default Sidebar