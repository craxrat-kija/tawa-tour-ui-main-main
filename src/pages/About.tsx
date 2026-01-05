import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Typewriter from '@/components/ui/Typewriter';
import { Shield, Leaf, Heart, Globe, Target, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Shield,
      title: t('about.page.wildlifeProtection'),
      description: t('about.page.wildlifeProtectionDesc'),
    },
    {
      icon: Leaf,
      title: t('about.page.ecosystemConservation'),
      description: t('about.page.ecosystemConservationDesc'),
    },
    {
      icon: Heart,
      title: t('about.page.communityEngagement'),
      description: t('about.page.communityEngagementDesc'),
    },
    {
      icon: Globe,
      title: t('about.page.globalPartnerships'),
      description: t('about.page.globalPartnershipsDesc'),
    },
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
              {t('about.page.badge')}
            </span>
            <div className="min-h-[4rem] md:min-h-[5rem] mb-6">
              <Typewriter
                text={t('about.page.title')}
                speed={70}
                delay={200}
                className="text-4xl md:text-6xl font-heading font-bold text-foreground"
                tag="h1"
                showCursor={true}
              />
            </div>
            <p className="text-muted-foreground text-lg">
              {t('about.page.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-safari">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">{t('about.page.missionTitle')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.page.missionText')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-jungle-yellow/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-jungle-yellow" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">{t('about.page.visionTitle')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.page.visionText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-muted/30">
        <div className="container-safari">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1 bg-jungle-yellow/10 text-jungle-yellow rounded-full text-sm font-medium mb-4">
                {t('about.page.storyBadge')}
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                {t('about.page.storyTitle')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none text-muted-foreground"
            >
              <p className="leading-relaxed mb-6">
                {t('about.page.storyPara1')}
              </p>
              <p className="leading-relaxed mb-6">
                {t('about.page.storyPara2')}
              </p>
              <p className="leading-relaxed">
                {t('about.page.storyPara3')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              {t('about.page.valuesBadge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              {t('about.page.valuesTitle')}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
