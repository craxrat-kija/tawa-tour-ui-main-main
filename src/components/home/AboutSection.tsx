import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Leaf, Heart, Globe, ArrowRight } from 'lucide-react';
import Typewriter from '@/components/ui/Typewriter';

const features = [
  {
    icon: Shield,
    title: 'Wildlife Protection',
    description: 'Advanced anti-poaching measures protecting endangered species.',
    color: 'from-jungle/10 to-transparent',
    iconColor: 'text-jungle',
  },
  {
    icon: Leaf,
    title: 'Ecosystem Conservation',
    description: 'Preserving natural habitats and biodiversity for the future.',
    color: 'from-jungle-teal/10 to-transparent',
    iconColor: 'text-jungle-teal',
  },
  {
    icon: Heart,
    title: 'Community Engagement',
    description: 'Creating local economic opportunities through tourism.',
    color: 'from-jungle/10 to-transparent',
    iconColor: 'text-jungle',
  },
  {
    icon: Globe,
    title: 'Global Partnerships',
    description: 'Implementing world-class conservation standards globally.',
    color: 'from-jungle-teal/10 to-transparent',
    iconColor: 'text-jungle-teal',
  },
];

export default function AboutSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jungle/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-jungle-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="container-safari relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content - Left Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              {t('about.mission')}
            </motion.span>
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
                {t('about.title')}
              </h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground mb-6 leading-relaxed text-lg"
            >
              {t('about.description')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground mb-8 leading-relaxed text-lg"
            >
              Through innovative conservation strategies, community partnerships, and eco-tourism
              initiatives, we ensure that Tanzania's magnificent wildlife thrives while contributing
              to national development and local livelihoods.
            </motion.p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`group relative bg-gradient-to-br ${feature.color} rounded-2xl p-5 border border-jungle/10 hover:border-jungle/30 transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex gap-4 items-start">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-jungle-dark/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-jungle-dark/40 transition-colors`}>
                      <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer decorative circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-jungle/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-2 border-jungle-teal/20"
              />

              {/* Center content card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute inset-16 rounded-3xl bg-gradient-to-br from-jungle-dark to-jungle-dark/80 border border-jungle/20 flex items-center justify-center shadow-elevated"
              >
                <div className="text-center text-cream p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                    className="text-6xl font-heading font-bold text-white mb-2"
                  >
                    30+
                  </motion.div>
                  <div className="text-sm uppercase tracking-wider text-white/90">Years of<br />Conservation</div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-8 right-8 bg-card px-5 py-3 rounded-2xl shadow-card border border-jungle/20 hover:border-jungle/40 transition-colors"
              >
                <span className="text-primary font-bold text-lg">170K+ km²</span>
                <div className="text-xs text-muted-foreground mt-1">Protected</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-8 left-8 bg-card px-5 py-3 rounded-2xl shadow-card border border-jungle-teal/20 hover:border-jungle-teal/40 transition-colors"
              >
                <span className="text-jungle-teal font-bold text-lg">1,500+</span>
                <div className="text-xs text-muted-foreground mt-1">Species</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
