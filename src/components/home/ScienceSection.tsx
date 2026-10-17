import { useEffect, useRef } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useLanguage } from '@/i18n/useLanguage';

import { Eyebrow } from '@/components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const SLAB_STYLE: React.CSSProperties = {

  background: 'linear-gradient(135deg, rgba(236,232,225,0.09), rgba(236,232,225,0.03))',

  backdropFilter: 'blur(8px)',

  WebkitBackdropFilter: 'blur(8px)',

  boxShadow:

    'inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -18px 34px rgba(0,0,0,0.3), 0 34px 60px -24px rgba(0,0,0,0.6)',

  border: '1px solid rgba(236,232,225,0.14)',

};

const LAYERS = [

  {

    metric: '0.05 – 1.5 MM',

    code: 'STR. CORNEUM',

    svg: (

      <svg viewBox="0 0 560 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">

        <defs>

          <pattern id="hexCell" width="26" height="22.5" patternUnits="userSpaceOnUse">

            <path

              d="M6.5 0 L19.5 0 L26 11.25 L19.5 22.5 L6.5 22.5 L0 11.25 Z"

              fill="none"

              stroke="#B8B4AC"

              strokeOpacity="0.32"

              strokeWidth="0.7"

            />

          </pattern>

        </defs>

        <rect width="560" height="300" fill="url(#hexCell)" />

        <rect width="560" height="46" fill="rgba(255,255,255,0.05)" />

      </svg>

    ),

  },

  {

    metric: '1.0 – 4.0 MM',

    code: 'KOLAJEN MATRİS',

    svg: (

      <svg viewBox="0 0 560 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">

        <defs>

          <linearGradient id="specBand" x1="0" y1="0" x2="1" y2="1">

            <stop offset="0.32" stopColor="rgba(236,232,225,0)" />

            <stop offset="0.5" stopColor="rgba(236,232,225,0.16)" />

            <stop offset="0.68" stopColor="rgba(236,232,225,0)" />

          </linearGradient>

        </defs>

        {Array.from({ length: 9 }, (_, i) => (

          <path

            key={`f${i}`}

            d={`M-20 ${30 + i * 32} C 140 ${8 + i * 32}, 300 ${52 + i * 32}, 580 ${26 + i * 32}`}

            fill="none"

            stroke="#A79D8B"

            strokeOpacity="0.4"

            strokeWidth="1.1"

          />

        ))}

        {Array.from({ length: 9 }, (_, i) => (

          <path

            key={`b${i}`}

            d={`M-20 ${44 + i * 32} C 160 ${66 + i * 32}, 320 ${20 + i * 32}, 580 ${48 + i * 32}`}

            fill="none"

            stroke="#8B8371"

            strokeOpacity="0.32"

            strokeWidth="0.8"

          />

        ))}

        <rect width="560" height="300" fill="url(#specBand)" />

      </svg>

    ),

  },

  {

    metric: 'DEĞİŞKEN',

    code: 'ADİPOZ DOKU',

    svg: (

      <svg viewBox="0 0 560 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">

        <defs>

          <radialGradient id="lipid" cx="0.34" cy="0.3" r="0.85">

            <stop offset="0" stopColor="rgba(255,240,205,0.62)" />

            <stop offset="0.35" stopColor="rgba(196,168,118,0.42)" />

            <stop offset="0.7" stopColor="rgba(96,80,52,0.38)" />

            <stop offset="1" stopColor="rgba(38,32,20,0.55)" />

          </radialGradient>

          <radialGradient id="lipidHi" cx="0.5" cy="0.5" r="0.5">

            <stop offset="0" stopColor="rgba(255,250,235,0.7)" />

            <stop offset="1" stopColor="rgba(255,250,235,0)" />

          </radialGradient>

          {}

          <filter id="cellBlur" x="-40%" y="-40%" width="180%" height="180%">

            <feGaussianBlur stdDeviation="2.4" />

          </filter>

        </defs>

        {}

        {[

          [60, 60, 30], [170, 150, 38], [260, 60, 34], [350, 170, 42], [470, 160, 36],

          [90, 240, 36], [230, 250, 40], [380, 250, 38], [520, 170, 30], [540, 60, 26],

        ].map(([x, y, r], i) => (

          <g key={`b${i}`} opacity="0.38" filter="url(#cellBlur)">

            <circle cx={x} cy={y} r={r} fill="url(#lipid)" />

          </g>

        ))}

        {}

        {[

          [72, 108, 32], [136, 84, 26], [164, 130, 38], [222, 96, 28], [258, 140, 34],

          [318, 96, 42], [362, 142, 28], [412, 92, 32], [452, 130, 38], [504, 98, 30],

          [102, 208, 40], [152, 186, 26], [204, 218, 34], [258, 192, 28], [306, 226, 38],

          [372, 198, 32], [426, 230, 28], [478, 200, 36], [520, 232, 24],

        ].map(([x, y, r], i) => (

          <g key={i}>

            <circle cx={x} cy={y} r={r} fill="url(#lipid)" />

            <ellipse cx={x - r * 0.28} cy={y - r * 0.34} rx={r * 0.3} ry={r * 0.17} fill="url(#lipidHi)" />

            <circle cx={x} cy={y} r={r} fill="none" stroke="#D8C9A8" strokeOpacity="0.2" strokeWidth="0.8" />

          </g>

        ))}

      </svg>

    ),

  },

];

