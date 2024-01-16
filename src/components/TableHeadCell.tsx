// TableHeadCellComponents.tsx
import React from "react";
import { TableCell, TableSortLabel } from "@mui/material";

export const LanguageHeadCell = ({
  language,
  sortField,
  sortDirection,
  handleSort,
}: {
  language: string;
  sortField: string;
  sortDirection: string;
  handleSort: Function;
}) => (
  <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
    <TableSortLabel
      active={sortField === language}
      direction={
        sortField === language ? (sortDirection as "asc" | "desc") : "asc"
      }
      onClick={() => handleSort(language)}
    >
      {language.charAt(0).toUpperCase() + language.slice(1)}
    </TableSortLabel>
  </TableCell>
);

export const ListenHeadCell = () => (
  <TableCell align="right" sx={{ fontWeight: "bold", color: "primary.main" }}>
    Listen
  </TableCell>
);
