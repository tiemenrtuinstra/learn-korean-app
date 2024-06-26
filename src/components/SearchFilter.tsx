// SearchFilter.tsx
import React from "react";
import {
  SelectChangeEvent,
  TextField,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { wordSources } from "../Words";
import WordSourceSelect from "../components/form/WordSourceSelect";
import { Word } from "../dto/types";

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
  words
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
      <Card className="table-filter max-width" sx={{  margin: "auto", marginTop: 2 }}>
        <CardContent>
          <form noValidate autoComplete="off">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Zoeken"
                  variant="outlined"
                  size="small"
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
                <WordSourceSelect
                  sourceFilter={sourceFilter}
                  wordSources={wordSources}
                  handleSourceChange={handleSourceChange}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
