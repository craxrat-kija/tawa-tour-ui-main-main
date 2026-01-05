import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Calendar, Mountain, Camera, MapPin, ChevronDown } from 'lucide-react';
import { mainNews, destinations } from '@/data/destinations';
import pandeImage from '@/assets/destination-pande.jpg';
import mikumiImage from '@/assets/destination-mikumi.jpg';
import selousImage from '@/assets/destination-selous.jpg';
import { useState, useEffect, useRef } from 'react';
import Typewriter from '@/components/ui/Typewriter';
import { useInView } from 'framer-motion';
import NewsAndEvents from './NewsAndEvents';

export default function HeroSection() {
  // Latest news is now handled in the NewsAndEvents component

  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);

  // Amazing views data
  const amazingViews = [
    { 
      icon: Mountain, 
      title: 'Serengeti Plains', 
      description: 'Endless grasslands and wildlife migrations', 
      color: 'from-jungle-yellow/20 to-jungle/20',
      image: mikumiImage
    },
    { 
      icon: Camera, 
      title: 'Ngorongoro Crater', 
      description: 'World\'s largest intact caldera', 
      color: 'from-jungle/20 to-jungle-yellow/20',
      image: pandeImage
    },
    { 
      icon: MapPin, 
      title: 'Kilimanjaro Views', 
      description: 'Africa\'s highest peak backdrop', 
      color: 'from-jungle-yellow/20 to-jungle/20',
      image: selousImage
    },
  ];
  
  // Dynamic content arrays
  const heroFirstTexts = [
    'Tanzania Wildlife',
    'Our Main Office is at Morogoro-TAFORI',
    'Nature Protection',
    'Hunt With',
    'TUMERITHISHWA'
  ];
  
  const heroSecondTexts = [
    'Management Authority (TAWA)',
    '(0789498544)',
    'Stewards',
    'Us',
    'TUWARITHISHE'
  ];

  const gameReservesTexts = [
    'Explore Game Reserves',
    'Discover Wildlife',
    'Experience Nature',
    'Protect Heritage'
  ];
  
  // Hero title looping typewriter states - Independent loops for first and second parts
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, margin: '-100px' });
  const [heroFirstPart, setHeroFirstPart] = useState('');
  const [heroSecondPart, setHeroSecondPart] = useState('');
  const [heroFirstIndex, setHeroFirstIndex] = useState(0);
  const [heroSecondIndex, setHeroSecondIndex] = useState(0);
  const [heroFirstTextIndex, setHeroFirstTextIndex] = useState(0);
  const [heroSecondTextIndex, setHeroSecondTextIndex] = useState(0);
  const [isFirstDeleting, setIsFirstDeleting] = useState(false);
  const [isSecondDeleting, setIsSecondDeleting] = useState(false);
  const [isFirstPaused, setIsFirstPaused] = useState(false);
  const [isSecondPaused, setIsSecondPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Start typing immediately when component mounts (like Game Reserves)
  useEffect(() => {
    if (!hasStarted) {
      setHasStarted(true);
      // Start first part immediately
      const firstText = heroFirstTexts[0];
      setHeroFirstPart(firstText.slice(0, 1));
      setHeroFirstIndex(1);
      
      // Start second part immediately
      const secondText = heroSecondTexts[0];
      setHeroSecondPart(secondText.slice(0, 1));
      setHeroSecondIndex(1);
    }
  }, [hasStarted]);

  // Game Reserves looping typewriter states
  const gameReservesRef = useRef(null);
  const gameReservesInView = useInView(gameReservesRef, { once: true, margin: '-50px' });
  const [gameReservesText, setGameReservesText] = useState('');
  const [gameReservesIndex, setGameReservesIndex] = useState(0);
  const [gameReservesTextIndex, setGameReservesTextIndex] = useState(0);
  const [gameReservesIsDeleting, setGameReservesIsDeleting] = useState(false);
  const [gameReservesIsPaused, setGameReservesIsPaused] = useState(false);

  // Hero title looping typewriter effect - First part (independent, continuous infinite loop)
  useEffect(() => {
    if (!hasStarted) return;

    const currentFirstText = heroFirstTexts[heroFirstTextIndex];
    const typingSpeed = 40;
    const deletingSpeed = 20;
    const pauseTime = 1000;
    let timeoutId: NodeJS.Timeout;

    // Pause state - wait then start deleting
    if (isFirstPaused) {
      timeoutId = setTimeout(() => {
        setIsFirstPaused(false);
        setIsFirstDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeoutId);
    }

    // Deleting state - delete character by character
    if (isFirstDeleting) {
      if (heroFirstPart.length > 0) {
        timeoutId = setTimeout(() => {
          setHeroFirstPart(prev => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeoutId);
      } else {
        // Move to next text
        setIsFirstDeleting(false);
        setHeroFirstTextIndex(prev => (prev + 1) % heroFirstTexts.length);
        setHeroFirstIndex(0);
      }
    } else {
      // Typing state - type character by character
      if (heroFirstIndex < currentFirstText.length) {
        timeoutId = setTimeout(() => {
          setHeroFirstPart(currentFirstText.slice(0, heroFirstIndex + 1));
          setHeroFirstIndex(prev => prev + 1);
        }, heroFirstIndex === 0 ? 200 : typingSpeed);
        return () => clearTimeout(timeoutId);
      } else {
        // Finished typing - pause then delete (will loop infinitely forever)
        setIsFirstPaused(true);
      }
    }
  }, [hasStarted, heroFirstIndex, heroFirstTextIndex, isFirstDeleting, isFirstPaused, heroFirstPart, heroFirstTexts]);

  // Hero title looping typewriter effect - Second part (independent, continuous infinite loop)
  useEffect(() => {
    if (!hasStarted) return;

    const currentSecondText = heroSecondTexts[heroSecondTextIndex];
    const typingSpeed = 40;
    const deletingSpeed = 20;
    const pauseTime = 1000;
    let timeoutId: NodeJS.Timeout;

    // Pause state - wait then start deleting
    if (isSecondPaused) {
      timeoutId = setTimeout(() => {
        setIsSecondPaused(false);
        setIsSecondDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeoutId);
    }

    // Deleting state - delete character by character
    if (isSecondDeleting) {
      if (heroSecondPart.length > 0) {
        timeoutId = setTimeout(() => {
          setHeroSecondPart(prev => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeoutId);
      } else {
        // Move to next text
        setIsSecondDeleting(false);
        setHeroSecondTextIndex(prev => (prev + 1) % heroSecondTexts.length);
        setHeroSecondIndex(0);
      }
    } else {
      // Typing state - type character by character
      if (heroSecondIndex < currentSecondText.length) {
        timeoutId = setTimeout(() => {
          setHeroSecondPart(currentSecondText.slice(0, heroSecondIndex + 1));
          setHeroSecondIndex(prev => prev + 1);
        }, heroSecondIndex === 0 ? 200 : typingSpeed);
        return () => clearTimeout(timeoutId);
      } else {
        // Finished typing - pause then delete (will loop infinitely forever)
        setIsSecondPaused(true);
      }
    }
  }, [hasStarted, heroSecondIndex, heroSecondTextIndex, isSecondDeleting, isSecondPaused, heroSecondPart, heroSecondTexts]);

  // Game Reserves looping typewriter effect
  useEffect(() => {
    if (!gameReservesInView) return;

    const currentText = gameReservesTexts[gameReservesTextIndex];
    const typingSpeed = 40;
    const deletingSpeed = 20;
    const pauseTime = 1000;

    if (gameReservesIsPaused) {
      const pauseTimeout = setTimeout(() => {
        setGameReservesIsPaused(false);
        setGameReservesIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (gameReservesIsDeleting) {
      if (gameReservesText.length > 0) {
        const timeout = setTimeout(() => {
          setGameReservesText(prev => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Move to next text
        setGameReservesIsDeleting(false);
        setGameReservesTextIndex(prev => (prev + 1) % gameReservesTexts.length);
        setGameReservesIndex(0);
      }
    } else {
      if (gameReservesIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setGameReservesText(currentText.slice(0, gameReservesIndex + 1));
          setGameReservesIndex(prev => prev + 1);
        }, gameReservesIndex === 0 ? 200 : typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Text complete, pause then delete
        setGameReservesIsPaused(true);
      }
    }
  }, [gameReservesInView, gameReservesIndex, gameReservesTextIndex, gameReservesIsDeleting, gameReservesIsPaused, gameReservesText, gameReservesTexts]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };


  // Game Reserves for scrollable section with descriptions
  const gameReserves = [
    { 
      name: 'IKORONGO & GRUMET GR', 
      image: selousImage,
      description: 'Twin reserves protecting critical elephant migration corridors and diverse savanna ecosystems with rich biodiversity.',
      area: '8,500 km²',
      wildlife: 'Elephants, Lions, Buffalo, Giraffes'
    },
    { 
      name: 'SELOUS GR', 
      image: selousImage,
      description: 'UNESCO World Heritage Site and one of Africa\'s largest protected areas, featuring pristine rivers and diverse wildlife habitats.',
      area: '50,000 km²',
      wildlife: 'Hippos, Crocodiles, Elephants, 440+ Bird Species'
    },
    { 
      name: 'MASWA GR', 
      image: pandeImage,
      description: 'A vital wildlife corridor connecting Serengeti ecosystems, home to large predators and migratory herds.',
      area: '2,200 km²',
      wildlife: 'Lions, Leopards, Cheetahs, Wildebeest'
    },
    { 
      name: 'MPANGA KIPENGERE GR', 
      image: mikumiImage,
      description: 'Mountainous reserve with unique highland ecosystems, protecting endemic species and critical watershed areas.',
      area: '1,800 km²',
      wildlife: 'Mountain Antelopes, Leopards, Rare Birds'
    },
    { 
      name: 'KIJERESHI GR', 
      image: pandeImage,
      description: 'Forested sanctuary preserving ancient woodlands and providing habitat for endangered forest-dwelling species.',
      area: '1,200 km²',
      wildlife: 'Forest Elephants, Primates, Rare Birds'
    },
    { 
      name: 'LUKWATI & PITI GR', 
      image: selousImage,
      description: 'Coastal reserves protecting mangrove ecosystems and serving as critical breeding grounds for marine and terrestrial wildlife.',
      area: '3,500 km²',
      wildlife: 'Marine Birds, Crocodiles, Coastal Wildlife'
    },
    { 
      name: 'MOYOWOSI GR', 
      image: mikumiImage,
      description: 'Wetland reserve featuring extensive swamps and floodplains, supporting large herds and diverse aquatic life.',
      area: '6,000 km²',
      wildlife: 'Hippos, Waterbucks, Sitatunga, Water Birds'
    },
    { 
      name: 'MKUNGUNERO GR', 
      image: pandeImage,
      description: 'Pristine wilderness area protecting critical wildlife corridors and supporting diverse savanna ecosystems.',
      area: '2,800 km²',
      wildlife: 'Elephants, Lions, Buffalo, Antelopes'
    },
    { 
      name: 'SWAGASWAGA GR', 
      image: selousImage,
      description: 'Vast protected area featuring diverse habitats from woodlands to grasslands, home to numerous wildlife species.',
      area: '4,200 km²',
      wildlife: 'Lions, Leopards, Elephants, Giraffes'
    },
    { 
      name: 'LIPARAMBA GR', 
      image: mikumiImage,
      description: 'Forested reserve preserving unique woodland ecosystems and providing sanctuary for rare and endangered species.',
      area: '1,500 km²',
      wildlife: 'Forest Elephants, Primates, Rare Birds, Antelopes'
    },
    { 
      name: 'LUKWIKA LUMESULE GR', 
      image: pandeImage,
      description: 'Twin reserves protecting critical migration routes and diverse ecosystems with rich biodiversity.',
      area: '3,600 km²',
      wildlife: 'Elephants, Buffalo, Lions, Various Antelope Species'
    },
    { 
      name: 'PANDE GR', 
      image: pandeImage,
      description: 'A pristine wilderness sanctuary featuring dense jungle forests and winding rivers, home to diverse wildlife.',
      area: '2,500 km²',
      wildlife: 'African Elephants, Lions, Leopards, Buffalo, Various Antelope Species'
    },
  ];

  // Latest news is now handled in the NewsAndEvents component

  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] md:h-[65vh] md:min-h-[550px] flex overflow-hidden">
        {/* Full Background Video */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <iframe
            src="https://www.youtube.com/embed/zrTxUq5LSEo?si=sQNNPf2l6iOdDbIz&autoplay=1&loop=1&mute=1&controls=0&playlist=zrTxUq5LSEo&modestbranding=1&rel=0&playsinline=1"
            className="absolute top-0 left-0 pointer-events-none"
            style={{
              border: 'none',
              width: '100vw',
              height: '100vh',
              minWidth: '100%',
              minHeight: '100%',
              transform: 'scale(1.2)',
              transformOrigin: 'center center',
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Tanzania Wildlife Background Video"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex items-center justify-center py-8 md:py-12">
          <div className="container-safari w-full">
            <div className="max-w-4xl mx-auto text-center px-4 md:px-0">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-4 md:mb-6"
                >
                  <span className="inline-block px-4 md:px-5 py-2 md:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                    Protecting Tanzania's Wildlife Heritage
                  </span>
                </motion.div>

                <motion.h1
                  ref={heroRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 md:mb-6 text-balance text-white min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]"
                >
                  <div className="block">
                    <span className={heroFirstPart.includes('Morogoro-TAFORI') ? 'text-jungle-yellow' : 'text-white'}>
                      {heroFirstPart}
                      {!isFirstDeleting && !isFirstPaused && heroFirstPart.length > 0 && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                          className="inline-block w-0.5 h-[1em] bg-jungle-yellow ml-1 align-middle"
                        />
                      )}
                    </span>
                  </div>
                  <div className="block">
                    <span className="text-jungle">
                      {heroSecondPart}
                      {!isSecondDeleting && !isSecondPaused && heroSecondPart.length > 0 && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                          className="inline-block w-0.5 h-[1em] bg-jungle-yellow ml-1 align-middle"
                        />
                      )}
                    </span>
                  </div>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto"
                >
                  Conserving and managing Tanzania's magnificent wildlife resources across 
                  Game Reserves and Controlled Areas for present and future generations.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                >
                  <Link
                    to="/destinations"
                    className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-jungle-yellow text-jungle-dark font-semibold rounded-full hover:bg-jungle-yellow-light transition-all duration-300 hover:shadow-glow hover:-translate-y-1 hover:scale-105 text-sm md:text-base"
                  >
                    Explore Destinations
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/news"
                    className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 text-sm md:text-base"
                  >
                    <Play className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                    Latest News
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center p-1.5 md:p-2 hover:border-jungle-yellow/50 transition-colors cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 md:w-1.5 md:h-1.5 bg-jungle-yellow rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* News & Updates Card Section - Below Video */}
      <section className="relative bg-gradient-to-b from-background via-background to-jungle/5 -mt-20 md:-mt-24 overflow-hidden">
        <div className="min-h-[80vh] md:min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row">
          {/* Left Side - Game Reserves Scrollable Section */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-jungle/8 via-jungle/5 to-jungle-yellow/8 border-b lg:border-b-0 lg:border-r border-jungle/20 relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--jungle)) 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}
              ></div>
            </div>
            <div className="h-full flex flex-col p-4 md:p-6 lg:p-8 relative z-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4 md:mb-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className="h-1 w-12 bg-gradient-to-r from-jungle-yellow to-jungle rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <span className="text-xs md:text-sm font-semibold text-jungle-yellow uppercase tracking-wider">
                    Game Reserves
                  </span>
                </div>
                <h2 
                  ref={gameReservesRef}
                  className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-1.5 min-h-[2rem] md:min-h-[2.5rem]"
                >
                  <span className="inline-block">
                    {gameReservesText}
                    {!gameReservesIsDeleting && !gameReservesIsPaused && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                        className="inline-block w-0.5 h-[1em] bg-jungle-yellow ml-1 align-middle"
                      />
                    )}
                  </span>
                </h2>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isTypewriterComplete ? 1 : 0, y: isTypewriterComplete ? 0 : 10 }}
                  transition={{ duration: 0.5, delay: isTypewriterComplete ? 0.3 : 0 }}
                  className="text-muted-foreground text-xs md:text-sm"
                >
                  Discover Tanzania's protected wildlife areas
                </motion.p>
              </motion.div>

              {/* Scrollable Game Reserves List */}
              <div 
                className="flex-1 overflow-y-auto pr-2 md:pr-3 custom-scrollbar max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-220px)] lg:max-h-[calc(100vh-250px)]"
                style={{ scrollBehavior: 'smooth' }}
              >
                {/* Fade gradient at top */}
                <div className="sticky top-0 h-8 bg-gradient-to-b from-jungle/8 via-jungle/5 to-transparent pointer-events-none z-10 mb-[-2rem]" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-2">
                  {gameReserves.map((reserve, index) => (
                    <motion.div
                      key={reserve.name}
                      initial={{ opacity: 0, y: 20, scale: 0.95, rotateY: -5 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.03,
                        type: "spring",
                        stiffness: 120,
                        damping: 12
                      }}
                      whileHover={{ 
                        y: -4, 
                        scale: 1.03,
                        rotateY: 2,
                        transition: { duration: 0.3, type: "spring" }
                      }}
                      className="group"
                    >
                      <Link
                        to="/destinations"
                        className="block bg-card/95 backdrop-blur-sm rounded-xl overflow-hidden border border-jungle/20 hover:border-jungle/50 transition-all duration-300 shadow-md hover:shadow-xl relative h-full"
                      >
                        {/* Glow effect on hover */}
                        <motion.div
                          className="absolute -inset-0.5 bg-gradient-to-r from-jungle-yellow/30 via-jungle/30 to-jungle-yellow/30 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"
                          initial={false}
                        />
                        
                        {/* Animated Background Gradient */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-jungle/0 via-jungle-yellow/0 to-jungle/0 group-hover:from-jungle/10 group-hover:via-jungle-yellow/10 group-hover:to-jungle/10 transition-all duration-500"
                          initial={false}
                        />
                        
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '200%' }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        
                        {/* Content Container - Column Layout */}
                        <div className="relative flex flex-col p-2.5 md:p-3 h-full z-10">
                          {/* Thumbnail Image */}
                          <motion.div 
                            className="relative w-full h-24 md:h-28 mb-2.5 rounded-lg overflow-hidden shadow-lg"
                            whileHover={{ scale: 1.08, rotate: 1 }}
                            transition={{ duration: 0.4 }}
                          >
                            <motion.img
                              src={reserve.image}
                              alt={reserve.name}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.15 }}
                              transition={{ duration: 0.5 }}
                            />
                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-jungle/50 via-jungle/20 to-transparent" />
                            
                            {/* Shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.6 }}
                            />
                          </motion.div>
                          
                          {/* Text Content */}
                          <div className="flex-1 min-w-0">
                            {/* Reserve Name */}
                            <motion.h3 
                              className="text-xs md:text-sm font-heading font-bold text-foreground mb-1.5 group-hover:text-jungle transition-colors duration-200 line-clamp-1"
                              whileHover={{ x: 2 }}
                            >
                              {reserve.name}
                            </motion.h3>
                            
                            {/* Description */}
                            <motion.p 
                              className="text-[10px] md:text-xs text-muted-foreground leading-tight mb-2 line-clamp-2"
                              initial={{ opacity: 0.8 }}
                              whileHover={{ opacity: 1 }}
                            >
                              {reserve.description}
                            </motion.p>
                            
                            {/* Stats - More compact */}
                            <div className="flex flex-wrap gap-1.5 mb-1.5">
                              <motion.div
                                className="flex items-center gap-1 px-1.5 py-0.5 bg-jungle/15 rounded-md hover:bg-jungle/25 transition-colors duration-200 border border-jungle/20"
                                whileHover={{ scale: 1.08, y: -1 }}
                              >
                                <MapPin className="w-3 h-3 text-jungle-yellow" />
                                <span className="text-[9px] md:text-[10px] font-semibold text-foreground">{reserve.area}</span>
                              </motion.div>
                              <motion.div
                                className="flex items-center gap-1 px-1.5 py-0.5 bg-jungle-yellow/15 rounded-md hover:bg-jungle-yellow/25 transition-colors duration-200 border border-jungle-yellow/20"
                                whileHover={{ scale: 1.08, y: -1 }}
                              >
                                <Camera className="w-3 h-3 text-jungle" />
                                <span className="text-[9px] md:text-[10px] font-semibold text-foreground line-clamp-1">{reserve.wildlife.split(',')[0]}</span>
                              </motion.div>
                            </div>
                            
                            {/* Arrow Icon */}
                            <div className="flex justify-end">
                              <motion.div
                                whileHover={{ x: 3, scale: 1.2, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="p-1 rounded-full bg-jungle-yellow/10 group-hover:bg-jungle-yellow/20 transition-colors"
                              >
                                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-jungle-yellow" />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover Border Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 border-jungle-yellow/0 group-hover:border-jungle-yellow/40 transition-all duration-300 pointer-events-none"
                          initial={false}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Fade gradient at bottom */}
                <div className="sticky bottom-0 h-8 bg-gradient-to-t from-jungle/8 via-jungle/5 to-transparent pointer-events-none z-10 mt-[-2rem]" />
              </div>
            </div>

            {/* Right Side - News & Updates */}
            <div className="w-full lg:w-1/2">
              <NewsAndEvents />
            </div>
          </div>
        </div>
      </section>

      {/* Amazing Views Cards Section */}
      <section className="relative py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block px-4 py-1 bg-jungle/10 text-jungle rounded-full text-sm font-medium mb-4">
              Spectacular Views
            </span>
            <div className="min-h-[2.5rem] md:min-h-[3rem] mb-2">
              <Typewriter
                text="Tanzania's Natural Wonders"
                speed={80}
                delay={200}
                className="text-3xl md:text-4xl font-heading font-bold text-foreground"
                tag="h2"
                showCursor={true}
              />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover breathtaking landscapes and iconic destinations across Tanzania
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {amazingViews.map((view, index) => (
              <motion.div
                key={view.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className={`relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br ${view.color} border border-jungle/10 hover:border-jungle/30 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-colors"
                    >
                      <view.icon className="w-8 h-8 text-jungle" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-jungle transition-colors">
                      {view.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {view.description}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-jungle/0 group-hover:bg-jungle/5 transition-colors duration-300"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
