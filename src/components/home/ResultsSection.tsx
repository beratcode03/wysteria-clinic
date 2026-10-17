import { useRef, useState } from 'react';

import { MoveHorizontal } from 'lucide-react';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

type CaseItem = { img: string; before: string; after: string };

const CASES: CaseItem[] = [

  { img: '/assets/site/img-04.jpg', before: 'saturate(0.45) brightness(0.72) contrast(0.92) sepia(0.12)', after: 'saturate(1.12) contrast(1.06) brightness(1.02)' },

  { img: '/assets/site/img-30.jpg', before: 'saturate(0.45) brightness(0.72) contrast(0.92) sepia(0.12)', after: 'saturate(1.12) contrast(1.06) brightness(1.02)' },

  { img: '/assets/site/img-09.jpg', before: 'saturate(0.45) brightness(0.72) contrast(0.92) sepia(0.12)', after: 'saturate(1.12) contrast(1.06) brightness(1.02)' },

];

export default function ResultsSection() {

  const { t } = useLanguage();

  const [caseIdx, setCaseIdx] = useState(0);

  const [pct, setPct] = useState(52);

  const frameRef = useRef<HTMLDivElement>(null);

  const dragging = useRef(false);

  const setFromClient = (clientX: number) => {

    const frame = frameRef.current;

    if (!frame) return;

    const r = frame.getBoundingClientRect();

    setPct(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)));

  };

  const onDown = (e: React.PointerEvent) => {

    dragging.current = true;

    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);

    setFromClient(e.clientX);

  };

  const onMove = (e: React.PointerEvent) => {

    if (dragging.current) setFromClient(e.clientX);

  };

  const onUp = () => {

    dragging.current = false;

  };

  const c = CASES[caseIdx];

  return (

    <section className="bg-obsidian px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-6">

          <div>

            <Eyebrow className="text-sage-light">{t.results.eyebrow}</Eyebrow>

            <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">

              <span className="mask-line"><span className="mask-line-inner">{t.results.title1}</span></span>

              <span className="mask-line"><span className="mask-line-inner italic text-sage-light">{t.results.title2}</span></span>

            </h2>

          </div>

          <p className="max-w-sm pb-2 text-sm leading-relaxed text-ivory/55">{t.results.copy}</p>

        </Reveal>

        {}

        <Reveal className="mb-8 flex flex-wrap gap-2">

          {t.results.cases.map((label, i) => (

            <button

              key={label}

              onClick={() => { setCaseIdx(i); setPct(52); }}

              className={`rounded-full border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${

                i === caseIdx

                  ? 'border-ivory bg-ivory text-obsidian'

                  : 'border-ivory/20 text-ivory/55 hover:border-ivory/50 hover:text-ivory'

              }`}

            >

              {label}

            </button>

          ))}

        </Reveal>

        {}

        <Reveal>

          <div

            ref={frameRef}            onPointerDown={onDown}

            onPointerMove={onMove}

            onPointerUp={onUp}

            onPointerCancel={onUp}

            className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-2xl border border-ivory/10 sm:aspect-[21/10]"

          >

            {}

            <img

              key={`after-${caseIdx}`}

              src={c.img}

              alt={t.results.afterAlt}

              draggable={false}

              className="absolute inset-0 h-full w-full object-cover"

              style={{ filter: c.after }}

            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent" />

            {}

            <img

              key={`before-${caseIdx}`}

              src={c.img}

              alt={t.results.beforeAlt}

              draggable={false}

              className="absolute inset-0 h-full w-full object-cover"

              style={{ filter: c.before, clipPath: `inset(0 ${100 - pct}% 0 0)` }}

            />

            {}

            <span className="pointer-events-none absolute left-5 top-5 rounded-full bg-obsidian/70 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/80 backdrop-blur-sm">

              {t.results.before}

            </span>

            <span className="pointer-events-none absolute right-5 top-5 rounded-full bg-sage/80 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-obsidian backdrop-blur-sm">

              {t.results.after}

            </span>

            {}

            <div

              className="pointer-events-none absolute inset-y-0"

              style={{ left: `${pct}%` }}

              aria-hidden="true"

            >

              <div className="absolute inset-y-0 w-px -translate-x-1/2 bg-ivory/80 shadow-[0_0_16px_rgba(236,232,225,0.4)]" />

              <div className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/40 bg-obsidian/60 backdrop-blur-md">

                <MoveHorizontal size={18} className="text-ivory" />

              </div>

            </div>

          </div>

        </Reveal>

        {}

        <Reveal delay={1} className="mt-10 grid gap-8 border-t border-ivory/10 pt-8 sm:grid-cols-4">

          <p className="text-sm leading-relaxed text-ivory/50 sm:col-span-1">

            {t.results.note}

          </p>

          {t.results.stats.map((s) => (

            <div key={s.label}>

              <p className="font-serif text-4xl font-light text-ivory lg:text-5xl">{s.value}</p>

              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-sage-light/70">

                {s.label}

              </p>

            </div>

          ))}

        </Reveal>

      </div>

    </section>

  );

}
