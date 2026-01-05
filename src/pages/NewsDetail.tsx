import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { mainNews, destinations } from '@/data/destinations';
import { Calendar, ArrowLeft, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getNewsImage } from '@/assets/news';

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Combine all news
  const allNews = [
    ...mainNews.map(n => ({ ...n, source: 'TAWA' })),
    ...destinations.flatMap(d => 
      d.news.map(n => ({ ...n, source: d.name, destSlug: d.slug }))
    )
  ];

  // Find the news item by id
  const news = allNews.find(n => n.id === id);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (!news) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-safari text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
              News Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The news article you're looking for doesn't exist.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-jungle-yellow font-medium hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const imageSrc = getNewsImage(news.image);

  return (
    <Layout>
      {/* Hero Image Section */}
      {imageSrc && (
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <motion.img
            src={imageSrc}
            alt={news.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container-safari pb-8">
            <motion.button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-white hover:text-jungle-yellow transition-colors mb-4"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </motion.button>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
            >
              {news.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 text-white/90"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(news.date)}</span>
              </div>
              {'destSlug' in news ? (
                <Link
                  to={`/destination/${news.destSlug}`}
                  className="text-sm px-3 py-1 bg-jungle-yellow/20 text-white rounded-full hover:bg-jungle-yellow/30 transition-colors"
                >
                  {news.source}
                </Link>
              ) : (
                <span className="text-sm px-3 py-1 bg-white/20 text-white rounded-full">
                  {news.source}
                </span>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-safari max-w-4xl">
          {!imageSrc && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-jungle-yellow hover:gap-3 transition-all mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to News</span>
              </button>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                {news.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(news.date)}</span>
                </div>
                {'destSlug' in news ? (
                  <Link
                    to={`/destination/${news.destSlug}`}
                    className="text-sm px-3 py-1 bg-jungle-yellow/10 text-jungle-yellow rounded-full hover:bg-jungle-yellow/20 transition-colors"
                  >
                    {news.source}
                  </Link>
                ) : (
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {news.source}
                  </span>
                )}
              </div>
            </motion.div>
          )}

          {/* News Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Full content - using excerpt as main content for now */}
            <div className="text-foreground space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {news.excerpt}
              </p>
              
              {/* Extended content - you can expand this later */}
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="leading-relaxed">
                  {news.excerpt} This is a detailed expansion of the news article. 
                  The Tanzania Wildlife Management Authority (TAWA) continues to work 
                  tirelessly to protect and conserve Tanzania's rich wildlife heritage. 
                  Through dedicated conservation efforts, community engagement, and 
                  sustainable tourism initiatives, TAWA ensures that future generations 
                  can enjoy the natural beauty and biodiversity that Tanzania has to offer.
                </p>
                
                <p className="leading-relaxed">
                  Our commitment to wildlife protection extends beyond national parks 
                  and game reserves. We work closely with local communities, 
                  international partners, and government agencies to create comprehensive 
                  conservation strategies that benefit both wildlife and people.
                </p>

                <p className="leading-relaxed">
                  Through education, research, and hands-on conservation programs, 
                  TAWA is building a sustainable future for Tanzania's wildlife. 
                  Every initiative, every partnership, and every effort contributes 
                  to our mission of preserving this precious natural heritage.
                </p>
              </div>
            </div>
          </motion.article>

          {/* Related News Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-16 border-t border-jungle/20"
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
              Related News
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {allNews
                .filter(n => n.id !== news.id)
                .slice(0, 2)
                .map((relatedNews) => (
                  <Link
                    key={relatedNews.id}
                    to={`/news/${relatedNews.id}`}
                    className="group block bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-jungle/10 hover:border-jungle-yellow/40"
                  >
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-jungle-yellow transition-colors">
                      {relatedNews.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {relatedNews.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(relatedNews.date)}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>

          {/* Back to News Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-jungle-yellow text-white rounded-lg hover:bg-jungle-yellow/90 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              View All News
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

