import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';

// Keep all previous code, just ensure each section has proper ID matching nav items
// Add offset to account for navbar height in your scroll targets
const SectionWrapper = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      className="min-h-screen flex items-center justify-center p-8 pt-24"
    >
      {children}
    </motion.section>
  );
};

export const Home = () => (
  <SectionWrapper id="home">
    <div className="text-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-6xl font-bold text-yellow-400 mb-4"
      >
        Welcome to Infinity Traders
      </motion.h1>
      <p className="text-xl text-gray-300">Premium Trading Solutions</p>
    </div>
  </SectionWrapper>
);

export const About = () => (
  <SectionWrapper id="about">
    <div className="max-w-4xl">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">About Us</h2>
      <p className="text-gray-300 text-lg">
        We are a leading financial trading firm specializing in innovative investment
        solutions and market analysis.
      </p>
    </div>
  </SectionWrapper>
);

export const Services = () => (
  <SectionWrapper id="services">
    <div className="max-w-4xl">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Market Analysis', 'Investment Solutions', 'Risk Management'].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg border border-yellow-400/30"
          >
            <h3 className="text-xl text-yellow-400 mb-3">{service}</h3>
            <p className="text-gray-300">Professional {service.toLowerCase()} services</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const Contact = () => (
  <SectionWrapper id="contact">
    <div className="max-w-2xl w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8">Contact Us</h2>
      <form className="space-y-6">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-gray-800 border border-yellow-400/30 rounded text-white"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 bg-gray-800 border border-yellow-400/30 rounded text-white h-32"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full py-3 bg-yellow-400 text-black font-bold rounded"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  </SectionWrapper>
);