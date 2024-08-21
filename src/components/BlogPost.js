import React from 'react';

const BlogPost = ({ title, content }) => {
    return (
        <div style={styles.blogPost}>
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.content}>{content}</p>
        </div>
    );
};

const styles = {
    blogPost: {
        backgroundColor: '#FFF9F0',
        border: '1px solid #F3C5C5',
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '20px',
    },
    title: {
        marginTop: '0',
        color: '#6B4226',
    },
    content: {
        lineHeight: '1.6',
    }
};

export default BlogPost;
