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
          className="absolute top-0 right-0 w-96 h-96 bg-jungle/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-jungle-teal/10 rounded-full blur-3xl"
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
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--jungle)) 1px, transparent 0)',
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

      <div className="w-full h-full py-8 md:py-10 lg:py-8 px-4 md:px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-bold text-jungle uppercase tracking-widest px-3 py-1 bg-jungle/10 rounded-full border border-jungle/20">
                {t('news.updates')}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
              {t('news.title')}
            </h2>

            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              {t('news.description')}
            </p>
          </motion.div>

          {/* Main Content Container - Two Column Layout */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-8 bg-jungle rounded-full" />
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {t('news.latest')}
                </h3>
              </div>

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


                    <Link
                      to={`/news/${news.id}`}
                      className="block bg-card hover:bg-muted/50 rounded-xl overflow-hidden border border-border hover:border-jungle/30 transition-all duration-300 shadow-sm hover:shadow-md h-full relative z-10"
                    >
                      <div className="p-3 h-full flex flex-col relative z-10">
                        <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                          <div className="flex-shrink-0 w-full sm:w-24 h-40 sm:h-24 rounded-lg overflow-hidden bg-muted relative">
                            {(() => {
                              const imageSrc = getNewsImage(news.image);
                              return imageSrc ? (
                                <img
                                  src={imageSrc}
                                  alt={news.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                                  <Calendar className="w-8 h-8 opacity-20" />
                                </div>
                              );
                            })()}
                          </div>
                          <div className="flex-1 w-full">
                            <motion.h3
                              className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-jungle transition-colors mb-2"
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
                                  className="px-2.5 py-1 bg-jungle/10 text-jungle text-xs rounded-full border border-jungle/20 font-medium"
                                  whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.2)" }}
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
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-jungle hover:text-white bg-jungle/10 hover:bg-jungle rounded-full border border-jungle/30 hover:border-jungle transition-all duration-300 group"
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
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-8 bg-jungle rounded-full" />
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {t('news.upcoming')}
                </h3>
              </div>

              <div className="space-y-4">
                {upcomingEvents.slice(0, 3).map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >


                    <Link
                      to={`/events/${event.id}`}
                      className="block bg-card hover:bg-muted/50 rounded-xl overflow-hidden border border-border hover:border-jungle/30 transition-all duration-300 shadow-sm hover:shadow-md relative z-10"
                    >
                      <div className="p-3 h-full flex flex-col relative z-10">
                        <div className="flex gap-4 items-center">
                          <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-jungle/10 flex flex-col items-center justify-center border border-jungle/20 text-jungle">
                            <span className="text-xl font-bold leading-none">
                              {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider">
                              {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                            </span>
                          </div>
                          <div className="flex-1 w-full">
                            <motion.h3
                              className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-jungle transition-colors mb-2"
                              whileHover={{ x: 2 }}
                            >
                              {event.title}
                            </motion.h3>
                            <motion.p
                              className="text-xs text-muted-foreground flex items-center gap-1.5 mb-2"
                              whileHover={{ scale: 1.05 }}
                            >
                              <MapPin className="w-3.5 h-3.5 text-jungle" />
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
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-jungle hover:text-white bg-jungle/10 hover:bg-jungle rounded-full border border-jungle/30 hover:border-jungle transition-all duration-300 group"
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
