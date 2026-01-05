import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MapPin, TreePine, Eye } from 'lucide-react';
import { destinations } from '@/data/destinations';
import Typewriter from '@/components/ui/Typewriter';
import pandeImage from '@/assets/destination-pande.jpg';
import mikumiImage from '@/assets/destination-mikumi.jpg';
import selousImage from '@/assets/destination-selous.jpg';

const imageMap: Record<string, string> = {
  pande: pandeImage,
  mikumi: mikumiImage,
  selous: selousImage,
};

export default function DestinationsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-jungle-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-jungle-teal/5 rounded-full blur-3xl" />
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
            {t('destinations.explore')}
          </span>
          <div className="min-h-[3rem] md:min-h-[4rem] mb-4">
            <Typewriter
              text={t('destinations.title')}
              speed={80}
              delay={200}
              className="text-3xl md:text-5xl font-heading font-bold text-foreground"
              tag="h2"
              showCursor={true}
            />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('destinations.description')}
          </p>
        </motion.div>

        {/* Amazing Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
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
              <Link
                to={`/destination/${dest.slug}`}
                className="block h-full"
              >
                <div className="relative h-full bg-card rounded-3xl overflow-hidden border border-jungle-yellow/10 hover:border-jungle-yellow/30 transition-all duration-500 shadow-soft hover:shadow-elevated">
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      src={imageMap[dest.slug]}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jungle-dark via-jungle-dark/50 to-transparent" />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2 bg-jungle-yellow/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-jungle-yellow/30">
                          <MapPin className="w-4 h-4 text-jungle-yellow" />
                          <span className="text-cream text-sm font-medium">{dest.stats.area}</span>
                        </div>
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileHover={{ scale: 1, rotate: 0 }}
                          className="w-10 h-10 bg-jungle-dark/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-jungle-yellow/30"
                        >
                          <Eye className="w-5 h-5 text-jungle-yellow" />
                        </motion.div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-cream mb-2 group-hover:text-jungle-yellow transition-colors">
                          {dest.name}
                        </h3>
                        <div className="flex items-center gap-2 text-cream/80 text-sm">
                          <TreePine className="w-4 h-4" />
                          <span>{dest.stats.species}+ wildlife species</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>
                    
                    {/* Wildlife Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dest.wildlife.slice(0, 3).map((animal) => (
                        <span
                          key={animal}
                          className="text-xs px-3 py-1 bg-jungle-yellow/10 text-jungle-yellow rounded-full border border-jungle-yellow/20 font-medium"
                        >
                          {animal}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-jungle-yellow/10">
                      <span className="text-sm text-muted-foreground">{t('destinations.explore')}</span>
                      <motion.span
                        className="inline-flex items-center gap-2 text-jungle-yellow font-semibold text-sm"
                        whileHover={{ x: 5 }}
                      >
                        {t('destinations.viewAll')}
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-jungle-yellow/0 group-hover:bg-jungle-yellow/5 transition-colors duration-300 pointer-events-none"
                    initial={false}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/destinations"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-jungle-yellow text-jungle-dark font-semibold rounded-full hover:bg-jungle-yellow-light transition-all duration-300 hover:shadow-glow hover:-translate-y-1 hover:scale-105"
          >
            {t('destinations.viewAll')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
