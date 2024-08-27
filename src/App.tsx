import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Login from './components/Login'; 

const App: React.FC = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/login" element={<Login />} /> 
       
      </Routes>
    </Router>
  );
};

export default App;
