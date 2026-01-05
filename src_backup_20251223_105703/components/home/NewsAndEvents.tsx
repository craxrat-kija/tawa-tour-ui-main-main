import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { mainNews, destinations } from '@/data/destinations';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  destination?: string;
  destSlug?: string;
}

interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
}

export default function NewsAndEvents() {
  // Get latest news - show all main news items
  const latestNews: NewsItem[] = [
    ...(mainNews || []),
    ...(destinations?.flatMap(d => 
      (d.news || []).map(n => ({ 
        ...n, 
        destination: d.name, 
        destSlug: d.slug 
      })) || [])
    )
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
   .slice(0, 4);

  // Sample upcoming events data
  const upcomingEvents: EventItem[] = [
    {
      id: 'e1',
      title: 'Wildlife Conservation Day',
      date: '2025-01-15',
      location: 'Pande Game Reserve',
      excerpt: 'Join us for a day of conservation activities and wildlife education.'
    },
    {
      id: 'e2',
      title: 'Guided Night Safari',
      date: '2025-01-22',
      location: 'Mpanga Kipengele',
      excerpt: 'Experience the magic of the African bush at night with our expert guides.'
    },
    {
      id: 'e3',
      title: 'Bird Watching Tour',
      date: '2025-02-05',
      location: 'Selous Game Reserve',
      excerpt: 'Discover the incredible birdlife of Tanzania with our ornithology experts.'
    },
    {
      id: 'e4',
      title: 'Community Conservation Workshop',
      date: '2025-02-15',
      location: 'Tabora Zoo',
      excerpt: 'Learn about community-based conservation efforts and how you can help.'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-background to-jungle/3 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--jungle-yellow)) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              className="h-1 w-8 bg-gradient-to-r from-jungle-yellow to-jungle rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <span className="text-sm font-semibold text-jungle-yellow uppercase tracking-wider">
              News & Updates
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            News & Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news and upcoming events from Tanzania's wildlife conservation efforts.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* News Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-jungle-yellow to-jungle rounded-full" />
              <h3 className="text-lg font-semibold text-foreground">Latest News</h3>
            </div>
            
            <div className="space-y-4">
              {latestNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group relative"
                >
                  <Link
                    to={`/news/${news.id}`}
                    className="block bg-card/80 hover:bg-card rounded-lg overflow-hidden border border-jungle/10 hover:border-jungle/30 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden bg-jungle/5">
                          {news.image ? (
                            <img 
                              src={news.image} 
                              alt={news.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-jungle/5 text-jungle/30">
                              <Calendar className="w-8 h-8" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-foreground line-clamp-2 group-hover:text-jungle-yellow transition-colors mb-1">
                            {news.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-2">
                            {new Date(news.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                            {news.destination && (
                              <span className="ml-2 px-2 py-0.5 bg-jungle/5 text-jungle/80 text-xs rounded-full">
                                {news.destination}
                              </span>
                            )}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {news.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link
                to="/news"
                className="inline-flex items-center text-sm font-medium text-jungle-yellow hover:text-foreground transition-colors group"
              >
                View all news
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Events Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-jungle to-jungle-yellow rounded-full" />
              <h3 className="text-lg font-semibold text-foreground">Upcoming Events</h3>
            </div>
            
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                  className="group relative"
                >
                  <Link
                    to={`/events/${event.id}`}
                    className="block bg-card/80 hover:bg-card rounded-lg overflow-hidden border border-jungle/10 hover:border-jungle/30 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-jungle/5 flex flex-col items-center justify-center text-center border border-jungle/10">
                          <div className="text-lg font-bold text-jungle">
                            {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}
                          </div>
                          <div className="text-xs text-jungle/70">
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-foreground line-clamp-2 group-hover:text-jungle-yellow transition-colors mb-1">
                            {event.title}
                          </h3>
                          <p className="text-xs text-muted-foreground flex items-center mb-2">
                            <MapPin className="w-3 h-3 mr-1" />
                            {event.location}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {event.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link
                to="/events"
                className="inline-flex items-center text-sm font-medium text-jungle-yellow hover:text-foreground transition-colors group"
              >
                View all events
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
