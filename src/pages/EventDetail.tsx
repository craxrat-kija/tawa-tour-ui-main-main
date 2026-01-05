import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { upcomingEvents } from '@/data/destinations';
import { Calendar, ArrowLeft, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Find the event by id
  const event = upcomingEvents.find(e => e.id === id);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
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

  if (!event) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-safari text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
              {t('events.detail.notFound')}
            </h1>
            <p className="text-muted-foreground mb-6">
              {t('events.detail.notFoundDesc')}
            </p>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-jungle-yellow font-medium hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('events.detail.backToEvents')}
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-jungle/10 via-primary/5 to-background">
        <div className="container-safari max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-jungle-yellow hover:gap-3 transition-all mb-6"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('events.detail.back')}</span>
            </motion.button>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6"
            >
              {event.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-jungle-yellow" />
                <span className="font-medium">{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-jungle-yellow" />
                <span className="font-medium">{event.location}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-safari max-w-4xl">
          {/* Event Details */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-jungle/10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                {t('events.detail.about')}
              </h2>
              
              <div className="text-foreground space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {event.excerpt}
                </p>
                
                {event.description && (
                  <div className="prose prose-lg max-w-none text-foreground">
                    <p className="leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                )}

                {/* Event Information Box */}
                <div className="bg-jungle/5 rounded-xl p-6 border border-jungle/20 mt-8">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    {t('events.detail.eventInfo')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-jungle-yellow mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{t('events.detail.date')}</p>
                        <p className="font-medium text-foreground">{formatDate(event.date)}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-jungle-yellow mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{t('events.detail.location')}</p>
                        <p className="font-medium text-foreground">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Related Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-16 border-t border-jungle/20"
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
              {t('events.detail.relatedEvents')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents
                .filter(e => e.id !== event.id)
                .slice(0, 2)
                .map((relatedEvent) => (
                  <Link
                    key={relatedEvent.id}
                    to={`/events/${relatedEvent.id}`}
                    className="group block bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-jungle/10 hover:border-jungle-yellow/40"
                  >
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-jungle-yellow transition-colors">
                      {relatedEvent.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(relatedEvent.date)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {relatedEvent.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{relatedEvent.location}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>

          {/* Back to Events Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 bg-jungle-yellow text-white rounded-lg hover:bg-jungle-yellow/90 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('events.detail.viewAllEvents')}
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

