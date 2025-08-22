import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Code, Database, Github, Settings, Monitor, Figma, 
  Palette, Video, Camera, Search, Smartphone, Edit3 
} from 'lucide-react';

const Skills = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const skills = [
    { icon: Code, name: 'Frontend', description: 'HTML, CSS, JavaScript, React, Next JS' },
    { icon: Database, name: 'Backend', description: 'Node JS, Python' },
    { icon: Github, name: 'Version Control', description: 'Git, GitHub' },
    { icon: Settings, name: 'API Integration', description: 'Postman, Google Cloud Platform, Google Cloud Endpoints' },
    { icon: Monitor, name: 'Databases', description: 'MySQL, PostgreSQL, MongoDB' },
    { icon: Figma, name: 'UI/UX and Web Design', description: 'Figma, Adobe XD' },
    { icon: Palette, name: 'Graphic Design', description: 'Adobe Photoshop, Adobe Illustrator, Canva' },
    { icon: Video, name: 'Motion Graphics', description: 'Adobe After Effects, Canva' },
    { icon: Smartphone, name: '3D & Product Design', description: 'Blender' },
    { icon: Edit3, name: 'Video Editing', description: 'Capcut, Inshot' },
    { icon: Camera, name: 'Photo Editing', description: 'Adobe Photoshop, Adobe Lightroom' },
    { icon: Search, name: 'Digital Marketing', description: 'SEO, Social Media, Email Marketing' },
  ];

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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      ref={elementRef}
      id="skills" 
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
          My Skills
        </motion.h2>
        {/* Responsive grid: 2 per row on small devices */}
        <motion.div 
          className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-card group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: Math.random() > 0.5 ? 2 : -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-4">
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent group-hover:text-accent transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-accent transition-colors duration-300 text-sm sm:text-base">{skill.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-accent/80 transition-colors duration-300">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;