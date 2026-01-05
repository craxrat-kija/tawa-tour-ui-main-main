import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutSection from '@/components/home/AboutSection';
import DestinationsSection from '@/components/home/DestinationsSection';
import ToursSection from '@/components/home/ToursSection';
import NewsSection from '@/components/home/NewsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <DestinationsSection />
      <ToursSection />
      <NewsSection />
    </Layout>
  );
};

export default Index;
