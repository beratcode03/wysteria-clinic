import { useState } from 'react';

import { galleryImages } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

import SmartImage from '@/components/SmartImage';

import Lightbox from '@/components/Lightbox';

export default function Gallery() {

  const { t } = useLanguage();

  const [open, setOpen] = useState<number | null>(null);

  return (

    <section className="bg-obsidian px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-ivory/12 pb-8">

          <div>

            <Eyebrow className="text-sage-light">{t.gallery.eyebrow}</Eyebrow>

            <h2 className="mt-5 font-serif text-4xl font-light text-ivory sm:text-5xl lg:text-6xl">

              {t.gallery.title}

            </h2>

          </div>

          <span className="pb-2 font-serif text-lg italic text-ivory/45">

            {String(galleryImages.length).padStart(2, '0')} — {t.gallery.count}

          </span>

        </Reveal>

        {}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">

          {galleryImages.map((img, i) => (

            <Reveal key={img.url} delay={((i % 3) + 1) as 1 | 2 | 3}>

              <button

                onClick={() => setOpen(i)}

                aria-label={t.gallery.viewAria}                className={`group relative block w-full overflow-hidden ${

                  i % 3 === 0 ? 'md:translate-y-12' : i % 3 === 2 ? 'md:translate-y-4' : ''

                }`}

              >

                <div className={`${i % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/5]'} w-full`}>

                  <SmartImage

                    src={img.url}

                    alt={img.alt}

                    aspect="h-full"

                    className="h-full brightness-[0.68] saturate-[0.7] transition-transform duration-700 group-hover:scale-105"

                  />

                </div>

                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-espresso/60 to-transparent p-4 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ivory">

                    {t.gallery.labels[i]}

                  </span>

                  <span className="font-serif text-sm italic text-ivory/70">

                    {String(i + 1).padStart(2, '0')}

                  </span>

                </span>

              </button>

            </Reveal>

          ))}

        </div>

      </div>

      <Lightbox

        images={galleryImages.map((g, i) => ({ ...g, label: t.gallery.labels[i] ?? g.label }))}

        index={open}

        onClose={() => setOpen(null)}

        onNav={setOpen}

      />

    </section>

  );

}
