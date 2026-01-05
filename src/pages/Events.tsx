import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Typewriter from '@/components/ui/Typewriter';
import { upcomingEvents } from '@/data/destinations';
import { Calendar, ArrowRight, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Events() {
  const { t } = useTranslation();
  
  // Show all upcoming events, sorted by date (earliest first)
  // If you want to filter only future events, uncomment the filter below
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Show all events (including past ones for now, or filter to only future)
  const allUpcomingEvents = upcomingEvents
    // .filter(event => new Date(event.date) >= today) // Uncomment to show only future events
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (dateStr: string) => {
    return new Date(dateStr).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-safari">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-jungle-yellow/10 text-jungle-yellow rounded-full text-sm font-medium mb-4">
              {t('events.page.badge')}
            </span>
            <div className="min-h-[4rem] md:min-h-[5rem] mb-6">
              <Typewriter
                text={t('events.page.title')}
                speed={80}
                delay={200}
                className="text-4xl md:text-6xl font-heading font-bold text-foreground"
                tag="h1"
                showCursor={true}
              />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('events.page.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding">
        <div className="container-safari">
          {allUpcomingEvents.length === 0 ? (
            <div className="text-center py-20">
              <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                {t('events.page.noEvents')}
              </h2>
              <p className="text-muted-foreground">
                {t('events.page.noEventsDesc')}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allUpcomingEvents.map((event, index) => (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className="block"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 h-full cursor-pointer border border-jungle/10 hover:border-jungle-yellow/40"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>

                      <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-jungle-yellow transition-colors">
                        {event.title}
                      </h3>

                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {event.excerpt}
                      </p>

                      <div className="inline-flex items-center gap-1 text-jungle-yellow font-medium text-sm group-hover:gap-2 transition-all">
                        {t('events.page.learnMore')}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

