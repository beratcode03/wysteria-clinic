import { useEffect, useRef } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { siteImages, getOpenStatus, brandLogo, brandMark } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

gsap.registerPlugin(ScrollTrigger);

export default function PortalHero() {

  const { t } = useLanguage();

  const status = getOpenStatus();

  const wrapRef = useRef<HTMLElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  const veilRef = useRef<HTMLDivElement>(null);

  const headLRef = useRef<HTMLSpanElement>(null);

  const headRRef = useRef<HTMLSpanElement>(null);

  const metaRef = useRef<HTMLDivElement>(null);

  const portalRef = useRef<HTMLDivElement>(null);

  const sceneRef = useRef<HTMLDivElement>(null);

  const settleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) return;

    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {

        const tl = gsap.timeline({

          defaults: { ease: 'none' },

          scrollTrigger: {

            trigger: wrapRef.current,

            start: 'top top',

            end: '+=260%',

            scrub: 1,

            pin: true,

            anticipatePin: 1,

            onUpdate: (self) => {

              const v = videoRef.current;

              if (v) v.playbackRate = 1 + self.progress * 1.6;

            },

          },

        });

        tl

          .to(headLRef.current, { xPercent: -64, opacity: 0, filter: 'blur(14px)' }, 0)

          .to(headRRef.current, { xPercent: 64, opacity: 0, filter: 'blur(14px)' }, 0)

          .to(metaRef.current, { opacity: 0, y: -32 }, 0)

          .to(videoRef.current, { scale: 1.28, ease: 'power1.in' }, 0)

          .to(veilRef.current, { opacity: 0.35 }, 0)

          .to(portalRef.current, { opacity: 1, duration: 0.05 }, 0.16)

          .fromTo(

            portalRef.current,

            { width: '30vmin', height: '30vmin' },

            { width: '170vmax', height: '170vmax', ease: 'power1.in' },

            0.2,

          )

          .to(

            videoRef.current,

            { scale: 1.45, filter: 'brightness(0.4) blur(7px)', ease: 'power1.in' },

            0.3,

          )

          .fromTo(sceneRef.current, { scale: 0.88 }, { scale: 1, ease: 'power1.inOut' }, 0.2)

          .to(settleRef.current, { opacity: 1, ease: 'power2.out' }, 0.78);

      });

      mm.add('(max-width: 767px)', () => {

        gsap.set(portalRef.current, { opacity: 0 });

      });

    }, wrapRef);

    return () => ctx.revert();

  }, []);

  return (

    <section ref={wrapRef} className="relative h-screen overflow-hidden bg-espresso-400">

      {}

      <video

        ref={videoRef}

        className="absolute inset-0 h-full w-full object-cover will-change-transform"

        src={siteImages.heroVideo}

        poster={siteImages.heroPoster}

        autoPlay

        muted

        loop

        playsInline

        preload="metadata"

      />

      <div

        ref={veilRef}

        className="absolute inset-0 opacity-0"

        style={{

          background:

            'radial-gradient(ellipse 70% 60% at 50% 46%, transparent 30%, rgba(12,13,11,0.72) 100%)',

        }}

        aria-hidden="true"

      />

      <div

        className="absolute inset-0"

        style={{

          background:

            'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 55%, rgba(12,13,11,0.55) 100%)',

        }}

        aria-hidden="true"

      />

      {}

      <div ref={metaRef} className="absolute inset-0 flex flex-col items-center justify-end pb-10">

        <div className="mb-9 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/60">

          <span className={`h-1.5 w-1.5 rounded-full ${status.open ? 'bg-sage-light' : 'bg-champagne'}`} />

          <span>{status.open ? t.hero.openNow('19:00') : t.hero.closedNow('09:00')}</span>

        </div>

        <div className="flex flex-col items-center gap-2.5 text-ivory/50">

          <span className="font-mono text-[9px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>

          <span className="scroll-cue block h-10 w-px bg-ivory/40" aria-hidden="true" />

        </div>

      </div>

      {}

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">

        <h1 className="text-center">

          <span ref={headLRef} className="block">

            <img

              src={brandLogo}

              alt="Wysteria Works"

              className="mx-auto w-[64vw] max-w-none drop-shadow-[0_4px_40px_rgba(0,0,0,0.65)] sm:w-[44vw] lg:w-[32vw]"

            />

          </span>

          <span ref={headRRef} className="mt-7 block font-serif text-[5.6vw] font-light italic tracking-normal text-ivory/80 sm:text-[3.8vw] lg:text-[2.6vw]">

            {t.hero.title1} {t.hero.title2} {t.hero.title3}

          </span>

        </h1>

      </div>

      {}

      <div className="absolute bottom-10 right-6 hidden font-mono text-[9px] uppercase tracking-[0.26em] text-ivory/30 lg:right-12 lg:block">

        sys · nominal

      </div>

      {}

      <div

        ref={portalRef}

        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-0 will-change-[width,height]"

        style={{

          width: '30vmin',

          height: '30vmin',

          borderRadius: '50%',

          boxShadow:

            'inset 0 0 90px rgba(0,0,0,0.5), 0 0 110px rgba(210,187,152,0.13), 0 0 0 1px rgba(250,248,244,0.16)',

        }}

        aria-hidden="true"

      >

        {}

        <div

          className="absolute left-1/2 top-1/2 h-screen w-screen"

          style={{ transform: 'translate(-50%, -50%)' }}

        >

          <div ref={sceneRef} className="h-full w-full will-change-transform" style={{ transform: 'scale(0.88)' }}>

            <img

              src={siteImages.portalInner}

              alt=""

              className="h-full w-full object-cover"

              style={{ filter: 'brightness(0.55) contrast(1.12) saturate(0.8) sepia(0.14)' }}

            />

            {}

            <div

              className="absolute inset-0"

              style={{

                background:

                  'linear-gradient(180deg, rgba(13,14,13,0.45) 0%, transparent 28%, transparent 62%, rgba(13,14,13,0.55) 100%)',

              }}

            />

            <div

              className="absolute inset-0"

              style={{

                background:

                  'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 55%, rgba(13,14,13,0.5) 100%)',

              }}

            />

            {}

            <div ref={settleRef} className="absolute inset-0 bg-obsidian opacity-0">

              <div className="flex h-full flex-col items-center justify-center px-8 text-center">

                <img src={brandMark} alt="" className="h-10 w-auto opacity-60" />

                <span className="mt-6 font-serif text-sm italic text-sage-light">{t.hero.arriveEyebrow}</span>

                <p className="mt-4 max-w-2xl text-balance font-serif text-3xl font-light leading-snug text-ivory sm:text-4xl lg:text-5xl">

                  {t.hero.arriveTitle}

                </p>

                <span className="mt-8 h-px w-16 bg-champagne" aria-hidden="true" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}
