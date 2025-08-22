import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('software');
  const { elementRef, isVisible } = useScrollAnimation();

  const categories = [
    { id: 'software', label: 'Softwares & Websites' },
    { id: 'graphic', label: 'Graphic Design' },
    { id: 'ui', label: 'UI Design' },
  ];

  const projects = {
    software: [
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack online shopping platform with admin dashboard',
        tech: ['React', 'Node.js', 'MongoDB'],
        image: '/api/placeholder/400/300',
        github: '#',
        live: '#'
      },
      {
        title: 'Task Management App',
        description: 'Collaborative project management tool with real-time updates',
        tech: ['Vue.js', 'Firebase', 'TypeScript'],
        image: '/api/placeholder/400/300',
        github: '#',
        live: '#'
      },
      {
        title: 'Weather Dashboard',
        description: 'Interactive weather application with location-based forecasts',
        tech: ['React', 'API Integration', 'CSS3'],
        image: '/api/placeholder/400/300',
        github: '#',
        live: '#'
      }
    ],
    graphic: [
      {
        title: 'Brand Identity Package',
        description: 'Complete branding solution for tech startup',
        tech: ['Illustrator', 'Photoshop', 'InDesign'],
        image: '/api/placeholder/400/300',
      },
      {
        title: 'Marketing Campaign',
        description: 'Visual assets for digital marketing campaign',
        tech: ['Photoshop', 'After Effects', 'Figma'],
        image: '/api/placeholder/400/300',
      }
    ],
    ui: [
      {
        title: 'Mobile Banking App',
        description: 'Intuitive banking interface with accessibility focus',
        tech: ['Figma', 'Prototyping', 'User Research'],
        image: '/api/placeholder/400/300',
      },
      {
        title: 'SaaS Dashboard',
        description: 'Clean and modern dashboard for analytics platform',
        tech: ['Sketch', 'Principle', 'Design System'],
        image: '/api/placeholder/400/300',
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.section 
      ref={elementRef}
      id="projects" 
      className="py-16 sm:py-20 px-4 sm:px-6"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Projects
        </motion.h2>
        
        {/* Category Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'text-accent font-bold'
                  : 'glass-card text-muted-foreground hover:text-accent'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {projects[activeCategory as keyof typeof projects]?.map((project, index) => (
              <motion.div 
                key={project.title}
                className={`project-card group ${activeCategory === 'graphic' || activeCategory === 'ui' ? 'overflow-x-hidden' : ''}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
              <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                <motion.div 
                  className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center"
                  whileHover={{ 
                    background: "linear-gradient(135deg, rgba(var(--accent), 0.3), rgba(var(--secondary), 0.3))",
                    transition: { duration: 0.3 }
                  }}
                >
                  <span className="text-muted-foreground">Project Preview</span>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.h3 
                  className="text-xl font-semibold group-hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <motion.span 
                      key={tech} 
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 flex-wrap">
                  {/* Software & Websites: show code, live, and styled view button */}
                  {activeCategory === 'software' && (
                    <>
                      {project.github && (
                        <motion.a 
                          href={project.github} 
                          className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a 
                          href={project.live} 
                          className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Project
                        </motion.a>
                      )}
                    </>
                  )}
                  {/* Graphic & UI/UX: show visit project and view button, no code button */}
                  {(activeCategory === 'graphic' || activeCategory === 'ui') && (
                    <>
                      <motion.a 
                        href={project.live || '#'} 
                        className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Project
                      </motion.a>
                      <motion.button
                        className={`flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base text-accent`}
                        onClick={() => window.open(project.image || project.live || '#', '_blank')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </motion.button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;