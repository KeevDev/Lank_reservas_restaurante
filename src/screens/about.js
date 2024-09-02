import React from 'react';
import Header from '../components/header';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const mainStyle = isMobile => ({
  backgroundColor: '#003746',
  width: '100vw',
  minHeight:'100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

const boxStyle = isMobile => ({
  width: '90%',
  maxWidth: isMobile ? '80vw' : '70vw',
  height: 'auto',
  background: 'black',
  borderRadius: '1rem',
  padding: '1rem',
  marginTop: '5vh',
  boxSizing: 'border-box',
  textAlign: 'center',
});

const titleStyle = isMobile => ({
  color: '#FDAB84',
  fontSize: isMobile ? '3rem' : '2.8rem',
  fontFamily: 'Gideon Roman',
  fontWeight: '400',
  marginTop: isMobile ? '5rem' : '2rem'
});

const subtitleStyle = isMobile => ({
  color: '#FDAB84',
  fontSize: isMobile ? '1.8rem' : '1.5rem',
  fontFamily: 'Encode Sans Expanded',
  fontWeight: '400',
  marginTop: isMobile ? '-2rem' : '-2rem'
});

const h3Style = isMobile => ({
  color: '#FDAB84',
  fontSize: isMobile ? '1.8rem' : '1.5rem',
  margin: '1rem 0',
  textAlign: 'center',
});

const pContainerStyle = isMobile => ({
  color: '#FDAB84',
  margin: isMobile ? '5vh 2vw' : '8vh 3vw',
  textAlign: 'left',
});

const pStyle = isMobile => ({
  fontSize: isMobile ? '1.2rem' : '1rem',
  textAlign: 'left',
  marginTop: '0.5rem',
});

const boxVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div>
      <Header />
      <main style={mainStyle(isMobile)}>
        <motion.div
          style={boxStyle(isMobile)}
          initial="hidden"
          animate="visible"
          variants={boxVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 style={titleStyle(isMobile)}>LANK</h1>
          <h2 style={subtitleStyle(isMobile)}>RESTAURANTE</h2>
          <h3 style={h3Style(isMobile)}>¿Quiénes Somos?</h3>
          <div style={pContainerStyle(isMobile)}>
            <p style={pStyle(isMobile)}>Somos un restaurante elegante que se dedica a brindar experiencias culinarias excepcionales a nuestros clientes. Desde nuestra apertura, hemos estado comprometidos en ofrecer platos exquisitos elaborados con ingredientes frescos y de alta calidad.</p>
            <p style={pStyle(isMobile)}>Nuestro equipo de chefs altamente calificados trabaja arduamente para crear platos innovadores y deliciosos que complacen a los paladares más exigentes.</p>
            <p style={pStyle(isMobile)}>En el Restaurante Elegante, la calidad, la elegancia y el servicio excepcional son nuestra prioridad. Nuestra misión es hacer que cada visita sea inolvidable para nuestros clientes, y esperamos que disfruten de su experiencia en nuestro restaurante.</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default About;
