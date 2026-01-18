import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutSection from '@/components/home/AboutSection';
import DestinationsSection from '@/components/home/DestinationsSection';
import ToursSection from '@/components/home/ToursSection';
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
          <ToursSection />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
