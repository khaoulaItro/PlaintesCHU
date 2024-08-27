import React from 'react';

interface LoginProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Login: React.FC<LoginProps> = ({ darkMode, toggleDarkMode }) => {


  return (
    <div>
      
      <p>The current mode is {darkMode ? 'Dark' : 'Light'}</p>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      
    </div>
  );
};

export default Login;
