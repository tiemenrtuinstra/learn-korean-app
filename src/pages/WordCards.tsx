// WordList.tsx
import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

import { WordCard } from '../components/WordCard';
import { AlphabetCard } from '../components/AlphabetCard';
import { NumberCard } from '../components/NumberCard';

import { ResourceType, combinedResources } from "../Resources";

import { SpeakButton } from "../components/Speak";
import { Alphabet } from "../Alphabet";
import { Word, WordSource } from "../Words";
import { KoreanNumber, SinoKoreanNumber } from '../Numbers';

const WordCards = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [resourceType, setResourceType] = useState<string | null>(null);



  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % combinedResources.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + combinedResources.length) % combinedResources.length);
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

  const currentResource = combinedResources[currentIndex];

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

    <div>

      <Card sx={{ maxWidth: 800, margin: "auto", marginTop: 2 }}>
        <CardContent>
          {isWord(currentResource) && <WordCard resource={currentResource} />}
          {isAlphabet(currentResource) && <AlphabetCard resource={currentResource} />}
          {isNumber(currentResource) && <NumberCard resource={currentResource} />}
        </CardContent>

        <Box
          component="span"
          m={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button variant="contained" size="medium" color="primary" onClick={handlePrev}>Vorige</Button>
          {resourceType}
          <SpeakButton text={currentResource.hangul} lang="ko" />
          <Button variant="contained" size="medium" color="primary" onClick={handleNext}>Volgende</Button>
        </Box>
      </Card>
    </div>
  );
};

export default WordCards;