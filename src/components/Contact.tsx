import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { elementRef, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      ref={elementRef}
      id="contact" 
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
          Let's Talk
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            variants={itemVariants}
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 gradient-text">Get In Touch</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Ready to bring your next project to life? I'd love to hear about your ideas and discuss how we can work together to create something amazing.
              </p>
              
              <motion.div 
                className="space-y-4 sm:space-y-6"
                variants={containerVariants}
              >
                <motion.div 
                  className="flex items-center gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">nellius.wandia@email.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+254 123 456 789</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 sm:space-y-6">
              <motion.div 
                className="grid sm:grid-cols-2 gap-4 sm:gap-6"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-muted/50 border-border focus:border-accent"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-muted/50 border-border focus:border-accent"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-muted/50 border-border focus:border-accent"
                  placeholder="Project discussion"
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-muted/50 border-border focus:border-accent min-h-[120px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button 
                  type="submit" 
                  className="w-full hero-button"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;