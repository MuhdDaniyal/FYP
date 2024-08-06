import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  { 
    title: 'Step 1: Select Documents', 
    description: 'Easily Select your study materials in PDF format and upload educational videos to get started.', 
    icon: '📁' 
  },
  { 
    title: 'Step 2: Generate Notes and Quizzes', 
    description: 'Our AI generates concise notes, quizzes, and summaries from your selected documents and uploaded videos.', 
    icon: '📝' 
  },
  { 
    title: 'Step 3: Save and Share', 
    description: 'Save your generated content and share it with others or export it for future use.', 
    icon: '💾' 
  },
];

const HowItWorksSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeInOut', staggerChildren: 0.3 }
    },
    hidden: { opacity: 0, y: 30 }
  };

  const childVariants = {
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.4, ease: 'easeInOut' }
    },
    hidden: { opacity: 0, scale: 0.95 }
  };

  return (
    <section className="bg-gradient-to-b from-darkBlue to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-8">How it Works?</h2>
        <div ref={ref} className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={variants}
              className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg"
            >
              <motion.div
                variants={childVariants}
                className="flex justify-center text-6xl mb-4"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-darkBlue mb-2">{step.title}</h3>
              <p className="text-darkBlue">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
