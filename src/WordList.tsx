// WordList.tsx
import React from 'react';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { FaVolumeUp } from 'react-icons/fa'; // import speaker icon
import words from './words.json';

const WordList = () => {
  const speak = (text: string, lang: string) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = lang;
    window.speechSynthesis.speak(speech);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hangul</TableCell>
            <TableCell align="right">Listen</TableCell>
            <TableCell>Romanisation</TableCell>
            <TableCell>Dutch</TableCell>
            <TableCell align="right">Listen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words.map((word, index) => (
            <TableRow key={index}>
              <TableCell>{word.hangul}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => speak(word.hangul, 'ko')}><FaVolumeUp /></IconButton>
              </TableCell>
              <TableCell>{word.romanisation}</TableCell>
              <TableCell>{word.dutch}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => speak(word.dutch, 'nl')}><FaVolumeUp /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WordList;