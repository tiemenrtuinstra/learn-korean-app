// WordList.tsx
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import words from "../Words";
import { Word } from "../dto/types";
import { handleSearch, SearchFilter } from "../components/SearchFilter";
import { LanguageCell, ListenCell, LanguageHeadCell, ListenHeadCell } from "../components/TableCell";

const WordList = ({ showRomanisation, setShowRomanisation }: { showRomanisation: boolean, setShowRomanisation: (value: boolean) => void }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  /*eslint-disable-next-line*/
  const [showAll, setShowAll] = useState(false);
  // Add state for sorting
  const [sortField, setSortField] = React.useState<keyof Word | null>("hangul");
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
    "asc"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWords, setFilteredWords] = useState(words);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Function to handle sorting
  const handleSort = (field: keyof Word) => {
    const isAsc = sortField === field && sortDirection === "asc";
    setSortField(field);
    setSortDirection(isAsc ? "desc" : "asc");
  };

  // Assuming words is an array of Word objects and you want to sort by the 'english' field

  const sortedWords = [...filteredWords].sort((a, b) => {
    if (!sortField) {
      return 0;
    }
    const aValue = a[sortField];
    const bValue = b[sortField];
    if (aValue === undefined || bValue === undefined) {
      return 0;
    }
    if (aValue < bValue) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const paginatedWords = showAll
    ? sortedWords
    : sortedWords.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (

    <div style={{ marginBottom: '14px' }} className='max-width'>
      <SearchFilter
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        setSearchTerm={setSearchTerm}
        setFilteredWords={setFilteredWords}
        words={words}
      />
      <TableContainer component={Paper} className='max-width'
        sx={{ margin: "auto", marginTop: 2 }}
      >

        <Table className="wordlist-table max-width">
          <TableHead>
            <TableRow>
              <LanguageHeadCell
                language="hangul"
                fieldTitle="한글"
                sortField={sortField ? sortField.toString() : ""}
                sortDirection={sortDirection}
                handleSort={handleSort}
              />
              {showRomanisation && (
                <TableCell sx={{ fontWeight: "bold" }}>Romanisatie</TableCell>
              )}
              <ListenHeadCell />
              <LanguageHeadCell
                language="dutch"
                fieldTitle="Nederlands"
                sortField={sortField || ""}
                sortDirection={sortDirection}
                handleSort={handleSort}
              />
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedWords.map((word, index) => (
              <TableRow key={index}>
                <LanguageCell word={word} field="hangul" />
                {showRomanisation && (
                  <LanguageCell word={word} field="romanisation" />
                )}
                <ListenCell text={word.hangul} lang="ko" />
                <LanguageCell word={word} field="dutch" />
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={filteredWords.length > 10 ? [1, 5, 10, 25, filteredWords.length] : []}
          component="div"
          count={filteredWords.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Aantal"

        />
      </TableContainer>

    </div>
  );
};

export default WordList;
