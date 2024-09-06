import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography, IconButton, Button, Snackbar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { addRating } from './ratingsSlice'; 

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface FooterProps {
  darkMode: boolean;
  onRatingSubmit: (rating: number) => void;
}

const Footer: React.FC<FooterProps> = ({ darkMode, onRatingSubmit }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const dispatch = useDispatch();

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSubmitRating = () => {
    if (selectedRating !== null) {
      setAlertMessage(`Votre note de ${selectedRating} étoile(s) a été envoyée.`);
      dispatch(addRating(selectedRating));
      onRatingSubmit(selectedRating); 
      setSelectedRating(null);
    } else {
      setAlertMessage('Veuillez sélectionner une note avant de soumettre.');
    }
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h6">Donnez votre avis</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <IconButton
            key={star}
            onClick={() => handleRatingClick(star)}
            sx={{ color: selectedRating !== null && selectedRating >= star ? '#FFD700' : '#ccc' }}
          >
            <StarIcon fontSize="large" />
          </IconButton>
        ))}
      </Box>
      {selectedRating !== null && (
        <Typography variant="body2" gutterBottom>
          {["Très insatisfait", "Insatisfait", "Neutre", "Satisfait", "Très satisfait"][selectedRating - 1]}
        </Typography>
      )}
      <Button variant="contained" color="primary" onClick={handleSubmitRating}>
        Envoyer votre avis
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={selectedRating !== null ? "success" : "warning"}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;
