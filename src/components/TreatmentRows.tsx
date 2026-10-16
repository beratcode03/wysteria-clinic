import { useEffect, useRef } from 'react';

import { createPortal } from 'react-dom';

import { Link } from 'react-router-dom';

import type { Product } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

export default function TreatmentRows({ items, padIndex = true }: { items: Product[]; padIndex?: boolean }) {

  const { t } = useLanguage();

  const listRef = useRef<HTMLOListElement>(null);

  const peekRef = useRef<HTMLDivElement>(null);

  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {

    const peek = peekRef.current;

    const list = listRef.current;

    if (!peek || !list) return;

    let raf = 0;

    let visible = false;

    const pos = { x: 0, y: 0 };

    const target = { x: 0, y: 0 };

    let vel = 0;

    const onMove = (e: MouseEvent) => {

      const w = peek.offsetWidth;

      const h = peek.offsetHeight;

      target.x = e.clientX + 36 + w > window.innerWidth - 16 ? e.clientX - 36 - w : e.clientX + 36;

      target.y = Math.min(Math.max(e.clientY - h / 2, 16), window.innerHeight - h - 16);

    };

    const tick = () => {

      const dx = target.x - pos.x;

      const dy = target.y - pos.y;

      pos.x += dx * 0.1;

      pos.y += dy * 0.1;

      vel += (dx * 0.1 - vel) * 0.12;

      const tilt = Math.max(-9, Math.min(9, vel * 0.05));

      peek.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${tilt}deg)`;

      const split = Math.max(-14, Math.min(14, vel * 0.08));

      const [r, g, b] = layerRefs.current;

      if (r) r.style.transform = `translate3d(${split}px, 0, 0) scale(1.06)`;

      if (g) g.style.transform = `translate3d(${-split * 0.5}px, ${split * 0.3}px, 0) scale(1.06)`;

      if (b) b.style.transform = `translate3d(${-split}px, 0, 0) scale(1.06)`;

      if (visible) raf = requestAnimationFrame(tick);

    };

    const show = (src: string, label: string) => {

      layerRefs.current.forEach((l) => {

        if (l) l.style.backgroundImage = `url(${src})`;

      });

      if (labelRef.current) labelRef.current.textContent = label;

      if (!visible) {

        pos.x = target.x;

        pos.y = target.y;

      }

      visible = true;

      peek.classList.add('is-on');

      raf = requestAnimationFrame(tick);

    };

    const hide = () => {

      visible = false;

      peek.classList.remove('is-on');

      cancelAnimationFrame(raf);

    };

    list.addEventListener('mousemove', onMove);

    list.addEventListener('mouseleave', hide);

    (list as unknown as { __peek: { show: typeof show; hide: typeof hide } }).__peek = { show, hide };

    return () => {

      cancelAnimationFrame(raf);

      list.removeEventListener('mousemove', onMove);

      list.removeEventListener('mouseleave', hide);

    };

  }, []);

  const rowEnter = (image: string, code: string) => {

    const list = listRef.current as unknown as { __peek?: { show: (s: string, l: string) => void } };

    list.__peek?.show(image, code);

  };

  return (

    <>

      <ol ref={listRef} className="relative">

        {items.map((item, i) => {

          const localized = t.products[item.id];

          return (

            <li

              key={item.id}

              className="k-row"              onMouseEnter={() => rowEnter(item.image, `SEANS ${item.duration} DK · ₺${item.price.toLocaleString('tr-TR')}`)}

            >

              <div className="k-fill" aria-hidden="true" />

              <Link to="/contact" className="k-row-inner relative z-10" aria-label={`${localized?.name ?? item.name} — randevu`}>

                <span className="k-idx">{padIndex ? String(i + 1).padStart(2, '0') : '—'}</span>

                <span className="k-name">{localized?.name ?? item.name}</span>

                <span className="hidden max-w-[220px] font-serif text-sm italic text-ivory/45 md:block">

                  {localized?.notes ?? ''}

                </span>

                <span className="k-meta">

                  {item.duration} DK

                  <br />

                  ₺{item.price.toLocaleString('tr-TR')}

                </span>

              </Link>

            </li>

          );

        })}

      </ol>

      {}

      {createPortal(

        <>

          <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">

        <defs>

          <filter id="peek-red"><feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" /></filter>

          <filter id="peek-green"><feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" /></filter>

          <filter id="peek-blue"><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" /></filter>

        </defs>

      </svg>

      {}

      <div ref={peekRef} className="peek hidden md:block" aria-hidden="true">

        <div ref={(el) => { layerRefs.current[2] = el; }} className="peek-layer peek-b" />

        <div ref={(el) => { layerRefs.current[1] = el; }} className="peek-layer peek-g" />

        <div ref={(el) => { layerRefs.current[0] = el; }} className="peek-layer peek-r" />

        <span ref={labelRef} className="peek-label" />

      </div>

        </>,

        document.body,

      )}

    </>

  );

}
