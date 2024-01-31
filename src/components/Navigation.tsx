import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";


import ContentPaste from '@mui/icons-material/ContentPaste';


import MenuIcon from "@mui/icons-material/Menu";
import koreanFlag from "../assets/korean-flag.png";
import easterEgg from '../assets/easteregg.gif';
import NavDrawer from "./NavDrawer";
import { isAnyRouteInDrawerEnabled } from "../Routes";

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false); // Add this line
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleDrawerToggle = () => { // Add this function
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    if (showEasterEgg) {
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = '만세'; // "yay" in Korean
      utterance.lang = 'ko-KR';
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, [showEasterEgg]);

  return (
    <div>
      <AppBar className={"app-toolbar"} sx={{ position: 'fixed', top: 7, left: 7, right: 7, }}>
        <Toolbar sx={{ margin: '0px auto' }}>

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
          <Typography color={"primary"} variant="h4">
            Learn
          </Typography>&nbsp;
          <Typography color={"secondary"} variant="h3" className={"hangulFont"} onClick={() => setShowEasterEgg(true)}>
            한국
          </Typography>







        </Toolbar>
      </AppBar>
      {showEasterEgg && (
        <img src={easterEgg} alt="easter egg" className='easteregg clicked' onClick={() => setShowEasterEgg(false)} />
      )}
    </div>
  );
}

export default Navigation;






