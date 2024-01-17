import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Introduction from './pages/Introduction';
import HangulAlphabet from './pages/HangulAlphabet';
import WordList from './pages/WordList';
import NumberList from './pages/NumberList';
import MultipleChoice from './pages/MultipleChoice';
import Exercise from './pages/Exercise';
import WritingExercise from './pages/WritingExercise';
import SpeakingExercise from './pages/SpeakingExercise';
import FillInTheBlanks from './pages/FillInTheBlanks';
import Navigation from './components/Navigation';
import BottomNavigation from './components/BottomNavigation';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
          color: "white"
        }
      }
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/alphabet" element={<HangulAlphabet />} />
          <Route path="/word-list" element={<WordList />} />
          <Route path="/number-list" element={<NumberList />} />
          <Route path="/multiple-choice" element={<MultipleChoice />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/writing" element={<WritingExercise />} />
          <Route path="/speaking" element={<SpeakingExercise />} />
          <Route path="/fill-in-the-blanks" element={<FillInTheBlanks />} />
        </Routes>
        <BottomNavigation />
      </Router>
    </ThemeProvider>
  );
}

export default App;