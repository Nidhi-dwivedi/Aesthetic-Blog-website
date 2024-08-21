import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/blog" style={styles.link}>Blog</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: '#FDE8E9',
        padding: '15px',
        textAlign: 'center',
    },
    link: {
        color: '#6B4226',
        margin: '0 15px',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};

export default Nav;
