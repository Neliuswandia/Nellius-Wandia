import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const education = [
    {
      institution: 'Moringa School',
      program: 'Software Engineering',
      period: '2022 - 2023',
      description: 'Intensive full-stack development bootcamp covering modern web technologies',
      type: 'Certification'
    },
    {
      institution: 'Gomycode',
      program: 'Graphic Design - Adobe Certified',
      period: '2021 - 2022',
      description: 'Professional certification in Adobe Creative Suite and design principles',
      type: 'Certification'
    },
    {
      institution: 'KCA University',
      program: 'Bachelor of Science in Information Technology',
      period: '2018 - 2022',
      description: 'Comprehensive study of computer science fundamentals and software development',
      type: 'Degree'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.section 
      ref={elementRef}
      id="education" 
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
          Education
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.institution}
              className="glass-card p-4 sm:p-6 lg:p-8"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "var(--shadow-elegant)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  {edu.type === 'Degree' ? (
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  ) : (
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  )}
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                    <motion.h3 
                      className="text-xl sm:text-2xl font-semibold text-foreground"
                      whileHover={{ color: "hsl(var(--accent))", x: 5 }}
                    >
                      {edu.institution}
                    </motion.h3>
                    <motion.div 
                      className="flex items-center gap-2 text-accent"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </motion.div>
                  </div>
                  
                  <motion.h4 
                    className="text-base sm:text-lg font-medium text-accent mb-2 sm:mb-3"
                    whileHover={{ x: 5 }}
                  >
                    {edu.program}
                  </motion.h4>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;