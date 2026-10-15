import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

export default function NotFoundPage() {

  const { t } = useLanguage();

  return (

    <section className="paper-grid relative flex min-h-screen items-center justify-center overflow-hidden bg-obsidian px-6 py-32">

      <Reveal className="relative mx-auto max-w-xl text-center">

        <Eyebrow className="text-sage-light">{t.notFound.eyebrow}</Eyebrow>

        <h1 className="mt-5 font-serif text-5xl font-light leading-[1.06] text-ivory sm:text-6xl">

          <span className="mask-line"><span className="mask-line-inner">{t.notFound.title1}</span></span>

          <span className="mask-line"><span className="mask-line-inner italic text-sage-light">{t.notFound.title2}</span></span>

        </h1>

        <p className="mx-auto mt-6 max-w-md leading-relaxed text-ivory/60">{t.notFound.desc}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          <Link

            to="/"

            className="inline-flex items-center gap-2 border border-ivory bg-ivory px-7 py-3.5 text-[12px] font-semibold uppercase tracking-wide-3 text-obsidian transition-all duration-300 hover:bg-sage-light"

          >

            {t.notFound.home}

          </Link>

          <Link

            to="/treatments"

            className="inline-flex items-center gap-2 border border-ivory/25 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-wide-3 text-ivory transition-all duration-300 hover:border-ivory"

          >

            {t.notFound.menu}

            <ArrowRight size={15} />

          </Link>

        </div>

      </Reveal>

    </section>

  );

}
