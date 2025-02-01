import { motion, } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect,useState,useRef  } from 'react';
import bitCoinImg from '../assets/hi.jpg';
import dots from '../assets/dotss.svg';
import * as THREE from 'three';
import { 
  CurrencyDollarIcon,ArrowsRightLeftIcon,ChatBubbleBottomCenterTextIcon,DocumentTextIcon,
  ShieldCheckIcon,PhoneIcon, ChatBubbleOvalLeftEllipsisIcon, PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import Crypto3DModel from './crpto';

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
      className="min-h-screen flex items-center relative overflow-hidden justify-center p-8 pt-16"
    >
      {children}
    </motion.section>
  );
};

export const Home = () => {
  const [showCryptoModel, setShowCryptoModel] = useState(false);

  return (
    <SectionWrapper id="home" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center h-full"
        style={{
          backgroundImage: `url(${bitCoinImg})`,
          opacity: 0.4,
        }}
        animate={{ x: ['0%', '100%'] }}
        transition={{ x: { duration: 8, ease: 'easeInOut' } }}
        onAnimationComplete={() => setShowCryptoModel(true)}
      />

     
      <div
        className="hidden sm:block absolute left-10 sm:left-20 top-40 md:top-130 transform -translate-y-1/2 z-20 w-96 h-96 bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${dots})` }}
      />

      
      <motion.div className="absolute inset-0 bg-black opacity-50 z-10" />

     
      <motion.div
        className="text-center relative z-20 px-4"
        initial={{ opacity: 1, x: 0 }}
        animate={showCryptoModel ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl orbitron font-bold text-yellow-400 mb-4 text-glow animate-glow">
          Welcome to <br />
          <span className="block mt-2 sm:mt-4 text-5xl sm:text-6xl md:text-7xl">Infinity Traders</span>
        </motion.h1>
        <motion.p className="text-base sm:text-lg md:text-xl text-gray-300 mt-2 sm:mt-4">
          Premium Trading Solutions for <span className="text-yellow-500">Crypto</span> & <span className="text-yellow-500">USDT</span>
        </motion.p>
      </motion.div>

      
      {showCryptoModel && (
        <motion.div
          className="text-center mr-62 relative z-20 px-4 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Crypto3DModel />
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl orbitron font-bold text-yellow-400 mb-4 text-glow animate-glow">
            The Future of <span className="text-blue-400">Crypto Trading</span>
          </motion.h1>
          <motion.p className="text-base sm:text-lg md:text-xl text-gray-300 mt-2 sm:mt-4">
            Advanced Trading Solutions for <span className="text-yellow-500">Crypto</span> & <span className="text-yellow-500">USDT</span>
          </motion.p>
        </motion.div>
      )}
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

  const [hovered, setHovered] = useState(null);

  const founders = [
    {
      name: 'Aditya Waikar',
      role: 'Founder & CEO',
      contact: '*************',
    },
    {
      name: 'Vaishnavi Budhwant',
      role: 'Co-Founder',
      contact: '*************',
    },
  ];

  return (
    <SectionWrapper id="about">
      <ThreeBackground />
      <div className="max-w-4xl w-full bg-gray-900 rounded-lg shadow-lg p-12 mt-12 relative z-10 overflow-hidden">
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className='flex flex-col lg:justify-center items-center gap-4'
        >
          <div className='grow'>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold orbitron text-shadow-yellow text-yellow-400 mb-12"
            >
              About Us
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              At Infinity Traders, we combine cutting-edge technology with 
              financial expertise to deliver exceptional trading solutions. 
              Our team of professionals is dedicated to helping you navigate 
              the complex world of financial markets with confidence.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg pb-14 leading-relaxed"
            >
              We are a trusted trading company specializing in cryptocurrency and USDT exchanges. 
              Our services are designed for secure, face-to-face transactions, ensuring transparency and trust. 
              We prioritize personalized support to help clients navigate the complexities of digital trading. 
              Partner with us for a reliable and seamless trading experience.
            </motion.p>

            <motion.div 
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              className="mt-12"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-3xl font-semibold text-yellow-400 mb-4"
              >
                Our Founders
              </motion.h3>

              <div className="flex flex-col gap-4">
                {founders.map((person, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-gray-800 px-4 py-2 rounded-lg shadow-lg border border-yellow-400/50 cursor-pointer transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <motion.h4 
                      className="text-lg font-semibold text-yellow-400 orbitron truncate" 
                    >
                      {person.name}
                    </motion.h4>

                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={hovered === index ? { opacity: 1, y: 0, height: "auto" } : {}}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden mt-1 text-yellow-300 flex flex-col items-start"
                    >
                      {hovered === index && (
                        <div className="flex items-center mb-2">
                          <span className="font-semibold">{person.role}</span>
                        </div>
                      )}

                      <div className="flex items-center">
                        <PhoneIcon className="w-4 h-4 mr-2 text-yellow-300" />
                        <span>{person.contact}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export const Charts = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (document.getElementById("tradingview-script")) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.id = "tradingview-script"; 
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded) {
      const charts = [
        { id: "tradingview_btc", symbol: "BITFINEX:BTCUSD", title: "Bitcoin (BTC)" },
        { id: "tradingview_eth", symbol: "BITFINEX:ETHUSD", title: "Ethereum (ETH)" },
        { id: "tradingview_usdt", symbol: "FX_IDC:USDINR", title: "USDT/INR" }
      ];

      charts.forEach(chart => {
        if (!document.getElementById(chart.id)) return;

        new TradingView.widget({
          autosize: true,
          symbol: chart.symbol,
          interval: "5",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "3",
          locale: "en",
          toolbar_bg: "#111827",
          enable_publishing: false,
          withdateranges: true,
          range: "1D",
          hide_side_toolbar: true,
          allow_symbol_change: true,
          container_id: chart.id,
        });
      });
    }
  }, [scriptLoaded]);

  const containerVariants = {
    offscreen: { opacity: 0, y: 100 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        duration: 18, 
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  return (
    <SectionWrapper id="charts">
      <div className="w-full bg-gray-900 p-10 rounded-xl shadow-lg border border-yellow-500/20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl font-bold text-yellow-400 text-glow-yellow orbitron mb-12 text-center"
        >
          Live Market Charts
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['BTC', 'ETH', 'USDT'].map((coin, index) => (
            <motion.div
              key={coin}
              variants={containerVariants}
              initial={{ opacity: 0, y: index % 2 === 0 ? -150 : 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="p-6 bg-gray-800/50 rounded-xl border border-yellow-400/30 backdrop-blur-sm hover:border-yellow-400/50 transition-all shadow-lg"
            >
              <h3 className="text-xl font-semibold text-yellow-400 text-center mb-4">{coin}</h3>
              <div id={`tradingview_${coin.toLowerCase()}`} className="w-full h-96 rounded-lg shadow-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export const Services = () => {
  const services = [
    {
      title: 'Crypto Trading',
      icon: <CurrencyDollarIcon className="w-12 h-12 text-yellow-400" />,
      description: 'Secure and efficient cryptocurrency trading across multiple blockchain networks'
    },
    {
      title: 'USDT Exchange',
      icon: <ArrowsRightLeftIcon className="w-12 h-12 text-yellow-400" />,
      description: 'Instant USDT conversions with competitive rates and low transaction fees'
    },
    {
      title: 'Face to Face Meeting',
      icon: <ChatBubbleBottomCenterTextIcon className="w-12 h-12 text-yellow-400" />,
      description: 'Personalized consultation through secure in-person or virtual meetings'
    },
    {
      title: 'Record Keeping',
      icon: <DocumentTextIcon className="w-12 h-12 text-yellow-400" />,
      description: 'Comprehensive transaction history and audit-ready documentation'
    },
    {
      title: 'Secure Trading & Transaction',
      icon: <ShieldCheckIcon className="w-12 h-12 text-yellow-400" />,
      description: 'Military-grade encryption for all trades and financial transactions'
    }
  ];

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
      <ThreeBackground />
      <div className="max-w-6xl w-full relative z-10 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl font-bold text-yellow-400 text-shadow-yellow orbitron mb-12 text-center"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="p-8 bg-gray-800/50 rounded-xl border border-yellow-400/30 backdrop-blur-sm hover:border-yellow-400/50 transition-all shadow-lg"
            >
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-glow-yellow text-yellow-400 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-md text-center">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

   
    const outerGeometry = new THREE.TorusGeometry(6, 0.8, 20, 100);
    const outerMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      opacity: 0.4,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const outerRing = new THREE.Mesh(outerGeometry, outerMaterial);
    scene.add(outerRing);

    
    const innerGeometry = new THREE.TorusGeometry(4, 0.6, 20, 80);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      opacity: 0.4,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const innerRing = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerRing);

    
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;  
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = Math.random() * 50 - 25;
      particlePositions[i * 3 + 1] = Math.random() * 50 - 25;
      particlePositions[i * 3 + 2] = Math.random() * 50 - 25;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true, opacity: 0.6 });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);
      outerRing.rotation.x += 0.01;
      outerRing.rotation.y += 0.01;
      outerRing.rotation.z += 0.01;

      innerRing.rotation.x += 0.015;
      innerRing.rotation.y += 0.015;
      innerRing.rotation.z += 0.015;

      particles.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh' }} />;
};

export const Contact = () => {
  const contactDetails = [
    { icon: <PhoneIcon className="w-12 h-12 text-yellow-400" />, title: 'Call Us', info: '*************' },
    { icon: <ChatBubbleOvalLeftEllipsisIcon className="w-12 h-12 text-yellow-400" />, title: 'WhatsApp', info: '*************' },
    { icon: <PaperAirplaneIcon className="w-12 h-12 text-yellow-400" />, title: 'Telegram', info: '@AsInfinityexchange' }
  ];

  return (
    <SectionWrapper id="contact">
      <ThreeBackground />
      <div className="max-w-2xl w-full relative z-10 overflow-hidden">
        <motion.h2 className="text-4xl font-bold orbitron text-yellow-400 mb-4 text-center">Contact Us</motion.h2>
        <div className="space-y-8">
          {contactDetails.map((contact, index) => (
            <motion.div key={index} className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl border border-yellow-400 hover:bg-yellow-400/20 transition-all">
              {contact.icon}
              <div>
                <h3 className="text-xl font-semibold text-yellow-400">{contact.title}</h3>
                <p className="text-gray-300">{contact.info}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
