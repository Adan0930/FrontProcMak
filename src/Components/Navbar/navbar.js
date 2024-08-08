import React from "react";
import{Link} from 'react-router-dom';
import './stylesNav.css';
const Navbar = ()=>{
    return (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <img src="images/Logo-ProcMak.svg" className="Logo-Home"/>
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-links">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-links">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links">
                  Contacto
                </Link>
              </li>

              <li className="button-login">
                <Link to="/login" className="nav-links-btn">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
};

export default Navbar;