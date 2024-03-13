// WordList.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";

import { WordCard, WordCardBack } from '../components/WordCard';
import { AlphabetCard, AlphabetCardBack } from '../components/AlphabetCard';
import { NumberCard, NumberCardBack } from '../components/NumberCard';

import { combinedResources } from "../Resources";
import { SpeakButton } from "../components/Speak";
import { ResourceType } from "../dto/enums";
import { Alphabet, Word, KoreanNumber, SinoKoreanNumber } from "../dto/types";


const WordCards = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [resourceType, setResourceType] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const [filter, setFilter] = useState('all');

  const handleFilterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setFilter(event.target.value);
  };

  const filteredResource = filter === 'all' ? combinedResources : combinedResources.filter(resource => resource.resource === filter);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredResource.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredResource.length) % filteredResource.length);
  };

  function isWord(resource: any): resource is Word {
    return resource && resource.resource === ResourceType.Word;
  }

  function isAlphabet(resource: any): resource is Alphabet {
    return resource && resource.resource === ResourceType.Alphabet;
  }

  function isNumber(resource: any): resource is (KoreanNumber | SinoKoreanNumber) {
    return resource && resource.resource === ResourceType.Number;
  }

  const currentResource = filteredResource[currentIndex];

  useEffect(() => {
    const fetchResourceType = async () => {
      try {
        const response = await fetch(`http://localhost:3001/translate?text=${encodeURIComponent(currentResource.resource)}&to=nl`);
        const result = await response.json();
        setResourceType(result.text);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResourceType();
  }, [currentResource]);
  return (
    <>
      <Card className="table-filter" sx={{ maxWidth: 800, margin: "auto", marginTop: 2, marginBottom: 2 }}>
        <CardContent>
          <form noValidate autoComplete="off">
            <Grid container spacing={2} alignItems="center">

              <Grid item xs={12}>
                <Select value={filter} onChange={handleFilterChange}
                  variant="outlined"
                  size="small"
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="all">
                    <em>Alle categorieën</em>
                  </MenuItem>

                  <MenuItem value={ResourceType.Word}>Woorden</MenuItem>
                  <MenuItem value={ResourceType.Alphabet}>Alfabet</MenuItem>
                  <MenuItem value={ResourceType.Number}>Nummers</MenuItem>
                </Select>


              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <div onClick={() => setIsFlipped(!isFlipped)} className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <Card className="card-front">
          <CardContent>
            {isWord(currentResource) && <WordCard resource={currentResource} />}
            {isAlphabet(currentResource) && <AlphabetCard resource={currentResource} />}
            {isNumber(currentResource) && <NumberCard resource={currentResource} />}
          </CardContent>
        </Card>
        <Card className="card-back">
          <CardContent>
            {isWord(currentResource) && <WordCardBack resource={currentResource} />}
            {isAlphabet(currentResource) && <AlphabetCardBack resource={currentResource} />}
            {isNumber(currentResource) && <NumberCardBack resource={currentResource} />}
          </CardContent>
        </Card>
      </div>
      <Card className="card-navigation">
        <CardContent sx={{ margin: '0px', padding: '0px' }}>
          <Box
            component="span"
            m={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <Button variant="contained" size="medium" color="primary" onClick={handlePrev}>Vorige</Button>
            <SpeakButton text={currentResource.hangul} lang="ko" />
            <Button variant="contained" size="medium" color="primary" onClick={handleNext}>Volgende</Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default WordCards;