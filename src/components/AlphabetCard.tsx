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

export const AlphabetCardBack = ({ resource }: { resource: Alphabet }) => (
  <>
    {resource && (
      <>
        <Typography variant="h3" align="center">
          {Array.isArray(resource.romanisation) ? resource.romanisation.join(', ') : resource.romanisation}
          {resource.remarks && ` (${resource.remarks})`}
        </Typography>
        <Typography variant="h5" align="center">{resource.type}</Typography>
      </>
    )}
  </>
);