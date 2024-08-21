import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost1 from './components/BlogPost1'; // Ensure you create a component for each blog post
// import BlogPost2 from './components/BlogPost2'; // Create corresponding components for each blog post
// import BlogPost3 from './components/BlogPost3';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div style={styles.container}>
                <Header />
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blogpost1" element={<BlogPost1 />} />
                    {/* <Route path="/blogpost2" element={<BlogPost2 />} />
                    <Route path="/blogpost3" element={<BlogPost3 />} /> */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#FAF3DD',
        color: '#555',
        margin: '0',
        padding: '0',
    }
};

export default App;
