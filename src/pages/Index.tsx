import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutSection from '@/components/home/AboutSection';
import DestinationsSection from '@/components/home/DestinationsSection';
import ToursSection from '@/components/home/ToursSection';
import NewsAndEvents from '@/components/home/NewsAndEvents';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <DestinationsSection />
      <TestimonialsSection />
      <div className="w-full bg-background/80 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Tours Section - Takes 2/3 width on large screens */}
            <div className="lg:col-span-2">
              <ToursSection />
            </div>
            
            {/* News & Events Section - Takes 1/3 width on large screens */}
            <div className="lg:col-span-1">
              <NewsAndEvents />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
