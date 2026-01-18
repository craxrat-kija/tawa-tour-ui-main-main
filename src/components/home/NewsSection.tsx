import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { mainNews, destinations } from '@/data/destinations';
import Typewriter from '@/components/ui/Typewriter';

export default function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Combine main news with destination news (skip first 3 as they're in StatsSection)
  const allNews = [
    ...mainNews,
    ...destinations.flatMap(d => d.news.map(n => ({ ...n, destination: d.name, destSlug: d.slug })))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(3, 9);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-jungle/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-jungle-teal/5 rounded-full blur-3xl" />
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
          <span className="inline-block px-4 py-1 bg-jungle/10 text-jungle rounded-full text-sm font-medium mb-4">
            Stay Updated
          </span>
          <div className="min-h-[3rem] md:min-h-[4rem] mb-4">
            <Typewriter
              text="More News & Events"
              speed={80}
              delay={200}
              className="text-3xl md:text-5xl font-heading font-bold text-foreground"
              tag="h2"
              showCursor={true}
            />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore more stories and updates from our wildlife conservation efforts
            across Tanzania's protected areas.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {allNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Link
                to="/news"
                className="block h-full bg-card rounded-3xl p-6 border border-jungle/10 hover:border-jungle/30 transition-all duration-500 shadow-soft hover:shadow-elevated"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <div className="p-2 bg-jungle/10 rounded-lg">
                      <Calendar className="w-4 h-4 text-jungle" />
                    </div>
                    <span className="font-medium">{formatDate(news.date)}</span>
                  </div>
                  {'destination' in news && 'destSlug' in news && (
                    <span
                      className="text-xs px-3 py-1.5 bg-jungle-teal/10 text-jungle-teal rounded-full border border-jungle-teal/20 font-medium"
                    >
                      {news.destination as string}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-jungle transition-colors line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-5 line-clamp-3 leading-relaxed">
                  {news.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-jungle/10">
                  <span className="text-xs text-muted-foreground">Read article</span>
                  <motion.span
                    className="inline-flex items-center gap-2 text-jungle font-semibold text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/news"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-jungle text-white font-semibold rounded-full hover:bg-jungle-dark transition-all duration-300 hover:shadow-glow hover:-translate-y-1 hover:scale-105"
          >
            View All News
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
