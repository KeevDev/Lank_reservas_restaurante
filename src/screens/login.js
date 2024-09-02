import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Estilos como objetos de JavaScript
const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #003746, #005f6b)', // Fondo degradado para un efecto moderno
    padding: '0 20px',
  },
  box: {
    width: '100%',
    maxWidth: '400px',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', // Sombras más suaves
    backgroundColor: '#000', // Fondo negro para el contenedor del formulario
    textAlign: 'center',
    color: '#fff', // Color de fuente blanco para contraste con el fondo negro
  },
  inputContainer: {
    marginBottom: '20px',
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '2px solid #ddd',
    borderRadius: '6px',
    outline: 'none',
    fontSize: '16px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s, box-shadow 0.3s', // Transición suave para el foco
  },
  inputFocus: {
    borderColor: '#FDAB84', // Borde de color de acento en foco
    boxShadow: '0 0 8px rgba(253, 171, 132, 0.4)', // Sombra sutil en foco
  },
  button: {
    width: '100%',
    padding: '12px',
    marginTop: '20px',
    borderRadius: '6px',
    backgroundColor: '#FDAB84', // Botón de color de acento
    color: '#003746',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s', // Transición suave para hover
  },
  buttonHover: {
    backgroundColor: '#f08c64', // Color de hover para el botón
    transform: 'scale(1.05)', // Efecto de agrandamiento al pasar el mouse
  },
  link: {
      
    display: 'block',
    color: '#FDAB84', // Color de enlace para que contraste con el fondo negro
    textDecoration: 'none',
    fontSize: '14px',
    marginTop: '20px',
    cursor: 'pointer', // Cambia el cursor a pointer para indicar que es clickeable
  },
  img: {
    width: '100px',
    marginBottom: '20px',
    borderRadius: '50%', // Imagen circular para una mejor estética
  },
};

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState({ usuario: false, contrasena: false });
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Inicializa useNavigate

  // Carga el archivo JSON con los usuarios
  const loadUsers = async () => {
    try {
      const response = await fetch('src/users.json');
      const data = await response.json();
      console.log(data); // Agrega esto para verificar el contenido de los usuarios
      return data;
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  };
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const users = await loadUsers();
      const user = users.find(user => user.username === usuario && user.password === contrasena);
  
      if (user) {
        if (user.role === 'admin') {
          navigate('/homeAdmin');
        } else if (user.role === 'client') {
          navigate('/homeCli');
        }
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      setError('Error al verificar credenciales');
      console.error('Error al iniciar sesión:', error);
    }
  };
  

  // Configuración de la animación para el contenedor del formulario
  const boxVariants = {
    hidden: { opacity: 0, y: -100 }, // Estado inicial (invisible y más arriba)
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }, // Estado visible con una transición suave
  };

  return (
    <div style={styles.main}>
      <motion.div
        style={styles.box}
        variants={boxVariants} // Asigna las variantes de animación
        initial="hidden" // Estado inicial
        animate="visible" // Estado después de la animación
      >
        <img
          id="login-img"
          src="/user.png"
          alt="Usuario"
          style={styles.img}
        />
        <form onSubmit={handleLogin}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              required
              style={{
                ...styles.input,
                ...(isInputFocused.usuario ? styles.inputFocus : {}),
              }}
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              onFocus={() => setIsInputFocused({ ...isInputFocused, usuario: true })}
              onBlur={() => setIsInputFocused({ ...isInputFocused, usuario: false })}
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              id="contrasena"
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              required
              style={{
                ...styles.input,
                ...(isInputFocused.contrasena ? styles.inputFocus : {}),
              }}
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              onFocus={() => setIsInputFocused({ ...isInputFocused, contrasena: true })}
              onBlur={() => setIsInputFocused({ ...isInputFocused, contrasena: false })}
            />
          </div>
          {error && <div style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>{error}</div>}
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(isButtonHovered ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Iniciar sesión
          </button>
          <span
            onClick={() => navigate('/createAccount')} // Usa navigate para redirigir
            style={styles.link}
          >
            Crear una cuenta
          </span>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;

