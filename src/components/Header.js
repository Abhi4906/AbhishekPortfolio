import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUser, FaMoon, FaSun } from 'react-icons/fa';
import '../App.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'summary', 'experience', 'educations', 'projects', 'skills', 'certification', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const navItems = ['home', 'about', 'summary', 'experience', 'educations', 'projects', 'skills', 'certification', 'contact'];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={`custom-navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}
      >
        <Container fluid>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Navbar.Brand 
              href="#home" 
              className="fw-bold brand-text"
              onClick={() => setActiveSection('home')}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ display: 'inline-block' }}
              >
                <FaUser className="me-2" />
              </motion.div>
              <span>Abhishek Yadav</span>
            </Navbar.Brand>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.div>

          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            className="border-0"
          >
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              ☰
            </motion.div>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto text-center">
              {navItems.map((section) => (
                <motion.div
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Nav.Link
                    href={`#${section}`}
                    className={`nav-link-custom ${activeSection === section ? 'active' : ''}`}
                    onClick={() => setActiveSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeSection === section && (
                      <motion.div 
                        className="nav-underline"
                        layoutId="navUnderline"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default Header;