import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Leaf, Users, Award, Calendar, ArrowRight } from 'lucide-react';
import { tawaStats, mainNews, destinations } from '@/data/destinations';
import Typewriter from '@/components/ui/Typewriter';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState('0');
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = Math.floor(progress * numericValue);
      setDisplayValue(current.toLocaleString());
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(numericValue.toLocaleString());
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, numericValue, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

function StatItem({ icon, value, label, delay }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group"
    >
      <div className="relative bg-card rounded-2xl p-6 border border-jungle/10 hover:border-jungle/30 transition-all duration-300 shadow-soft hover:shadow-card overflow-hidden">
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-jungle/10 mb-3 group-hover:bg-jungle/20 transition-colors">
            {icon}
          </div>
          <div className="text-2xl md:text-3xl font-heading font-bold text-jungle mb-1">
            <AnimatedCounter value={value} />
          </div>
          <p className="text-muted-foreground text-xs uppercase tracking-wider font-medium">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <MapPin className="w-8 h-8 text-jungle" />,
      value: tawaStats.protectedArea,
      label: t('stats.protectedArea'),
    },
    {
      icon: <Leaf className="w-8 h-8 text-jungle" />,
      value: tawaStats.wildlifeSpecies,
      label: t('stats.wildlifeSpecies'),
    },
    {
      icon: <Users className="w-8 h-8 text-jungle" />,
      value: tawaStats.annualVisitors,
      label: t('stats.annualVisitors'),
    },
    {
      icon: <Award className="w-8 h-8 text-jungle" />,
      value: tawaStats.conservationProjects,
      label: t('stats.conservationProjects'),
    },
  ];

  // Get latest news
  const latestNews = [
    ...mainNews,
    ...destinations.flatMap(d => d.news.map(n => ({ ...n, destination: d.name, destSlug: d.slug })))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      <div className="container-safari">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-1 bg-jungle/10 text-jungle rounded-full text-sm font-medium mb-4">
                Our Impact
              </span>
              <div className="mb-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
                  Conservation by Numbers
                </h2>
              </div>
              <p className="text-muted-foreground">
                Measurable impact in protecting Tanzania's wildlife heritage
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <StatItem
                  key={stat.label}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Latest News */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-1 bg-jungle-yellow/10 text-jungle-yellow rounded-full text-sm font-medium mb-4">
                {t('stats.stayUpdated')}
              </span>
              <div className="mb-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
                  {t('stats.latestNews')}
                </h2>
              </div>
              <p className="text-muted-foreground">
                {t('stats.description')}
              </p>
            </motion.div>

            <div className="space-y-4">
              {latestNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <Link
                    to="/news"
                    className="block bg-card rounded-xl p-5 border border-jungle/10 hover:border-jungle/30 transition-all duration-300 shadow-soft hover:shadow-card"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 text-jungle" />
                        <span className="font-medium">{formatDate(news.date)}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-jungle transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-jungle text-sm font-medium">
                      {t('news.viewAll')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6"
            >
              <Link
                to="/news"
                className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-jungle text-jungle font-semibold rounded-full hover:bg-jungle hover:text-white transition-all duration-300"
              >
                {t('news.viewAll')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
