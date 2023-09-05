import { Sidebar, Menu, MenuItem, SubMenu  } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <>
      <Sidebar collapsed collapsedWidth='150px' >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: '#0073FB',
                  backgroundColor: active ? '#F5F5F5' : undefined,
                };
            },
          }}
        >
          <MenuItem component={<Link to="/sidebar" />}> Home - Projects </MenuItem>
          <MenuItem component={<Link to="/projects" />}> Drawings </MenuItem>
          <SubMenu label="Documents">
            <MenuItem component={<Link to="/projects/instructions" />}> Instructions </MenuItem>
            <MenuItem> RFI's </MenuItem>
            <MenuItem> Specifications </MenuItem>
            <MenuItem> Submittals </MenuItem>
            <MenuItem> Observations </MenuItem>
            <MenuItem> Inspections </MenuItem>
            <MenuItem> Schedules </MenuItem>
            <MenuItem> Deficiency List </MenuItem>
            <MenuItem> Meetings </MenuItem>
            <MenuItem> Reports </MenuItem>
            <MenuItem> Photos </MenuItem>
          </SubMenu>
          <MenuItem> </MenuItem>
          <MenuItem> </MenuItem>
          <MenuItem component={<Link to="/sidebar" />}> Log out</MenuItem>
        </Menu>
      </Sidebar>
    </>
  )
}

export default SideBar