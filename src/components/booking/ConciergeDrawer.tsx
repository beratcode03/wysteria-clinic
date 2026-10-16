import { useEffect, useMemo, useRef, useState } from 'react';

import { ArrowLeft, ArrowRight, X } from 'lucide-react';

import gsap from 'gsap';

import { products } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import { useBooking } from '@/components/booking/useBooking';

import { getLenis } from '@/lib/smoothScroll';

const PROTOCOL_IDS = ['t01', 't02', 't06', 't10', 't16', 't18'];

const SLOTS = ['09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00'];

export default function ConciergeDrawer() {

  const { t } = useLanguage();

  const { open, closeBooking } = useBooking();

  const [render, setRender] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);

  const panelRef = useRef<HTMLDivElement>(null);

  const [demoFlash, setDemoFlash] = useState(false);

  const [protocol, setProtocol] = useState<string | null>(null);

  const [day, setDay] = useState<Date | null>(null);

  const [slot, setSlot] = useState<string | null>(null);

  const [name, setName] = useState('');

  const [phone, setPhone] = useState('');

  const [note, setNote] = useState('');

  const [monthOffset, setMonthOffset] = useState(0);

  const today = useMemo(() => {

    const d = new Date();

    d.setHours(0, 0, 0, 0);

    return d;

  }, []);

  const view = useMemo(() => {

    const first = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);

    const daysInMonth = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();

    const startGap = (first.getDay() + 6) % 7;

    const cells: (Date | null)[] = Array.from({ length: startGap }, () => null);

    for (let d = 1; d <= daysInMonth; d++) {

      cells.push(new Date(first.getFullYear(), first.getMonth(), d));

    }

    return { first, cells };

  }, [today, monthOffset]);

  const sameDay = (a: Date, b: Date) =>

    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const isClosed = (d: Date) => d.getDay() === 0 || d < today;

  const isTaken = (d: Date | null, s: string) => {

    if (!d) return false;

    return (d.getDate() * 31 + d.getMonth() * 17 + SLOTS.indexOf(s) * 13) % 4 === 0;

  };

  const ready = Boolean(protocol && day && slot && name.trim() && phone.length === 10);

  useEffect(() => {

    const lenis = getLenis();

    if (open) {

      lenis?.stop();

      document.body.style.overflow = 'hidden';

      setRender(true);

    } else {

      lenis?.start();

      document.body.style.overflow = '';

    }

  }, [open]);

  useEffect(() => {

    if (!render) return;

    const overlay = overlayRef.current;

    const panel = panelRef.current;

    if (!overlay || !panel) return;

    const tl = gsap.timeline({ onComplete: () => !open && setRender(false) });

    if (open) {

      tl.to(overlay, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' }, 0).fromTo(

        panel,

        { xPercent: 102, x: 0 },

        { xPercent: 0, x: 0, duration: 0.7, ease: 'expo.out' },

        0,

      );

    } else {

      tl.to(panel, { xPercent: 102, x: 0, duration: 0.55, ease: 'expo.in' }, 0).to(

        overlay,

        { autoAlpha: 0, duration: 0.35, ease: 'power2.in' },

        0.12,

      );

    }

    return () => {

      tl.kill();

    };

  }, [open, render]);

  useEffect(

    () => () => {

      getLenis()?.start();

      document.body.style.overflow = '';

    },

    [],

  );

  useEffect(() => {

    if (!open) return;

    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeBooking();

    window.addEventListener('keydown', onKey);

    return () => window.removeEventListener('keydown', onKey);

  }, [open, closeBooking]);

  if (!render) return null;

  const demoNotice = () => {

    setDemoFlash(true);

    window.setTimeout(() => setDemoFlash(false), 2200);

  };

  const stepLabel = 'text-[10px] font-medium uppercase tracking-[0.24em] text-ivory/40';

  const stepNum = 'font-serif text-lg italic text-champagne-light';

  return (

    <div className="fixed inset-0 z-[120]" role="dialog" aria-modal="true" aria-label={t.booking.drawerTitle}>

      {}

      <div

        ref={overlayRef}

        className="invisible absolute inset-0 bg-black/60 opacity-0 backdrop-blur-sm"

        onClick={closeBooking}

      />

      {}

      <div

        ref={panelRef}

        data-lenis-prevent

        className="absolute inset-y-0 right-0 w-full overflow-y-auto border-l border-ivory/10 bg-[#0F110F]/95 backdrop-blur-2xl sm:w-[min(640px,100vw)]"

        style={{ transform: 'translateX(102%)' }}

      >

        <div className="flex min-h-full flex-col px-7 py-8 sm:px-10 sm:py-10">

          {}

          <div className="flex items-start justify-between">

            <div>

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-sage-light">

                {t.booking.eyebrow}

              </span>

              <h2 className="mt-3 font-serif text-4xl font-light leading-[1.02] text-ivory">

                {t.booking.drawerTitle}

              </h2>

              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/50">{t.booking.drawerSub}</p>

            </div>

            <button

              onClick={closeBooking}

              aria-label={t.booking.close}

              className="flex h-11 w-11 shrink-0 items-center justify-center border border-ivory/15 text-ivory/60 transition-colors hover:border-ivory/40 hover:text-ivory"

            >

              <X size={17} />

            </button>

          </div>

          {}

          <div className="mt-10">

            <div className="flex items-baseline gap-4">

              <span className={stepNum}>01</span>

              <span className={stepLabel}>{t.booking.stepProtocol}</span>

            </div>

            <div className="mt-5 flex flex-wrap gap-2">

              {PROTOCOL_IDS.map((id) => {

                const p = products.find((x) => x.id === id)!;

                const active = protocol === id;

                return (

                  <button

                    key={id}

                    onClick={() => setProtocol(active ? null : id)}

                    aria-pressed={active}

                    className={`border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${

                      active

                        ? 'border-ivory bg-ivory text-obsidian'

                        : 'border-ivory/20 text-ivory/55 hover:border-ivory/50 hover:text-ivory'

                    }`}

                  >

                    {t.products[id]?.name ?? p.name}

                  </button>

                );

              })}

            </div>

          </div>

          {}

          <div className="mt-10 border-t border-ivory/10 pt-8">

            <div className="flex items-baseline justify-between">

              <div className="flex items-baseline gap-4">

                <span className={stepNum}>02</span>

                <span className={stepLabel}>{t.booking.stepDate}</span>

              </div>

              <div className="flex items-center gap-4">

                <span className="font-serif text-base font-light italic text-ivory/70">

                  {t.booking.months[view.first.getMonth()]} {view.first.getFullYear()}

                </span>

                <button

                  onClick={() => setMonthOffset((m) => Math.max(0, m - 1))}

                  disabled={monthOffset === 0}

                  aria-label={t.booking.prevMonth}

                  className="text-ivory/40 transition-colors hover:text-ivory disabled:opacity-20"

                >

                  <ArrowLeft size={15} />

                </button>

                <button

                  onClick={() => setMonthOffset((m) => Math.min(2, m + 1))}

                  disabled={monthOffset === 2}

                  aria-label={t.booking.nextMonth}

                  className="text-ivory/40 transition-colors hover:text-ivory disabled:opacity-20"

                >

                  <ArrowRight size={15} />

                </button>

              </div>

            </div>

            <div className="mt-5 grid grid-cols-7 gap-1 text-center">

              {t.booking.daysMin.map((d) => (

                <span key={d} className="pb-3 text-[9px] font-medium uppercase tracking-[0.2em] text-ivory/30">

                  {d}

                </span>

              ))}

              {view.cells.map((d, i) => {

                if (!d) return <span key={`e${i}`} />;

                const closed = isClosed(d);

                const selected = day ? sameDay(d, day) : false;

                return (

                  <button

                    key={d.toISOString()}

                    onClick={() => !closed && setDay(d)}

                    disabled={closed}

                    aria-pressed={selected}

                    aria-label={`${d.getDate()} ${t.booking.months[d.getMonth()]}${closed ? ` — ${t.booking.closed}` : ''}`}

                    className={`aspect-square text-[13px] transition-colors duration-200 ${

                      selected

                        ? 'bg-ivory text-obsidian'

                        : closed

                          ? 'cursor-default text-ivory/20'

                          : 'text-ivory/70 hover:bg-ivory/10'

                    }`}

                    style={{ fontVariantNumeric: 'tabular-nums' }}

                  >

                    {d.getDate()}

                  </button>

                );

              })}

            </div>

          </div>

          {}

          <div className="mt-10 border-t border-ivory/10 pt-8">

            <div className="flex items-baseline gap-4">

              <span className={stepNum}>03</span>

              <span className={stepLabel}>{t.booking.stepTime}</span>

            </div>

            <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-7">

              {SLOTS.map((s) => {

                const active = slot === s;

                const taken = isTaken(day, s);

                return (

                  <div key={s} className="group relative">

                    <button

                      onClick={() => !taken && setSlot(active ? null : s)}

                      disabled={taken}

                      aria-pressed={active}

                      className={`w-full border py-3 text-[12px] transition-colors duration-200 ${

                        active

                          ? 'border-ivory bg-ivory text-obsidian'

                          : taken

                            ? 'cursor-not-allowed border-ivory/10 text-ivory/20 line-through decoration-ivory/25'

                            : 'border-ivory/20 text-ivory/55 hover:border-ivory/50'

                      }`}

                      style={{ fontVariantNumeric: 'tabular-nums' }}

                    >

                      {s}

                    </button>

                    {taken && (

                      <span className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap border border-ivory/15 bg-obsidian-50 px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-ivory/70 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">

                        {t.booking.slotTaken}

                      </span>

                    )}

                  </div>

                );

              })}

            </div>

          </div>

          {}

          <div className="mt-10 border-t border-ivory/10 pt-8">

            <div className="flex items-baseline gap-4">

              <span className={stepNum}>04</span>

              <span className={stepLabel}>{t.booking.stepForm}</span>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">

              <input

                value={name}

                onChange={(e) => setName(e.target.value)}

                placeholder={t.booking.namePh}

                className="border-b border-ivory/25 bg-transparent pb-3 text-sm text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-ivory"

              />

              <div className="flex items-baseline gap-2 border-b border-ivory/25 transition-colors focus-within:border-ivory">

                <span

                  className="shrink-0 pb-3 text-sm text-ivory/50"

                  style={{ fontVariantNumeric: 'tabular-nums' }}

                >

                  +90

                </span>

                <input

                  value={phone}

                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}

                  placeholder={t.booking.phonePh}

                  inputMode="numeric"

                  autoComplete="tel-national"

                  maxLength={10}

                  className="w-full bg-transparent pb-3 text-sm text-ivory outline-none placeholder:text-ivory/30"

                />

              </div>

              <textarea

                value={note}

                onChange={(e) => setNote(e.target.value)}

                placeholder={t.booking.concernPh}

                rows={2}

                className="border-b border-ivory/25 bg-transparent pb-3 text-sm text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-ivory sm:col-span-2"

              />

            </div>

          </div>

          {}

          <div className="mt-10 pb-4">

            <div className="group relative">

              <button

                onClick={demoNotice}

                onMouseEnter={() => setDemoFlash(true)}

                onMouseLeave={() => setDemoFlash(false)}

                aria-disabled="true"

                className={`w-full border py-4 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 ${

                  ready

                    ? 'border-ivory bg-ivory text-obsidian'

                    : 'border-ivory/15 text-ivory/40'

                }`}

              >

                {demoFlash ? t.booking.demo : t.booking.submit}

              </button>

              {!ready && (

                <p className="mt-3 text-[10px] tracking-[0.06em] text-ivory/30">{t.booking.selectHint}</p>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}
