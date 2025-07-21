import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud, FaLink } from 'react-icons/fa';
import { SiDotnet, SiReact, SiRedux, SiBootstrap, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FaMicrosoft } from 'react-icons/fa';
import '../App.css';

const skills = [
  { icon: <SiDotnet size={24} />, name: '.NET Core' },
  { icon: <SiReact size={24} />, name: 'React.js' },
  { icon: <SiNodedotjs size={24} />, name: 'Node.js' },
  { icon: <SiBootstrap size={24} />, name: 'Bootstrap' },
  { icon: <FaServer size={24} />, name: 'Microservices' },
  { icon: <FaMicrosoft size={24} />, name: 'MS SQL' },
  { icon: <SiMongodb size={24} />, name: 'MongoDB' },
  { icon: <FaAws size={24} />, name: 'AWS' },
  { icon: <FaCode size={24} />, name: 'Clean Code' }
];

const Summary = () => {
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
      y: -8,
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };

  const summaryText = "Passionate Full Stack Developer with 6 months of internship experience at Shiwansh Solutions (Hybrid). React specialist and Microservices expert with API integration skills in both .NET and Node.js. Developed multiple production websites including ";

  return (
    <motion.section
      id="summary"
      className="summary-section position-relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="bg-blur-shape-1"></div>
      <div className="bg-blur-shape-2"></div>
      
      <div className="container py-5">
        <motion.div 
          className="text-center mb-5"
          variants={itemVariants}
        >
          <motion.h2 
            className="section-title text-gradient mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Professional Summary
          </motion.h2>
          
          <motion.div 
            className="section-divider mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div 
          className="glass-card p-4 p-md-5 mx-auto"
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            boxShadow: "0 15px 30px rgba(110, 69, 226, 0.2)"
          }}
        >
          <motion.p 
            className="summary-text lead mb-4"
          >
            {summaryText.split(' ').map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="word-animation"
              >
                {word}{' '}
              </motion.span>
            ))}
            
            <motion.span
              custom={summaryText.split(' ').length}
              variants={wordVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a href="https://shiwansh.com" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaLink className="me-1" />shiwansh.com
              </a>, {' '}
              <a href="https://ems.shiwansh.com" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaLink className="me-1" />ems.shiwansh.com
              </a>, and {' '}
              <span className="project-link">
                devalive
              </span>. Continuously enhancing my skills to become a better developer with strong focus on clean code and scalable architecture.
            </motion.span>
          </motion.p>

          <motion.div 
            className="tech-stack mt-5 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h6 className="mb-4 text-center">Core Competencies:</h6>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="tech-icon"
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 100,
                    delay: index * 0.1
                  }}
                >
                  {skill.icon}
                  <span className="tech-tooltip">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Summary;