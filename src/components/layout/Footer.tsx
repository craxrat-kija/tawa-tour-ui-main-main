import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight, Send, Leaf, Shield } from 'lucide-react';
import tawaLogo from '@/assets/tawa-logo.png';

const quickLinks = [
  { name: 'About TAWA', path: '/about' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'News & Events', path: '/news' },
  { name: 'Contact Us', path: '/contact' },
];

const destinations = [
  { name: 'Pande Game Reserve', path: '/destination/pande' },
  { name: 'Mikumi National Park', path: '/destination/mikumi' },
  { name: 'Selous Game Reserve', path: '/destination/selous' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-jungle-dark via-jungle-dark to-jungle-dark/95 text-cream overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-jungle-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-jungle/5 rounded-full blur-3xl" />
      </div>

      <div className="container-safari section-padding relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-full overflow-hidden border-2 border-jungle-yellow/30 hover:border-jungle-yellow transition-colors duration-300"
              >
                <img src={tawaLogo} alt="TAWA Logo" className="w-full h-full object-cover" />
              </motion.div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">TAWA</h3>
                <p className="text-sm text-cream/70">Wildlife Authority</p>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              Tanzania Wildlife Management Authority - Protecting and conserving Tanzania's 
              rich wildlife heritage for future generations.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-jungle-yellow hover:border-jungle-yellow hover:text-jungle-dark transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-heading font-semibold mb-6 text-white flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-jungle-yellow" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className="group flex items-center gap-2 text-cream/80 hover:text-jungle-yellow transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-jungle-yellow transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-heading font-semibold mb-6 text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-jungle-yellow" />
              Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map((dest, index) => (
                <motion.li
                  key={dest.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Link 
                    to={dest.path}
                    className="group flex items-center gap-2 text-cream/80 hover:text-jungle-yellow transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-jungle-yellow transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {dest.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6 text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-jungle-yellow" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-jungle-yellow/10 group-hover:bg-jungle-yellow/20 transition-colors">
                    <MapPin className="w-4 h-4 text-jungle-yellow" />
                  </div>
                  <span className="text-cream/80 text-sm leading-relaxed">
                    Morogoro Road, P.O. Box 1519<br />
                    Dodoma, Tanzania
                  </span>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-jungle-yellow/10 group-hover:bg-jungle-yellow/20 transition-colors">
                    <Phone className="w-4 h-4 text-jungle-yellow" />
                  </div>
                  <a href="tel:+255262321222" className="text-cream/80 hover:text-jungle-yellow text-sm transition-colors">
                    +255 26 232 1222
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-jungle-yellow/10 group-hover:bg-jungle-yellow/20 transition-colors">
                    <Mail className="w-4 h-4 text-jungle-yellow" />
                  </div>
                  <a href="mailto:info@tawa.go.tz" className="text-cream/80 hover:text-jungle-yellow text-sm transition-colors">
                    info@tawa.go.tz
                  </a>
                </motion.li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="pt-4 border-t border-white/10">
              <h5 className="text-sm font-semibold mb-3 text-white">Stay Updated</h5>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-cream/50 text-sm focus:outline-none focus:border-jungle-yellow transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-jungle-yellow text-jungle-dark rounded-lg hover:bg-jungle-yellow-light transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-cream/60 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Tanzania Wildlife Management Authority. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-cream/40">
                <Leaf className="w-4 h-4" />
                <span className="text-xs">Protecting Wildlife Since 1991</span>
              </div>
            </div>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-cream/60 hover:text-jungle-yellow text-sm transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jungle-yellow group-hover:w-full transition-all duration-300" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-cream/60 hover:text-jungle-yellow text-sm transition-colors relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jungle-yellow group-hover:w-full transition-all duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
