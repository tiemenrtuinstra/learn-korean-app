import React, { FC } from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import wordSources from '../../Words';
import { WordSource } from '../../dto/types';

interface WordSourceSelectProps {
    sourceFilter: string;
    wordSources: WordSource[];
    handleSourceChange: (event: SelectChangeEvent<string>) => void; // Update the type of the handleSourceChange prop
}

const WordSourceSelect: FC<WordSourceSelectProps> = ({ sourceFilter, wordSources, handleSourceChange }) => (
    <Select
        value={sourceFilter}
        variant="outlined"
        size="small"
        onChange={handleSourceChange} // Update the type of the onChange prop
        displayEmpty
        fullWidth
    >
        <MenuItem value="">
            <em>Alle categorieën</em>
        </MenuItem>
        {wordSources.map((source) => (
            <MenuItem key={source.id} value={source.value}>
                {source.value}
            </MenuItem>
        ))}
    </Select>
);

export default WordSourceSelect;