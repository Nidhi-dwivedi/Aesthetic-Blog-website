import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';
// Add more images as needed

const Blog = () => {
    const posts = [
        { title: 'Dear Friend', content: 'you are the vibe check I always pass! ', image: image1, link: '/blogpost1' },
        { title: 'Post 2', content: 'Content for post 2', image: image2, link: '/blogpost2' },
        { title: 'Post 3', content: 'Content for post 3', image: image3, link: '/blogpost3' },
        { title: 'Post 4', content: 'Content for post 4', image: image4, link: '/blogpost4' },
        { title: 'Post 5', content: 'Content for post 5', image: image5, link: '/blogpost5' },
        { title: 'Post 6', content: 'Content for post 6', image: image6, link: '/blogpost6' },
        // Add more posts as needed
    ];

    return (
        <div style={styles.container}>
            {posts.map((post, index) => (
                <Link to={post.link} key={index} style={styles.cardLink}>
                    <div style={styles.card}>
                        <img src={post.image} alt={`Post ${index + 1}`} style={styles.image} />
                        <div style={styles.cardContent}>
                            <h2 style={styles.title}>{post.title}</h2>
                            <p style={styles.content}>{post.content}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '20px',
    },
    cardLink: {
        textDecoration: 'none',
        color: 'inherit',
    },
    card: {
        width: '300px',
        margin: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        transition: 'transform 0.2s',
    },
    cardHover: {
        transform: 'scale(1.05)',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    cardContent: {
        padding: '15px',
    },
    title: {
        margin: '0 0 10px',
        fontSize: '1.5rem',
        color: '#333',
    },
    content: {
        margin: '0',
        fontSize: '1rem',
        color: '#555',
    },
};

export default Blog;
