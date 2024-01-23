import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import React, { useState, useContext } from "react";

import RoutesOptions, { RouteOption } from "./Routes";
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
console.log(Colors);

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

  return (
    <div className={"app-wrapper"}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation />
          <section id="content">
            <Routes>
              {RoutesOptions.filter((route: { enabled: any; }) => route.enabled).map((route: RouteOption) => (
                <Route path={route.path} element={route.element} />
              ))}
            </Routes>
          </section>
          <BottomNavigation />
        </Router>
      </ThemeProvider>
    </div >
  );
}

export default App;