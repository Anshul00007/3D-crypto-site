import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="min-h-screen flex items-center justify-center p-8 pt-24"
    >
      {children}
    </motion.section>
  );
};

export const Home = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionWrapper id="home">
      <motion.div 
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-6xl orbitron font-bold text-yellow-400 mb-4 text-glow animate-glow"
        >
          Welcome to <br />
          <motion.span 
            className="block mt-4 text-6xl md:text-7xl"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
          >
            Infinity Traders
          </motion.span>
        </motion.h1>
        
        <motion.p
          variants={textVariants}
          className="text-lg md:text-xl text-gray-300 mt-10"
        >
         <span className='typewriter-text'>Premium Trading Solutions for <span className='text-yellow-500'> Crypto </span> & <span className='text-yellow-500'>USDT </span> Exchange</span>
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
};

export const About = () => {
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <SectionWrapper id="about">
      <div className="max-w-4xl w-full">
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-yellow-400 mb-8"
          >
            About Us
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed"
          >
            At Infinity Traders, we combine cutting-edge technology with 
            financial expertise to deliver exceptional trading solutions. 
            Our team of professionals is dedicated to helping you navigate 
            the complex world of financial markets with confidence.
          </motion.p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export const Services = () => {
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        bounce: 0.4,
        duration: 0.8 
      } 
    }
  };

  return (
    <SectionWrapper id="services">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl font-bold text-yellow-400 mb-12 text-center"
        >
          Our Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Market Analysis', 'Investment Solutions', 'Risk Management'].map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.5 }}
              className="p-8 bg-gray-800/50 rounded-xl border border-yellow-400/30 backdrop-blur-sm hover:border-yellow-400/50 transition-all"
            >
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">{service}</h3>
                <p className="text-gray-300 text-md">
                  Comprehensive {service.toLowerCase()} services tailored to your needs
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Contact Us</h2>
          <p className="text-gray-300">Get in touch with our experts</p>
        </motion.div>

        <motion.form 
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-8"
        >
          <motion.div variants={inputVariants}>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-800/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all"
            />
          </motion.div>

          <motion.div variants={inputVariants}>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 bg-gray-800/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all"
            />
          </motion.div>

          <motion.div 
            variants={inputVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              className="w-full py-4 bg-yellow-400/90 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};