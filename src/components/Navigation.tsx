import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CardContent,
  Card,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import koreanFlag from "../assets/korean-flag.png";
import { useLocation } from 'react-router-dom';
import headerImage from '../assets/header.jpeg'; // replace with your actual path
import { title } from "process";
import NavDrawer from "./NavDrawer";
import { isAnyRouteInDrawerEnabled } from "../Routes";
interface HeaderProps {
  title: string;
}

const Navigation = () => {
  const location = useLocation();
  const title = location.pathname.substring(1).replace(/-/g, ' ');
  const [drawerOpen, setDrawerOpen] = React.useState(false); // Add this line

  const handleDrawerToggle = () => { // Add this function
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div>
      <AppBar className={"app-toolbar"} sx={{ position: 'fixed', top: 7, left: 7, right: 7,}}>
        <Toolbar sx={{margin:'0px auto'}}>

          {isAnyRouteInDrawerEnabled() === true && (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle} // Add this line
              >
                <MenuIcon />
              </IconButton>
              <NavDrawer open={drawerOpen} onClose={handleDrawerToggle} />

            </>
          )}
          <img
            src={koreanFlag}
            alt="Korean Flag"
            style={{ height: "40px", marginRight: "8px" }}
          />
          <Typography color={"primary"} variant="h3">
            Learn
          </Typography>
          <Typography color={"secondary"} variant="h4">
            &nbsp;한국
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;






