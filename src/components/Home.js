// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Hero-image.jpeg';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';

const Home = () => {
    const blogPosts = [
        { title: 'Blog Post 1', excerpt: 'This is a short excerpt from blog post 1.' },
        { title: 'Blog Post 2', excerpt: 'This is a short excerpt from blog post 2.' },
        { title: 'Blog Post 3', excerpt: 'This is a short excerpt from blog post 3.' },
    ];

    return (
        <div style={styles.container}>
            <div style={styles.heroContainer}>
                <img src={heroImage} alt="Hero" style={styles.heroImage} />
                <div style={styles.heroTextContainer}>
                    <h1 style={styles.heroTitle}>Welcome to My Blog</h1>
                    <p style={styles.heroSubtitle}>Sharing thoughts, stories, and ideas</p>
                </div>
            </div>

            <div style={styles.sliderContainer}>
                <div style={styles.slider}>
                    <div style={{ ...styles.slide, backgroundImage: `url(${image1})` }}></div>
                    <div style={{ ...styles.slide, backgroundImage: `url(${image2})` }}></div>
                    <div style={{ ...styles.slide, backgroundImage: `url(${image3})` }}></div>
                    <div style={{ ...styles.slide, backgroundImage: `url(${image4})` }}></div>
                    <div style={{ ...styles.slide, backgroundImage: `url(${image5})` }}></div>
                    <div style={{ ...styles.slide, backgroundImage: `url(${image6})` }}></div>
                </div>
            </div>

            <div style={styles.blogSection}>
                <h2 style={styles.sectionTitle}>Recent Blog Posts</h2>
                <div style={styles.blogPosts}>
                    {blogPosts.map((post, index) => (
                        <div key={index} style={styles.blogCard}>
                            <h3 style={styles.blogTitle}>{post.title}</h3>
                            <p style={styles.blogExcerpt}>{post.excerpt}</p>
                            <Link to="/blog" style={styles.readMoreLink}>Read More</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#FAF3DD',
        color: '#333',
    },
    heroContainer: {
        position: 'relative',
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
    },
    heroImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(70%)',
    },
    heroTextContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#FFF',
    },
    heroTitle: {
        fontSize: '3rem',
        margin: '0',
    },
    heroSubtitle: {
        fontSize: '1.5rem',
        marginTop: '10px',
    },
    sliderContainer: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        width: '80%',
        height: '400px',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
    },
    slide: {
        minWidth: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'transform 1s ease-in-out',
    },
    blogSection: {
        padding: '20px',
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
    blogPosts: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    blogCard: {
        width: '300px',
        padding: '20px',
        margin: '15px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
    },
    blogTitle: {
        fontSize: '1.5rem',
        marginBottom: '10px',
    },
    blogExcerpt: {
        fontSize: '1rem',
        color: '#555',
    },
    readMoreLink: {
        color: '#007BFF',
        textDecoration: 'none',
        marginTop: '10px',
        display: 'inline-block',
    },
};

export default Home;
