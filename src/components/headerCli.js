import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Definición de elementos de navegación
const navItems = [
  { name: 'Reservas', path: '/Reservas' },
  { name: 'Tu Perfil', path: '/Profile' },
];

const HeaderCli = ({ userName }) => { // Recibe el nombre del usuario como prop
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
    
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
    menuIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      fontSize: '2rem',
      color: '#FDAB84',
      cursor: 'pointer',
      position: 'absolute',
      right: '5vw',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    nav: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    navList: {
      display: 'flex',
      flexDirection: 'row',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    navItem: (isActive, isHovered) => ({
      padding: '0.5rem 1rem',
      fontWeight: 'bold',
      fontSize: isHovered ? '1.6rem' : '1.4rem',
      textDecoration: 'none',
      transition: 'color 0.3s ease, font-size 0.3s ease',
      cursor: 'pointer',
      margin: 10,
      color: isActive ? '#C78C19' : '#FDAB84', // Cambia el color si el ítem está activo
    }),
    link: {
      color: 'inherit', // Hereda el color del ítem de navegación
      textDecoration: 'none',
    },
    userName: {
      color: '#FDAB84',
      fontWeight: 'bold',
      marginRight: '1rem',
    },
    menuDropdown: {
      display: 'flex',
      // Alineación horizontal del menú desplegable
      position: 'absolute',
      flexDirection: 'column', 
      borderRadius: 8,
      top: '15vh',
      right: 0,
      backgroundColor: 'black',
      padding: '1rem',
    },
  };

  return (
    <header style={styles.header}>
      {/* Nombre del usuario */}
      <div style={styles.userName}>{userName}</div>

      {/* Icono del menú en vista móvil */}
      <div style={styles.menuIcon} onClick={handleMenuToggle}>
        <i className="fas fa-bars"></i>
      </div>

      {/* Menú desplegable para móvil */}
      {isMenuOpen && (
        <nav style={styles.menuDropdown}>
          <ul style={styles.navList}>
            {navItems.map((item, index) => (
              <li
                key={index}
                style={styles.navItem(window.location.pathname === item.path, hoveredNavItem === index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => setMenuOpen(false)} // Cierra el menú después de seleccionar una opción
              >
                <NavLink 
                  to={item.path} 
                  style={styles.link}
                  isActive={(match, location) => location.pathname === item.path} // Verifica si el enlace está activo
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HeaderCli;
