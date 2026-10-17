import { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { siteImages } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import { Eyebrow } from '@/components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {

  const { t } = useLanguage();

  const wrapRef = useRef<HTMLElement>(null);

  const trackRef = useRef<HTMLDivElement>(null);

  const progRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) return;

    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {

        const track = trackRef.current;

        const wrap = wrapRef.current;

        if (!track || !wrap) return;

        const dist = () => track.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({

          defaults: { ease: 'none' },

          scrollTrigger: {

            trigger: wrap,

            start: 'top top',

            end: () => `+=${dist() * 1.1}`,

            scrub: 1,

            pin: true,

            anticipatePin: 1,

            invalidateOnRefresh: true,

          },

        });

        tl.to(track, { x: () => -dist() }, 0).to(progRef.current, { scaleX: 1 }, 0);

        track.querySelectorAll<HTMLElement>('[data-inner]').forEach((el) => {

          gsap.fromTo(

            el,

            { xPercent: -6 },

            {

              xPercent: 6,

              ease: 'none',

              scrollTrigger: {

                trigger: wrap,

                start: 'top top',

                end: () => `+=${dist() * 1.1}`,

                scrub: 1,

              },

            },

          );

        });

      });

    }, wrapRef);

    return () => ctx.revert();

  }, []);

  const imgClass =

    'h-[112%] w-[112%] max-w-none object-cover brightness-[0.62] saturate-[0.7] contrast-[1.05]';

  return (

    <section ref={wrapRef} className="relative overflow-hidden bg-obsidian">

      <div className="py-24 lg:h-screen lg:py-0">

        <div

          ref={trackRef}

          className="flex flex-col gap-20 px-6 will-change-transform md:flex-row md:items-center md:gap-0 md:px-0 lg:h-screen"

        >

          {}

          <div className="grid w-full shrink-0 grid-cols-1 items-center gap-10 md:w-screen md:grid-cols-12 md:gap-8 md:px-12">

            <div className="md:col-span-4">

              <Eyebrow className="text-sage-light">{t.story.eyebrow}</Eyebrow>

              <h2 className="mt-5 font-serif text-4xl font-light leading-[1.02] text-ivory sm:text-5xl lg:text-6xl">

                {t.story.title1}{' '}

                <span className="italic text-sage-light">{t.story.title2}</span>{' '}

                {t.story.title3}

              </h2>

              <p className="mt-8 max-w-sm text-sm leading-relaxed text-ivory/60">{t.story.p1}</p>

              <Link

                to="/treatments"

                className="group mt-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-ivory"

              >

                <span className="border-b border-ivory/30 pb-1">{t.story.link}</span>

                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

              </Link>

            </div>

            <div className="md:col-span-8">

              <div className="aspect-[16/10] w-full overflow-hidden">

                <img data-inner src={siteImages.story1} alt={t.story.eyebrow} className={imgClass} loading="lazy" />

              </div>

            </div>

          </div>

          {}

          <div className="grid w-full shrink-0 grid-cols-1 items-center gap-10 md:w-screen md:grid-cols-12 md:gap-8 md:px-12">

            <div className="order-2 md:order-1 md:col-span-5">

              <h3 className="font-serif text-3xl font-light leading-[1.05] text-ivory lg:text-5xl">

                {t.story.slide2Title}

              </h3>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/60">{t.story.slide2Copy}</p>

              <ul className="mt-10 space-y-0">

                {t.story.metrics.map((m, i) => (

                  <li

                    key={m}

                    className="flex items-baseline justify-between border-t border-ivory/15 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivory/70"

                  >

                    <span>{m}</span>

                    <span className="text-[10px] text-ivory/35" style={{ fontVariantNumeric: 'tabular-nums' }}>

                      M-{String(i + 1).padStart(2, '0')}

                    </span>

                  </li>

                ))}

                <li className="border-t border-ivory/15" aria-hidden="true" />

              </ul>

            </div>

            <div className="order-1 md:order-2 md:col-span-7">

              <div className="mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden md:ml-auto">

                <img data-inner src={siteImages.story2} alt="" className={imgClass} loading="lazy" />

              </div>

            </div>

          </div>

          {}

          <div className="grid w-full shrink-0 grid-cols-1 items-center gap-10 md:w-screen md:grid-cols-12 md:gap-8 md:px-12">

            <div className="md:col-span-8">

              <div className="aspect-[16/10] w-full overflow-hidden">

                <img data-inner src={siteImages.ritual3} alt={t.story.slide3Title} className={imgClass} loading="lazy" />

              </div>

            </div>

            <div className="md:col-span-4">

              <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-ivory/40" style={{ fontVariantNumeric: 'tabular-nums' }}>

                03 / {t.story.eyebrow}

              </span>

              <h3 className="mt-4 font-serif text-3xl font-light leading-[1.05] text-ivory lg:text-5xl">

                {t.story.slide3Title}

              </h3>

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">{t.story.slide3Copy}</p>

              <ul className="mt-8 space-y-3">

                {t.story.features.map((f) => (

                  <li key={f} className="flex items-baseline gap-3 text-sm text-ivory/75">

                    <span className="h-px w-6 bg-champagne-light" aria-hidden="true" />

                    {f}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

        {}

        <div className="mx-6 mt-16 lg:absolute lg:bottom-10 lg:left-12 lg:right-12 lg:mx-0 lg:mt-0">

          <div className="h-px w-full bg-ivory/12">

            <div ref={progRef} className="h-px origin-left scale-x-0 bg-ivory/60" />

          </div>

        </div>

      </div>

    </section>

  );

}
