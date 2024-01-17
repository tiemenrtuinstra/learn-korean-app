import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { translate } from '@vitalets/google-translate-api';

const Translator: React.FC = () => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [language, setLanguage] = useState('ko');

  const handleTranslate = async () => {
    try {
      const res = await translate(text, { to: language });
      setTranslation(res.text);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLanguageSwitch = () => {
    setLanguage(language === 'ko' ? 'nl' : 'ko');
  };

  return (
    <Box>
      <TextField
        label="Text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleTranslate}>Translate</Button>
      <Button onClick={handleLanguageSwitch}>Switch language</Button>
      <TextField
        label="Translation"
        value={translation}
        InputProps={{
          readOnly: true,
        }}
      />
    </Box>
  );
};

export default Translator;