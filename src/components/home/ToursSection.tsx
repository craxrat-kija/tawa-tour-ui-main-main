import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, DollarSign, ArrowRight, Star, Users } from 'lucide-react';
import { destinations } from '@/data/destinations';
import Typewriter from '@/components/ui/Typewriter';

export default function ToursSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Get featured tours from all destinations
  const featuredTours = destinations.flatMap(d =>
    d.tours.slice(0, 1).map(t => ({ ...t, destination: d.name, destSlug: d.slug }))
  );

  return (
    <section className="section-padding bg-gradient-to-b from-background via-jungle/5 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-jungle-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-jungle-yellow/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-jungle/5 rounded-full blur-3xl" />
      </div>

      <div className="container-safari relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-jungle-yellow/10 text-jungle-yellow rounded-full text-sm font-medium mb-4">
            {t('tours.safari')}
          </span>
          <div className="min-h-[3rem] md:min-h-[4rem] mb-4">
            <Typewriter
              text={t('tours.title')}
              speed={80}
              delay={200}
              className="text-3xl md:text-5xl font-heading font-bold text-foreground"
              tag="h2"
              showCursor={true}
            />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('tours.description')}
          </p>
        </motion.div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.map((tour, index) => (
            <motion.div
              key={`${tour.destSlug}-${tour.id}-${index}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="h-full bg-card rounded-3xl overflow-hidden border border-jungle-yellow/10 hover:border-jungle-yellow/30 transition-all duration-500 shadow-soft hover:shadow-elevated">
                {/* Destination Badge */}
                <div className="p-6 pb-4">
                  <span className="inline-block px-4 py-1.5 bg-jungle-yellow/10 text-jungle-yellow text-xs font-semibold rounded-full border border-jungle-yellow/20">
                    {tour.destination}
                  </span>
                </div>

                <div className="px-6 pb-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-jungle-yellow transition-colors line-clamp-2">
                    {tour.name}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-5 line-clamp-2 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="flex items-center gap-2 p-3 bg-jungle-yellow/5 rounded-xl border border-jungle-yellow/10">
                      <Clock className="w-4 h-4 text-jungle-yellow" />
                      <span className="text-sm text-foreground font-medium">{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-jungle-teal/5 rounded-xl border border-jungle-teal/10">
                      <DollarSign className="w-4 h-4 text-jungle-teal" />
                      <span className="text-sm text-foreground font-semibold">{tour.price}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tour.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground border border-jungle-yellow/10"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/destination/${tour.destSlug}/tours`}
                    className="group/btn inline-flex items-center gap-2 w-full justify-center py-3.5 bg-jungle-yellow text-jungle-dark rounded-xl font-semibold hover:bg-jungle-yellow-light transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
                  >
                    {t('tours.viewDetails')}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
