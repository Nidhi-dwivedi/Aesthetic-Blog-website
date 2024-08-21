import React from 'react';

const About = () => {
    return (
        <div style={styles.container}>
            <h2>About Me</h2>
            <p>Hi, I'm Nidhi, a passionate Tech girly who also like writing stuffs and different aesthetics. I love sharing my thoughts and experiences through my blog.</p>
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

export default About;
