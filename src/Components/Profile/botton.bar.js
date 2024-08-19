// TopBar.js
import React, { useState } from 'react';
import './BottomBar.css'; // Asegúrate de tener este archivo para los estilos

const TopBar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
  };

  return (
    <div className="top-bar">
      <div className="language-selector">
        <span>EN</span> {/* Cambia esto por un selector de idiomas si es necesario */}
      </div>
      <div className="profile-container">
        <img
          src="https://via.placeholder.com/40" // Reemplaza con la URL de la foto de perfil
          alt="Profile"
          className="profile-picture"
          onClick={toggleProfileMenu}
        />
        {isProfileMenuOpen && (
          <div className="profile-menu">
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
