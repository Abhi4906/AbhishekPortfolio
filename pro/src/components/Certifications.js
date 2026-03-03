import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaRibbon } from 'react-icons/fa';

import '../App.css';

const certifications = [
  {
    title: "TCS ION Soft Skills Certification",
    issuer: "Tata Consultancy Services",
    year: "2022",
    description: "Professional certification in workplace communication, teamwork, problem-solving, and leadership skills. Demonstrated ability to collaborate effectively in corporate environments.",
    highlight: true,
    icon: <FaRibbon className="text-warning" />
  },
  {
    title: "Infosys Springboot -Introduction to Cyber Security",
    issuer: "INFOSYS",
    year: "2025",
    description: "Fundamentals of Cyber Security , we learn about  basic security tools and  techniques and we learn about how we prevent our system from virues .",
   
  }
];

const Certification = () => {
  return (
    <motion.section
      id="certification"
      className="certification-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 
        className="section-title"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Professional Certifications
      </motion.h2>

      <div className="cert-container">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className={`cert-card ${cert.highlight ? 'highlight-card' : ''}`}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.15
            }}
            whileHover={{
              y: -10,
              boxShadow: cert.highlight 
                ? '0 15px 30px rgba(255, 193, 7, 0.3)' 
                : '0 15px 30px rgba(13, 110, 253, 0.2)'
            }}
          >
            <motion.div 
              className="cert-header"
              whileHover={{ scale: 1.05 }}
            >
              <div className="cert-icon">
                {cert.icon || <FaCertificate />}
              </div>
              <div>
                <h3>{cert.title}</h3>
                <div className="cert-meta">
                  <span className="issuer">{cert.issuer}</span>
                  <span className="year">{cert.year}</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="cert-body"
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: 'auto', opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <p>{cert.description}</p>
              {cert.highlight && (
                <motion.div 
                  className="badge"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.4 }}
                >
                  Featured Certification
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certification;