import { useLanguage } from '@/i18n/useLanguage';

export default function Marquee() {

  const { t } = useLanguage();

  const items = [...t.marquee.items, ...t.marquee.items];

  return (

    <div className="overflow-hidden border-y border-ivory/10 bg-obsidian py-7" aria-hidden="true">

      <div className="marquee-track flex w-max items-baseline gap-10 whitespace-nowrap">

        {items.map((item, i) => (

          <span key={i} className="flex items-baseline gap-10">

            <span className={`font-serif text-4xl font-light sm:text-5xl ${i % 2 === 0 ? 'text-ivory/85' : 'marquee-outline italic'}`}>

              {item}

            </span>

            <span className="h-2 w-2 rotate-45 border border-champagne-light/60" />

          </span>

        ))}

      </div>

    </div>

  );

}
