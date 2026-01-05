import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Typewriter from '@/components/ui/Typewriter';
import { TrendingUp, Building, Leaf, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Investments() {
  const { t } = useTranslation();

  const opportunities = [
    {
      icon: Building,
      title: t('investments.ecoLodge'),
      description: t('investments.ecoLodgeDesc'),
      benefits: ['Prime locations', 'Government support', 'Long-term leases', 'Marketing assistance'],
    },
    {
      icon: TrendingUp,
      title: t('investments.tourOperations'),
      description: t('investments.tourOperationsDesc'),
      benefits: ['Exclusive access', 'Training programs', 'Booking systems', 'Brand partnership'],
    },
    {
      icon: Leaf,
      title: t('investments.conservationProjects'),
      description: t('investments.conservationProjectsDesc'),
      benefits: ['Tax incentives', 'Impact reporting', 'Recognition programs', 'Joint research'],
    },
    {
      icon: Users,
      title: t('investments.communityPrograms'),
      description: t('investments.communityProgramsDesc'),
      benefits: ['Social impact', 'Sustainable returns', 'Local partnerships', 'Government coordination'],
    },
  ];

  const stats = [
    { value: '$50M+', label: t('investments.annualRevenue') },
    { value: '15,000+', label: t('investments.jobsCreated') },
    { value: '170K+', label: t('investments.investmentArea') },
    { value: '30+', label: t('investments.activePartners') },
  ];
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-safari">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-jungle-yellow/10 text-jungle-yellow rounded-full text-sm font-medium mb-4">
              {t('investments.badge')}
            </span>
            <div className="min-h-[4rem] md:min-h-[5rem] mb-6">
              <Typewriter
                text={t('investments.title')}
                speed={70}
                delay={200}
                className="text-4xl md:text-6xl font-heading font-bold text-foreground"
                tag="h1"
                showCursor={true}
              />
            </div>
            <p className="text-muted-foreground text-lg">
              {t('investments.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-jungle-dark">
        <div className="container-safari">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-jungle-yellow mb-2">
                  {stat.value}
                </div>
                <p className="text-cream/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section-padding">
        <div className="container-safari">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-jungle-yellow/10 text-jungle-yellow rounded-full text-sm font-medium mb-4">
              {t('investments.opportunitiesBadge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              {t('investments.opportunitiesTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('investments.opportunitiesSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opp, index) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <opp.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {opp.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {opp.description}
                </p>
                <div className="space-y-2">
                  {opp.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-jungle-yellow" />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-jungle-light">
        <div className="container-safari text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              {t('investments.ctaTitle')}
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              {t('investments.ctaSubtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jungle-yellow text-jungle-dark font-semibold rounded-full hover:bg-jungle-yellow-light transition-all duration-300"
            >
              {t('investments.ctaButton')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
