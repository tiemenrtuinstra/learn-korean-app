// NumberCard.tsx
import React from 'react';
import { KoreanNumber, SinoKoreanNumber } from '../Numbers';
import {
    Typography,
} from "@mui/material";

export const NumberCard = ({ resource }: { resource: KoreanNumber | SinoKoreanNumber }) => (
    <>
        <Typography variant="h2" align="center">{resource.hangul}</Typography>
        <Typography variant="h5" align="center">{resource.romanisation}</Typography>
        <Typography variant="h6" align="center">{resource.number}</Typography>
        <Typography align="center">{resource.type}</Typography>
        
    </>
);