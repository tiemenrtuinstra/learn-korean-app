// SpeakButton.tsx
import React from "react";
import { IconButton } from "@mui/material";
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