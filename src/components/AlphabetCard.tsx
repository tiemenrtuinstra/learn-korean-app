// AlphabetCard.tsx
import React from 'react';
import {
  Typography,
} from "@mui/material";
import { Alphabet } from '../dto/types';

export const AlphabetCard = ({ resource }: { resource: Alphabet }) => (
  <>
    {resource && (
      <Typography variant="h2" align="center" className='hangulFont'>{resource.hangul}</Typography>
    )}
  </>
);

export const AlphabetCardBack = ({ resource, showRomanisation }: { resource: Alphabet; showRomanisation: boolean }) => (
  <>
    {resource && (
      <>
        <Typography variant="h5" align="center">{resource.type}</Typography>
      </>
    )}
  </>
);
