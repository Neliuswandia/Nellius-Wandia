import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import RotatingText from './RotatingText';
import heroPortrait from '@/assets/hero-portrait.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 1, delay: 0.5 }
    }
  };

  return (
    <motion.section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div 
          className="relative z-10 max-w-4xl order-2 lg:order-1"
          variants={itemVariants}
        >
          <div className="text-center lg:text-left mb-6 sm:mb-8">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-7xl font-bold text-foreground mb-3 sm:mb-4 leading-tight"
              variants={itemVariants}
            >
              Hi, I'm{' '}
              <span className="gradient-text block sm:inline">Nellius Wandia</span>
            </motion.h1>
            
            <motion.div variants={itemVariants}>
              <RotatingText
                texts={['Graphic Designer', 'Software Developer', 'UI/UX Designer', 'Web Designer']}
                mainClassName="inline-block bg-primary text-accent text-sm sm:text-base md:text-xl lg:text-3xl font-bold rounded-lg px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 mt-3 sm:mt-5 ml-0 lg:ml-2 xl:ml-10 shadow-glow cursor-default"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.div>
            
            <motion.div 
              className="flex gap-2 sm:gap-3 lg:gap-5 mt-4 sm:mt-5 ml-0 lg:ml-2 xl:ml-10 flex-wrap items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a 
                href="http://www.linkedin.com/in/nellius-wandia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent hover:text-accent/80 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-2xl sm:text-3xl lg:text-4xl" />
              </motion.a>
              <motion.a 
                href="http://github.com/Neliuswandia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent hover:text-accent/80 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-2xl sm:text-3xl lg:text-4xl" />
              </motion.a>
              <motion.button 
                className="bg-accent text-accent-foreground shadow-lg px-4 sm:px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/cv.pdf"
                  download
                  className="bg-accent text-accent-foreground shadow-lg px-4 sm:px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 text-sm sm:text-base flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Portrait */}
        <motion.div 
          className="relative order-1 lg:order-2"
          variants={imageVariants}
        >
          <div className="relative">
            <motion.img
              src={heroPortrait}
              alt="Nellius Wandia - Software Developer"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.3 }
              }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
          <motion.div 
            className="absolute -z-10 top-8 left-8 w-full h-full rounded-2xl bg-accent/20"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(340, 55%, 65%, 0.3)",
                "0 0 40px rgba(340, 55%, 65%, 0.5)",
                "0 0 20px rgba(340, 55%, 65%, 0.3)"
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          ></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;