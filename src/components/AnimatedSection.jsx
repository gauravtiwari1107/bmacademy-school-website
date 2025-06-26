import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0, direction = 'up' }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
