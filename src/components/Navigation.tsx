import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import koreanFlag from "../assets/korean-flag.png";
import Header from "./Header";
import { useLocation } from 'react-router-dom';

function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const title = location.pathname.substring(1).replace(/-/g, ' ');

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(isOpen);
    };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "Introduction",
          "Word List",
          "Number List",
          "Multiple Choice",
          "Exercise",
          "Writing",
          "Speaking",
          "Fill in the Blanks",
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={koreanFlag}
                alt="Korean Flag"
                style={{ height: "40px", marginRight: "8px" }}
              />
              Learn Korean
            </div>
          </Typography>
        </Toolbar>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </AppBar>
      <Header title={title.charAt(0).toUpperCase() + title.slice(1)} />
    </div>
  );
}

export default Navigation;
