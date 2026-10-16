import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import { siteImages } from '@/data/site';

export default function Preloader() {

  const [gone, setGone] = useState(false);

  const curtainRef = useRef<HTMLDivElement>(null);

  const markRef = useRef<HTMLSpanElement>(null);

  const lineRef = useRef<HTMLDivElement>(null);

  const doneRef = useRef(false);

  useEffect(() => {

    const state = { fonts: false, poster: false, video: false };

    const tryReveal = () => {

      if (doneRef.current || !(state.fonts && state.poster && state.video)) return;

      doneRef.current = true;

      reveal();

    };

    const reveal = () => {

      const curtain = curtainRef.current;

      const mark = markRef.current;

      const line = lineRef.current;

      if (!curtain || !mark) {

        setGone(true);

        return;

      }

      const tl = gsap.timeline({ onComplete: () => setGone(true) });

      tl

        .to(mark, { opacity: 1, duration: 0.35, ease: 'power2.out' }, 0.05)

        .to(

          mark,

          { scale: 1.05, letterSpacing: '0.16em', duration: 0.85, ease: 'power2.inOut' },

          0.05,

        )

        .to(line, { scaleX: 1, duration: 0.7, ease: 'power2.inOut' }, 0.1)

        .to(mark, { opacity: 0, filter: 'blur(10px)', scale: 1.09, duration: 0.5, ease: 'power2.in' }, 0.95)

        .to(line, { opacity: 0, duration: 0.3 }, 0.95)

        .to(curtain, { yPercent: -101, duration: 0.9, ease: 'power4.inOut' }, 1.15);

    };

    document.fonts.ready.then(() => {

      state.fonts = true;

      tryReveal();

    });

    const img = new Image();

    img.onload = img.onerror = () => {

      state.poster = true;

      tryReveal();

    };

    img.src = siteImages.heroPoster;

    const v = document.createElement('video');

    v.preload = 'auto';

    v.muted = true;

    v.src = siteImages.heroVideo;

    const ready = () => {

      state.video = true;

      tryReveal();

    };

    v.addEventListener('loadeddata', ready);

    v.addEventListener('canplay', ready);

    v.addEventListener('error', ready);

    const cap = setTimeout(() => {

      if (!doneRef.current) {

        doneRef.current = true;

        reveal();

      }

    }, 3500);

    return () => {

      clearTimeout(cap);

      v.src = '';

    };

  }, []);

  if (gone) return null;

  return (

    <div

      ref={curtainRef}

      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso-400"

      aria-hidden="true"

    >

      {}

      <div

        className="absolute inset-0 opacity-60"

        style={{

          background:

            'radial-gradient(ellipse 90% 70% at 50% 42%, rgba(38,37,31,0.55), rgba(27,26,21,0.95))',

        }}

      />

      <span

        ref={markRef}

        className="relative font-serif text-[11vw] font-light lowercase tracking-[0em] text-ivory opacity-0 sm:text-[7vw] lg:text-[5vw]"

        style={{ transform: 'scale(0.98)', willChange: 'transform, letter-spacing, filter' }}

      >

        wysteria

      </span>

      <div

        ref={lineRef}

        className="relative mt-6 h-px w-24 origin-center scale-x-0 bg-ivory/30"

        aria-hidden="true"

      />

    </div>

  );

}
