// NumberCard.tsx
import React from 'react';

import {
    Typography,
} from "@mui/material";
import { KoreanNumber, SinoKoreanNumber } from '../dto/types';

export const NumberCard = ({ resource }: { resource: KoreanNumber | SinoKoreanNumber }) => (
    <>
        <Typography variant="h2" align="center" className='hangulFont'>{resource.hangul}</Typography>
        <Typography variant="h5" align="center">{resource.romanisation}</Typography>
    </>
);

export const NumberCardBack = ({ resource }: { resource: KoreanNumber | SinoKoreanNumber }) => (
    <>
        <Typography variant="h3" align="center">{resource.number}</Typography>
        <Typography align="center">{resource.type}</Typography>
    </>
);