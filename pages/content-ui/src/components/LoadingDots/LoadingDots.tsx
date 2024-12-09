import { motion } from 'framer-motion';

const LoadingDots = () => {
  const dotVariants = {
    animate: (i: number) => ({
      y: [0, -8, 0], // Vertical bounce
      opacity: [1, 0.8, 1], // Slight fade during bounce
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 0.2, // Stagger each dot
      },
    }),
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px', // Space between dots
        width: '100%',
        height: '100%',
        background: 'transparent', // Transparent background
      }}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={dotVariants}
          animate="animate"
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#fff', // Black, Vercel-like
            borderRadius: '50%', // Circle shape
          }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;
