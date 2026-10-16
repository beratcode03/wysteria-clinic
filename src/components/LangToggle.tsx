import { useLanguage } from '@/i18n/useLanguage';

import type { Lang } from '@/i18n/useLanguage';

const langs: Lang[] = ['tr', 'en'];

export default function LangToggle({ className = '' }: { className?: string }) {

  const { lang, setLang } = useLanguage();

  return (

    <div

      role="group"

      aria-label="Dil seçimi / Language"

      className={`inline-flex items-center rounded-full border border-ivory/15 bg-obsidian-100/60 p-0.5 ${className}`}

    >

      {langs.map((l) => (

        <button

          key={l}

          onClick={() => setLang(l)}

          aria-pressed={lang === l}

          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition-all duration-300 ${

            lang === l ? 'bg-plum text-ivory shadow-sm' : 'text-ivory/50 hover:text-ivory'

          }`}

        >

          {l}

        </button>

      ))}

    </div>

  );

}
