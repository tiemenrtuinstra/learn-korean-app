// TableHeadCellComponents.tsx
import React from "react";
import { TableCell, TableSortLabel } from "@mui/material";

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
  <TableCell sx={{ fontWeight: "bold" }}>
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
  <TableCell align="right" sx={{ fontWeight: "bold", }}>
    Listen
  </TableCell>
);
