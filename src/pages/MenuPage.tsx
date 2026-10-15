import { useEffect, useRef, useState } from 'react';

import { ArrowRight } from 'lucide-react';

import gsap from 'gsap';

import { products, categories } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import { useBooking } from '@/components/booking/useBooking';

import PageHeader from '@/components/PageHeader';

import Reveal from '@/components/Reveal';

import TreatmentRows from '@/components/TreatmentRows';

export default function MenuPage() {

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const { t } = useLanguage();

  const { openBooking } = useBooking();

  const barRef = useRef<HTMLDivElement>(null);

  const indRef = useRef<HTMLSpanElement>(null);

  const btnRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const filtered =

    activeCategory === 'all'

      ? products

      : products.filter((p) => p.category === activeCategory);

  useEffect(() => {

    const ind = indRef.current;

    const btn = btnRefs.current.get(activeCategory);

    if (!ind || !btn) return;

    const move = () => {

      gsap.to(ind, {

        x: btn.offsetLeft,

        width: btn.offsetWidth,

        duration: 0.45,

        ease: 'power3.out',

      });

    };

    move();

    window.addEventListener('resize', move);

    return () => window.removeEventListener('resize', move);

  }, [activeCategory]);

  return (

    <>

      <PageHeader

        eyebrow={t.menu.eyebrow}

        title={t.menu.title}

        subtitle={t.menu.subtitle}

        crumb={t.menu.crumb}

      />

      <section className="bg-obsidian pb-24 lg:pb-32">

        {}

        <div className="sticky top-16 z-30 border-b border-ivory/[0.1] bg-obsidian/92 backdrop-blur-md">

          <div

            ref={barRef}

            className="relative mx-auto flex max-w-[1400px] items-baseline gap-7 overflow-x-auto px-6 pt-5 scrollbar-none lg:gap-10 lg:px-12"

          >

            {['all', ...categories].map((cat) => {

              const active = cat === activeCategory;

              const label = cat === 'all' ? 'Tümü' : (t.menu.categories[cat] ?? cat);

              return (

                <button

                  key={cat}

                  ref={(el) => {

                    if (el) btnRefs.current.set(cat, el);

                  }}

                  onClick={() => setActiveCategory(cat)}

                  aria-pressed={active}

                  className={`shrink-0 pb-4 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 lg:text-[15px] ${

                    active ? 'text-ivory' : 'text-ivory/35 hover:text-ivory/75'

                  }`}

                >

                  {label}

                </button>

              );

            })}

            <span

              ref={indRef}

              className="absolute bottom-0 left-0 h-[2px] w-0 bg-ivory"

              aria-hidden="true"

            />

          </div>

        </div>

        <div className="mx-auto max-w-[1400px] px-6 pt-12 lg:px-12 lg:pt-16">

          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/40">

            {filtered.length} {t.menu.crumb.toLowerCase()} —{' '}

            {activeCategory === 'all' ? 'Tümü' : (t.menu.categories[activeCategory] ?? activeCategory)}

          </p>

          <div key={activeCategory}>

            <TreatmentRows items={filtered} />

          </div>

          {}

          <div className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-ivory/10 pt-10 lg:flex-row lg:items-end">

            <p className="max-w-xl text-sm leading-relaxed text-ivory/50">

              {t.menu.note}

            </p>

            <Reveal>

              <button

                onClick={openBooking}

                className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ivory"

              >

                <span className="border-b border-ivory/30 pb-1">{t.menu.cta}</span>

                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

              </button>

            </Reveal>

          </div>

        </div>

      </section>

    </>

  );

}
