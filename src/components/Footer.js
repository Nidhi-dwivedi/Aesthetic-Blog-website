import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>&copy; 2024 Nidhi Rani. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#F3C5C5',
        textAlign: 'center',
        padding: '10px',
        position: 'fixed',
        width: '100%',
        bottom: '0',
    },
    text: {
        margin: '0',
        color: '#6B4226',
    }
};

export default Footer;
