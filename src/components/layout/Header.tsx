import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
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
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ left: number; top: number } | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const location = useLocation();
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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const navItem = navItemRefs.current[path];
    if (navItem) {
      const rect = navItem.getBoundingClientRect();
      setDropdownPosition({
        left: rect.left,
        top: 80 // Fixed depth for floating design
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
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const headerVariants = {
    visible: {
      width: 'auto',
      marginTop: '1.25rem',
      borderRadius: '9999px',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      backgroundColor: '#15803d', // Solid Jungle Green for high visibility from the start
      backdropFilter: 'blur(20px)',
      boxShadow: '0 10px 40px -10px rgba(0,0,0,0.4), 0 0 20px rgba(34, 197, 94, 0.3)',
      borderWidth: '1px',
      borderColor: 'rgba(255, 255, 255, 0.25)'
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] flex justify-center pointer-events-none">
      <motion.header
        initial="visible"
        animate="visible"
        variants={headerVariants}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="pointer-events-auto overflow-visible relative flex items-center h-16 md:h-20"
      >
        <div className="flex items-center justify-between gap-8 md:gap-12 min-w-max lg:min-w-[900px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-10 h-10 md:w-12 md:h-12 rounded-2xl overflow-hidden border-2 border-white/40 shadow-lg transition-all duration-500 group-hover:border-jungle-yellow/50"
            >
              <img
                src={tawaLogo}
                alt="TAWA Logo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-black tracking-tighter leading-none mb-0.5 text-white">
                TAWA
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none opacity-80 text-white">
                Wildlife Authority
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const hasDropdown = item.hasDropdown && dropdownContent[item.path];
              const isHovered = hoveredItem === item.path;

              return (
                <div
                  key={item.path}
                  ref={(el) => { if (hasDropdown) navItemRefs.current[item.path] = el; }}
                  className="relative group/nav"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.path)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-xl flex items-center gap-1.5 ${isActive
                        ? 'text-jungle-yellow'
                        : 'text-white/90 hover:text-white'
                      }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
                    )}

                    {/* Hover indicator background */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                    />

                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="navActiveBar"
                        className="absolute -bottom-1 left-4 right-4 h-1 bg-jungle-yellow rounded-full shadow-[0_2px_10px_rgba(251,191,36,0.4)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-2xl transition-all duration-300 bg-white/10 text-white hover:bg-white/20"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-2xl bg-white text-jungle shadow-lg hover:bg-white/90"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Floating Dropdown Menus */}
        <AnimatePresence>
          {hoveredItem && dropdownPosition && dropdownContent[hoveredItem] && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="fixed rounded-3xl shadow-2xl border border-white/20 overflow-hidden z-[1001] bg-white/90 dark:bg-gray-900/90 backdrop-blur-3xl"
              style={{
                left: `${dropdownPosition.left - 100}px`,
                top: `${dropdownPosition.top + 20}px`,
                width: '600px',
              }}
              onMouseEnter={() => handleMouseEnter(hoveredItem)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex h-[380px]">
                {/* Left Side - Links */}
                <div className="w-1/2 p-4 overflow-y-auto border-r border-white/10">
                  {dropdownContent[hoveredItem].map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="group/item flex items-center gap-4 p-4 rounded-2xl hover:bg-jungle/5 transition-all mb-1"
                      >
                        <div className="p-3 rounded-xl bg-jungle/10 text-jungle group-hover/item:bg-jungle group-hover/item:text-white transition-all">
                          {Icon && <Icon className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-sm leading-none mb-1">{item.label}</p>
                          <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                {/* Right Side - Visual */}
                <div className="w-1/2 relative p-4">
                  <div className="h-full rounded-2xl overflow-hidden relative group">
                    <img
                      src={dropdownContent[hoveredItem][0]?.image || heroWildlifeImage}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-[10px] font-black tracking-[0.2em] text-jungle-yellow uppercase mb-2 block">Featured</span>
                      <h3 className="text-xl font-heading font-black text-white leading-tight">
                        {hoveredItem.replace('/', '').toUpperCase()}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Glass Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-24 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-3xl rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden z-[1002]"
          >
            <div className="p-6 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-jungle/5 transition-all group"
                  >
                    <span className="text-lg font-heading font-black text-foreground group-hover:text-jungle transition-colors">{item.name}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="p-6 bg-jungle/5 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Select Language</span>
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
