// WordCard.tsx
import React from 'react';
import {
    Typography,
} from "@mui/material";
import { Word } from '../dto/types';

export const WordCard = ({ resource, showRomanisation }: { resource: Word; showRomanisation: boolean }) => (
    <>
        {resource && (
            <>
                <Typography variant="h2" align="center" className='hangulFont'>{resource.hangul}</Typography>
                {showRomanisation && (
                    <Typography variant="h5" align="center">{resource.romanisation}</Typography>
                )}
            </>
        )}
    </>
);

export const WordCardBack = ({ resource }: { resource: Word }) => (
    <>
        {resource && (
            <>
                <Typography variant="h3" align="center">{resource.dutch}</Typography>
                <Typography variant="h5" align="center">{resource.source}</Typography>
            </>
        )}
    </>
);