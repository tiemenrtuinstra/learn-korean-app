import React from 'react';
import { AlertType } from './AlertCard'; // Import the missing type declaration

export interface AlertLetterProps {
  alertType: AlertType;
  text: string;
}

const AlertLetter: React.FC<AlertLetterProps> = ({ alertType, text }) => {

  return (
    <p className={`text text-${alertType}`} role="alert" dangerouslySetInnerHTML={{ __html: text }} />
  );
}
export default AlertLetter;