import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';

// Definición de elementos de navegación
const navItems = ['Inicio', 'Nosotros', 'Chef', 'Menú', 'Contacto'];

// Hook personalizado para obtener el tamaño de la ventana
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

const HeaderComponent = () => {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const size = useWindowSize();
  const isMobile = size.width <= 768; // Determina si es móvil o no

  const handleMouseEnter = (index) => {
    setHoveredNavItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredNavItem(null);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Definición de estilos
  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '15vh',
      background: 'black',
      borderBottom: '0.75vh solid #FDAB84',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1rem',
      boxSizing: 'border-box',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      color: '#FDAB84',
      fontSize: isMobile ? '7vw' : '3.5vw',
      fontFamily: 'Gideon Roman',
      fontWeight: 400,
      margin: 0,
      marginLeft: '1vw',
    },
    subtitle: {
      color: '#FDAB84',
      fontSize: isMobile ? '4vw' : '1.5vw',
      fontFamily: 'Encode Sans Expanded',
      fontWeight: 400,
      margin: 0,
      marginLeft: '1vw',
    },
    menuIcon: {
      display: isMobile ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'flex-end', // Alinea el icono a la derecha
      fontSize: '2rem',
      color: '#FDAB84',
      cursor: 'pointer',
      position: 'absolute', // Posiciona el icono de forma absoluta
      right: '5vw', // Espacio desde la derecha
      top: '50%', // Posiciona el icono en el medio vertical
      transform: 'translateY(-50%)', // Centra verticalmente el icono
    },
    navLoginContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    nav: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    navList: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    navItem: (isHovered) => ({
      padding: '0.5rem 1rem',
      fontWeight: 'bold',
      fontSize: isHovered ? '1.6rem' : '1.4rem',
      textDecoration: 'none',
      transition: 'color 0.3s ease, font-size 0.3s ease',
      cursor: 'pointer',
      margin: 10,
    }),
    link: {
      color: '#FDAB84', // Asegura que el color de los enlaces sea #FDAB84
      textDecoration: 'none',
    },
    loginContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: 'auto', // Empuja el loginContainer a la derecha
      marginBottom: isMobile ? '6vw' : 0,
      marginTop: isMobile ? '2vh' : 0,
    },
    loginImg: {
      width: isMobile ? '16vw' : '4vw',
      height: isMobile ? '16vw' : '4vw',
      marginBottom: isMobile ? '1vh' : 0,
      transition: 'all 0.5s',
    },
    loginLink: (hovered) => ({
      color: hovered ? '#C78C19' : '#FDAB84',
      fontSize: isMobile ? '4vw' : '1vw',
      marginTop: isMobile ? '1vh' : 0,
      fontFamily: 'Encode Sans Expanded',
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: 'all 0.4s',
    }),
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <a href="index.html" style={{ textDecoration: 'none' }}>
          <h1 style={styles.title}>LANK</h1>
          <h2 style={styles.subtitle}>RESTAURANTE</h2>
        </a>
      </div>

      {/* Icono del menú en vista móvil */}
      <div style={styles.menuIcon} onClick={handleMenuToggle}>
        <i className="fas fa-bars"></i>
      </div>

      {/* Contenedor de Navegación y Login */}
      <div style={styles.navLoginContainer}>
        {/* Navegación para PC */}
        {!isMobile && (
          <nav style={styles.nav}>
            <ul style={styles.navList}>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  style={styles.navItem(hoveredNavItem === index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href={`#${item.toLowerCase()}`} style={styles.link}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Login para PC */}
        {!isMobile && (
          <div style={styles.loginContainer}>
            <a href="pages/login.html">
              <motion.img
                id="login-img"
                src="/user.png"
                alt="User Login"
                style={styles.loginImg}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </a>
            <a
              href="pages/login.html"
              style={styles.loginLink(hoveredNavItem === 'login')}
              onMouseEnter={() => setHoveredNavItem('login')}
              onMouseLeave={() => setHoveredNavItem(null)}
            >
              <motion.span
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, color: '#C78C19' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                LOGIN
              </motion.span>
            </a>
          </div>
        )}
      </div>

      {/* Navegación y Login para dispositivos móviles */}
      {isMobile && (
        <nav
          style={{
            ...styles.nav,
            position: 'absolute',
            top: '15vh',
            left: 0,
            width: '100%',
            backgroundColor: 'black',
            display: isMenuOpen ? 'block' : 'none',
          }}
        >
          <div style={styles.loginContainer}>
            <a href="about.js">
              <motion.img
                id="login-img"
                src="/user.png"
                alt="User Login"
                style={styles.loginImg}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </a>
            <a
              href="pages/login.html"
              style={styles.loginLink(hoveredNavItem === 'login')}
              onMouseEnter={() => setHoveredNavItem('login')}
              onMouseLeave={() => setHoveredNavItem(null)}
            >
              <motion.span
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, color: '#C78C19' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                LOGIN
              </motion.span>
            </a>
          </div>
          <ul style={styles.navList}>
            {navItems.map((item, index) => (
              <li
                key={index}
                style={styles.navItem(hoveredNavItem === index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
              >
                <a href={`#${item.toLowerCase()}`} style={styles.link}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HeaderComponent;
