import { useEffect, useRef } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const STATS = [

  { target: 2023, suffix: '', key: 'stat1' as const },

  { target: 60, suffix: '', key: 'stat2' as const },

  { target: 6, suffix: '', key: 'stat3' as const },

];

export default function Manifesto() {

  const { t } = useLanguage();

  const statWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const wrap = statWrapRef.current;

    if (reduced || !wrap) return;

    const nums = wrap.querySelectorAll<HTMLElement>('[data-count]');

    const ctx = gsap.context(() => {

      nums.forEach((el) => {

        const target = Number(el.dataset.count ?? 0);

        const obj = { v: 0 };

        el.textContent = '0';

        gsap.to(obj, {

          v: target,

          duration: 1.6,

          ease: 'power3.out',

          scrollTrigger: { trigger: el, start: 'top 88%', once: true },

          onUpdate: () => {

            el.textContent = String(Math.round(obj.v));

          },

        });

      });

    }, wrap);

    return () => ctx.revert();

  }, []);

  return (

    <section className="bg-obsidian px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          <div className="lg:col-span-4">

            <Reveal>

              <Eyebrow className="text-sage-light">{t.manifesto.eyebrow}</Eyebrow>

            </Reveal>

            <Reveal delay={1}>

              <div ref={statWrapRef} className="sticky top-32 mt-8 hidden space-y-7 lg:block">

                {STATS.map((s) => (

                  <div key={s.key} className="flex items-baseline gap-4">

                    <span

                      data-count={s.target}

                      className="font-mono text-4xl font-light tabular-nums text-ivory lg:text-5xl"

                    >

                      {s.target}

                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/45">

                      {t.manifesto[s.key]}

                    </span>

                  </div>

                ))}

                <div className="pt-2">

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/30">

                    {t.manifesto.statNote}

                  </span>

                </div>

              </div>

            </Reveal>

          </div>

          <div className="lg:col-span-8">

            <Reveal>

              <p className="font-serif text-3xl font-light leading-snug text-ivory sm:text-4xl lg:text-[3.2rem] lg:leading-[1.15]">

                {t.manifesto.line1}

              </p>

            </Reveal>

            <Reveal delay={1}>

              <p className="mt-10 max-w-2xl text-base leading-relaxed text-ivory/60 lg:ml-auto">

                {t.manifesto.copy}

              </p>

            </Reveal>

          </div>

        </div>

      </div>

    </section>

  );

}
