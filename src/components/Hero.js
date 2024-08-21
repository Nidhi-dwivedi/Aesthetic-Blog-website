// src/components/Hero.js

import React from 'react';
import heroImage from '../assets/Hero-image.jpeg'; // Adjust the path as needed

const Hero = () => {
    return (
        <div style={styles.heroContainer}>
            <img src={heroImage} alt="Hero" style={styles.heroImage} />
            <div style={styles.textOverlay}>
                <h1 style={styles.heroText}>Welcome to My Blog</h1>
                <p style={styles.heroSubText}>Sharing thoughts, stories, and ideas</p>
            </div>
        </div>
    );
};

const styles = {
    heroContainer: {
        position: 'relative',
        width: '100%',
        height: '70vh',
        overflow: 'hidden',
    },
    heroImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(70%)', // Darken the image for better text readability
    },
    textOverlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        textAlign: 'center',
    },
    heroText: {
        fontSize: '3rem',
        margin: '0',
    },
    heroSubText: {
        fontSize: '1.5rem',
    },
};

export default Hero;
