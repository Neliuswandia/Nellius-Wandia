import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutPortrait from '@/assets/about-portrait.jpg';

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
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
      id="about" 
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
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            <motion.img
              src={aboutPortrait}
              alt="Nellius Wandia at work"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute -z-10 top-8 right-8 w-full h-full rounded-2xl bg-secondary/20"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            ></motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-4 sm:space-y-6"
            variants={containerVariants}
          >
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              I am a versatile software developer and designer who seamlessly blends technical expertise with creative vision. I craft robust, efficient applications while designing visually appealing, responsive websites that deliver exceptional user experiences across devices.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              My graphic design skills allow me to create compelling visuals, such as logos and branding materials, that elevate project aesthetics. Additionally, my UI/UX expertise drives me to design intuitive interfaces and smooth user journeys through thoughtful wireframing, prototyping, and usability testing.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              By bridging development and design, I deliver cohesive, high-quality products that are both functional and visually polished, making me a valuable asset to multidisciplinary teams.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;