import React, { useState, useEffect } from 'react';
import '../styles/Header.css'; // Importa el archivo CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [hoveredLogin, setHoveredLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú desplegable
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Estado para el diseño móvil

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        <a href="index.html" style={{ textDecoration: 'none' }}>
          <h1 className={`title ${isMobile ? 'mobile-title' : ''}`}>LANK</h1>
          <h2 className={`subtitle ${isMobile ? 'mobile-subtitle' : ''}`}>RESTAURANTE</h2>
        </a>
      </div>

      <div className="nav-container">
        {isMobile && (
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars"></i> {/* Ícono del menú */}
          </div>
        )}

        <nav className={`nav ${menuOpen && isMobile ? 'open' : ''}`}>
          <ul style={{ flexDirection: isMobile ? 'column' : 'row' }}>
            {['Inicio', 'Nosotros', 'Chef', 'Menú', 'Contacto'].map((item, index) => (
              <li key={index}>
                <a
                  href={`pages/${item.toLowerCase()}.html`}
                  className="nav-item"
                  onMouseEnter={() => setHoveredNavItem(index)}
                  onMouseLeave={() => setHoveredNavItem(null)}
                  style={hoveredNavItem === index ? { color: '#C78C19' } : {}}
                >
                  {item}
                </a>
              </li>
            ))}
            {isMobile && (
              <div className="login-container">
                <a href="pages/login.html">
                  <img
                    id="login-img"
                    src="/user.png"
                    alt="User Login"
                    className="login-img"
                  />
                </a>
                <a
                  href="pages/login.html"
                  className="login-link"
                  onMouseEnter={() => setHoveredLogin(true)}
                  onMouseLeave={() => setHoveredLogin(false)}
                  style={hoveredLogin ? { color: '#C78C19' } : {}}
                >
                  LOGIN
                </a>
              </div>
            )}
          </ul>
        </nav>

        {!isMobile && (
          <div className="login-container">
            <a href="pages/login.html">
              <img
                id="login-img"
                src="/user.png"
                alt="User Login"
                className="login-img"
              />
            </a>
            <a
              href="pages/login.html"
              className="login-link"
              onMouseEnter={() => setHoveredLogin(true)}
              onMouseLeave={() => setHoveredLogin(false)}
              style={hoveredLogin ? { color: '#C78C19' } : {}}
            >
              LOGIN
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
