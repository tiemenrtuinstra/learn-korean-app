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
import { AlphabetType, NumberType, ResourceType } from "../dto/enums";
import { Alphabet, Word, KoreanNumber, SinoKoreanNumber } from "../dto/types";
import { wordSources } from '../Words';

const WordCards = ({ showRomanisation, setShowRomanisation }: { showRomanisation: boolean, setShowRomanisation: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');

  const handleCategoryFilterChange = useCallback((event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCategoryFilter(event.target.value);
    setSourceFilter('all');
  }, []);

  const handleSourceFilterChange = useCallback((event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSourceFilter(event.target.value);
  }, []);

  useEffect(() => {
    setSourceFilter('all');
    setCurrentIndex(0);
  }, [categoryFilter]);

  const filteredResource = useMemo(() => {
    let result = combinedResources;

    if (categoryFilter !== 'all') {
      result = result.filter(resource => resource.resource === categoryFilter);
    }
    if (sourceFilter !== 'all') {
      console.log('sourceFilter', sourceFilter);
      console.log('sourceFilter voor result', result);
      switch (categoryFilter) {
        case ResourceType.Word:
          result = result.filter(resource => resource && resource.resource === ResourceType.Word && resource.source === sourceFilter)
            .map(resource => {
              console.log('resource', resource);
              return resource;
            });
          break;
        case ResourceType.Alphabet:
          result = result.filter(resource => resource && resource.resource === ResourceType.Alphabet && resource.type === sourceFilter)
            .map(resource => {
              console.log('resource', resource);
              return resource;
            });
          break;
        case ResourceType.Number:
          result = result.filter(resource => resource && resource.resource === ResourceType.Number && resource.type === sourceFilter)
            .map(resource => {
              console.log('resource', resource);
              return resource;
            });
          break;
      }
      console.log('sourceFilter na result', result);
    }

    return result;
  }, [categoryFilter, sourceFilter]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredResource.length);
  }, [filteredResource]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredResource.length) % filteredResource.length);
  }, [filteredResource]);

  const currentResource = filteredResource[currentIndex];

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
              {/* Only show source filter when a category is selected */
                categoryFilter === ResourceType.Word.toString() ||
                  categoryFilter === ResourceType.Alphabet.toString() ||
                  categoryFilter === ResourceType.Number.toString() ? <Grid item xs={12}>
                  <Select value={sourceFilter} onChange={handleSourceFilterChange}
                    variant="outlined"
                    size="small"
                    displayEmpty
                    fullWidth
                  >
                    <MenuItem value="all">
                      <em>Alle {currentResource.resource.valueOf()}</em>
                    </MenuItem>

                    {isWord(currentResource) ?
                      wordSources.map((source) => (
                        <MenuItem key={source.value} value={source.value}>
                          {source.value}
                        </MenuItem>
                      )) : <></>}

                    {isAlphabet(currentResource) ?
                      Object.values(AlphabetType).map((value) => (
                        <MenuItem key={value} value={value}>
                          {value}
                        </MenuItem>
                      )) : <></>}

                    {isNumber(currentResource) ?
                      Object.values(NumberType).map((value) => (
                        <MenuItem key={value} value={value}>
                          {value}
                        </MenuItem>
                      )) : <></>}
                  </Select>
                </Grid> : <></>

              }

            </Grid>
          </form>
        </CardContent>
      </Card>

      <div onClick={() => setIsFlipped(!isFlipped)} className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <Card className="card-front">
          <CardContent>
            {currentResource && isWord(currentResource) && <WordCard resource={currentResource} showRomanisation={showRomanisation} />}
            {currentResource && isAlphabet(currentResource) && <AlphabetCard resource={currentResource} />}
            {currentResource && isNumber(currentResource) && <NumberCard resource={currentResource} showRomanisation={showRomanisation} />}
          </CardContent>
        </Card>
        <Card className="card-back">
          <CardContent>
            {currentResource && isWord(currentResource) && <WordCardBack resource={currentResource} />}
            {currentResource && isAlphabet(currentResource) && <AlphabetCardBack resource={currentResource} showRomanisation={showRomanisation} />}
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