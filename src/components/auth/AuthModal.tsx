import { useEffect, useRef, useState } from 'react';

import { X } from 'lucide-react';

import gsap from 'gsap';

import { brandMark } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import { getLenis } from '@/lib/smoothScroll';

export default function AuthModal({ open, onClose }: { open: boolean; onClose: () => void }) {

  const { t } = useLanguage();

  const [render, setRender] = useState(false);

  const [mode, setMode] = useState<'signin' | 'signup'>('signup');

  const overlayRef = useRef<HTMLDivElement>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  const [demoFlash, setDemoFlash] = useState(false);

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [pass, setPass] = useState('');

  useEffect(() => {

    const lenis = getLenis();

    if (open) {

      lenis?.stop();

      document.body.style.overflow = 'hidden';

      setRender(true);

    } else {

      lenis?.start();

      document.body.style.overflow = '';

    }

  }, [open]);

  useEffect(() => {

    if (!render) return;

    const overlay = overlayRef.current;

    const card = cardRef.current;

    if (!overlay || !card) return;

    const tl = gsap.timeline({ onComplete: () => !open && setRender(false) });

    if (open) {

      tl.to(overlay, { autoAlpha: 1, duration: 0.35, ease: 'power2.out' }, 0).fromTo(

        card,

        { y: 26, scale: 0.97, autoAlpha: 0 },

        { y: 0, scale: 1, autoAlpha: 1, duration: 0.5, ease: 'expo.out' },

        0.05,

      );

    } else {

      tl.to(card, { y: 16, autoAlpha: 0, duration: 0.3, ease: 'power2.in' }, 0).to(

        overlay,

        { autoAlpha: 0, duration: 0.3 },

        0.08,

      );

    }

    return () => {

      tl.kill();

    };

  }, [open, render]);

  useEffect(

    () => () => {

      getLenis()?.start();

      document.body.style.overflow = '';

    },

    [],

  );

  useEffect(() => {

    if (!open) return;

    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();

    window.addEventListener('keydown', onKey);

    return () => window.removeEventListener('keydown', onKey);

  }, [open, onClose]);

  if (!render) return null;

  const demoNotice = () => {

    setDemoFlash(true);

    window.setTimeout(() => setDemoFlash(false), 2200);

  };

  const inputCls =

    'w-full border-b border-ivory/25 bg-transparent pb-3 pt-1 text-sm text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-ivory';

  return (

    <div

      className="fixed inset-0 z-[130] flex items-center justify-center p-5"

      role="dialog"

      aria-modal="true"

      aria-label={mode === 'signup' ? t.auth.signupTitle : t.auth.signinTitle}

    >

      <div

        ref={overlayRef}

        className="invisible absolute inset-0 bg-black/65 opacity-0 backdrop-blur-sm"

        onClick={onClose}

      />

      <div

        ref={cardRef}

        className="invisible relative w-full max-w-md border border-ivory/10 bg-[#0F110F]/95 px-8 py-9 opacity-0 shadow-2xl backdrop-blur-2xl sm:px-10"

      >

        <button

          onClick={onClose}

          aria-label={t.booking.close}

          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center text-ivory/45 transition-colors hover:text-ivory"

        >

          <X size={16} />

        </button>

        <img src={brandMark} alt="" className="h-8 w-auto opacity-90" />

        <h2 className="mt-5 font-serif text-3xl font-light text-ivory">

          {mode === 'signup' ? t.auth.signupTitle : t.auth.signinTitle}

        </h2>

        {}

        <div className="group relative mt-7">

          <button

            onClick={demoNotice}

            aria-disabled="true"

            className="flex w-full items-center justify-center gap-3 border border-ivory/20 py-3.5 text-[12px] font-medium text-ivory/80 transition-colors hover:border-ivory/45 hover:text-ivory"

          >

            <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">

              <path fill="#EA4335" d="M12 5.04c1.62 0 3.06.56 4.2 1.64l3.12-3.12C17.46 1.8 14.96.5 12 .5 7.7.5 4.04 2.98 2.28 6.64l3.66 2.84C6.82 6.7 9.16 5.04 12 5.04z" />

              <path fill="#4285F4" d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.68 2.85c2.15-1.99 3.75-4.93 3.75-8.67z" />

              <path fill="#FBBC05" d="M5.95 14.52a7.2 7.2 0 0 1 0-5.04L2.28 6.64a11.5 11.5 0 0 0 0 10.72l3.67-2.84z" />

              <path fill="#34A853" d="M12 23.5c3.04 0 5.6-1 7.46-2.71l-3.68-2.85c-1.02.69-2.33 1.1-3.78 1.1-2.84 0-5.18-1.66-6.06-4.44l-3.66 2.84C4.04 21.02 7.7 23.5 12 23.5z" />

            </svg>

            {demoFlash ? t.auth.demo : t.auth.google}

          </button>

        </div>

        {}

        <div className="my-6 flex items-center gap-4">

          <span className="h-px flex-1 bg-ivory/12" />

          <span className="text-[10px] uppercase tracking-[0.24em] text-ivory/35">{t.auth.or}</span>

          <span className="h-px flex-1 bg-ivory/12" />

        </div>

        {}

        <form

          onSubmit={(e) => {

            e.preventDefault();

            demoNotice();

          }}

          className="space-y-5"

        >

          {mode === 'signup' && (

            <input

              value={name}

              onChange={(e) => setName(e.target.value)}

              placeholder={t.auth.namePh}

              autoComplete="name"

              className={inputCls}

            />

          )}

          <input

            value={email}

            onChange={(e) => setEmail(e.target.value)}

            placeholder={t.auth.emailPh}

            type="email"

            autoComplete="email"

            className={inputCls}

          />

          <input

            value={pass}

            onChange={(e) => setPass(e.target.value)}

            placeholder={t.auth.passPh}

            type="password"

            autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}

            className={inputCls}

          />

          <div className="group relative pt-2">

            <button

              type="submit"

              aria-disabled="true"

              className="w-full border border-ivory bg-ivory py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-obsidian transition-colors hover:bg-champagne-light"

            >

              {demoFlash ? t.auth.demo : mode === 'signup' ? t.auth.signup : t.auth.signin}

            </button>

          </div>

        </form>

        {}

        <button

          onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')}

          className="mt-6 block w-full text-center text-[11px] tracking-[0.06em] text-ivory/45 transition-colors hover:text-ivory"

        >

          {mode === 'signup' ? t.auth.toSignin : t.auth.toSignup}

        </button>

      </div>

    </div>

  );

}
