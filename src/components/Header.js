import React from 'react';
import logo from '../assets/logo.jpeg';

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <img src={logo} alt="Logo" style={styles.logo} />
            </div>
            <h1 style={styles.title}>Welcome to Nidxxwivedi's Blog</h1>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center the title horizontally
        backgroundColor: '#FAF3DD',
        padding: '10px 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative', // Position the logo and title relative to the header
    },
    logoContainer: {
        position: 'absolute', // Position the logo absolutely within the header
        left: '20px', // Adjust this value based on the padding or margins you prefer
    },
    logo: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
    },
    title: {
        margin: '0',
        fontSize: '2rem',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
    },
};

export default Header;
