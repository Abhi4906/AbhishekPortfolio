import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: '.NET Core', color: '#512BD4', level: 85 },
      { name: 'JavaScript (ES6+)', color: '#F7DF1E', level: 90 },
      { name: 'Java', color: '#239120', level: 80 }
    ]
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', color: '#61DAFB', level: 88 },
      { name: 'HTML5', color: '#E34F26', level: 95 },
      { name: 'CSS3', color: '#1572B6', level: 90 },
      { name: 'Bootstrap', color: '#7952B3', level: 85 },
      { name: 'Responsive Design', color: '#3D8BFD', level: 92 }
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', color: '#68A063', level: 75 },
      { name: '.NET Core', color: '#512BD4', level: 80 },
      { name: 'RESTful APIs', color: '#FF6B35', level: 85 }
    ]
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'SQL Server', color: '#CC2927', level: 80 },
      { name: 'MySQL', color: '#4479A1', level: 75 }
    ]
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', color: '#F05032', level: 85 },
      { name: 'GitHub', color: '#181717', level: 90 },
      { name: 'Postman', color: '#FF6C37', level: 80 },
      { name: 'Swagger', color: '#85EA2D', level: 75 }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5
    }
  },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 10
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10
    }
  },
  hover: {
    scale: 1.05,
    y: -5,
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Skills = () => {
  return (
    <div className="skills-page">
      <motion.div 
        className="skills-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            My <span className="highlight">Skills</span>
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Technologies I've mastered and my proficiency levels
          </motion.p>
          
          <motion.div 
            className="divider"
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={`category-${index}`}
              className="skill-category"
              variants={categoryVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="category-header"
                variants={titleVariants}
              >
                <motion.span 
                  className="category-icon"
                  animate={{ 
                    rotate: [0, 10, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    delay: 0.5 + index * 0.1,
                    duration: 0.6 
                  }}
                >
                  {category.icon}
                </motion.span>
                <motion.h3 
                  className="category-title"
                  style={{ 
                    color: category.skills[0].color,
                    textShadow: `0 2px 15px ${category.skills[0].color}60`
                  }}
                  whileHover={{
                    textShadow: `0 2px 20px ${category.skills[0].color}80`
                  }}
                >
                  {category.title}
                </motion.h3>
              </motion.div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={`skill-${index}-${skillIndex}`}
                    className="skill-item"
                    variants={skillVariants}
                    whileHover="hover"
                    style={{ 
                      borderLeft: `4px solid ${skill.color}`,
                      background: `linear-gradient(to right, ${skill.color}20, transparent)`
                    }}
                  >
                    <div className="skill-info">
                      <motion.span 
                        className="skill-name"
                        style={{ color: skill.color }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className="skill-level"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + skillIndex * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ 
                          delay: 0.3 + index * 0.1, 
                          duration: 1.2,
                          type: "spring",
                          damping: 10
                        }}
                        style={{ 
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}`
                        }}
                      />
                      <motion.div 
                        className="skill-dots"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        {[...Array(10)].map((_, i) => (
                          <span 
                            key={i} 
                            style={{ 
                              backgroundColor: i < skill.level/10 ? skill.color : '#e0e0e0',
                              opacity: i < skill.level/10 ? 1 : 0.3
                            }} 
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;