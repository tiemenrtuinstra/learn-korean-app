// WordCard.tsx
import React from 'react';
import { Word } from '../Words';
import {
    Typography,
} from "@mui/material";
import { ResourceType } from '../Resources';

export const WordCard = ({ resource }: { resource: Word }) => (
    <>
        <Typography variant="h2" align="center" className='hangulLetter'>{resource.hangul}</Typography>
        <Typography variant="h5" align="center">{resource.romanisation}</Typography>
    </>
);

export const WordCardBack = ({ resource }: { resource: Word }) => (
    <>
        <Typography variant="h5" align="center">{resource.dutch}</Typography>
    </>
);