import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Chatbot from '../common/Chatbot';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      {/* Add padding-top to account for fixed header: h-16 (64px) */}
      <main className="flex-1 relative pt-16">{children}</main>
      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
}
