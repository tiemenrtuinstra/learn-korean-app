// AlphabetCard.tsx
import React from 'react';
import { Alphabet } from '../Alphabet';
import {
  Typography,
} from "@mui/material";
import { ResourceType } from '../Resources';

export const AlphabetCard = ({ resource }: { resource: Alphabet }) => (
  <>
    <Typography variant="h2" align="center" className='hangulFont'>{resource.hangul}</Typography>
  </>

);

export const AlphabetCardBack = ({ resource }: { resource: Alphabet }) => (
  <>
    <Typography variant="h2" align="center">{Array.isArray(resource.romanisation) ? resource.romanisation.join(', ') : resource.romanisation}
      {resource.remarks && ` (${resource.remarks})`}
    </Typography>
    <Typography variant="h5" align="center">{resource.type}</Typography>
  </>
);