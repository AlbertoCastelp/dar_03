// App.js
import React, { useState } from 'react';
import PublicComponent from './PublicComponent';
import PrivateComponent from './PrivateComponent';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <h1>Aplicación Curiosa</h1>
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <button onClick={handleLogout}>Cerrar Sesión</button>

      <PublicComponent />

      {isLoggedIn && <PrivateComponent />}
    </div>
  );
};

export default App;
