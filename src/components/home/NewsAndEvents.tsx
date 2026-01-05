import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { mainNews, destinations, upcomingEvents, EventItem } from '@/data/destinations';
import Typewriter from '@/components/ui/Typewriter';
import { getNewsImage } from '@/assets/news';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  destination?: string;
  destSlug?: string;
}

export default function NewsAndEvents() {
  const { t } = useTranslation();
  
  // Get latest news - show all main news items
  const latestNews: NewsItem[] = [
    ...(mainNews || []),
    ...(destinations?.flatMap(d => 
      (d.news || []).map(n => ({ 
        ...n, 
        destination: d.name, 
        destSlug: d.slug 
      })) || [])
    )
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
   .slice(0, 4);

  // Use events from centralized data

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Enhanced Decorative background with animated gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-jungle-yellow/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-jungle/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--jungle-yellow)) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} 
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="w-full h-full py-6 md:py-8 lg:py-6 px-4 md:px-6 lg:px-8 relative z-10">
        <div className="w-full">
        {/* Enhanced Header with amazing animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-10 col-span-full relative"
        >
          {/* Glowing background effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-jungle-yellow/5 via-jungle/5 to-jungle-yellow/5 rounded-3xl blur-2xl -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              className="h-1.5 w-12 bg-gradient-to-r from-jungle-yellow via-jungle to-jungle-yellow rounded-full shadow-lg shadow-jungle-yellow/50"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 48, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />
            <motion.span
              className="text-sm font-bold text-jungle-yellow uppercase tracking-widest px-4 py-1.5 bg-jungle-yellow/10 rounded-full border border-jungle-yellow/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 193, 7, 0.15)" }}
            >
              {t('news.updates')}
            </motion.span>
            <motion.div
              className="h-1.5 w-12 bg-gradient-to-r from-jungle-yellow via-jungle to-jungle-yellow rounded-full shadow-lg shadow-jungle-yellow/50"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 48, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4"
          >
            <div className="min-h-[2.5rem] md:min-h-[3rem] mb-2">
              <Typewriter
                text={t('news.title')}
                speed={70}
                delay={300}
                className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground bg-gradient-to-r from-foreground via-jungle to-foreground bg-clip-text"
                tag="h2"
                showCursor={true}
              />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            {t('news.description')}
          </motion.p>
        </motion.div>

        {/* Main Content Container - Two Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* News Section */}
          <div className="flex flex-col">
            <motion.div 
              className="flex items-center gap-3 mb-6 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Glowing accent line */}
              <motion.div
                className="h-1.5 w-10 bg-gradient-to-r from-jungle-yellow via-jungle to-jungle-yellow rounded-full shadow-lg shadow-jungle-yellow/50"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 40, opacity: 1 }}
                viewport={{ once: false }}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(255, 193, 7, 0.3)',
                    '0 0 20px rgba(255, 193, 7, 0.5)',
                    '0 0 10px rgba(255, 193, 7, 0.3)',
                  ],
                }}
                transition={{
                  width: { duration: 0.6, delay: 0.2 },
                  opacity: { duration: 0.6, delay: 0.2 },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <div className="min-h-[1.75rem] relative">
                <Typewriter
                  text={t('news.latest')}
                  speed={60}
                  delay={200}
                  className="text-lg md:text-xl font-bold text-foreground bg-gradient-to-r from-foreground to-jungle bg-clip-text"
                  tag="h3"
                  showCursor={false}
                />
                {/* Underline animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-jungle-yellow to-jungle rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
            </motion.div>
            
            <div className="space-y-4">
              {latestNews.slice(0, 3).map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-30px" }}
                  transition={{ 
                    delay: index * 0.15, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    y: -4,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-jungle-yellow/20 via-jungle/20 to-jungle-yellow/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10"
                    initial={false}
                  />
                  
                  <Link
                    to={`/news/${news.id}`}
                    className="block bg-card/90 backdrop-blur-sm hover:bg-card rounded-xl overflow-hidden border border-jungle/20 hover:border-jungle-yellow/40 transition-all duration-300 shadow-md hover:shadow-xl h-full relative z-10 cursor-pointer"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    
                    <div className="p-4 h-full flex flex-col relative z-10">
                      <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                        <motion.div 
                          className="flex-shrink-0 w-full sm:w-28 h-44 sm:h-28 rounded-lg overflow-hidden bg-jungle/10 border border-jungle/20 relative group-hover:border-jungle-yellow/40 transition-colors cursor-pointer"
                          whileHover={{ scale: 1.05, rotate: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {(() => {
                            // Get image using the helper function (handles both assets and public folder)
                            const imageSrc = getNewsImage(news.image);
                            
                            return imageSrc ? (
                              <motion.img 
                                src={imageSrc} 
                                alt={news.title}
                                className="w-full h-full object-cover cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.4 }}
                                onError={(e) => {
                                  // Fallback if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = target.parentElement?.querySelector('.image-fallback');
                                  if (fallback) {
                                    (fallback as HTMLElement).style.display = 'flex';
                                  }
                                }}
                              />
                            ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-jungle/10 to-jungle-yellow/10 text-jungle/40">
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                              >
                                <Calendar className="w-10 h-10" />
                              </motion.div>
                            </div>
                            );
                          })()}
                          {/* Fallback placeholder */}
                          <div className="image-fallback absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-jungle/10 to-jungle-yellow/10 text-jungle/40">
                            <Calendar className="w-10 h-10" />
                          </div>
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-jungle/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                        <div className="flex-1 w-full">
                          <motion.h3 
                            className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-jungle-yellow transition-colors mb-2"
                            whileHover={{ x: 2 }}
                          >
                            {news.title}
                          </motion.h3>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <motion.p 
                              className="text-xs text-muted-foreground flex items-center gap-1"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Calendar className="w-3 h-3" />
                              {new Date(news.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </motion.p>
                            {news.destination && (
                              <motion.span 
                                className="px-2.5 py-1 bg-gradient-to-r from-jungle/10 to-jungle-yellow/10 text-jungle/90 text-xs rounded-full border border-jungle/20 font-medium"
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 0.15)" }}
                                transition={{ duration: 0.2 }}
                              >
                                {news.destination}
                              </motion.span>
                            )}
                          </div>
                          <motion.p 
                            className="text-sm text-muted-foreground line-clamp-2 leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {news.excerpt}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
            
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/news"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-jungle-yellow hover:text-foreground bg-jungle-yellow/10 hover:bg-jungle-yellow/20 rounded-full border border-jungle-yellow/30 hover:border-jungle-yellow/50 transition-all duration-300 group"
              >
                {t('news.viewAll')}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Events Section */}
          <div className="flex flex-col">
            <motion.div 
              className="flex items-center gap-3 mb-6 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              {/* Glowing accent line */}
              <motion.div
                className="h-1.5 w-10 bg-gradient-to-r from-jungle via-jungle-yellow to-jungle rounded-full shadow-lg shadow-jungle/50"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 40, opacity: 1 }}
                viewport={{ once: false }}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(34, 197, 94, 0.3)',
                    '0 0 20px rgba(34, 197, 94, 0.5)',
                    '0 0 10px rgba(34, 197, 94, 0.3)',
                  ],
                }}
                transition={{
                  width: { duration: 0.6, delay: 0.3 },
                  opacity: { duration: 0.6, delay: 0.3 },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
              />
              <Link to="/events" className="block">
                <div className="min-h-[1.75rem] relative cursor-pointer group">
                  <Typewriter
                    text={t('news.upcoming')}
                    speed={60}
                    delay={300}
                    className="text-lg md:text-xl font-bold text-foreground bg-gradient-to-r from-foreground to-jungle-yellow bg-clip-text group-hover:text-jungle-yellow transition-colors"
                    tag="h3"
                    showCursor={false}
                  />
                  {/* Underline animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-jungle to-jungle-yellow rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </div>
              </Link>
            </motion.div>
            
            <div className="space-y-4">
              {upcomingEvents.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-30px" }}
                  transition={{ 
                    delay: 0.2 + (index * 0.15), 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    y: -4,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-jungle/20 via-jungle-yellow/20 to-jungle/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10"
                    initial={false}
                  />
                  
                  <Link
                    to={`/events/${event.id}`}
                    className="block bg-card/90 backdrop-blur-sm hover:bg-card rounded-xl overflow-hidden border border-jungle/20 hover:border-jungle-yellow/40 transition-all duration-300 shadow-md hover:shadow-xl relative z-10"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    
                    <div className="p-4 h-full flex flex-col relative z-10">
                      <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                        <motion.div 
                          className="flex-shrink-0 w-full sm:w-28 h-44 sm:h-28 rounded-lg overflow-hidden bg-gradient-to-br from-jungle/20 via-jungle-yellow/10 to-jungle/20 flex flex-col items-center justify-center text-center border-2 border-jungle/30 group-hover:border-jungle-yellow/50 transition-all duration-300 relative"
                          whileHover={{ scale: 1.05, rotate: -1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Animated background pattern */}
                          <motion.div
                            className="absolute inset-0 opacity-10"
                            animate={{
                              backgroundPosition: ['0% 0%', '100% 100%'],
                            }}
                            transition={{
                              duration: 10,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "linear"
                            }}
                            style={{
                              backgroundImage: 'radial-gradient(circle, hsl(var(--jungle-yellow)) 1px, transparent 1px)',
                              backgroundSize: '20px 20px',
                            }}
                          />
                          
                          <motion.div 
                            className="text-2xl md:text-3xl font-bold text-jungle relative z-10"
                            whileHover={{ scale: 1.1 }}
                          >
                            {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}
                          </motion.div>
                          <motion.div 
                            className="text-xs font-semibold text-jungle-yellow uppercase tracking-wider relative z-10"
                            whileHover={{ scale: 1.1 }}
                          >
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                          </motion.div>
                          
                          {/* Pulsing ring */}
                          <motion.div
                            className="absolute inset-0 rounded-lg border-2 border-jungle-yellow/30"
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                        <div className="flex-1 w-full">
                          <motion.h3 
                            className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-jungle-yellow transition-colors mb-2"
                            whileHover={{ x: 2 }}
                          >
                            {event.title}
                          </motion.h3>
                          <motion.p 
                            className="text-xs text-muted-foreground flex items-center gap-1.5 mb-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <MapPin className="w-3.5 h-3.5 text-jungle-yellow" />
                            <span className="font-medium">{event.location}</span>
                          </motion.p>
                          <motion.p 
                            className="text-sm text-muted-foreground line-clamp-2 leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {event.excerpt}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.7 }}
            >
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-jungle-yellow hover:text-foreground bg-jungle-yellow/10 hover:bg-jungle-yellow/20 rounded-full border border-jungle-yellow/30 hover:border-jungle-yellow/50 transition-all duration-300 group"
              >
                {t('news.viewEvents')}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
