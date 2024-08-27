import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CustomCard from '../components/Card';
import ValuesCard from '../components/ValuesCard';
import Footer from '../components/Footer';
import MotivationBox from '../components/MotivationBox';
import emailjs from 'emailjs-com';
import styles from '../styles/home.module.css';

const Homepage: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    plant: '',
    image: null
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSuccessMessage(null);
    setErrorMessage(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'file' ? files?.[0] || null : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.surname || !form.email || !form.plant) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    const formObject = {
      name: form.name,
      surname: form.surname,
      email: form.email,
      plant: form.plant,
    };

    try {
   
      await emailjs.send('service_jgawclq', 'template_gedzw5f', formObject, 'gTIz9zM9FyaFhrvU3');
      
     
      await emailjs.send('service_jgawclq', 'template_gxh492d', formObject, 'gTIz9zM9FyaFhrvU3');
      
      setSuccessMessage('Form submitted successfully! A confirmation email has been sent to you.');
      handleClose();
    } catch (err) {
      console.error('Failed to send email', err);
      setErrorMessage('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <Box>
      <Box sx={{ position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 1100 }}>
        <Navbar />
        <Header />
      </Box>

      <Box sx={{ marginTop: '100px', padding: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          <CustomCard />
        </Box>

        <Box
          sx={{
            marginTop: '20px', 
            position: 'relative',
            zIndex: 1,
          }}
        >
          <MotivationBox onOpenForm={handleOpen} />
          <ValuesCard />
        </Box>

        <Box
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20, 
            zIndex: 1000, 
            backgroundColor: 'rgba(64, 155, 212, 0.5)',
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            padding: 1,
          }}
        >
          <IconButton
            onClick={handleOpen}
            sx={{
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(64, 155, 212, 0.7)',
              },
            }}
          >
            <ChatIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Box>

        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute', 
              top: '50%',
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: '8px',
              zIndex: 1200, 
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#333',
                textAlign: 'center',
                marginBottom: 2,
                padding: '8px 16px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              Ajouter une Plainte
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Surname"
                name="surname"
                value={form.surname}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Plant"
                name="plant"
                value={form.plant}
                onChange={handleChange}
                required
              />
              <Button
                fullWidth
                variant="outlined"
                component="label"
                sx={{ mt: 2 }}
              >
                Upload Image
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  hidden
                  onChange={handleChange}
                />
              </Button>
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit
              </Button>
            </form>
            {successMessage && (
              <Typography color="green" sx={{ mt: 2, textAlign: 'center' }}>
                {successMessage}
              </Typography>
            )}
            {errorMessage && (
              <Typography color="red" sx={{ mt: 2, textAlign: 'center' }}>
                {errorMessage}
              </Typography>
            )}
          </Box>
        </Modal>
      </Box>
      <Footer />
    </Box>
  );
};

export default Homepage;
