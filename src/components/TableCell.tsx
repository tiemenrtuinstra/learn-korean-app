// TableCellComponents.tsx
import React from "react";
import { TableCell, IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Word } from "../Words";

export const ListenCell = ({
  text,
  lang,
}: {
  text: string | null;
  lang: string;
}) => (
  <TableCell align="right">
    {text && (
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
    )}
  </TableCell>
);

export const LanguageCell = ({ word, field }: { word: any; field: string }) => (
  <TableCell>
    <span>{word[field]}</span>
  </TableCell>
);
