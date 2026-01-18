import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight, Send, Leaf } from 'lucide-react';
import tawaLogo from '@/assets/tawa-logo.png';
import heroWildlife from '@/assets/hero-wildlife.jpg';

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
    <footer className="relative bg-jungle-dark text-white pt-16 pb-10 overflow-hidden font-body text-left">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroWildlife}
          alt="Wildlife Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jungle-dark/90 via-jungle-dark/80 to-jungle-dark/60" />
      </div>

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-1"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container-safari relative z-10 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 text-left">

          {/* Left Side: Brand Presence (50%) */}
          <div className="lg:w-[50%] space-y-6">
            <Link to="/" className="flex items-center gap-4 group w-fit">
              <div className="w-12 h-12 bg-white rounded-xl p-2.5 shadow-xl group-hover:scale-105 transition-transform duration-500">
                <img src={tawaLogo} alt="TAWA Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-black tracking-tighter text-white">TAWA</span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-jungle-yellow font-black">Wildlife Authority</span>
              </div>
            </Link>

            <h3 className="text-xl md:text-3xl font-heading font-bold leading-tight max-w-lg text-white drop-shadow-lg">
              Sustainably protecting Tanzania's wildlife heritage for generations.
            </h3>

            <p className="text-white leading-relaxed text-base max-w-lg font-medium drop-shadow-md">
              Tanzania Wildlife Management Authority (TAWA) is an autonomous public institution responsible for the protection and sustainable management of wildlife resources.
            </p>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50 hover:bg-jungle-yellow hover:text-jungle-dark hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Link Grid (45%) */}
          <div className="lg:w-[45%] grid grid-cols-2 gap-12 pt-8">
            <div>
              <h4 className="text-xs font-heading font-black text-jungle-yellow uppercase tracking-[0.2em] mb-8">
                Explore
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-white text-base transition-all duration-300 flex items-center group gap-0 hover:gap-3"
                    >
                      <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-jungle-yellow">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-heading font-black text-jungle-yellow uppercase tracking-[0.2em] mb-8">
                Destinations
              </h4>
              <ul className="space-y-4">
                {destinations.map((dest) => (
                  <li key={dest.name}>
                    <Link
                      to={dest.path}
                      className="text-white/60 hover:text-white text-base transition-all duration-300 flex items-center group gap-0 hover:gap-3"
                    >
                      <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-jungle-yellow">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      {dest.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Newsletter Bar - Compact */}
        <div className="bg-white/[0.05] border border-white/20 rounded-3xl p-6 md:p-8 mb-12 backdrop-blur-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-jungle-yellow/30 flex items-center justify-center shrink-0 border border-white/20">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-white/50 uppercase tracking-[0.2em] text-[9px] font-black mb-1">Headquarters</span>
                <span className="text-white text-xs font-bold leading-snug">Morogoro Road, P.O. Box 1519, Dodoma</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-jungle-yellow/30 flex items-center justify-center shrink-0 border border-white/20">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-white/50 uppercase tracking-[0.2em] text-[9px] font-black mb-1">Office Line</span>
                <a href="tel:+255262321222" className="text-white text-sm font-black hover:text-jungle-yellow transition-colors drop-shadow-sm">+255 26 232 1222</a>
              </div>
            </div>

            <div className="relative group">
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-jungle-yellow transition-all pr-14 font-bold"
              />
              <button className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center rounded-xl bg-jungle-yellow text-jungle-dark hover:scale-105 active:scale-95 transition-all shadow-lg">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/10">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Tanzania Wildlife Management Authority
          </p>
          <div className="flex gap-10">
            <Link to="/privacy" className="text-white/30 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors">Privacy</Link>
            <Link to="/terms" className="text-white/30 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors">Terms</Link>
            <div className="hidden sm:flex items-center gap-2 text-jungle-yellow/40 text-[10px] font-black uppercase tracking-[0.3em]">
              <Leaf className="w-3 h-3" />
              <span>Conservation Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
