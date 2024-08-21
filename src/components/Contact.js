import React from 'react';

const Contact = () => {
    return (
        <div style={styles.container}>
            <h2>Contact Me</h2>
            <p>If you want to reach out, feel free to contact me at mona290500@gmail.com.</p>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '0 15px',
        backgroundColor: '#FFF9F0',
        border: '1px solid #F3C5C5',
        borderRadius: '5px',
        padding: '20px',
    }
};

export default Contact;
