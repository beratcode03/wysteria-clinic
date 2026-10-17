import { Plus } from 'lucide-react';

import { siteConfig, siteImages } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import { useBooking } from '@/components/booking/useBooking';

import Reveal from '@/components/Reveal';

import Magnetic from '@/components/Magnetic';

export default function CtaBand() {

  const { t } = useLanguage();

  const { openBooking } = useBooking();

  return (

    <section className="relative overflow-hidden bg-espresso-400 px-6 py-28 text-ivory lg:px-12 lg:py-40">

      {}

      <video

        className="absolute inset-0 h-full w-full object-cover opacity-40"

        src={siteImages.detailVideo}

        autoPlay

        muted

        loop

        playsInline

        preload="none"

      />

      <div className="absolute inset-0 bg-espresso-400/65" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] text-center">

        <Reveal>

          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-sage-light">

            {t.booking.eyebrow}

          </span>

        </Reveal>

        <Reveal delay={1}>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance font-serif font-light leading-[1.02] text-[clamp(42px,7vw,68px)]">

            <span className="mask-line"><span className="mask-line-inner">{t.booking.title1}</span></span>

            <span className="mask-line"><span className="mask-line-inner italic text-champagne-light">{t.booking.title2}</span></span>

          </h2>

        </Reveal>

        <Reveal delay={2}>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-ivory/55 sm:text-base">

            {t.booking.copy}

          </p>

        </Reveal>

        <Reveal delay={3}>

          <div className="mt-12 flex items-center justify-center">

            <Magnetic strength={0.3}>

              <button

                onClick={openBooking}

                className="sheen group inline-flex items-center gap-4 rounded-full bg-ivory px-10 py-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-obsidian transition-colors hover:bg-champagne-light"

              >

                {t.booking.trigger}

                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-obsidian/25 transition-transform duration-500 group-hover:rotate-90">

                  <Plus size={13} />

                </span>

              </button>

            </Magnetic>

          </div>

        </Reveal>

        <Reveal delay={4}>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[9px] font-medium uppercase tracking-[0.26em] text-ivory/35">

            <a href={`mailto:${siteConfig.email}`} className="hover:text-ivory/70">{siteConfig.email}</a>

          </div>

        </Reveal>

      </div>

    </section>

  );

}
