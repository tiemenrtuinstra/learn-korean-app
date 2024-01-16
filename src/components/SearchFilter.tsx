// SearchFilter.tsx
import React from "react";
import {
  SelectChangeEvent,
  TextField,
  Select,
  MenuItem,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import words, { Word } from "../Words";

interface SearchFilterProps {
  searchTerm: string;
  handleSearch: (args: {
    event: React.ChangeEvent<HTMLInputElement>;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setFilteredWords: React.Dispatch<React.SetStateAction<Word[]>>;
    sourceFilter: string;
    words: Word[];
  }) => void;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setFilteredWords: React.Dispatch<React.SetStateAction<Word[]>>;
  words: Word[];
}

export const handleSearch = ({
  event,
  setSearchTerm,
  setFilteredWords,
  sourceFilter,
  words,
}: {
  event: React.ChangeEvent<HTMLInputElement>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setFilteredWords: React.Dispatch<React.SetStateAction<Word[]>>;
  sourceFilter: string;
  words: Word[];
}) => {
  const newSearchTerm = event.target.value.toLowerCase();
  setSearchTerm(newSearchTerm);

  setFilteredWords(
    words.filter((word) => {
      const matchesSource = sourceFilter ? word.source === sourceFilter : true;
      const matchesTerm =
        word.hangul.toLowerCase().includes(newSearchTerm) ||
        word.dutch.toLowerCase().includes(newSearchTerm);

      return matchesSource && matchesTerm;
    })
  );
};

export const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  handleSearch,
  setSearchTerm,
  setFilteredWords,
  words,
}) => {
  const [sourceFilter, setSourceFilter] = React.useState("");

  const handleSourceChange = (event: SelectChangeEvent<string>) => {
    setSourceFilter(event.target.value as string);
    handleSearch({
      event: {
        target: { value: searchTerm },
      } as React.ChangeEvent<HTMLInputElement>,
      setSearchTerm,
      setFilteredWords,
      sourceFilter: event.target.value as string,
      words,
    });
  };

  return (
    <div>
      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <form noValidate autoComplete="off">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Search"
                  variant="outlined"
                  value={searchTerm}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearch({
                      event,
                      setSearchTerm,
                      setFilteredWords,
                      sourceFilter,
                      words,
                    })
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  value={sourceFilter}
                  onChange={handleSourceChange}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {Array.from(new Set(words.map((item: any) => item.source)))
                    .sort()
                    .map((source, index) => (
                      <MenuItem key={index} value={source}>
                        {source}
                      </MenuItem>
                    ))}
                </Select>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
