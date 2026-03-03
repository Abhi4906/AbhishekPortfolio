import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaStar, FaBookOpen } from 'react-icons/fa';
import '../App.css';

const educationList = [
  {
    title: "BACHOLAR OF TECHNOLOGY",
    institution: "AJAY KUMAR GARG ENGINEERING COLLEGE",
    // year: "2026",
    description: "Pursing B.tech in Computer Science from Ajay Kumar Garg Ghaziabad",
    icon: <FaAward className="text-warning" />,
    highlights: [ "7 CGPA", "Pursuing B.tech" ,"Completed in 2026"]
  },
  {
    title: "DIPLOMA IN COMPUTER SCIENCE ",
    institution: "MAHARANA PRATAP POLYTECHNIC ",
    // year: "2023",
    description: "Completed Diploma in Computer Science Engineering with a 72%.",
    icon: <FaStar className="text-warning" />,
    highlights: ["Passed with 72%  ", "Completed in 2023"]
  },
  {
    title: "HIGHER SECONDARY EDUCATION",
    institution: "R C A I C HASANPUR JAJAULI BALLIA",
    // year: "2017",
    description: "Completed with focus in science stream.",
    icon: <FaBookOpen className="text-warning" />,
    highlights: ["Science Stream", "81% Marks", "Completed in 2017"]
  },
  {
    title: "SECONDARY EDUCATION",
    institution: "RUPA H S S BHIMPURA NO-1 BALLIA",
    // year: "2015",
    description: "Completed secondary school education successfully.",
    icon: <FaGraduationCap className="text-warning" />,
    highlights: ["Completed With 85% Marks", "completed in 2015"]
  }
];

const Educations = () => {
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
      boxShadow: "0 15px 30px rgba(255, 193, 7, 0.2)"
    }
  };

  return (
    <motion.section
      id="education"
      className="education-section position-relative overflow-hidden py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="bg-blur-shape-5"></div>
      <div className="bg-blur-shape-6"></div>
      
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
            Academic Journey
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
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              className="col-lg-5 col-md-6"
              variants={itemVariants}
              custom={index}
            >
              <motion.div
                className="education-card h-100"
                variants={cardVariants}
                whileHover="hover"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="education-card-inner p-4 p-lg-5">
                  <div className="d-flex align-items-start mb-4">
                    <div className="icon-wrapper me-3">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="education-title mb-1">{edu.title}</h3>
                      <h4 className="education-institution mb-2">{edu.institution}</h4>
                      <div className="education-year badge bg-warning-light text-dark mb-3">
                        {edu.year}
                      </div>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="education-desc mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {edu.description}
                  </motion.p>
                  
                  <div className="education-highlights mt-4 pt-3 border-top">
                    <h6 className="mb-3">Key Highlights:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <motion.span
                          key={i}
                          className="highlight-badge"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            type: 'spring',
                            stiffness: 200,
                            delay: 0.3 + (i * 0.1)
                          }}
                        >
                          {highlight}
                        </motion.span>
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

export default Educations;