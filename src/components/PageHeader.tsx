import { Link } from 'react-router-dom';

import { useLanguage } from '@/i18n/useLanguage';

type Props = {

  title: string;

  subtitle?: string;

  eyebrow?: string;

  crumb?: string;

};

export default function PageHeader({ title, subtitle, eyebrow, crumb }: Props) {

  const { t } = useLanguage();

  return (

    <section className="paper-grid relative overflow-hidden bg-obsidian-200/70 px-6 pb-16 pt-32 lg:px-12 lg:pb-24 lg:pt-40">

      <div className="relative mx-auto max-w-[1400px]">

        {crumb && (

          <nav className="mb-7 flex animate-fade-up items-center gap-2.5 text-[11px] uppercase tracking-wide-3 text-ivory/45">

            <Link to="/" className="transition-colors hover:text-sage-light">

              {t.common.home}

            </Link>

            <span className="h-px w-5 bg-champagne-light/70" aria-hidden="true" />

            <span className="text-ivory/80">{crumb}</span>

          </nav>

        )}

        {eyebrow && (

          <span className="mb-5 inline-block animate-fade-up font-serif text-lg italic text-sage-light" style={{ animationDelay: '0.06s' }}>

            {eyebrow}

          </span>

        )}

        <h1 className="max-w-3xl animate-fade-up text-balance font-serif text-5xl font-light leading-[1.05] text-ivory sm:text-6xl lg:text-7xl" style={{ animationDelay: '0.12s' }}>

          {title}

        </h1>

        {subtitle && (

          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-ivory/60" style={{ animationDelay: '0.2s' }}>

            {subtitle}

          </p>

        )}

        <div className="mt-12 h-px w-full bg-ivory/10" aria-hidden="true" />

      </div>

    </section>

  );

}
