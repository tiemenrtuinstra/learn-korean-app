// TableCellComponents.tsx
import React from "react";
import { TableCell, TableSortLabel } from "@mui/material";
import { SpeakButton } from "./Speak";

export const ListenCell = ({
  text,
  lang,
}: {
  text: string | null;
  lang: string;
}) => (
  <TableCell align="center" style={{ width: "10px" }}>
    <SpeakButton text={text} lang={lang} />
  </TableCell>
);

export const LanguageCell = ({ word, field }: { word: any; field: string }) => (
  <TableCell>
    <span>{word[field]}</span>
  </TableCell>
);


export const LanguageHeadCell = ({
  language,
  fieldTitle,
  sortField,
  sortDirection,
  handleSort,
}: {
  language: string;
  fieldTitle?: string;
  sortField: string;
  sortDirection: string;
  handleSort: Function;
}) => (
  <TableCell className={language === 'hangul' ? "hangulFont" : ""} sx={{ fontWeight: "bold" }}>
    <TableSortLabel
      active={sortField === language}
      direction={
        sortField === language ? (sortDirection as "asc" | "desc") : "asc"
      }
      onClick={() => handleSort(language)}
    >
      {fieldTitle ? fieldTitle : language.charAt(0).toUpperCase() + language.slice(1)}
    </TableSortLabel>
  </TableCell>
);

export const ListenHeadCell = () => (
  <TableCell className={"hangulFont"} align="right" sx={{ fontWeight: "bold", }}>
    듣다
  </TableCell>
);
