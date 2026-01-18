import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, MapPin, Newspaper, Calendar, Briefcase, Info, ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import tawaLogo from '@/assets/tawa-logo.png';
import pandeImage from '@/assets/destination-pande.jpg';
import mikumiImage from '@/assets/destination-mikumi.jpg';
import selousImage from '@/assets/destination-selous.jpg';
import heroWildlifeImage from '@/assets/hero-wildlife.jpg';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isScrolledState, setIsScrolledState] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ left: number; top: number } | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const location = useLocation();
  const isScrolled = true;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about', hasDropdown: true },
    { name: t('nav.destinations'), path: '/destinations', hasDropdown: true },
    { name: t('nav.news'), path: '/news', hasDropdown: true },
    { name: t('nav.events'), path: '/events', hasDropdown: true },
    { name: t('nav.investments'), path: '/investments', hasDropdown: true },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  // Dropdown content
  const dropdownContent: Record<string, Array<{ label: string; path: string; icon?: any; description?: string; image?: string }>> = {
    '/about': [
      { label: 'Our Mission', path: '/about#mission', icon: Info, description: 'Learn about our goals', image: heroWildlifeImage },
      { label: 'Our Vision', path: '/about#vision', icon: Info, description: 'See our future plans', image: selousImage },
      { label: 'Our Story', path: '/about#story', icon: Info, description: 'Discover our history', image: mikumiImage },
      { label: 'Core Values', path: '/about#values', icon: Info, description: 'What we stand for', image: pandeImage },
    ],
    '/destinations': [
      { label: 'IKORONGO & GRUMET GR', path: '/destination/ikorongo-grumet', icon: MapPin, description: '8,500 km²', image: selousImage },
      { label: 'SELOUS GR', path: '/destination/selous', icon: MapPin, description: '50,000 km²', image: selousImage },
      { label: 'MASWA GR', path: '/destination/maswa', icon: MapPin, description: '2,200 km²', image: pandeImage },
      { label: 'PANDE GR', path: '/destination/pande', icon: MapPin, description: '2,500 km²', image: pandeImage },
      { label: 'View All', path: '/destinations', icon: ArrowRight, description: 'See all destinations', image: mikumiImage },
    ],
    '/news': [
      { label: 'Latest News', path: '/news', icon: Newspaper, description: 'Recent updates', image: heroWildlifeImage },
      { label: 'Conservation News', path: '/news?category=conservation', icon: Newspaper, description: 'Wildlife protection', image: selousImage },
      { label: 'Tourism Updates', path: '/news?category=tourism', icon: Newspaper, description: 'Travel information', image: mikumiImage },
      { label: 'Community News', path: '/news?category=community', icon: Newspaper, description: 'Local updates', image: pandeImage },
    ],
    '/events': [
      { label: 'Upcoming Events', path: '/events', icon: Calendar, description: 'See what\'s coming', image: mikumiImage },
      { label: 'Safari Tours', path: '/events?type=safari', icon: Calendar, description: 'Wildlife experiences', image: selousImage },
      { label: 'Conservation Workshops', path: '/events?type=workshop', icon: Calendar, description: 'Educational programs', image: heroWildlifeImage },
      { label: 'Community Events', path: '/events?type=community', icon: Calendar, description: 'Local activities', image: pandeImage },
    ],
    '/investments': [
      { label: 'Eco-Lodge Development', path: '/investments#eco-lodge', icon: Briefcase, description: 'Sustainable tourism', image: selousImage },
      { label: 'Tour Operations', path: '/investments#tour-operations', icon: Briefcase, description: 'Licensed operators', image: mikumiImage },
      { label: 'Conservation Projects', path: '/investments#conservation', icon: Briefcase, description: 'Protection initiatives', image: heroWildlifeImage },
      { label: 'Community Programs', path: '/investments#community', icon: Briefcase, description: 'Local development', image: pandeImage },
    ],
  };

  const handleMouseEnter = (path: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const navItem = navItemRefs.current[path];
    if (navItem) {
      const rect = navItem.getBoundingClientRect();
      const headerHeight = 64; // h-16 = 64px
      setDropdownPosition({
        left: rect.left,
        top: headerHeight + 8 // Position below header container with gap
      });
    }
    setHoveredItem(path);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      setDropdownPosition(null);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledState(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-300 w-full ${isScrolled
        ? 'bg-gray-900 shadow-lg border-b border-white/10'
        : 'bg-transparent'
        }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        maxWidth: '100%',
        backgroundColor: isScrolled ? '#111827' : 'transparent',
        zIndex: 99999,
        visibility: 'visible',
        display: 'block',
        transform: 'translateY(0)',
        willChange: 'auto',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      <div className="container-safari w-full mx-auto relative px-4 lg:px-6">
        <nav className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 transition-all duration-300"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.5)'
              }}
            >
              <img
                src={tawaLogo}
                alt="TAWA Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="hidden sm:block">
              <motion.h1
                className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled
                  ? 'text-white'
                  : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
                  }`}
                style={{
                  textShadow: isScrolled
                    ? 'none'
                    : '0 1px 3px rgba(0, 0, 0, 0.5)',
                }}
              >
                TAWA
              </motion.h1>
              <motion.p
                className={`text-[10px] sm:text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-300 ${isScrolled
                  ? 'text-white/90'
                  : 'text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
                  }`}
                style={{
                  textShadow: isScrolled
                    ? 'none'
                    : '0 1px 2px rgba(0, 0, 0, 0.4)',
                }}
              >
                Wildlife Authority
              </motion.p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const hasDropdown = item.hasDropdown && dropdownContent[item.path];
              const isHovered = hoveredItem === item.path;

              return (
                <motion.div
                  key={item.path}
                  ref={(el) => {
                    if (hasDropdown) {
                      navItemRefs.current[item.path] = el;
                    }
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.path)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className="relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-md group overflow-visible flex items-center gap-1.5"
                  >
                    {/* Subtle background on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-md bg-white/15"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />

                    {/* Professional underline animation */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${isActive ? (isScrolled ? 'bg-jungle' : 'bg-white') : (isScrolled ? 'bg-jungle/0 group-hover:bg-jungle' : 'bg-white/0 group-hover:bg-white')
                        }`}
                      initial={false}
                      whileHover={{
                        scaleX: 1,
                        opacity: 1
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={{
                        transformOrigin: 'center',
                        scaleX: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                        boxShadow: isActive ? '0 2px 8px rgba(255, 255, 255, 0.4)' : 'none'
                      }}
                    />

                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${isScrolled ? 'bg-jungle' : 'bg-white'}`}
                        layoutId="activeNavUnderline"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                          mass: 0.6
                        }}
                        style={{
                          boxShadow: isScrolled ? '0 2px 8px rgba(34, 197, 94, 0.2)' : '0 2px 8px rgba(255, 255, 255, 0.4)'
                        }}
                      />
                    )}

                    {/* Text with strong contrast */}
                    <motion.span
                      className={`relative z-10 block whitespace-nowrap font-medium ${isActive
                        ? 'text-jungle-yellow font-semibold'
                        : 'text-white group-hover:text-jungle-yellow'
                        }`}
                      style={{
                        textShadow: isActive && !isScrolled
                          ? '0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.7)'
                          : 'none',
                        WebkitTextStroke: !isScrolled ? '0.3px rgba(0, 0, 0, 0.3)' : 'none'
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut"
                      }}
                    >
                      {item.name}
                    </motion.span>

                    {/* Dropdown chevron icon */}
                    {hasDropdown && (
                      <motion.div
                        animate={{ rotate: isHovered ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-colors text-white`}
                          style={{
                            filter: !isScrolled ? 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6))' : 'none'
                          }}
                        />
                      </motion.div>
                    )}
                  </Link>

                </motion.div>
              );
            })}
          </div>

          {/* Language Switcher, Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-1.5">
            <LanguageSwitcher />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={toggleTheme}
              className={`p-1.5 rounded-md transition-all duration-200 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-1.5 rounded-md transition-all duration-200 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Dropdown Menus - Positioned below header container */}
      <AnimatePresence>
        {hoveredItem && dropdownPosition && dropdownContent[hoveredItem] && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.15,
              ease: "easeOut"
            }}
            className={`fixed rounded-lg shadow-xl border border-jungle/20 overflow-hidden z-[100000] ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'
              }`}
            style={{
              left: `${dropdownPosition.left}px`,
              top: `${dropdownPosition.top}px`,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), 0 0 2px rgba(0, 0, 0, 0.15)',
              backgroundColor: theme === 'dark' ? 'rgba(26, 26, 26, 0.99)' : 'rgba(255, 255, 255, 0.99)',
              backdropFilter: 'blur(12px)'
            }}
            onMouseEnter={() => handleMouseEnter(hoveredItem)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Dropdown arrow */}
            <div
              className={`absolute -top-1.5 left-5 w-3 h-3 border-l border-t border-jungle/20 transform rotate-45 ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'
                }`}
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(26, 26, 26, 0.99)' : 'rgba(255, 255, 255, 0.99)'
              }}
            />

            <div className="flex w-[600px] h-[320px]">
              {/* Left Side - Menu Items */}
              <div className="w-1/2 py-3 overflow-y-auto">
                {dropdownContent[hoveredItem].map((dropdownItem, idx) => {
                  const Icon = dropdownItem.icon;
                  return (
                    <Link
                      key={dropdownItem.path}
                      to={dropdownItem.path}
                      className="group/dropdown relative flex items-center gap-3 px-5 py-3 hover:bg-jungle/5 transition-colors duration-150"
                    >
                      {/* Icon */}
                      {Icon && (
                        <div className="flex-shrink-0 p-1.5 rounded-md bg-jungle/5 text-jungle/70 group-hover/dropdown:bg-jungle/15 group-hover/dropdown:text-jungle transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-foreground group-hover/dropdown:text-jungle transition-colors text-sm">
                            {dropdownItem.label}
                          </div>
                          {/* Arrow indicator */}
                          <div className="opacity-0 -translate-x-2 group-hover/dropdown:opacity-100 group-hover/dropdown:translate-x-0 transition-all duration-300">
                            <ArrowRight className="w-3.5 h-3.5 text-jungle" />
                          </div>
                        </div>
                        {dropdownItem.description && (
                          <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1 opacity-80 group-hover/dropdown:opacity-100 transition-opacity">
                            {dropdownItem.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Right Side - Featured Image Background */}
              <div className="w-1/2 relative overflow-hidden bg-gray-100">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={dropdownContent[hoveredItem][0]?.image || heroWildlifeImage}
                    alt="Menu Feature"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-medium text-jungle-yellow mb-2 uppercase tracking-wider">Featured</div>
                  <h3 className="text-xl font-bold font-heading mb-2 leading-tight">
                    {hoveredItem === '/destinations' ? 'Explore Tanzania' :
                      hoveredItem === '/about' ? 'Our Heritage' :
                        hoveredItem === '/news' ? 'Latest Updates' :
                          hoveredItem === '/investments' ? 'Invest in Nature' :
                            'Discover More'}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2">
                    {hoveredItem === '/destinations' ? 'Discover the boundless beauty of Tanzania\'s national parks and game reserves.' :
                      hoveredItem === '/about' ? 'Learn about our mission to protect and preserve wildlife for future generations.' :
                        'Stay updated with the latest news, conservation efforts, and community initiatives.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`lg:hidden border-t border-jungle/20 shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'
              }`}
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(26, 26, 26, 0.99)' : 'rgba(255, 255, 255, 0.99)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div className="container-safari py-4 space-y-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.2,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`relative block px-5 py-3.5 text-base md:text-lg font-heading font-semibold tracking-wide transition-all duration-300 rounded-lg overflow-hidden group ${isActive
                        ? 'text-jungle bg-jungle/10'
                        : 'text-foreground hover:text-jungle hover:bg-jungle/8'
                        }`}
                    >
                      {/* Background hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-jungle/0 group-hover:bg-jungle/5 transition-all duration-300"
                        initial={false}
                      />

                      <motion.span
                        className="relative z-10 block"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {item.name}
                      </motion.span>

                      {/* Active indicator bar */}
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-jungle rounded-r-full"
                          layoutId="mobileActiveIndicator"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          style={{
                            boxShadow: '2px 0 8px rgba(34, 197, 94, 0.3)'
                          }}
                        />
                      )}

                      {/* Bottom underline for active */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-jungle/30"
                          layoutId="mobileActiveUnderline"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
