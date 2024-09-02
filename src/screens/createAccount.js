import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de react-router-dom

// Estilos como objetos de JavaScript
const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #003746, #005f6b)', // Fondo degradado
    padding: '0 10px', // Ajusta el padding para más espacio
  },
  box: {
    width: '100%',
    maxWidth: '360px', // Reduce el maxWidth
    padding: '30px', // Reduce el padding
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)', // Sombras más suaves
    backgroundColor: '#000',
    textAlign: 'center',
    color: '#fff',
  },
  boxHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
  },
  inputContainer: {
    marginBottom: '15px', // Reduce el marginBottom
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '10px', // Ajusta el padding para reducir el tamaño
    border: '2px solid #ddd',
    borderRadius: '6px',
    outline: 'none',
    fontSize: '14px', // Reduce el fontSize
    boxSizing: 'border-box',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  },
  inputFocus: {
    borderColor: '#FDAB84',
    boxShadow: '0 0 8px rgba(253, 171, 132, 0.4)',
  },
  button: {
    width: '100%',
    padding: '10px', // Ajusta el padding
    marginTop: '15px', // Reduce el marginTop
    borderRadius: '6px',
    backgroundColor: '#FDAB84',
    color: '#003746',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px', // Reduce el fontSize
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  buttonHover: {
    backgroundColor: '#f08c64',
    transform: 'scale(1.05)',
  },
  link: {
    marginTop: '15px',
    display: 'block',
    color: '#FDAB84',
    textDecoration: 'none',
    fontSize: '12px', // Reduce el fontSize
    cursor: 'pointer', // Cambia el cursor a pointer para indicar que es clickeable
  },
  img: {
    width: '80px', // Reduce el tamaño de la imagen
    height: '80px', // Ajusta la altura para mantener la proporción
    marginBottom: '15px', // Ajusta el marginBottom
    borderRadius: '50%',
  },
  error: {
    color: 'red',
    fontSize: '12px', // Reduce el fontSize
    marginTop: '10px',
  },
};

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState({ username: false, email: false, password: false, confirmPassword: false });
  const [isBoxHovered, setIsBoxHovered] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleCreateAccount = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return;
    }

    if (username && email && password) {
      alert('Cuenta creada exitosamente');
      // Aquí puedes redirigir o realizar otras acciones
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  const boxVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div style={styles.main}>
      <motion.div
        style={{
          ...styles.box,
          ...(isBoxHovered ? styles.boxHover : {}),
        }}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        onMouseEnter={() => setIsBoxHovered(true)}
        onMouseLeave={() => setIsBoxHovered(false)}
      >
        <img
          id="create-account-img"
          src="/user.png"
          alt="Crear Cuenta"
          style={styles.img}
        />
        <form onSubmit={handleCreateAccount}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nombre de usuario"
              required
              style={{
                ...styles.input,
                ...(isInputFocused.username ? styles.inputFocus : {}),
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setIsInputFocused({ ...isInputFocused, username: true })}
              onBlur={() => setIsInputFocused({ ...isInputFocused, username: false })}
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              required
              style={{
                ...styles.input,
                ...(isInputFocused.email ? styles.inputFocus : {}),
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsInputFocused({ ...isInputFocused, email: true })}
              onBlur={() => setIsInputFocused({ ...isInputFocused, email: false })}
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              required
              style={{
                ...styles.input,
                ...(isInputFocused.password ? styles.inputFocus : {}),
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsInputFocused({ ...isInputFocused, password: true })}
              onBlur={() => setIsInputFocused({ ...isInputFocused, password: false })}
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              required
              style={{
                ...styles.input,
                ...(isInputFocused.confirmPassword ? styles.inputFocus : {}),
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setIsInputFocused({ ...isInputFocused, confirmPassword: true })}
              onBlur={() => setIsInputFocused({ ...isInputFocused, confirmPassword: false })}
            />
          </div>
          {passwordError && <div style={styles.error}>{passwordError}</div>}
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(isButtonHovered ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Crear cuenta
          </button>
          <span
            onClick={() => navigate('/login')} // Usa navigate para redirigir
            style={styles.link}
          >
            Ya tengo una cuenta
          </span>
        </form>
      </motion.div>
    </div>
  );
}

export default CreateAccount;
