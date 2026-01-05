import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  image?: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Wildlife Photographer',
    location: 'United States',
    rating: 5,
    text: 'An absolutely incredible experience! TAWA\'s game reserves are pristine and well-managed. The wildlife viewing was exceptional, and the conservation efforts are truly inspiring. I\'ll definitely return!'
  },
  {
    id: '2',
    name: 'Dr. James Mwangi',
    role: 'Conservation Biologist',
    location: 'Kenya',
    rating: 5,
    text: 'As a conservation professional, I\'m impressed by TAWA\'s commitment to protecting Tanzania\'s wildlife heritage. The reserves are beautifully maintained and the biodiversity is remarkable.'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    role: 'Travel Blogger',
    location: 'United Kingdom',
    rating: 5,
    text: 'The most amazing safari experience! From the stunning landscapes to the diverse wildlife, every moment was magical. TAWA has created something truly special here.'
  },
  {
    id: '4',
    name: 'Ahmed Hassan',
    role: 'Tour Guide',
    location: 'Tanzania',
    rating: 5,
    text: 'Working with TAWA has been a privilege. Their dedication to wildlife conservation and sustainable tourism sets an example for the entire region. Proud to be part of this!'
  },
  {
    id: '5',
    name: 'Maria Rodriguez',
    role: 'Nature Enthusiast',
    location: 'Spain',
    rating: 5,
    text: 'I\'ve visited many wildlife reserves, but TAWA\'s game reserves stand out. The conservation work is evident everywhere, and the experience is both educational and breathtaking.'
  },
  {
    id: '6',
    name: 'David Kimani',
    role: 'Wildlife Researcher',
    location: 'Tanzania',
    rating: 5,
    text: 'The research opportunities in TAWA reserves are outstanding. The management team is professional and the ecosystems are incredibly rich. A true conservation success story!'
  }
];

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative py-16 md:py-24 bg-gradient-to-br from-background via-jungle/5 to-jungle-yellow/5 overflow-hidden"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-jungle/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-jungle-yellow/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-safari relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <motion.div
              className="h-1.5 w-12 bg-gradient-to-r from-jungle-yellow via-jungle to-jungle-yellow rounded-full shadow-lg shadow-jungle-yellow/50"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 48, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.span
              className="text-sm font-bold text-jungle-yellow uppercase tracking-widest px-4 py-1.5 bg-jungle-yellow/10 rounded-full border border-jungle-yellow/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t('testimonials.title') || 'Testimonials'}
            </motion.span>
            <motion.div
              className="h-1.5 w-12 bg-gradient-to-r from-jungle-yellow via-jungle to-jungle-yellow rounded-full shadow-lg shadow-jungle-yellow/50"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 48, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-foreground via-jungle to-foreground bg-clip-text text-transparent"
          >
            {t('testimonials.heading') || 'What Our Visitors Say'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t('testimonials.description') || 'Discover what travelers and conservation enthusiasts are saying about their experiences with TAWA'}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-jungle-yellow/30 via-jungle/30 to-jungle-yellow/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                initial={false}
              />
              
              <div className="relative bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-jungle/20 hover:border-jungle-yellow/40 transition-all duration-300 shadow-card hover:shadow-gold-glow h-full flex flex-col">
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-jungle-yellow/20 to-jungle/20 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="w-6 h-6 text-jungle-yellow" />
                </motion.div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <Star className="w-5 h-5 fill-jungle-yellow text-jungle-yellow" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  className="text-foreground mb-6 flex-1 leading-relaxed text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-jungle/10">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-jungle/20 to-jungle-yellow/20 flex items-center justify-center text-jungle font-bold text-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h4
                      className="font-heading font-semibold text-foreground mb-1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {testimonial.role} • {testimonial.location}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