export default function ScienceSection() {

  const { t } = useLanguage();

  const wrapRef = useRef<HTMLElement>(null);

  const stageRef = useRef<HTMLDivElement>(null);

  const slabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const calloutRefs = useRef<(HTMLDivElement | null)[]>([]);

  const leaderRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const progRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) return;

    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {

        const slabs = slabRefs.current;

        const callouts = calloutRefs.current;

        const leaders = leaderRefs.current;

        slabs.forEach((s, i) => {

          gsap.set(s, {

            xPercent: -50,

            yPercent: -50,

            rotateX: 48,

            rotateZ: -20,

            z: (i - 1) * 26,

          });

        });

        gsap.set(callouts, { opacity: 0, y: 22 });

        gsap.set(leaders, { scaleX: 0 });

        gsap.set(slabs, { opacity: 0.4, filter: 'saturate(0.7) brightness(0.94)' });

        const tl = gsap.timeline({

          defaults: { ease: 'none' },

          scrollTrigger: {

            trigger: wrapRef.current,

            start: 'top top',

            end: '+=200%',

            scrub: 1,

            pin: true,

            anticipatePin: 1,

          },

        });

        tl.to(slabs, { opacity: 1, filter: 'saturate(1) brightness(1)', duration: 0.14 }, 0)

          .to(stageRef.current, { rotateZ: 2.5, duration: 1 }, 0);

        tl.to(slabs[0], { z: 210, y: -86, ease: 'power1.inOut', duration: 0.55 }, 0.12)

          .to(slabs[2], { z: -210, y: 86, ease: 'power1.inOut', duration: 0.55 }, 0.12)

          .to(slabs[1], { z: 0, ease: 'power1.inOut', duration: 0.55 }, 0.12);

        const focus = (active: number, at: number) => {

          slabs.forEach((s, i) => {

            tl.to(

              s,

              {

                opacity: i === active ? 1 : 0.3,

                filter: i === active ? 'saturate(1) brightness(1.06)' : 'saturate(0.6) brightness(0.9)',

                duration: 0.16,

              },

              at,

            );

          });

          tl.to(leaders[active], { scaleX: 1, duration: 0.14, ease: 'power2.out' }, at)

            .to(callouts[active], { opacity: 1, y: 0, duration: 0.16, ease: 'power2.out' }, at + 0.02);

        };

        focus(0, 0.34);

        focus(1, 0.54);

        focus(2, 0.74);

        tl.to(progRef.current, { scaleX: 1, duration: 1 }, 0);

        const stage = stageRef.current;

        const wrap = wrapRef.current;

        if (stage && wrap) {

          const qx = gsap.quickTo(stage, 'rotationX', { duration: 1.1, ease: 'power3.out' });

          const qy = gsap.quickTo(stage, 'rotationY', { duration: 1.1, ease: 'power3.out' });

          const onTilt = (e: MouseEvent) => {

            const r = wrap.getBoundingClientRect();

            qy(((e.clientX - r.left) / r.width - 0.5) * 16);

            qx(-((e.clientY - r.top) / r.height - 0.5) * 11);

          };

          const onOut = () => {

            qx(0);

            qy(0);

          };

          wrap.addEventListener('mousemove', onTilt);

          wrap.addEventListener('mouseleave', onOut);

          return () => {

            wrap.removeEventListener('mousemove', onTilt);

            wrap.removeEventListener('mouseleave', onOut);

          };

        }

      });

      mm.add('(max-width: 767px)', () => {

        slabRefs.current.forEach((s, i) => {

          gsap.set(s, {

            xPercent: -50,

            yPercent: -50,

            rotateX: 48,

            rotateZ: -20,

            z: (1 - i) * 90,

          });

        });

        gsap.set(calloutRefs.current, { opacity: 1 });

        gsap.set(leaderRefs.current, { scaleX: 1 });

      });

    }, wrapRef);

    return () => ctx.revert();

  }, []);

  const calloutPos = [

    'right-[4%] top-[10%] text-right lg:right-[7%]',

    'left-[4%] top-[46%] lg:left-[6%]',

    'right-[4%] bottom-[8%] text-right lg:right-[9%]',

  ];

  const focusLayer = (i: number | null) => {

    slabRefs.current.forEach((s, j) => {

      if (!s) return;

      gsap.to(s, {

        filter:

          i === null

            ? 'saturate(1) brightness(1)'

            : j === i

              ? 'saturate(1.08) brightness(1.15)'

              : 'saturate(0.4) brightness(0.32)',

        duration: 0.45,

        ease: 'power2.out',

        overwrite: 'auto',

      });

    });

    leaderRefs.current.forEach((l, j) => {

      if (!l) return;

      gsap.to(l, { opacity: i === null || j === i ? 1 : 0.25, duration: 0.3 });

    });

  };

  return (

    <section ref={wrapRef} className="relative overflow-hidden bg-obsidian">

      <div className="flex h-screen flex-col justify-between px-6 py-24 lg:px-12">

        <div className="mx-auto w-full max-w-[1400px]">

          <Eyebrow className="text-sage-light">{t.science.eyebrow}</Eyebrow>

          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-[1.02] text-ivory sm:text-5xl lg:text-6xl">

            {t.science.title1}{' '}

            <span className="italic text-sage-light">{t.science.title2}</span>

          </h2>

        </div>

        {}

        <div ref={stageRef} className="derma-stage relative mx-auto w-full max-w-[1200px] flex-1">

          {LAYERS.map((layer, i) => (

            <div

              key={i}

              ref={(el) => {

                slabRefs.current[i] = el;

              }}

              className="derma-slab overflow-hidden"

              style={{ ...SLAB_STYLE, zIndex: 10 - i }}

            >

              {layer.svg}

            </div>

          ))}

          {}

          {LAYERS.map((layer, i) => (

            <div

              key={`c${i}`}

              ref={(el) => {

                calloutRefs.current[i] = el;

              }}

              className={`derma-callout cursor-default ${calloutPos[i]}`}

              onMouseEnter={() => focusLayer(i)}

              onMouseLeave={() => focusLayer(null)}

            >

              <span

                ref={(el) => {

                  leaderRefs.current[i] = el;

                }}

                className={`leader ${i === 1 ? 'ml-auto w-24' : 'w-28'}`}

                style={{ transformOrigin: i === 1 ? 'right' : 'left' }}

              >

                <b className={i === 1 ? 'ml-auto' : 'mr-auto'} />

              </span>

              <span className="block text-ivory" style={{ fontWeight: 500 }}>

                {t.science.layers[i].name.toUpperCase()}

              </span>

              <span

                className="mt-1 block text-ivory/55"

                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 13 }}

              >

                {t.science.layers[i].note}

              </span>

              <span className="mt-1 block text-[9px] tracking-[0.2em] text-sage-light" style={{ fontVariantNumeric: 'tabular-nums' }}>

                {layer.metric}

              </span>

            </div>

          ))}

        </div>

        {}

        <div className="mx-auto flex w-full max-w-[1400px] items-end justify-between gap-8">

          <p className="hidden max-w-md text-sm leading-relaxed text-ivory/55 lg:block">

            {t.science.copy}

          </p>

          <div className="flex w-full max-w-xs flex-col gap-2">

            <div className="flex justify-between text-[9px] font-medium uppercase tracking-[0.22em] text-ivory/40" style={{ fontVariantNumeric: 'tabular-nums' }}>

              <span>{LAYERS[0].code}</span>

              <span>{LAYERS[2].code}</span>

            </div>

            <div className="h-px w-full bg-ivory/15">

              <div ref={progRef} className="h-px origin-left scale-x-0 bg-ivory/60" />

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}
