import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaWhatsapp,
  FaGithub
} from 'react-icons/fa';
import '../App.css';

const Contact = () => {
  const contactItems = [
    {
      icon: <FaEnvelope className="contact-icon" />,
      text: "ayaduvanshi4906@gmail.com",
      link: "mailto:ayaduvanshi4906@gmail.com",
      delay: 0.1
    },
    {
      icon: <FaPhoneAlt className="contact-icon" />,
      text: "+91 78383 54906",
      link: "tel:+917838354906",
      delay: 0.2
    },
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      text: "Uttar Pradesh, India",
      delay: 0.3
    },
    {
      icon: <FaLinkedin className="contact-icon" />,
      text: "linkedin.com/in/abhishek-yadav-49yadav06",
      link: "https://linkedin.com/in/abhishek-yadav-49yadav06",
      delay: 0.4
    },
    {
      icon: <FaGithub className="contact-icon" />,
      text: "github.com/Abhi4906",
      link: "https://github.com/Abhi4906",
      delay: 0.5
    },
    {
      icon: <FaWhatsapp className="contact-icon" />,
      text: "Chat on WhatsApp",
      link: "https://wa.me/917838354906",
      delay: 0.6
    }
  ];

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="contact-card">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="contact-item"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: item.delay, duration: 0.5 }}
              whileHover={{ 
                x: 5,
                backgroundColor: 'rgba(255, 193, 7, 0.1)'
              }}
            >
              <div className="icon-wrapper">
                {item.icon}
              </div>
              {item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>Let's build something amazing together!</p>
          <p>Developed by Abhishek Yadav</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;