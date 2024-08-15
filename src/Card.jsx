import React from 'react';

const Card = ({ titulo, autor }) => {
    return (
        <div style={styles.card}>
            <h2 style={styles.title}>{titulo}</h2>
            <p style={styles.text}>Autor: {autor}</p>
        </div>
    );
};
const styles = { 
    card: {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        marginTop: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        backgroundColor: '#179BB8',
    },
    title: {
        fontSize: '1.5em',
        marginBottom: '10px',
        color: "#1D2943",
        fontFamily: 'Roboto'
    },
    text: {
        fontSize: '1.2em',
        color: '#FFFFFF',
    },
};


export default Card;

