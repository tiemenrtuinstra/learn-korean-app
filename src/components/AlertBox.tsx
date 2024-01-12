// AlertBox.tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

interface AlertBoxProps {
  open: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const AlertBox: React.FC<AlertBoxProps> = ({ open, type, message, onClose }) => {
  const [openSnackbar, setOpenSnackbar] = React.useState(open);

  React.useEffect(() => {
    setOpenSnackbar(open);
    const timer = setTimeout(onClose, 3000); // close after 3 seconds
    return () => clearTimeout(timer); // cleanup on unmount
  }, [open, onClose]);

  return (
    <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={onClose}>
      <Alert severity={type} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
export default AlertBox;