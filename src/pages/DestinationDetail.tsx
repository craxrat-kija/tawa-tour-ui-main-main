import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Typewriter from '@/components/ui/Typewriter';
import { destinations } from '@/data/destinations';
import { MapPin, TreePine, Users, Calendar, Clock, DollarSign, ArrowRight, ArrowLeft } from 'lucide-react';
import pandeImage from '@/assets/destination-pande.jpg';
import mikumiImage from '@/assets/destination-mikumi.jpg';
import selousImage from '@/assets/destination-selous.jpg';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const imageMap: Record<string, string> = {
  pande: pandeImage,
  mikumi: mikumiImage,
  selous: selousImage,
};

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tours', label: 'Tours' },
  { id: 'news', label: 'News & Events' },
  { id: 'contact', label: 'Contact' },
];

export default function DestinationDetail() {
  const { slug, tab = 'home' } = useParams<{ slug: string; tab?: string }>();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.slug === slug);
  const [bookingTour, setBookingTour] = useState<string | null>(null);

  if (!destination) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold mb-4">Destination not found</h1>
            <Link to="/destinations" className="text-jungle-yellow hover:underline">
              View all destinations
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleBook = (tourName: string) => {
    setBookingTour(tourName);
    setTimeout(() => {
      toast({
        title: "Booking Request Received!",
        description: `Thank you for your interest in ${tourName}. Our team will contact you shortly.`,
      });
      setBookingTour(null);
    }, 1500);
  };

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
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={imageMap[destination.slug]}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jungle-dark via-jungle-dark/50 to-transparent" />
        </div>

        <div className="relative z-10 container-safari pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-cream mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Destinations
            </Link>
            <div className="min-h-[4rem] md:min-h-[5rem] mb-2">
              <Typewriter
                text={destination.name}
                speed={80}
                delay={300}
                className="text-4xl md:text-6xl font-heading font-bold text-cream"
                tag="h1"
                showCursor={true}
                cursorColor="bg-jungle-yellow"
              />
            </div>
            <p className="text-jungle-yellow text-xl mb-6">{destination.tagline}</p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-cream bg-cream/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <MapPin className="w-5 h-5" />
                <span>{destination.stats.area}</span>
              </div>
              <div className="flex items-center gap-2 text-cream bg-cream/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <TreePine className="w-5 h-5" />
                <span>{destination.stats.species}+ species</span>
              </div>
              <div className="flex items-center gap-2 text-cream bg-cream/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span>{destination.stats.visitors} visitors/year</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-20 z-30 bg-background border-b border-border">
        <div className="container-safari">
          <nav className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => navigate(`/destination/${slug}${t.id === 'home' ? '' : `/${t.id}`}`)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  tab === t.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-safari">
          {/* Home Tab */}
          {tab === 'home' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Welcome to {destination.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {destination.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Wildlife Highlights
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {destination.wildlife.map((animal) => (
                      <div
                        key={animal}
                        className="flex items-center gap-3 p-4 bg-muted rounded-xl"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <TreePine className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{animal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card p-6 rounded-2xl shadow-soft">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                    Quick Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Area</span>
                      <span className="font-medium text-foreground">{destination.stats.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Established</span>
                      <span className="font-medium text-foreground">{destination.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Species</span>
                      <span className="font-medium text-foreground">{destination.stats.species}+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Annual Visitors</span>
                      <span className="font-medium text-foreground">{destination.stats.visitors}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/destination/${slug}/tours`}
                  className="block w-full py-4 bg-jungle-yellow text-jungle-dark font-semibold rounded-xl text-center hover:bg-jungle-yellow-light transition-colors"
                >
                  View Safari Tours
                </Link>
              </div>
            </motion.div>
          )}

          {/* About Tab */}
          {tab === 'about' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                About {destination.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {destination.longDescription}
              </p>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Conservation Importance
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As a TAWA-managed area, {destination.name} plays a crucial role in Tanzania's 
                wildlife conservation efforts. Through sustainable tourism and community engagement, 
                we protect critical habitats while supporting local livelihoods.
              </p>

              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Key Wildlife
              </h3>
              <div className="flex flex-wrap gap-3">
                {destination.wildlife.map((animal) => (
                  <span
                    key={animal}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {animal}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tours Tab */}
          {tab === 'tours' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
                Safari Tours at {destination.name}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destination.tours.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                        {tour.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {tour.description}
                      </p>

                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-jungle-yellow font-bold">
                          <DollarSign className="w-4 h-4" />
                          <span>{tour.price}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Highlights</h4>
                        <ul className="space-y-1">
                          {tour.highlights.map((h) => (
                            <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-jungle-yellow" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => handleBook(tour.name)}
                        disabled={bookingTour === tour.name}
                        className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-jungle-light transition-colors disabled:opacity-70"
                      >
                        {bookingTour === tour.name ? 'Processing...' : 'Book Now'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* News Tab */}
          {tab === 'news' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
                News & Events from {destination.name}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {destination.news.map((news) => (
                  <article
                    key={news.id}
                    className="bg-card p-6 rounded-2xl shadow-soft"
                  >
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(news.date)}</span>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {news.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contact Tab */}
          {tab === 'contact' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Contact {destination.name}
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about visiting {destination.name}? Get in touch with our team.
              </p>

              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-yellow"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-yellow"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-yellow"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-yellow resize-none"
                  />
                  <button
                    type="button"
                    onClick={() => toast({ title: "Message Sent!", description: "We'll get back to you soon." })}
                    className="w-full py-4 bg-jungle-yellow text-jungle-dark font-semibold rounded-lg hover:bg-jungle-yellow-light transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
