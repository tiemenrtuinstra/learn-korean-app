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
import Header from "./Header";
import { useLocation } from 'react-router-dom';
import headerImage from '../assets/header.jpeg'; // replace with your actual path
import { title } from "process";

interface HeaderProps {
  title: string;
}

function Navigation() {
  const location = useLocation();
  const title = location.pathname.substring(1).replace(/-/g, ' ');

  return (
    <div>
      <AppBar position="static" style={{ marginBottom: "20px" }}>
        <Toolbar style={{ height: "150px", backgroundImage: `url(${headerImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>

          <img
            src={koreanFlag}
            alt="Korean Flag"
            style={{ height: "40px", marginRight: "8px" }}
          />
          <Typography variant="h3">
            Learn Korean
          </Typography>

          <Typography variant="h5">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;






