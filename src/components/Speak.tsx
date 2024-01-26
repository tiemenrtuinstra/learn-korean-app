// SpeakButton.tsx
import React from "react";
import { ButtonBase, Card, CardContent, IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const speech = new SpeechSynthesisUtterance();
speech.volume = 1;

export const SpeakButton = ({
  text,
  lang,
}: {
  text: string | null;
  lang: string;
}) => {
  if (!text) {
    return null;
  }

  return (
    <IconButton
      vocab="speak"
      onClick={() => {
        speech.text = text;
        speech.lang = lang;
        window.speechSynthesis.speak(speech);
      }}
    >
      <VolumeUpIcon />
    </IconButton>
  );
};

export const SpeakCard = ({
  text,
  cardContent,
  lang,
}: {
  text: string | null;
  cardContent: React.ReactNode;
  lang: string;
}) => {
  if (!text) {
    return null;
  }

  return (
    <Card className={"speak-card"}>
      <ButtonBase onClick={() => {
        speech.text = text;
        speech.lang = lang;
        window.speechSynthesis.speak(speech);
      }}>
        <CardContent>
          {cardContent}

        </CardContent>
      </ButtonBase>
    </Card>
  );
}
