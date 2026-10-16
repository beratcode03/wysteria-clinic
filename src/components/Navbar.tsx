import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Menu as MenuIcon, X, Phone, User } from 'lucide-react';

import { siteConfig, brandLogo } from '@/data/site';

import { useScrollPosition, useHeaderHidden } from '@/hooks/useScrollReveal';

import { useLanguage } from '@/i18n/useLanguage';

import { useBooking } from '@/components/booking/useBooking';

import { getLenis } from '@/lib/smoothScroll';

import LangToggle from '@/components/LangToggle';

import AuthModal from '@/components/auth/AuthModal';

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [authOpen, setAuthOpen] = useState(false);

  const scrolled = useScrollPosition();

  const headerHidden = useHeaderHidden() && !open;

  const location = useLocation();

  const { t } = useLanguage();

  const { openBooking } = useBooking();

  const leftLinks = [

    { to: '/', label: t.nav.home },

    { to: '/treatments', label: t.nav.menuCta },

  ];

  const rightLinks = [{ to: '/contact', label: t.nav.contact }];

  const navLinks = [...leftLinks, ...rightLinks];

  useEffect(() => {

    const lenis = getLenis();

    if (open) {

      lenis?.stop();

      document.body.style.overflow = 'hidden';

    } else {

      lenis?.start();

      document.body.style.overflow = '';

    }

    return () => {

      lenis?.start();

      document.body.style.overflow = '';

    };

  }, [open]);

  useEffect(() => {

    setOpen(false);

  }, [location.pathname]);

  const isHome = location.pathname === '/';

  const onDark = isHome && !scrolled && !open;

  const linkCls = (to: string) => {

    const active = location.pathname === to;

    const idle = onDark ? 'text-ivory/70 hover:text-ivory' : 'text-ivory/60 hover:text-ivory';

    const activeCls = onDark ? 'text-sage-light' : 'text-sage-light';

    return `relative py-1 text-[11px] font-semibold uppercase tracking-wide-3 transition-colors duration-300 ${

      active ? activeCls : idle

    } after:absolute after:-bottom-0.5 after:left-1/2 after:h-px after:w-full after:-translate-x-1/2 after:transition-transform after:duration-300 ${

      onDark ? 'after:bg-sage-light' : 'after:bg-sage-light'

    } ${active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`;

  };

  return (

    <>

      <header

        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${

          scrolled || open ? 'border-b border-ivory/[0.07] bg-obsidian/85 backdrop-blur-lg' : 'bg-transparent'

        } ${headerHidden ? '-translate-y-[120%]' : 'translate-y-0'}`}

      >

        <nav className={`relative mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-500 lg:px-12 ${scrolled ? 'py-3' : 'py-5'}`}>

          {}

          <div className="hidden flex-1 items-center gap-10 lg:flex">

            {leftLinks.map((link) => (

              <Link key={link.to} to={link.to} className={linkCls(link.to)}>

                {link.label}

              </Link>

            ))}

          </div>

          {}

          <Link

            to="/"

            aria-label={t.nav.homeAria}

            className="group absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"

          >

            <img

              src={brandLogo}

              alt="Wysteria Works"

              className={`w-auto transition-all duration-500 group-hover:opacity-70 ${scrolled ? 'h-7' : 'h-9'}`}

            />

          </Link>

          {}

          <Link to="/" aria-label={t.nav.homeAria} className="group lg:hidden">

            <img src={brandLogo} alt="Wysteria Works" className="h-7 w-auto transition-opacity group-hover:opacity-70" />

          </Link>

          {}

          <div className="hidden flex-1 items-center justify-end gap-10 lg:flex">

            {rightLinks.map((link) => (

              <Link key={link.to} to={link.to} className={linkCls(link.to)}>

                {link.label}

              </Link>

            ))}

            <LangToggle />

            <button

              onClick={() => setAuthOpen(true)}

              aria-label={t.nav.signin}

              className={`flex h-10 w-10 items-center justify-center border transition-colors duration-300 ${

                onDark

                  ? 'border-ivory/30 text-ivory/80 hover:border-sage-light hover:text-sage-light'

                  : 'border-ivory/25 text-ivory/80 hover:border-ivory hover:text-ivory'

              }`}

            >

              <User size={15} />

            </button>

            <button

              onClick={openBooking}

              className={`sheen group inline-flex items-center gap-2.5 border px-6 py-2.5 text-[11px] font-semibold uppercase tracking-wide-3 transition-all duration-300 ${

                onDark

                  ? 'border-ivory/30 text-ivory hover:border-sage-light hover:text-sage-light'

                  : 'border-ivory/25 text-ivory hover:border-ivory hover:bg-ivory hover:text-obsidian'

              }`}

            >

              {t.nav.reserve}

            </button>

          </div>

          {}

          <div className="flex items-center gap-2.5 lg:hidden">

            <LangToggle />

            <button

              className={`flex h-11 w-11 items-center justify-center border transition-colors ${

                onDark

                  ? 'border-ivory/25 text-ivory hover:border-sage-light'

                  : 'border-ivory/20 text-ivory hover:border-sage-light'

              }`}

              onClick={() => setOpen(!open)}

              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}

              aria-expanded={open}

            >

              {open ? <X size={20} /> : <MenuIcon size={20} />}

            </button>

          </div>

        </nav>

      </header>

      {}

      <div

        className={`fixed inset-0 z-40 flex flex-col bg-obsidian transition-all duration-500 lg:hidden ${

          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'

        }`}

      >

        <div className="relative flex flex-1 flex-col items-center justify-center gap-2 px-8">

          {navLinks.map((link, i) => {

            const active = location.pathname === link.to;

            return (

              <Link

                key={link.to}

                to={link.to}

                onClick={() => setOpen(false)}

                style={{ transitionDelay: open ? `${140 + i * 80}ms` : '0ms' }}

                className={`flex items-baseline gap-4 py-3 font-serif text-4xl font-light transition-all duration-500 ${

                  open ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'

                } ${active ? 'italic text-sage-light' : 'text-ivory hover:text-sage-light'}`}

              >

                <span className="font-sans text-[11px] font-semibold tracking-wide-3 text-champagne-light">0{i + 1}</span>

                {link.label}

              </Link>

            );

          })}

          <button

            onClick={() => {

              setOpen(false);

              openBooking();

            }}

            style={{ transitionDelay: open ? `${140 + navLinks.length * 80}ms` : '0ms' }}

            className={`mt-8 inline-flex items-center gap-2.5 border border-sage-light/50 px-8 py-4 text-[12px] font-semibold uppercase tracking-wide-3 text-sage-light transition-all duration-500 hover:bg-sage-light/10 ${

              open ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'

            }`}

          >

            <Phone size={14} />

            {t.nav.reserve}

          </button>

          <button

            onClick={() => {

              setOpen(false);

              setAuthOpen(true);

            }}

            style={{ transitionDelay: open ? `${180 + navLinks.length * 80}ms` : '0ms' }}

            className={`mt-3 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-wide-3 text-ivory/50 transition-all duration-500 hover:text-ivory ${

              open ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'

            }`}

          >

            <User size={13} />

            {t.nav.signin}

          </button>

        </div>

        <div className="border-t border-ivory/10 px-8 py-6 text-center">

          <p className="text-xs tracking-wide-2 text-ivory/45">{siteConfig.shortAddress}</p>

          <p className="mt-1 text-xs tracking-wide-2 text-ivory/35">Pzt – Cmt · 09:00 – 19:00</p>

        </div>

      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />

    </>

  );

}
