import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import { RoutesWrapper } from "./Routes";
import Navigation from './components/Navigation';
import BottomNavigation from './components/BottomNavigation';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import './scss/App.scss';

const blue = getComputedStyle(document.documentElement).getPropertyValue('--blue').trim();
const red = getComputedStyle(document.documentElement).getPropertyValue('--red').trim();
const green = getComputedStyle(document.documentElement).getPropertyValue('--green').trim();
const yellow = getComputedStyle(document.documentElement).getPropertyValue('--yellow').trim();
const black = getComputedStyle(document.documentElement).getPropertyValue('--black').trim();
const white = getComputedStyle(document.documentElement).getPropertyValue('--white').trim();
const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();

export const Colors = {
  Blue: blue,
  Red: red,
  Green: green,
  Yellow: yellow,
  Black: black,
  White: white,
  Primary: primaryColor,
  Secondary: secondaryColor
}

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.Primary,
    },
    secondary: {
      main: Colors.Secondary,
    },
    text: {
      primary: Colors.Black,
      secondary: Colors.Black,
    },
    background: {
      default: Colors.White,
    },
  },
  components: {
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: Colors.Black,
          "&:hover": {
            color: Colors.Black
          },
          "&.Mui-active": {
            "&&": {
              color: Colors.Primary,

              "& * ": {
                color: Colors.Secondary,
              }
            }
          }
        },
        icon: {
          color: Colors.White
        }
      }
    }
  }
});


const App = () => {
  const [showRomanisation, setShowRomanisation] = useState(true);

  return (
    <div className={"app-wrapper"}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation showRomanisation={showRomanisation} setShowRomanisation={setShowRomanisation}/>
          <section id="content">
            <RoutesWrapper showRomanisation={showRomanisation} setShowRomanisation={setShowRomanisation} />
          </section>
          <BottomNavigation showRomanisation={showRomanisation} setShowRomanisation={setShowRomanisation} />
        </Router>
      </ThemeProvider>
    </div >
  );
}

export default App;