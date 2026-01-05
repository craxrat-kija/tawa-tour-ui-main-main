import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Typewriter from '@/components/ui/Typewriter';
import { Shield, Leaf, Heart, Globe, Target, Eye } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Wildlife Protection',
    description: 'Implementing advanced anti-poaching measures and patrol systems to protect endangered species.',
  },
  {
    icon: Leaf,
    title: 'Ecosystem Conservation',
    description: 'Sustainable management practices that preserve natural habitats and biodiversity.',
  },
  {
    icon: Heart,
    title: 'Community Engagement',
    description: 'Creating economic opportunities for local communities through conservation tourism.',
  },
  {
    icon: Globe,
    title: 'Global Partnerships',
    description: 'Collaborating with international organizations for world-class conservation standards.',
  },
];

export default function About() {
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
              About Us
            </span>
            <div className="min-h-[4rem] md:min-h-[5rem] mb-6">
              <Typewriter
                text="Tanzania Wildlife Management Authority"
                speed={70}
                delay={200}
                className="text-4xl md:text-6xl font-heading font-bold text-foreground"
                tag="h1"
                showCursor={true}
              />
            </div>
            <p className="text-muted-foreground text-lg">
              Protecting and conserving Tanzania's rich wildlife heritage for present and future generations.
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
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To conserve, manage, and sustainably utilize wildlife resources in Game Reserves, 
                Game Controlled Areas, and Wildlife Management Areas for the benefit of present 
                and future generations while contributing to national development.
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
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a world-class wildlife management authority that ensures sustainable 
                conservation and utilization of Tanzania's wildlife resources, recognized 
                globally for excellence in wildlife conservation and eco-tourism.
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
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Three Decades of Conservation
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
                The Tanzania Wildlife Management Authority (TAWA) was established to address the growing 
                need for dedicated wildlife conservation and management in Tanzania. With over 30 years 
                of experience in wildlife protection, TAWA has become a cornerstone of Tanzania's 
                conservation efforts.
              </p>
              <p className="leading-relaxed mb-6">
                Managing over 170,000 square kilometers of protected areas, TAWA oversees some of 
                Africa's most biodiverse regions. Our work encompasses anti-poaching operations, 
                habitat restoration, community engagement programs, and sustainable tourism initiatives.
              </p>
              <p className="leading-relaxed">
                Through partnerships with local communities, international organizations, and government 
                bodies, we continue to expand our impact while ensuring that Tanzania's wildlife legacy 
                is preserved for generations to come.
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
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              Our Core Values
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
