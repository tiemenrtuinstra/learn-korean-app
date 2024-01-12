// WordList.tsx
import React, { useState } from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
  Tooltip,
  Popover,
} from "@mui/material";
import { FaVolumeUp } from "react-icons/fa"; // import speaker icon
import words from "../words.json";

interface Word {
  hangul: string;
  romanisation: string;
  dutch: string;
}

const WordList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState<keyof Word>("hangul");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [showAll, setShowAll] = useState(false);
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (property: keyof Word) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowOne = () => {
    setShowAll(false);
  };

  const handleOpenPopover = (
    event: React.MouseEvent<HTMLButtonElement>,
    word: Word
  ) => {
    setSelectedWord(word);
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setSelectedWord(null);
    setAnchorEl(null);
  };

  const speak = (text: string, lang: string) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = lang;
    window.speechSynthesis.speak(speech);
  };

  const sortedWords = words.sort((a, b) => {
    const isAsc = order === "asc";
    if (a[orderBy] < b[orderBy]) {
      return isAsc ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return isAsc ? 1 : -1;
    }
    return 0;
  });

  const paginatedWords = showAll
    ? sortedWords
    : sortedWords.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 800, margin: "auto", marginTop: 2 }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
              <TableSortLabel
                active={orderBy === "hangul"}
                direction={orderBy === "hangul" ? order : "asc"}
                onClick={() => handleSort("hangul")}
              >
                Hangul
              </TableSortLabel>
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              Listen
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
              Romanisation
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
            <TableSortLabel
                active={orderBy === "dutch"}
                direction={orderBy === "dutch" ? order : "asc"}
                onClick={() => handleSort("dutch")}
              >
                Dutch
              </TableSortLabel>
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: "bold", color: "primary.main" }}>
                Listen
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedWords.map((word, index) => (
            <TableRow key={index}>
              <TableCell>
                <Tooltip title={word.romanisation} arrow>
                  <span>{word.hangul}</span>
                </Tooltip>
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => speak(word.hangul, "ko")}>
                  <FaVolumeUp />
                </IconButton>
              </TableCell>
              <TableCell>
                <span>{word.romanisation}</span>
              </TableCell>
              <TableCell>
                  <span>{word.dutch}</span>
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => speak(word.dutch, "nl")}>
                  <FaVolumeUp />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[1,5, 10, 25,sortedWords.length]}
        component="div"
        count={sortedWords.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page:"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to === -1 ? "All" : to} of ${count}`
        }
      />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {selectedWord && (
          <div>
            <div>{selectedWord.hangul}</div>
            <div>{selectedWord.romanisation}</div>
            <div>{selectedWord.dutch}</div>
          </div>
        )}
      </Popover>
    </TableContainer>
  );
};

export default WordList;
