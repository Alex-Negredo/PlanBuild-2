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

  const { projectId } = useParams();
  const [projects, setProjects] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [specifications, setSpecifications] = useState([]);
  const [selectedInstruction, setSelectedInstruction] = useState();
  const [selectedProject, setSelectedProject] = useState();

  // Fetch all projects
  useEffect( () => {
    axios.get(`https://planbuild-api-2aa57d725286.herokuapp.com/projects`)
    .then(res => {
      setProjects(res.data);
      console.log(res.data);
    })
    .catch(err => {console.log('my error getting projects is', err)})
  }, [])

  // grab the projectId from the URL, fetch the current project and set selectedProject
  useEffect(() => {
    if (projectId) {
      axios.get(`https://planbuild-api-2aa57d725286.herokuapp.com/projects/${projectId}`)
      .then(res => {
        setSelectedProject(res.data);
        console.log('selected project is', res.data);
      })
      .catch(err => {console.log('error getting selected project', err)})
    }}, [projectId])

  // Fetch all instructions for the selected project
  useEffect( () => {
    if (projectId) {
      axios.get(`https://planbuild-api-2aa57d725286.herokuapp.com/projects/${projectId}/instructions`)
      .then(res => {
        setInstructions(res.data);
        console.log(res.data);
      })
    .catch(err => {console.log('error getting all instructions', err)})
  }}, [projectId])

  // Fetch all instructions for the selected project
  useEffect( () => {
    if (projectId) {
      axios.get(`https://planbuild-api-2aa57d725286.herokuapp.com/projects/${projectId}/specifications`)
      .then(res => {
        setSpecifications(res.data);
        console.log(res.data);
      })
      .catch(err => {console.log('error getting all specifications', err)})
  }}, [projectId])

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SidebarPro backgroundColor="rgb(230, 230, 230)" width="220px" className="sidebar">
          <Menu>
              <MenuItem component={<Link to={`/projects`} />} className="sidebar__projects" icon={<MenuRoundedIcon />} ><h3> PROJECTS </h3></MenuItem>
              
              {selectedProject && (
                <>
                <MenuItem component={<Link to={`/projects/${projectId}/drawings`} />} icon={<GridViewRoundedIcon />}> Drawings </MenuItem>           
                <MenuItem component={<Link to={`/projects/${projectId}/instructions`} />} icon={<BubbleChartRoundedIcon />}> Instructions </MenuItem>
                <MenuItem component={<Link to={`/projects/${projectId}/specifications`} />} icon={<ReceiptRoundedIcon />}> Specifications </MenuItem>
                <MenuItem icon={<MonetizationOnRoundedIcon />}> RFI's </MenuItem>
                <MenuItem icon={<AccountBalanceRoundedIcon />}> Submittals </MenuItem>
                <MenuItem icon={<BubbleChartRoundedIcon />}> Observations </MenuItem>
                <MenuItem icon={<ReceiptRoundedIcon />}> Inspections </MenuItem>
                <MenuItem icon={<TimelineRoundedIcon />}> Schedules </MenuItem>
                <MenuItem icon={<BarChartRoundedIcon />}> Reports </MenuItem>
                </>
              )}

              <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />} >
                  <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
                  <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
                  <MenuItem icon={<NotificationsRoundedIcon />}> Notifications </MenuItem>
              </SubMenu>
              <MenuItem component={<Link to='/' />} className='navbar__logout' icon={<LogoutRoundedIcon />}> Logout </MenuItem>
          </Menu>
      </SidebarPro>

    </div>
  );
};

export default Sidebar