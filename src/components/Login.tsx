
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
   
    console.log('Email:', email);
    console.log('Password:', password);
    
    navigate('/');
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        backgroundColor: '#f5f5f5'
      }}
    >
      <Paper 
        sx={{ 
          padding: 3, 
          maxWidth: 400, 
          width: '100%', 
          boxShadow: 3 
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField 
          label="Email" 
          type="email" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ marginTop: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
