import { Star } from 'lucide-react';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

export default function VoicesSection() {

  const { t } = useLanguage();

  return (

    <section className="border-t border-ivory/10 bg-obsidian px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <Reveal className="mb-14 text-center">

          <Eyebrow className="text-sage-light">{t.voices.eyebrow}</Eyebrow>

          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-serif text-4xl font-light leading-[1.08] text-ivory sm:text-5xl">

            <span className="mask-line"><span className="mask-line-inner">{t.voices.title1}</span></span>

            <span className="mask-line"><span className="mask-line-inner italic text-sage-light">{t.voices.title2}</span></span>

          </h2>

        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/10 lg:grid-cols-3">

          {t.voices.items.map((v, i) => (

            <Reveal key={v.name} delay={(i % 3) as 0 | 1 | 2} className="h-full">

              <figure className="flex h-full flex-col bg-obsidian-50 p-8 transition-colors duration-500 hover:bg-obsidian-300 lg:p-10">

                <span className="font-serif text-6xl leading-none text-sage/50" aria-hidden="true">

                  &ldquo;

                </span>

                <div className="mt-4 flex gap-1 text-sage-light" aria-label={t.voices.starsAria}>

                  {Array.from({ length: 5 }).map((_, s) => (

                    <Star key={s} size={13} fill="currentColor" strokeWidth={0} />

                  ))}

                </div>

                <blockquote className="mt-5 flex-1 font-serif text-lg font-light italic leading-relaxed text-ivory/80">

                  {v.quote}

                </blockquote>

                <figcaption className="mt-8 border-t border-ivory/10 pt-5">

                  <p className="text-sm font-medium text-ivory">{v.name}</p>

                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/40">

                    {v.treatment}

                  </p>

                </figcaption>

              </figure>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}
