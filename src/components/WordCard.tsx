// WordCard.tsx
import React from 'react';
import { Word } from '../Words';
import {
    Typography,
} from "@mui/material";

export const WordCard = ({ resource }: { resource: Word }) => (
    <>
        <Typography variant="h2" align="center">{resource.hangul}</Typography>
        <Typography variant="h5" align="center">{resource.romanisation}</Typography>
        <Typography align="center">{resource.dutch}</Typography>
    </>
);