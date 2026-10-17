import { useEffect, useRef } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useLanguage } from '@/i18n/useLanguage';

import { Eyebrow } from '@/components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const PANEL_IMGS = [

  { src: '/assets/site/img-liquid-poster.jpg', cap: 'SPEKTRUM' },

  { src: '/assets/site/img-26.jpg', cap: 'DOZAJ' },

  { src: '/assets/site/img-marble-poster.jpg', cap: 'HÜCRESEL' },

];

export default function CraftSection() {

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

        if (!track) return;

        const dist = () => track.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({

          defaults: { ease: 'none' },

          scrollTrigger: {

            trigger: wrapRef.current,

            start: 'top top',

            end: () => `+=${dist() * 1.15}`,

            scrub: 1,

            pin: true,

            anticipatePin: 1,

            invalidateOnRefresh: true,

          },

        });

        tl.to(track, { x: () => -dist() }, 0).to(progRef.current, { scaleX: 1 }, 0);

        track.querySelectorAll('[data-inner]').forEach((el) => {

          gsap.fromTo(

            el,

            { xPercent: -7 },

            {

              xPercent: 7,

              ease: 'none',

              scrollTrigger: {

                trigger: wrapRef.current,

                start: 'top top',

                end: () => `+=${dist() * 1.15}`,

                scrub: 1,

              },

            },

          );

        });

      });

    }, wrapRef);

    return () => ctx.revert();

  }, []);

  return (

    <section ref={wrapRef} className="relative overflow-hidden bg-plum-500 text-ivory">

      <div className="flex min-h-screen flex-col justify-center py-20 lg:h-screen lg:py-0">

        {}

        <div className="mb-12 px-6 lg:mb-0 lg:absolute lg:left-12 lg:top-20 lg:z-10 lg:px-0">

          <Eyebrow className="text-sage-light">{t.craft.eyebrow}</Eyebrow>

          <h2 className="mt-4 font-serif text-4xl font-light leading-[1.02] sm:text-5xl">

            {t.craft.title1}{' '}

            <span className="italic text-sage-light">{t.craft.title2}</span>

          </h2>

        </div>

        {}

        <div

          ref={trackRef}

          className="flex flex-col gap-16 px-6 will-change-transform md:flex-row md:items-center md:gap-[8vw] md:pl-[12vw] lg:pt-24"

        >

          {t.craft.steps.map((step, i) => (

            <article

              key={step.n}

              className="relative flex w-full shrink-0 flex-col gap-6 md:w-[62vw] md:flex-row md:items-center md:gap-12 lg:w-[56vw]"

            >

              {}

              <span

                className="pointer-events-none absolute -top-14 left-0 select-none font-serif text-[26vw] font-light leading-none text-ivory/[0.05] md:-top-10 md:text-[11rem] lg:text-[13rem]"

                aria-hidden="true"

              >

                {step.n}

              </span>

              <div className="relative order-2 w-full overflow-hidden md:order-1 md:w-[46%]">

                <div className="aspect-[4/3] w-full overflow-hidden">

                  <img

                    data-inner

                    src={PANEL_IMGS[i].src}

                    alt={step.title}

                    className="h-[114%] w-[114%] max-w-none object-cover"

                    loading="lazy"

                  />

                </div>

                <span className="mt-3 block text-[9px] font-medium uppercase tracking-[0.24em] text-ivory/35" style={{ fontVariantNumeric: 'tabular-nums' }}>

                  {PANEL_IMGS[i].cap}

                </span>

              </div>

              <div className="relative order-1 md:order-2 md:w-[54%]">

                <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-sage-light" style={{ fontVariantNumeric: 'tabular-nums' }}>

                  {step.n} / {step.meta}

                </span>

                <h3 className="mt-4 font-serif text-4xl font-light leading-[1.04] lg:text-5xl">

                  {step.title}

                </h3>

                <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/60">

                  {step.copy}

                </p>

              </div>

            </article>

          ))}

        </div>

        {}

        <div className="mt-14 px-6 lg:absolute lg:bottom-14 lg:left-12 lg:right-12 lg:mt-0 lg:px-0">

          <div className="h-px w-full bg-ivory/12">

            <div ref={progRef} className="h-px origin-left scale-x-0 bg-sage-light" />

          </div>

        </div>

      </div>

    </section>

  );

}
