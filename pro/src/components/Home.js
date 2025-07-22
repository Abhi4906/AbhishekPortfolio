import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';
import '../App.css';

// Direct imports with fallbacks
import resumePDF from '../assets/resume.pdf';
import profileImg from '../assets/aa.jpg'; // Changed from aa.jpg to profile.jpg based on your screenshot

// Fallback images
const fallbackProfileImg = 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.main 
      id="home"
      className="hero-section min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="bg-blur-circle-1"></div>
      <div className="bg-blur-circle-2"></div>
      <div className="bg-blur-circle-3"></div>
      
      <div className="container text-center position-relative z-3 py-5">
        {/* Profile Image */}
        <motion.div 
          className="profile-wrapper mb-4 mx-auto"
          variants={itemVariants}
        >
          <div className="profile-img-container">
            <img
              src={profileImg || fallbackProfileImg}
              alt="Abhishek Yadav"
              className="profile-img"
              onError={(e) => {
                e.target.src = fallbackProfileImg;
              }}
            />
            <div className="profile-img-border"></div>
            <div className="profile-img-dots"></div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1 
          className="display-3 fw-bold mb-3 text-gradient"
          variants={itemVariants}
        >
          Hi, I'm <span className="highlight-name">Abhishek Yadav</span>
        </motion.h1>

        {/* Animated Typing Text */}
        <motion.div 
          className="typing-text mb-4 fs-3 fw-medium"
          variants={itemVariants}
        >
          <TypeAnimation
            sequence={[
              'Full-Stack Developer',
              2000,
              'React.js Specialist',
              2000,
              '.NET Core Developer',
              2000,
              'Microservices Expert',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Resume Button */}
        <motion.div 
          className="mt-4"
          variants={itemVariants}
        >
          {resumePDF ? (
            <motion.a
              href={resumePDF}
              download="Abhishek_Yadav_Resume.pdf"
              className="btn btn-primary btn-lg px-4 py-3 d-inline-flex align-items-center"
              whileHover={{ 
                y: -3,
                boxShadow: "0 10px 25px rgba(110, 69, 226, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="me-2" />
              Download Resume
            </motion.a>
          ) : (
            <motion.button 
              className="btn btn-outline-light btn-lg px-4 py-3 d-inline-flex align-items-center"
              disabled
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="me-2" />
              Resume Coming Soon
            </motion.button>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="social-links mt-5"
          variants={itemVariants}
        >
          <motion.a 
            href="https://github.com/Abhi4306" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ y: -5, color: "#6e45e2" }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/abhishek-yadav-49yadav06" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ y: -5, color: "#0a66c2" }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a 
            href="mailto:ayaduvanshi4906@gmail.com" 
            className="social-icon"
            whileHover={{ y: -5, color: "#ea4335" }}
          >
            <HiOutlineMail size={26} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator mt-5"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p className="mt-3 small">Scroll Down</p>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Home;