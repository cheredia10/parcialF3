import React, { useState } from 'react';
import Card from './Card';

const Formulario = () => {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [error, setError] = useState('');
    const [mostrarCard, setMostrarCard] = useState(false);
    const [datos, setDatos] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (titulo.trim().length < 3 || titulo.trim().length !== titulo.length) {
            setError('Por favor chequea que la información sea correcta');
            setMostrarCard(false);
            return;
        }

        if (autor.length < 6) {
            setError('Por favor chequea que la información sea correcta');
            setMostrarCard(false);
            return;
        }
        setDatos({ titulo, autor });
        setMostrarCard(true);
        setError('');
        setTitulo('');
        setAutor('');
    };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setMostrarCard(false);
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.formTitle}>Formulario de Libro</h2>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Título del libro:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={handleInputChange(setTitulo)}
                        style={styles.input}
                        placeholder="Ingresa el título"
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Autor del libro:</label>
                    <input
                        type="text"
                        value={autor}
                        onChange={handleInputChange(setAutor)}
                        style={styles.input}
                        placeholder="Ingresa el autor"
                    />
                </div>
                <button type="submit" style={styles.button}>Enviar</button>
            </form>

            {error && <p style={styles.error}>{error}</p>}

            {mostrarCard && datos && <Card titulo={datos.titulo} autor={datos.autor} />}
        </div>
    );
};

const styles = { 

    container: {
    display: 'flex',
    flexDirection: 'column',
    width: '800',
    height: '500',
    alignItems: 'center',
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',

},
form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    height: '80%',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#F4FAFE',
},
formTitle: {
    marginBottom: '20px',
    fontSize: '1.8em',
    color: '#333',
},
inputGroup: {
    marginBottom: '15px',
    width: '90%',
},
label: {
    marginBottom: '5px',
    fontSize: '1em',
    fontWeight: 'bold',
    color: '#000000',
    display: 'block',
},
input: {
    width: '100%',
    padding: '10px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc',
    color: '#000000',
    backgroundColor: '#f9f9f9',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
},
button: {
    padding: '10px 15px',
    fontSize: '1em',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff', 
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
},
buttonHover: {
    backgroundColor: '#0056b3',
},
error: {
    color: 'red',
    marginTop: '10px',
    fontSize: '1em',
    textAlign: 'center',
},
};

export default Formulario;
