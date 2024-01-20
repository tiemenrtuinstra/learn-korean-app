const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/translate', async (req, res) => {
  const { text, to } = req.query;

  try {
    const response = await fetch(`https://translate.google.com/translate_a/single?client=at&dt=t&dt=rm&dj=1&text=${encodeURIComponent(text)}&to=${to}`);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while trying to fetch translation' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));