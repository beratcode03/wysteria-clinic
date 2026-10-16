import { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import { ArrowUp, Instagram } from 'lucide-react';

import { siteConfig, brandMark } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import { scrollToTop } from '@/lib/smoothScroll';

export default function Footer() {

  const { t } = useLanguage();

  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const el = innerRef.current;

    if (!el) return;

    const set = () => document.documentElement.style.setProperty('--footer-h', `${el.offsetHeight}px`);

    set();

    const ro = new ResizeObserver(set);

    ro.observe(el);

    return () => {

      ro.disconnect();

      document.documentElement.style.removeProperty('--footer-h');

    };

  }, []);

  const footerLinks = [

    { to: '/', label: t.nav.home },

    { to: '/treatments', label: t.menu.crumb },

    { to: '/contact', label: t.nav.contact },

  ];

  return (

    <footer className="fixed inset-x-0 bottom-0 z-0 bg-plum-400 text-ivory">

      <div ref={innerRef} className="relative mx-auto max-w-[1400px] border-t border-ivory/[0.08] px-6 pt-16 lg:px-12 lg:pt-20">

        {}

        <div className="flex flex-col items-start justify-between gap-8 pb-14 lg:flex-row lg:items-end">

          <div className="max-w-md">

            <Link to="/" aria-label={t.nav.homeAria}>

              <img src={brandMark} alt="Wysteria Works" className="h-12 w-auto opacity-90 transition-opacity hover:opacity-100" />

            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/55">

              {t.footer.tagline}

            </p>

          </div>

          <div className="flex flex-col items-start gap-2 lg:items-end">

            <span className="text-[11px] font-semibold uppercase tracking-wide-3 text-sage-light">

              {t.cta.eyebrow}

            </span>

            <a

              href={`tel:${siteConfig.phoneRaw}`}

              className="font-serif text-3xl font-light text-ivory transition-colors hover:text-sage-light sm:text-4xl"

            >

              {siteConfig.phone}

            </a>

            <a

              href={siteConfig.instagramUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="mt-1 inline-flex items-center gap-2 text-sm text-ivory/55 transition-colors hover:text-sage-light"

            >

              <Instagram size={16} />

              {siteConfig.instagram}

            </a>

          </div>

        </div>

        <div className="h-px w-full bg-ivory/10" aria-hidden="true" />

        {}

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">

          <div>

            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-wide-3 text-sage-light">

              {t.footer.explore}

            </h3>

            <ul className="space-y-3">

              {footerLinks.map((link) => (

                <li key={link.to}>

                  <Link

                    to={link.to}

                    className="text-sm text-ivory/60 underline-offset-4 transition-colors hover:text-sage-light hover:underline"

                  >

                    {link.label}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          <div className="sm:col-span-1 lg:col-span-2">

            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-wide-3 text-sage-light">

              {t.footer.visit}

            </h3>

            <address className="not-italic text-sm leading-relaxed text-ivory/60">

              {siteConfig.address}

              <br />

              <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-block transition-colors hover:text-sage-light">

                {siteConfig.email}

              </a>

            </address>

            <a

              href={siteConfig.directionsUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="mt-5 inline-flex items-center gap-2 text-sm text-sage-light underline-offset-4 transition-colors hover:text-ivory hover:underline"

            >

              {t.common.directions} →

            </a>

          </div>

          <div>

            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-wide-3 text-sage-light">

              {t.visit.hours}

            </h3>

            <div className="space-y-2.5">

              {siteConfig.hoursRows.map((row, i) => (

                <div key={row.key} className="flex items-baseline justify-between gap-6 text-sm">

                  <span className="text-ivory/55">{t.visit.days[i]}</span>

                  <span className="flex-1 border-b border-dotted border-ivory/15" aria-hidden="true" />

                  <span className="text-ivory/80">{row.time}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

        <div className="h-px w-full bg-ivory/10" aria-hidden="true" />

        {}

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">

          <p className="text-xs text-ivory/40">

            © {new Date().getFullYear()} {t.footer.rights}

          </p>

          <p className="text-[10px] uppercase tracking-wide-3 text-ivory/25">

            {siteConfig.instagram}

          </p>

          <button

            onClick={scrollToTop}

            className="group inline-flex items-center gap-2 text-xs text-ivory/55 transition-colors hover:text-sage-light"

            aria-label={t.footer.backToTopAria}

          >

            {t.footer.backToTop}

            <span className="flex h-9 w-9 items-center justify-center border border-ivory/20 transition-all group-hover:border-sage-light group-hover:text-sage-light">

              <ArrowUp size={14} />

            </span>

          </button>

        </div>

      </div>

    </footer>

  );

}
