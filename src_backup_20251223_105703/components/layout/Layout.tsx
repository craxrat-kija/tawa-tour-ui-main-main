import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Chatbot from '../chatbot/Chatbot';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
}
