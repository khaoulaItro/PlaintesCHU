import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Login from './components/Login'; // Import the Login component

const App: React.FC = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Homepage route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
