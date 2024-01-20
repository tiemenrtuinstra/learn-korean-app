import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import React, { useState, useContext } from "react";

import RoutesOptions, { RouteOption } from "./Routes";
import Navigation from './components/Navigation';
import BottomNavigation from './components/BottomNavigation';


import { ThemeProvider, createTheme } from '@mui/material/styles';

import './scss/App.scss';

enum Colors {
  Yellow = '#F7D619',
  Black = '#000000',
  White = '#FFFFFF',
  Blue = '#0047A0',
  Red = '#CD2E3A',
  Primary = '#0047A0', // primary-color is blue
  Secondary = '#CD2E3A', // secondary-color is red
  Tertiary = '#F7D619', // tertiary-color is yellow
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

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation/>
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
