import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header';

// Ruta de la imagen del menú; reemplaza esta con la ruta correcta
const menuImage = '/1.png';  // Reemplaza con la ruta de tu imagen

const styles = {
  main: {
    backgroundColor: "#002b36",  // Color de fondo ajustado
    width: "100vw",
    height: "100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',  // Agrega un poco de padding para márgenes en dispositivos móviles
    boxSizing: 'border-box',
  },
  imageContainer: {
    background: "#000",  // Fondo negro para el contenedor de la imagen
    borderRadius: "16px",  // Ajusta el radio de borde si es necesario
    overflow: "hidden",  // Asegura que la imagen no sobresalga del contenedor
    width: '100%',
    marginTop: '10vh',
    maxWidth: '400px',  // Ancho máximo para dispositivos más grandes
  },
  img: {
    width: "100%",   // Asegura que la imagen ocupe todo el ancho del contenedor
    height: "auto",  // Ajusta la altura de la imagen en proporción al ancho
    objectFit: "cover", // Ajusta la imagen para que cubra el contenedor sin distorsión
    borderRadius: "16px",  // Ajusta el radio del borde de la imagen para que coincida con el contenedor
  }
};

// Variantes de animación para el contenedor de la imagen
const imageVariants = {
  hidden: {
    opacity: 0,
    y: -100, // Comienza desde arriba
  },
  visible: {
    opacity: 1,
    y: 0, // Se mueve a su posición final
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

function Menu() {
  return (
    <div className="App">
      <Header />
      <main style={styles.main}>
        <motion.div
          style={styles.imageContainer}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={menuImage} alt="Menu" style={styles.img} />
        </motion.div>
      </main>
    </div>
  );
}

export default Menu;
