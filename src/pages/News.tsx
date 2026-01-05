import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Typewriter from '@/components/ui/Typewriter';
import { mainNews, destinations } from '@/data/destinations';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();
  // Combine and sort all news
  const allNews = [
    ...mainNews.map(n => ({ ...n, source: 'TAWA' })),
    ...destinations.flatMap(d => 
      d.news.map(n => ({ ...n, source: d.name, destSlug: d.slug }))
    )
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
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
              {t('news.page.badge')}
            </span>
            <div className="min-h-[4rem] md:min-h-[5rem] mb-6">
              <Typewriter
                text={t('news.page.title')}
                speed={80}
                delay={200}
                className="text-4xl md:text-6xl font-heading font-bold text-foreground"
                tag="h1"
                showCursor={true}
              />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('news.page.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding">
        <div className="container-safari">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((news, index) => (
              <Link
                key={news.id}
                to={`/news/${news.id}`}
                className="block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 h-full cursor-pointer"
                >
                  <div className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(news.date)}</span>
                    </div>
                    {'destSlug' in news ? (
                      <Link
                        to={`/destination/${news.destSlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs px-3 py-1 bg-jungle-yellow/10 text-jungle-yellow rounded-full hover:bg-jungle-yellow/20 transition-colors"
                      >
                        {news.source}
                      </Link>
                    ) : (
                      <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {news.source}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-jungle-yellow transition-colors">
                    {news.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-1 text-jungle-yellow font-medium text-sm group-hover:gap-2 transition-all">
                    {t('news.page.readMore')}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
