// TableCellComponents.tsx
import React from "react";
import { IconButton, Popover, TableCell, Typography } from "@mui/material";
import { SpeakButton } from "./Speak";

export const ListenCell = ({
  text,
  lang,
}: {
  text: string | null;
  lang: string;
}) => (
  <TableCell align="center" style={{width:"10px"}}>
    <SpeakButton text={text} lang={lang} />
  </TableCell>
);

export const LanguageCell = ({ word, field }: { word: any; field: string }) => (
  <TableCell>
    <span>{word[field]}</span>
  </TableCell>
);
