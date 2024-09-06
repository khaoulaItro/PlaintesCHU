import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MapComponent from '../components/MapComponent';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface FooterProps {
  darkMode: boolean;
  onRatingSubmit: (rating: number) => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Footer: React.FC<FooterProps> = ({ darkMode, onRatingSubmit }) => {
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        bgcolor: darkMode ? '#333' : '#f0f0f0',
        color: darkMode ? '#f0f0f0' : '#000',
        padding: '2rem',
        textAlign: 'center',
        borderTop: `1px solid ${darkMode ? '#555' : '#e0e0e0'}`,
        marginTop: '2rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
 
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Coordonnées de l'Hôpital
          </Typography>
          <Typography variant="body1" gutterBottom>
            LOTISSEMENT N 01, OUJDA 60050 · 47 km
          </Typography>
          <Typography variant="body1" gutterBottom>
            Téléphone: +56723 456 789
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: CHU@OUJDA.com
          </Typography>

          <Box sx={{ marginTop: '1rem' }}>
            <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FacebookIcon fontSize="large" sx={{ color: darkMode ? '#1877F2' : '#4267B2' }} />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
              <InstagramIcon fontSize="large" sx={{ color: darkMode ? '#C13584' : '#E1306C' }} />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
              <TwitterIcon fontSize="large" sx={{ color: darkMode ? '#1DA1F2' : '#1DA1F2' }} />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Localisation de l'Hôpital
          </Typography>
          <Box sx={{ width: '100%', maxWidth: '500px', height: '300px' }}>
            <MapComponent />
          </Box>
        </Box>
      </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertMessage.includes("Votre note") ? "success" : "warning"} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;
