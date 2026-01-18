import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Calendar, Mountain, Camera, MapPin, ChevronDown, TreePine } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { mainNews, destinations } from '@/data/destinations';
import pandeImage from '@/assets/destination-pande.jpg';
import mikumiImage from '@/assets/destination-mikumi.jpg';
import selousImage from '@/assets/destination-selous.jpg';
import heroWildlifeImage from '@/assets/hero-wildlife.jpg';
import { useState, useEffect, useRef } from 'react';
import Typewriter from '@/components/ui/Typewriter';
import { useInView } from 'framer-motion';
import NewsAndEvents from './NewsAndEvents';

export default function HeroSection() {
  const { t } = useTranslation();
  // Latest news is now handled in the NewsAndEvents component





  // Dynamic content arrays
  const heroFirstTexts = [
    t('hero.title1'),
    t('hero.office'),
    t('hero.protection'),
    t('hero.hunt'),
    t('hero.tagline1')
  ];

  const heroSecondTexts = [
    t('hero.title2'),
    t('hero.phone'),
    t('hero.stewards'),
    t('hero.us'),
    t('hero.tagline2')
  ];

  const gameReservesTexts = [
    t('hero.exploreReserves'),
    t('hero.discoverWildlife'),
    t('hero.experienceNature'),
    t('hero.protectHeritage')
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

  // Simplification: Static titles for a cleaner look
  // (Previously had typewriter loops here)


  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };


  // Helper function to get destination slug from game reserve name
  const getDestinationSlug = (name: string): string => {
    const slugMap: Record<string, string> = {
      'IKORONGO & GRUMET GR': 'ikorongo-grumet',
      'SELOUS GR': 'selous',
      'MASWA GR': 'maswa',
      'MPANGA KIPENGERE GR': 'mpanga-kipengele',
      'KIJERESHI GR': 'kijereshi',
      'LUKWATI & PITI GR': 'lukwati-piti',
      'MOYOWOSI GR': 'moyowosi',
      'MKUNGUNERO GR': 'mkungunero',
      'SWAGASWAGA GR': 'swagaswaga',
      'LIPARAMBA GR': 'liparamba',
      'LUKWIKA LUMESULE GR': 'lukwika-lumesule',
      'PANDE GR': 'pande',
    };
    return slugMap[name] || 'destinations';
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
      <section className="relative h-[50vh] min-h-[400px] md:h-[55vh] flex overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={heroWildlifeImage}
          >
            <source src="/background_banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dynamic Overlay - Adapts to themes by using a balance of dark and brand colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-[1]" />
          <div className="absolute inset-0 bg-jungle/10 mix-blend-overlay z-[2]" />
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
                  <motion.span
                    className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    Protecting Tanzania's Wildlife Heritage
                  </motion.span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-5 text-balance text-white leading-tight tracking-tight"
                >
                  TANZANIA WILDLIFE<br />
                  <span className="text-jungle">MANAGEMENT</span> AUTHORITY
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-sm sm:text-base md:text-lg text-white/90 mb-4 md:mb-6 leading-relaxed max-w-2xl mx-auto"
                >
                  {t('hero.description')}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                >
                  <Link
                    to="/destinations"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-jungle text-white font-semibold rounded-full hover:bg-jungle-light transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5 text-xs md:text-sm relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "linear"
                      }}
                    />
                    {t('hero.exploreDestinations')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/news"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 text-xs md:text-sm"
                  >
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {t('hero.latestNews')}
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
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center p-1.5 md:p-2 hover:border-jungle/50 transition-colors cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 md:w-1.5 md:h-1.5 bg-jungle rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative bg-background pt-8 md:pt-12">
        <div className="container-safari py-4 md:py-6 max-w-[1600px]">
          {/* Top Section - Game Reserves Section */}
          <div className="w-full bg-card/30 relative overflow-hidden rounded-2xl border border-jungle/20 shadow-lg mb-8 md:mb-12">
            {/* Simple Background Effects */}
            <div className="absolute inset-0 bg-jungle/[0.02]" />

            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5 z-0">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--jungle)) 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}
              ></div>
            </div>
            <div className="flex flex-col p-5 md:p-7 lg:p-8 relative z-10 w-full">
              {/* Header Grid: Info + Gallery */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                {/* Left Column: Header Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div
                      className="h-1 w-16 bg-gradient-to-r from-jungle to-jungle-light rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 64 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <span className="text-sm font-heading font-black text-primary uppercase tracking-[0.3em]">
                      {t('hero.gameReserves')}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-[0.9] tracking-tighter">
                    Explore Game <br /><span className="text-primary">Reserves</span>
                  </h2>
                  <p className="text-muted-foreground text-base md:text-xl max-w-xl font-medium leading-relaxed">
                    {t('hero.discoverWildlife')}
                  </p>
                </motion.div>

                {/* Right Column: Wildlife Gallery */}
                <Link to="/gallery" className="relative h-[350px] md:h-[450px] w-full lg:pl-12 block group/gallery z-20">
                  {/* Main Video/Image Showcase */}
                  <motion.div
                    className="absolute inset-0 bg-jungle-dark rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-jungle/20 group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <img src={heroWildlifeImage} alt="Wildlife Video" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-full flex items-center justify-center cursor-pointer shadow-2xl group/play"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2 transition-transform duration-500 group-hover/play:scale-110" />
                      </motion.div>
                    </div>

                    {/* Info Label */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-jungle-yellow/90 flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-heading font-black text-xs uppercase tracking-widest shadow-sm">Live Wildlife Feed</span>
                    </div>
                  </motion.div>

                  {/* Floating Phone Mockups */}
                  {/* Phone 1 (Right Front) */}
                  <motion.div
                    className="absolute -right-4 -bottom-4 md:-right-6 md:-bottom-6 w-[150px] md:w-[200px] aspect-[9/19] bg-black rounded-[2.2rem] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden z-20 hidden sm:block"
                    initial={{ opacity: 0, y: 50, rotate: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                      opacity: { delay: 0.4 }
                    }}
                  >
                    <img src={mikumiImage} alt="Mobile View" className="w-full h-full object-cover opacity-90" />
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-full" />
                  </motion.div>

                  {/* Phone 2 (Left Back) */}
                  <motion.div
                    className="absolute -left-4 top-10 md:-left-8 md:top-16 w-[130px] md:w-[160px] aspect-[9/19] bg-black rounded-[2rem] border-[5px] border-primary/20 shadow-xl overflow-hidden z-10 hidden md:block opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                    initial={{ opacity: 0, x: -50, rotate: -15 }}
                    whileInView={{ opacity: 0.6, x: 0, rotate: -10 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { delay: 0.6 }, x: { delay: 0.6 } }}
                  >
                    <img src={selousImage} alt="Mobile View 2" className="w-full h-full object-cover" />
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-jungle-yellow/10 rounded-full blur-[80px]" />
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-jungle/10 rounded-full blur-[80px]" />
                </Link>
              </div>

              {/* Game Reserves Marquee - Infinite Horizontal Clickable Slider */}
              <div className="relative w-full overflow-hidden mb-4 group/marquee perspective-1000 py-4">

                <motion.div
                  className="flex gap-8 min-w-max py-4"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                  whileHover={{ animationPlayState: "paused" }}
                >
                  {[...gameReserves, ...gameReserves].map((reserve, index) => (
                    <div
                      key={`${reserve.name}-${index}`}
                      className="w-[220px] sm:w-[260px] md:w-[280px] flex-shrink-0"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: (index % 5) * 0.1
                        }}
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                          transition: { duration: 0.3, type: "spring", stiffness: 300 }
                        }}
                        className="h-full group"
                      >
                        <Link
                          to={`/destination/${getDestinationSlug(reserve.name)}`}
                          className="block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-jungle transition-all duration-300 shadow-sm hover:shadow-lg relative h-full flex flex-col group/card"
                        >
                          {/* Animated Color Shift on Hover */}
                          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] transition-colors duration-300" />

                          {/* Top Image Section */}
                          <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                            <motion.img
                              src={reserve.image}
                              alt={reserve.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              whileHover={{ scale: 1.15 }}
                              transition={{ duration: 0.5 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Area Badge */}
                            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm border border-white/20 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-jungle-yellow" />
                              {reserve.area}
                            </div>
                          </div>

                          {/* Content Section */}
                          {/* Content Section */}
                          <div className="relative flex flex-col p-5 md:p-6 flex-grow z-10">
                            {/* Reserve Name & Area */}
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1 flex-grow" title={reserve.name}>
                                {reserve.name}
                              </h3>
                              <span className="text-[10px] font-bold bg-jungle/10 text-jungle px-1.5 py-0.5 rounded ml-2 whitespace-nowrap">
                                {reserve.area}
                              </span>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-grow">
                              {reserve.description}
                            </p>

                            {/* Footer info: Wildlife & CTA */}
                            <div className="mt-auto space-y-3">
                              {/* Wildlife pill */}
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary text-xs font-bold rounded-md border border-primary/20 max-w-full">
                                <TreePine className="w-3.5 h-3.5 flex-shrink-0" />
                                <span className="truncate">{reserve.wildlife?.split(',')[0]}</span>
                              </div>

                              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                                <span className="text-xs font-bold text-jungle uppercase tracking-[0.15em] opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                  Explore Wildlife
                                </span>
                                <div className="p-2 rounded-full bg-jungle/10 group-hover:bg-jungle group-hover:text-white transition-all duration-500 transform group-hover:translate-x-1 group-hover:rotate-[-45deg] shadow-sm">
                                  <ArrowRight className="w-4 h-4" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Explore More Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center mt-4 md:mt-6"
              >
                <Link
                  to="/destinations"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-jungle text-white font-semibold rounded-full hover:bg-jungle-light transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5 text-xs md:text-sm relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10">{t('hero.exploreMore') || 'Explore More'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section - News & Updates */}
          <div className="w-full bg-card/30 relative overflow-hidden rounded-2xl border border-border mt-8">
            <NewsAndEvents />
          </div>
        </div>
      </section>


    </>
  );
}
