import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';  
import AdminPage from './pages/AdminPage';
import Homepage from './pages/Homepage';
import Login from './pages/Login'; 


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div style={{ 
            backgroundColor: darkMode ? '#121212' : '#f5f5f5', 
            color: darkMode ? '#ffffff' : '#000000', 
            minHeight: '100vh', 
            transition: 'background-color 0.3s, color 0.3s' 
          }}>
            <Routes>
              <Route path="/" element={<Homepage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} /> 
              <Route path="/login" element={<Login darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} /> 
               <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
