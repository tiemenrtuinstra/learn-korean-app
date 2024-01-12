import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation'; // adjust the path based on your file structure
import Introduction from './Introduction';
import WordList from './WordList';
import MultipleChoice from './MultipleChoice';
import Exercise from './Exercise';
import WritingExercise from './WritingExercise';
import SpeakingExercise from './SpeakingExercise';
import FillInTheBlanks from './FillInTheBlanks';

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