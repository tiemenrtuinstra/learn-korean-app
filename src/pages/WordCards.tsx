// WordList.tsx
import React, { useState, useEffect, useCallback, useMemo } from "react";
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
import words, { wordSources } from '../Words';


const WordCards = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');
  
  const handleCategoryFilterChange = useCallback((event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCategoryFilter(event.target.value);
  }, []);
  
  const handleSourceFilterChange = useCallback((event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSourceFilter(event.target.value);
  }, []);
  
  const filteredResource = useMemo(() => {
    let result = combinedResources;
  
    if (categoryFilter !== 'all') {
      result = result.filter(resource => resource.resource === categoryFilter);
    }
  
    if (sourceFilter !== 'all') {
      console.log('sourceFilter',sourceFilter);
      result =  combinedResources
      .filter(resource => resource.resource === ResourceType.Word && resource.source === sourceFilter)
      .map(resource => {
        // Perform your mapping logic here
        // For example, if you want to extract the 'hangul' property:
        return resource;
      });
    }
  
    return result;
  }, [categoryFilter, sourceFilter]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredResource.length);
  }, [filteredResource]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredResource.length) % filteredResource.length);
  }, [filteredResource]);

  function getResourceType(resource: any): resource is (Word | Alphabet | KoreanNumber | SinoKoreanNumber) {
    return resource && [ResourceType.Word, ResourceType.Alphabet, ResourceType.Number].includes(resource.resource);
  }

  const currentResource = filteredResource[currentIndex];
console.log(currentResource);
  if (currentResource) {
    // Now you can safely access currentResource.hangul
    console.log(currentResource.hangul);
  } else {
    console.log('currentResource is undefined');
  }

  function isWord(resource: any): resource is Word {
    return resource && resource.resource === ResourceType.Word;
  }

  function isAlphabet(resource: any): resource is Alphabet {
    return resource && resource.resource === ResourceType.Alphabet;
  }

  function isNumber(resource: any): resource is (KoreanNumber | SinoKoreanNumber) {
    return resource && resource.resource === ResourceType.Number;
  }

  return (
    <>
      <Card className="table-filter" sx={{ maxWidth: 800, margin: "auto", marginTop: 2, marginBottom: 2 }}>
        <CardContent>
          <form noValidate autoComplete="off">
            <Grid container spacing={2} alignItems="center">

              <Grid item xs={12}>
              <Select value={categoryFilter} onChange={handleCategoryFilterChange}
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
              <Grid item xs={12}>

              <Select value={sourceFilter} onChange={handleSourceFilterChange}
                  variant="outlined"
                  size="small"
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="all">
                    <em>Alle Bronnen</em>
                  </MenuItem>

                  {wordSources.map((source) => (
                    <MenuItem key={source.id} value={source.value}>
                      {source.value}
                    </MenuItem>
                  ))}
                </Select>

              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <div onClick={() => setIsFlipped(!isFlipped)} className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <Card className="card-front">
          <CardContent>
            {currentResource && isWord(currentResource) && <WordCard resource={currentResource} />}
            {currentResource && isAlphabet(currentResource) && <AlphabetCard resource={currentResource} />}
            {currentResource && isNumber(currentResource) && <NumberCard resource={currentResource} />}
          </CardContent>
        </Card>
        <Card className="card-back">
          <CardContent>
            {currentResource && isWord(currentResource) && <WordCardBack resource={currentResource} />}
            {currentResource && isAlphabet(currentResource) && <AlphabetCardBack resource={currentResource} />}
            {currentResource && isNumber(currentResource) && <NumberCardBack resource={currentResource} />}
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