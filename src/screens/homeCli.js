import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import './HomeCli.css'; // Asegúrate de importar el archivo CSS
import HeaderCli from '../components/headerCli';

// Estilos como objetos de JavaScript
const styles = {
    body: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif',
        overflowX: 'hidden', // Evita el scroll horizontal
    },
    main: (isMobile) => ({
        backgroundColor: '#003746',
        width: '100vw',
        minHeight: '100vh',
        padding: isMobile ? '0.5rem' : '1rem',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: isMobile ? '15vh' : '5vh', // Elimina el margen superior para ajustarse mejor a la pantalla
    }),
    box: (isMobile) => ({
        width: '90%',
        maxWidth: isMobile ? '30rem' : '35rem', // Reducido para pantallas pequeñas
        padding: isMobile ? '0.75rem' : '1rem',
        background: '#111',
        borderRadius: '0.5rem',
        boxShadow: '0px 0.3rem 1rem rgba(0, 0, 0, 0.4)',
        color: '#FDAB84',
        boxSizing: 'border-box',
        overflow: 'hidden', // Evita que el contenido se desborde
    }),
    h3: (isMobile) => ({
        fontSize: isMobile ? '1.25rem' : '1.5rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        textAlign: 'center',
    }),
    formContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', // Ajusta para pantallas pequeñas
        gap: '0.75rem',
    },
    formGroup: (isMobile) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '0.5rem' : '0.75rem',
    }),
    label: {
        fontWeight: 'bold',
    },
    input: (isMobile) => ({
        width: '100%',
        padding: isMobile ? '0.5rem' : '0.75rem',
        border: '0.125rem solid #FDAB84',
        borderRadius: '0.375rem',
        background: 'transparent',
        color: '#FDAB84',
        boxSizing: 'border-box',
        fontSize: isMobile ? '0.75rem' : '0.9rem',
    }),
    select: (isMobile) => ({
        width: '100%',
        padding: isMobile ? '0.5rem' : '0.75rem',
        border: '0.125rem solid #FDAB84',
        borderRadius: '0.375rem',
        background: 'transparent',
        color: '#FDAB84',
        boxSizing: 'border-box',
        fontSize: isMobile ? '0.75rem' : '0.9rem',
    }),
    timePicker: (isMobile) => ({
        width: '100%',
        padding: isMobile ? '0.5rem' : '0.75rem',
        border: '0.125rem solid #FDAB84',
        borderRadius: '0.375rem',
        background: 'transparent',
        color: '#FDAB84',
        boxSizing: 'border-box',
        fontSize: isMobile ? '0.75rem' : '0.9rem',
    }),
    button: (isMobile) => ({
        width: '100%',
        padding: isMobile ? '0.5rem' : '0.75rem',
        marginTop: isMobile ? '1rem' : '1.5rem',
        borderRadius: '0.375rem',
        background: '#003746',
        border: '0.125rem solid #003746',
        color: '#FDAB84',
        fontSize: isMobile ? '0.75rem' : '0.9rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background 0.3s, transform 0.2s',
        boxSizing: 'border-box',
        textAlign: 'center',
    }),
    buttonHover: {
        background: '#045d76',
        transform: 'scale(1.05)',
    },
    call: (isMobile) => ({
        width: isMobile ? '1.875rem' : '2.5rem', // Ajustado para pantallas pequeñas
        height: isMobile ? '1.875rem' : '2.5rem', // Ajustado para pantallas pequeñas
        marginTop: isMobile ? '1rem' : '1.5rem', // Espacio superior
        marginBottom: isMobile ? '1rem' : '1.5rem', // Espacio inferior
    }),
};

function HomeCli() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('10:00');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mostrarOpcionesPersonalizadas = () => {
        const selectOpcion = document.getElementById("opcion");
        const selectEventoPersonalizado = document.getElementById("eventoPersonalizado");

        if (selectOpcion.value === "personalizada") {
            selectEventoPersonalizado.disabled = false;
        } else {
            selectEventoPersonalizado.disabled = true;
            selectEventoPersonalizado.value = "";
        }
    };

    const actualizarYGuardarJSON = () => {
        // Implementar lógica para actualizar y guardar datos en JSON
    };

    return (
        <div style={styles.body}>
        <HeaderCli />

            <main style={styles.main(isMobile)}>
                <div style={styles.box(isMobile)}>
                    <h3 style={styles.h3(isMobile)}>CREAR RESERVA</h3>
                    <div style={styles.formContainer}>
                        <div style={styles.formGroup(isMobile)}>
                            <label htmlFor="count_personas" style={styles.label}>Número de personas</label>
                            <input type="number" name="contador" id="count_personas" required style={styles.input(isMobile)} />
                        </div>
                        <div style={styles.formGroup(isMobile)}>
                            <label htmlFor="opcion" style={styles.label}>Seleccione un tipo:</label>
                            <select id="opcion" name="opcion" required style={styles.select(isMobile)} onChange={mostrarOpcionesPersonalizadas}>
                                <option value="">Selecciona</option>
                                <option value="sencilla">Sencilla</option>
                                <option value="ejecutiva">Ejecutiva</option>
                                <option value="personalizada">Personalizada</option>
                            </select>
                        </div>
                        <div style={styles.formGroup(isMobile)}>
                            <label htmlFor="eventoPersonalizado" style={styles.label}>Evento Personalizado</label>
                            <select id="eventoPersonalizado" name="eventoPersonalizado" disabled style={styles.select(isMobile)}>
                                <option value="">Selecciona un evento</option>
                                <option value="cumpleaños">Cumpleaños</option>
                                <option value="graduacion">Graduación</option>
                            </select>
                        </div>
                        <div style={styles.formGroup(isMobile)}>
                            <label htmlFor="zona" style={styles.label}>Zona</label>
                            <select id="zona" name="zona" required style={styles.select(isMobile)}>
                                <option value="">Selecciona</option>
                                <option value="interior">Salón interior</option>
                                <option value="terraza">Terraza</option>
                                <option value="exterior">Salón exterior</option>
                            </select>
                        </div>
                        <div style={styles.formGroup(isMobile)}>
                            <label htmlFor="mesa" style={styles.label}>Mesa</label>
                            <select id="mesa" name="mesa" required style={styles.select(isMobile)}>
                                <option value="">Selecciona</option>
                                {[1, 2, 3, 4, 5].map(num => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                        <div style={styles.formGroup(isMobile)}>
                            <label htmlFor="fecha" style={styles.label}>Fecha</label>
                            <DatePicker
                                id="fecha"
                                selected={date}
                                onChange={(date) => setDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className="react-datepicker__input"
                            />
                        </div>
                        <div style={styles.formGroup(isMobile)}>
                            <label htmlFor="hora" style={styles.label}>Hora</label>
                            <TimePicker
                                id="hora"
                                value={time}
                                onChange={(time) => setTime(time)}
                                format="HH:mm"
                                style={styles.timePicker(isMobile)}
                            />
                        </div>
                    </div>
                    <button
                        onClick={actualizarYGuardarJSON}
                        style={styles.button(isMobile)}
                        onMouseOver={(e) => e.currentTarget.style.background = styles.buttonHover.background}
                        onMouseOut={(e) => e.currentTarget.style.background = styles.button(isMobile).background}
                    >
                        RESERVAR
                    </button>
                </div>
                <a href="../pages/contacto.html">
                    <img className="call" src="/tel.png" alt="call" style={styles.call(isMobile)} />
                </a>
            </main>
        </div>
    );
}

export default HomeCli;
