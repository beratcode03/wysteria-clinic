import { Navigation, ExternalLink } from 'lucide-react';

import { siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

export default function MapFallback() {

  const { t } = useLanguage();

  return (

    <div className="relative h-full min-h-[420px] w-full overflow-hidden bg-obsidian-200">

      <iframe

        title={siteConfig.address}

        src={siteConfig.mapEmbedUrl}

        loading="lazy"

        referrerPolicy="no-referrer-when-downgrade"

        allowFullScreen

        className="absolute inset-0 h-full w-full border-0"

        style={{

          filter: 'invert(0.9) hue-rotate(190deg) saturate(0.28) brightness(0.86) contrast(1.06) sepia(0.10)',

        }}

      />

      {}

      <div

        className="pointer-events-none absolute inset-0"

        style={{

          background:

            'radial-gradient(ellipse 95% 90% at 50% 45%, transparent 55%, rgba(13,14,13,0.55) 100%)',

        }}

        aria-hidden="true"

      />

      {}

      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 bg-gradient-to-t from-obsidian-400/95 via-obsidian-400/60 to-transparent p-5 pt-14">

        <p className="max-w-[220px] text-[11px] leading-relaxed tracking-wide text-ivory/70">

          {siteConfig.address}

        </p>

        <div className="flex gap-2">

          <a

            href={siteConfig.directionsUrl}

            target="_blank"

            rel="noopener noreferrer"

            className="sheen inline-flex items-center gap-2 bg-ivory px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-obsidian transition-colors hover:bg-sage-light"

          >

            <Navigation size={12} />

            {t.common.directions}

          </a>

          <a

            href={siteConfig.mapsUrl}

            target="_blank"

            rel="noopener noreferrer"

            className="inline-flex items-center gap-2 border border-ivory/25 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/75 transition-colors hover:border-ivory hover:text-ivory"

          >

            <ExternalLink size={12} />

            {t.common.openMap}

          </a>

        </div>

      </div>

    </div>

  );

}
