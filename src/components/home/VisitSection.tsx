import { siteConfig, getOpenStatus } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

import MapFallback from '@/components/MapFallback';

export default function VisitSection() {

  const { t } = useLanguage();

  const status = getOpenStatus();

  return (

    <section className="bg-obsidian-200/60 px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          <div className="lg:col-span-5">

            <Reveal>

              <Eyebrow className="text-sage-light">{t.visit.eyebrow}</Eyebrow>

              <h2 className="mt-5 font-serif text-4xl font-light text-ivory sm:text-5xl">

                {t.visit.title}

              </h2>

            </Reveal>

            <Reveal delay={1}>

              <div className="mt-10 space-y-8">

                <div>

                  <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide-3 text-ivory/45">

                    {t.visit.address}

                  </h3>

                  <p className="font-serif text-xl font-light text-ivory">{siteConfig.address}</p>

                </div>

                <div>

                  <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wide-3 text-ivory/45">

                    {t.visit.hours}

                  </h3>

                  <div className="space-y-2">

                    {siteConfig.hoursRows.map((row, i) => (

                      <div key={row.key} className="flex items-baseline gap-4 text-sm">

                        <span className="w-36 text-ivory/55">{t.visit.days[i]}</span>

                        <span className="flex-1 border-b border-dotted border-ivory/20" aria-hidden="true" />

                        <span className={row.time === 'Kapalı' ? 'text-ivory/40' : 'text-ivory/85'}>

                          {row.time}

                        </span>

                      </div>

                    ))}

                  </div>

                  <p className="mt-4 inline-flex items-center gap-2 text-xs">

                    <span className={`h-1.5 w-1.5 rounded-full ${status.open ? 'bg-sage' : 'bg-champagne'}`} />

                    <span className={status.open ? 'text-sage-light' : 'text-ivory/50'}>

                      {status.open ? t.visit.open : t.visit.closed}

                    </span>

                  </p>

                </div>

                <a

                  href={siteConfig.directionsUrl}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="sheen inline-flex items-center gap-2.5 bg-ivory px-7 py-3.5 text-[12px] font-semibold uppercase tracking-wide-3 text-obsidian transition-colors hover:bg-sage-light"

                >

                  {t.visit.cta}

                </a>

              </div>

            </Reveal>

          </div>

          <Reveal delay={1} className="lg:col-span-7">

            <div className="h-full min-h-[420px] overflow-hidden rounded-lg border border-ivory/10">

              <MapFallback />

            </div>

          </Reveal>

        </div>

      </div>

    </section>

  );

}
