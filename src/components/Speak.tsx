// SpeakButton.tsx
import React from "react";
import { ButtonBase, Card, CardContent, IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

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
      onClick={() => {
        const speech = new SpeechSynthesisUtterance();
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
      <ButtonBase color={"secondary"} onClick={() => {
        const speech = new SpeechSynthesisUtterance();
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
