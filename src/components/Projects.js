import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRegImages } from 'react-icons/fa';
import '../App.css';
// Import your images
import devImage from '../assets/dev.jpg';
import ssImage from '../assets/ss.png';
import emsImage from '../assets/ems.png';
import ramkusImage from '../assets/ram.png'; // Add this image
import citybusImage from '../assets/bus.png'; // Add this image
import figmaImage from '../assets/fig.png'; // Add this image

const projects = [
  {
    title: 'devalive',
    description: 'Comprehensive patient portal with appointment scheduling and medical records',
    technologies: ['React', '.NET Core', 'AWS'],
    githubLink: 'https://github.com/Abhi4906',
    liveLink: 'https://healthcare-portal.example.com',
    screenshots: [devImage]
  },
  {
    title: 'Shiwansh Solutions Website',
    description: 'Official company website with modern UI/UX and SEO optimization',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/Abhi4906',
    liveLink: 'https://shiwansh.com',
    screenshots: [ssImage]
  },
  {
    title: 'Ems shiwansh Solution',
    description: 'Official company website with modern UI/UX and SEO optimization',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/Abhi4906',
    liveLink: 'https://ems.shiwansh.com',
    screenshots: [emsImage]
  },
  {
    title: 'Ramkus Dairy',
    description: 'E-commerce platform for dairy products with online ordering and delivery tracking. Features product catalog, cart management, and secure payments.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubLink: 'https://github.com/Abhi4906/ramkus-dairy',
    liveLink: 'https://ramkus-dairy.example.com',
    screenshots: [ramkusImage]
  },
  {
    title: 'CityBusRide',
    description: 'Complete bus booking system with real-time seat availability, route planning, and online ticket booking. Includes admin dashboard for fleet management.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
    githubLink: 'https://github.com/Abhi4906/citybusride',
    liveLink: 'https://citybusride.example.com',
    screenshots: [citybusImage]
  },
  {
    title: 'FigmaLand',
    description: 'Pixel-perfect implementation of a Figma design with responsive layouts, animations, and interactive components. Showcases modern React development.',
    technologies: ['React', 'Framer Motion', 'SCSS', 'Responsive Design'],
    githubLink: 'https://github.com/Abhi4906/figmaland',
    liveLink: 'https://figmaland.example.com',
    screenshots: [figmaImage]
  }
];

// 1. FIRST define all variants BEFORE the component
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

const cardHover = {
  y: -10,
  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
  transition: {
    type: "spring",
    stiffness: 300
  }
};

const screenshotHover = {
  scale: 1.05,
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  transition: {
    duration: 0.3
  }
};

const Projects = () => {
  const [activeScreenshot, setActiveScreenshot] = React.useState(0);
  const [activeProject, setActiveProject] = React.useState(null);

  const nextScreenshot = (projectIndex) => {
    setActiveScreenshot((prev) => 
      (prev + 1) % projects[projectIndex].screenshots.length
    );
  };

  const prevScreenshot = (projectIndex) => {
    setActiveScreenshot((prev) => 
      (prev - 1 + projects[projectIndex].screenshots.length) % 
      projects[projectIndex].screenshots.length
    );
  };

  return (
    <motion.section
      id="projects"
      className="projects-section py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          className="section-header text-center mb-5"
          variants={itemVariants}
        >
          <h2 className="display-5 fw-bold">My Projects</h2>
          <div className="divider"></div>
          <p className="lead text-muted">
            Here are some of my recent works
          </p>
        </motion.div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6"
              variants={itemVariants}
            >
              <motion.div
                className="project-card h-100"
                whileHover={cardHover}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="project-card-inner p-4">
                  {/* Screenshot Carousel */}
                  <div className="screenshot-carousel mb-4 position-relative">
                    <motion.img
                      src={project.screenshots[activeScreenshot]}
                      alt={`${project.title} screenshot`}
                      className="img-fluid rounded"
                      whileHover={screenshotHover}
                      onClick={() => setActiveProject(index)}
                    />
                    <div className="carousel-controls">
                      <button 
                        className="carousel-btn prev"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevScreenshot(index);
                        }}
                      >
                        &lt;
                      </button>
                      <button 
                        className="carousel-btn next"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextScreenshot(index);
                        }}
                      >
                        &gt;
                      </button>
                    </div>
                    <div className="screenshot-indicators">
                      {project.screenshots.map((_, i) => (
                        <span
                          key={i}
                          className={`indicator ${i === activeScreenshot ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveScreenshot(i);
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="project-title mb-2">{project.title}</h3>
                  <p className="project-description mb-3">{project.description}</p>
                  
                  <div className="technologies mb-3">
                    <h6 className="mb-2">Technologies:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="tech-badge"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#3b82f6",
                            color: "white"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links d-flex justify-content-between">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link btn btn-outline-primary"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="me-2" />
                      Code
                    </motion.a>
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-link btn btn-outline-success"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Live Demo
                      </motion.a>
                    )}
                    <motion.button
                      className="screenshots-btn btn btn-outline-secondary"
                      onClick={() => {
                        setActiveProject(index);
                        setActiveScreenshot(0);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaRegImages className="me-2" />
                      View All
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Screenshot Modal */}
      {activeProject !== null && (
        <div className="screenshot-modal">
          <div className="modal-content">
            <button 
              className="close-modal"
              onClick={() => {
                setActiveProject(null);
                setActiveScreenshot(0);
              }}
            >
              &times;
            </button>
            <h3>{projects[activeProject].title}</h3>
            <div className="modal-carousel">
              <img 
                src={projects[activeProject].screenshots[activeScreenshot]} 
                alt={`${projects[activeProject].title} screenshot`} 
              />
              <div className="modal-controls">
                <button onClick={() => prevScreenshot(activeProject)}>
                  &lt;
                </button>
                <span>
                  {activeScreenshot + 1} / {projects[activeProject].screenshots.length}
                </span>
                <button onClick={() => nextScreenshot(activeProject)}>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;