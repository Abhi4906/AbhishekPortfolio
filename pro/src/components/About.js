import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaLink } from 'react-icons/fa';
import { SiDotnet,  SiBootstrap } from 'react-icons/si';
import '../App.css';

// Direct imports with proper paths based on your file structure
import profileImage from '../assets/profile.jpg'; // Primary image
import aaImage from '../assets/aa.jpg';          // Alternative image

// Fallback image URL
const fallbackImage = 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80';

const techIcons = [
  { icon: <FaReact size={24} />, name: 'React' },
  { icon: <SiDotnet size={24} />, name: '.NET Core' },
  { icon: <FaNodeJs size={24} />, name: 'Node.js' },
  { icon: <SiBootstrap size={24} />, name: 'Bootstrap' },
  { icon: <FaAws size={24} />, name: 'AWS' }
];

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      y: -10,
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      id="about" 
      className="about-section py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 
          className="text-center mb-5 fw-bold text-gradient"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="row align-items-center">
          <motion.div 
            className="col-md-4 text-center mb-4 mb-md-0"
            variants={itemVariants}
          >
            <div className="profile-img-container">
              <motion.img
                src={profileImage || aaImage || fallbackImage}
                alt="Abhishek Yadav - Software Engineer"
                className="profile-img rounded-circle"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
                onError={(e) => {
                  e.target.src = fallbackImage;
                  console.error('Image failed to load, using fallback');
                }}
              />
              <div className="profile-img-border"></div>
              <div className="profile-img-dots"></div>
            </div>
          </motion.div>

          <motion.div 
            className="col-md-8"
            variants={itemVariants}
          >
            <motion.div 
              className="card shadow p-4 border-0 glass-card"
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 238, 255, 0.2)"
              }}
            >
              <motion.h4 
                className="text-dark mb-3 fw-bold"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer | React Specialist | Microservices Expert
              </motion.h4>

              <motion.p 
                className="text-muted mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Passionate full-stack developer with expertise in building modern web applications using <strong>.NET Core</strong>, <strong>React.js</strong>, <strong>RESTful APIs</strong>, and <strong>microservices architecture</strong>. I specialize in API integration across both .NET and Node.js ecosystems.
              </motion.p>

              <motion.p 
                className="text-muted mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Notable projects I've developed:
                <ul className="project-list mt-2">
                  <li>
                    <FaLink className="me-2" />
                    <a href="https://shiwansh.com" target="_blank" rel="noopener noreferrer">Shiwansh Solutions</a> - Official company website
                  </li>
                  <li>
                    <FaLink className="me-2" />
                    <a href="https://ems.shiwansh.com" target="_blank" rel="noopener noreferrer">EMS System</a> - Employee management solution
                  </li>
                  <li>
                    <FaLink className="me-2" />
                    devalive - Comprehensive patient portal
                  </li>
                </ul>
              </motion.p>

              <motion.p 
                className="text-muted mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Currently completing a 6-month hybrid internship at <strong>Shiwansh Solutions, Mohali</strong>, where I've gained hands-on experience in backend development with .NET Core, building scalable APIs, and implementing database solutions with MSSQL and Entity Framework.
              </motion.p>

              <motion.div 
                className="tech-stack"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h6 className="mb-3">Tech Stack:</h6>
                <div className="d-flex flex-wrap gap-3">
                  {techIcons.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="tech-icon"
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.9 }}
                    >
                      {tech.icon}
                      <span className="tech-tooltip">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;