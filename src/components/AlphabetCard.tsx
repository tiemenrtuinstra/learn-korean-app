// AlphabetCard.tsx
import React from 'react';
import { Alphabet } from '../Alphabet';
import {
  Typography,
} from "@mui/material";

export const AlphabetCard = ({ resource }: { resource: Alphabet }) => (
  <>
    <Typography variant="h2" align="center">{resource.hangul}</Typography>
    <Typography variant="h5" align="center">{Array.isArray(resource.romanisation) ? resource.romanisation.join(', ') : resource.romanisation}
      {resource.remarks && ` (${resource.remarks})`}
    </Typography>
    <Typography align="center">{resource.type}</Typography>
  </>

);