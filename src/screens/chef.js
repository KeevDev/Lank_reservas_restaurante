import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header'; // Asegúrate de que la ruta sea correcta

const mainStyle = {
    backgroundColor: '#003746',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
};

const boxStyle = {
    width: '80%',
    maxWidth: '600px',
    height: '75vh',
    background: 'black',
    borderRadius: '24px',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
    position: 'relative',
};

const boxImgStyle = {
    borderRadius: '10px',
    width: '100%',
    height: 'auto',
    maxWidth: '400px',
    maxHeight: '300px',
    marginTop: '5vh',
};

const boxPStyle = {
    fontSize: '2vw',
    color: '#FDAB84',
    margin: '0',
};

const boxVariants = {
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

function Chef() {
    return (
        <div>
            <Header />
            <main style={mainStyle}>
                <motion.div
                    style={boxStyle}
                    variants={boxVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <img src="/chef.jpg" alt="Nicolas de Zubiria" style={boxImgStyle} />
                    <p style={boxPStyle}>Nicolas de Zubiria</p>
                </motion.div>
            </main>
        </div>
    );
}

export default Chef;
