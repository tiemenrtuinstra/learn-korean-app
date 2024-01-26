import React from 'react';
import { Severity } from './AlertCard'; // Import the missing type declaration

export interface AlertLetterProps {
  severity: Severity;
  text: string;
}

const AlertLetter: React.FC<AlertLetterProps> = ({ severity, text }) => {

  return (
    <span className={`text text-${severity}`} role="alert" dangerouslySetInnerHTML={{ __html: text }} />
  );
}
export default AlertLetter;