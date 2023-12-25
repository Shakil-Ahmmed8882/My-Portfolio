import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import pLogo from "../../assets/img/innerImg/PLogo.png";
import { NavLink, useLocation } from "react-router-dom";

const drawerWidth = 240;
const routes = [
  { label: <img src={pLogo} style={{ width: "30px" }} id="logo" /> ,path:"/home"},
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "contact" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation()
  const homeRoute = location.pathname === '/'
 

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
 

 

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        
        {routes.map((item) => (
          <NavLink key={item.label} to={item.path}>
            <ListItem key={item.label} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const resumeLink = (
    <a href="https://drive.google.com/file/d/12To87qpGvjt5k6o9YMjRs5YHhn6C5xux/view?usp=sharing">
      Resume
    </a>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: homeRoute?"transparent":"white",
          borderBottom: "none",
          color: "#000",
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", sm: "block" },marginLeft:{ lg:"66px",md:"0px"} }}>
            {routes.map((item) => (
              <NavLink key={item.label} to={item.path}>
                <Button sx={{ color: "#000" }}>{item.label}</Button>
              </NavLink>
            ))}
            {resumeLink}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          className="card"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
