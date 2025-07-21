import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaServer, FaDatabase, FaLayerGroup } from 'react-icons/fa';
import { SiDotnet, SiReact, SiRedux, SiBootstrap } from 'react-icons/si';
import '../App.css';

const experiences = [
  {
    role: 'Junior Software Engineer',
    company: 'Shiwansh Solutions',
    duration: 'July 2025 - Present',
    description: 'Working as a Full-Stack Developer using .NET Core and React. Responsible for designing and developing modules with React, Node.js, Bootstrap, Entity Framework. Involved in debugging, testing, and deployment. Contributed to the development of Admin, Employee, and Employer modules.',
    skills: [<SiDotnet key="dotnet" />, <SiReact key="react" />, <SiRedux key="MongoDB" />, <SiBootstrap key="bootstrap" />]
  },
  {
    role: '.NET Developer Intern',
    company: 'Shiwansh Solutions',
    duration: '2025 FEB-JUNE',
    description: 'Built scalable backend APIs using .NET Core and Entity Framework.',
    skills: [<SiDotnet key="dotnet" />, <FaServer key="server" />, <FaCode key="code" />]
  }
];

const Experience = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(110, 69, 226, 0.3)"
    }
  };

  return (
    <motion.section
      id="experience"
      className="experience-section position-relative overflow-hidden py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="bg-blur-shape-3"></div>
      <div className="bg-blur-shape-4"></div>
      
      <div className="container">
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
            Professional Experience
          </motion.h2>
          
          <motion.div 
            className="section-divider mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="row justify-content-center g-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="col-lg-5 col-md-6"
              variants={itemVariants}
              custom={index}
            >
              <motion.div
                className="experience-card h-100"
                variants={cardVariants}
                whileHover="hover"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="experience-card-inner p-4 p-lg-5">
                  <div className="d-flex align-items-start mb-4">
                    <div className="icon-wrapper me-3">
                      <FaBriefcase className="experience-icon" />
                    </div>
                    <div>
                      <h3 className="experience-role mb-1">{exp.role}</h3>
                      <h4 className="experience-company mb-2">{exp.company}</h4>
                      <div className="experience-duration badge bg-primary-light text-dark mb-3">
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="experience-desc mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {exp.description}
                  </motion.p>
                  
                  <div className="skills-used mt-4 pt-3 border-top">
                    <h6 className="mb-3">Technologies Used:</h6>
                    <div className="d-flex flex-wrap gap-3">
                      {exp.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          className="skill-icon"
                          whileHover={{ scale: 1.2, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            type: 'spring',
                            stiffness: 200,
                            delay: 0.3 + (i * 0.1)
                          }}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;