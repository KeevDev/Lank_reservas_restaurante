import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion'; // Importa framer-motion
import Header from '../components/header'; // Asegúrate de que la ruta sea correcta

// Define los estilos para el componente
const mainStyle = {
    backgroundColor: '#003746',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    boxSizing: 'border-box',
};

const boxStyle = isMobile => ({
    width: isMobile ? '90%' : '50%',
    maxWidth: '600px',
    background: 'black',
    borderRadius: '0.8rem',
    padding: '1.5rem',
    boxSizing: 'border-box',
    color: '#FDAB84',
    textAlign: 'center',
    marginTop: '2rem',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
});

const boxH2Style = isMobile => ({
    color: '#FDAB84',
    fontSize: isMobile ? '1.2rem' : '1.5rem',
    marginBottom: '1rem',
});

const boxPStyle = isMobile => ({
    color: '#FDAB84',
    fontSize: isMobile ? '0.9rem' : '1.1rem',
    marginBottom: '2rem',
});

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const inputStyle = {
    width: '100%',
    padding: '0.6rem',
    margin: '1rem',
    borderRadius: '0.4rem',
    border: '1px solid #FDAB84',
    backgroundColor: '#FFF',
    color: '#FDAB84',
    fontSize: '0.9rem',
};

const textareaStyle = {
    width: '40vw',
    maxWidth: '100%',
    maxHeight: '2rem',
    padding: '0.6rem',
    marginTop: '0.8rem',
    borderRadius: '0.4rem',
    border: '1px solid #FDAB84',
    backgroundColor: '#FFF',
    color: '#FDAB84',
    fontSize: '0.9rem',
};

const buttonStyle = {
    marginTop: '1.5rem',
    padding: '0.6rem 1.2rem',
    border: 'none',
    borderRadius: '0.4rem',
    backgroundColor: '#FDAB84',
    color: 'black',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    transform: 'scale(1)',
};

const buttonHoverStyle = {
    backgroundColor: '#C78C19',
    transform: 'scale(1.03)',
};

function Contact() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // Define las animaciones para framer-motion
    const containerVariants = {
        hidden: { opacity: 0, y: -50 }, // Inicia desde arriba
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Baja a la posición normal
    };

    return (
        <main style={mainStyle}>
            <Header />
            <motion.div
                style={boxStyle(isMobile)}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h2 style={boxH2Style(isMobile)}>Contacto</h2>
                <p style={boxPStyle(isMobile)}>¿Tienes alguna pregunta o comentario? Contáctanos a través del siguiente formulario:</p>
                
                <form action="procesar_formulario.php" method="post" style={formStyle}>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required placeholder="Nombre" style={inputStyle} />

                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required placeholder="Email" style={inputStyle} />

                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required placeholder="Comentario" style={textareaStyle}></textarea>

                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                        onFocus={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onBlur={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Enviar
                    </button>
                </form>
            </motion.div>
        </main>
    );
}

export default Contact;
