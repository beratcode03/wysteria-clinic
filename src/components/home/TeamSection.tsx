import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

export default function TeamSection() {

  const { t } = useLanguage();

  return (

    <section className="border-t border-ivory/10 bg-obsidian px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-x-10 gap-y-6">

          <div>

            <Eyebrow className="text-sage-light">{t.team.eyebrow}</Eyebrow>

            <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">

              <span className="mask-line"><span className="mask-line-inner">{t.team.title1}</span></span>

              <span className="mask-line"><span className="mask-line-inner italic text-sage-light">{t.team.title2}</span></span>

            </h2>

          </div>

          <p className="max-w-sm pb-2 text-sm leading-relaxed text-ivory/55">{t.team.copy}</p>

        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">

          {t.team.members.map((m, i) => (

            <Reveal key={m.name} delay={(i % 3) as 0 | 1 | 2} className="h-full">

              <article className="group flex h-full flex-col bg-obsidian-50 p-8 transition-colors duration-500 hover:bg-obsidian-300 lg:p-10">

                {}

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-ivory/15 font-serif text-2xl font-light italic text-sage-light transition-all duration-500 group-hover:border-sage/40 group-hover:bg-sage/10">

                  {m.initials}

                </div>

                <h3 className="font-serif text-2xl font-light text-ivory">{m.name}</h3>

                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-sage-light/80">

                  {m.role}

                </p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-ivory/50">{m.bio}</p>

                <p className="mt-6 border-t border-ivory/10 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ivory/35 transition-colors duration-500 group-hover:text-ivory/55">

                  {m.focus}

                </p>

              </article>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}
