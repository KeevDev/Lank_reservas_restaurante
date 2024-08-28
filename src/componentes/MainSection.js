import React, { useState } from 'react';
import { motion } from 'framer-motion';

const styles = {
  main: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    margin: 0,
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    zIndex: -1,
  },
  content: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
  },
  mensaje: {
    fontSize: '2rem',
    margin: '1rem',
    color: '#fff',
  },
  submensaje: {
    fontSize: '1.5rem',
    margin: '0.9rem',
    opacity: 0.6,
    color: '#fff',
  },
  boton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDAB84',
    padding: '1rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '2rem',
    marginTop: '10vh',
    transition: 'all 0.3s ease',
  },
  textoBoton: {
    fontSize: '1.2rem',
    color: '#fff',
    margin: 0,
    fontWeight: 'bold',
  },
};

const MainSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main style={styles.main}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          style={styles.banner}
          src="/banner.jpg"
          alt="Banner"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <motion.p
          style={styles.mensaje}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          EXPERIENCIA INNOVADORA
        </motion.p>
        <motion.p
          style={styles.submensaje}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Directo al paladar
        </motion.p>
        <motion.a
          href="pages/login.html"
          style={{
            ...styles.boton,
            ...(isHovered ? styles.botonHover : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <p style={styles.textoBoton}>RESERVA YA</p>
        </motion.a>
      </motion.div>
    </main>
  );
};

export default MainSection;
