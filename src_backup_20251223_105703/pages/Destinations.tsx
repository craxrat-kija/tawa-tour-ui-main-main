import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Typewriter from '@/components/ui/Typewriter';
import { destinations } from '@/data/destinations';
import { MapPin, TreePine, ArrowRight } from 'lucide-react';
import pandeImage from '@/assets/destination-pande.jpg';
import mikumiImage from '@/assets/destination-mikumi.jpg';
import selousImage from '@/assets/destination-selous.jpg';

const imageMap: Record<string, string> = {
  pande: pandeImage,
  mikumi: mikumiImage,
  selous: selousImage,
};

export default function Destinations() {
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
              Explore Tanzania
            </span>
            <div className="min-h-[4rem] md:min-h-[5rem] mb-6">
              <Typewriter
                text="Our Destinations"
                speed={80}
                delay={200}
                className="text-4xl md:text-6xl font-heading font-bold text-foreground"
                tag="h1"
                showCursor={true}
              />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover Tanzania's most spectacular wildlife sanctuaries managed by TAWA, 
              each offering unique ecosystems and unforgettable safari experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding">
        <div className="container-safari">
          <div className="grid gap-12">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img
                      src={imageMap[dest.slug]}
                      alt={dest.name}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jungle-dark/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div className="flex items-center gap-2 text-cream bg-jungle-dark/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{dest.stats.area}</span>
                      </div>
                      <div className="flex items-center gap-2 text-jungle-yellow bg-jungle-dark/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        <TreePine className="w-4 h-4" />
                        <span className="text-sm">{dest.stats.species}+ species</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                    Est. {dest.established}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                    {dest.name}
                  </h2>
                  <p className="text-jungle-yellow font-medium mb-4">{dest.tagline}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {dest.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Wildlife</h4>
                    <div className="flex flex-wrap gap-2">
                      {dest.wildlife.map((animal) => (
                        <span
                          key={animal}
                          className="text-sm px-3 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {animal}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/destination/${dest.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-jungle-yellow text-jungle-dark font-semibold rounded-lg hover:bg-jungle-yellow-light transition-all duration-300"
                  >
                    Explore {dest.name.split(' ')[0]}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
