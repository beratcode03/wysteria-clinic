import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { LanguageProvider } from '@/i18n/LanguageContext';

import { useLanguage } from '@/i18n/useLanguage';

import { BookingProvider } from '@/components/booking/BookingContext';

import ConciergeDrawer from '@/components/booking/ConciergeDrawer';

import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';

import ScrollToTop from '@/components/ScrollToTop';

import ScrollProgress from '@/components/ScrollProgress';

import SmoothScroll from '@/components/SmoothScroll';

import PageMeta from '@/components/PageMeta';

import Preloader from '@/components/Preloader';

import WhatsAppButton from '@/components/WhatsAppButton';

import HomePage from '@/pages/HomePage';

import MenuPage from '@/pages/MenuPage';

import ContactPage from '@/pages/ContactPage';

import NotFoundPage from '@/pages/NotFoundPage';

function SkipLink() {

  const { t } = useLanguage();

  return (

    <a

      href="#main-content"

      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-ivory focus:px-4 focus:py-2 focus:text-sm focus:text-obsidian"

    >

      {t.common.skipToContent}

    </a>

  );

}

function AnimatedRoutes() {

  const location = useLocation();

  return (

    <div

      className="relative z-10 bg-obsidian shadow-[0_40px_90px_rgba(0,0,0,0.4)]"

      style={{ marginBottom: 'var(--footer-h, 0px)' }}

    >

      <main id="main-content" key={location.pathname} className="page-enter">

        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/treatments" element={<MenuPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<NotFoundPage />} />

        </Routes>

      </main>

    </div>

  );

}

export default function App() {

  return (

    <LanguageProvider>

      <BookingProvider>

      <BrowserRouter>

        <PageMeta />

        <SmoothScroll />

        <Preloader />

        <ScrollProgress />

        {}

        <div className="grain" aria-hidden="true" />

        <ScrollToTop />

        <SkipLink />

        <Navbar />

        <AnimatedRoutes />

        <Footer />

        <WhatsAppButton />

        <ConciergeDrawer />

      </BrowserRouter>

      </BookingProvider>

    </LanguageProvider>

  );

}
