import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { products } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

import TreatmentRows from '@/components/TreatmentRows';

const signatureIds = ['t01', 't10', 't06', 't18', 't02'];

export default function SignatureCuts() {

  const { t } = useLanguage();

  const items = signatureIds

    .map((id) => products.find((p) => p.id === id))

    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (

    <section className="bg-obsidian px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-x-10 gap-y-6">

          <div>

            <Eyebrow className="text-sage-light">{t.signature.eyebrow}</Eyebrow>

            <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">

              <span className="mask-line"><span className="mask-line-inner">{t.signature.title1}</span></span>

              <span className="mask-line"><span className="mask-line-inner italic text-sage-light">{t.signature.title2}</span></span>

            </h2>

          </div>

          <p className="max-w-sm pb-2 text-sm leading-relaxed text-ivory/55">

            {t.signature.copy}

          </p>

        </Reveal>

        <Reveal>

          <TreatmentRows items={items} />

        </Reveal>

        <Reveal delay={1}>

          <Link

            to="/treatments"

            className="group mt-12 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ivory"

          >

            <span className="border-b border-ivory/30 pb-1">{t.signature.ctaAll}</span>

            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

          </Link>

        </Reveal>

      </div>

    </section>

  );

}
