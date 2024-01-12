// AlertBox.tsx
import React from 'react';
import Alert from '@mui/material/Alert';

interface AlertBoxProps {
  open: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const AlertBox: React.FC<AlertBoxProps> = ({ open, type, message, onClose }) => {
  if (!open) return null;

  return (
    <Alert severity={type} onClose={onClose}>
      {message}
    </Alert>
  );
}

export default AlertBox;