import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionSection = ({ children, threshold = 0.5, transitionDelay = 0.5 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay: transitionDelay, ease: 'easeOut' }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;