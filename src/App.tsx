import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; // adjust the path based on your file structure
import Introduction from './pages/Introduction';
import WordList from './pages/WordList';
import MultipleChoice from './pages/MultipleChoice';
import Exercise from './pages/Exercise';
import WritingExercise from './pages/WritingExercise';
import SpeakingExercise from './pages/SpeakingExercise';
import FillInTheBlanks from './pages/FillInTheBlanks';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/word-list" element={<WordList />} />
        <Route path="/multiple-choice" element={<MultipleChoice />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/writing" element={<WritingExercise />} />
        <Route path="/speaking" element={<SpeakingExercise />} />
        <Route path="/fill-in-the-blanks" element={<FillInTheBlanks />} />
      </Routes>
    </Router>
  );
}

export default App;