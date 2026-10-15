import { useState, FormEvent } from 'react';

import { Mail, Phone, Clock, MapPin, Instagram, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

import { siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import PageHeader from '@/components/PageHeader';

import MapFallback from '@/components/MapFallback';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

type FormData = {

  name: string;

  email: string;

  subject: string;

  message: string;

};

type Errors = Partial<Record<keyof FormData, string>>;

export default function ContactPage() {

  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });

  const [errors, setErrors] = useState<Errors>({});

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const { t } = useLanguage();

  const validate = (): boolean => {

    const e: Errors = {};

    if (!form.name.trim()) e.name = t.contact.errName;

    if (!form.email.trim()) e.email = t.contact.errEmail;

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.contact.errEmailValid;

    if (!form.subject.trim()) e.subject = t.contact.errSubject;

    if (!form.message.trim()) e.message = t.contact.errMessage;

    else if (form.message.trim().length < 10) e.message = t.contact.errMessageMin;

    setErrors(e);

    return Object.keys(e).length === 0;

  };

  const handleSubmit = (ev: FormEvent) => {

    ev.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      setSubmitted(true);

    }, 1200);

  };

  const handleChange = (field: keyof FormData, value: string) => {

    setForm((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));

  };

  const inputClass = (hasError?: string) =>

    `w-full border bg-obsidian px-4 py-3.5 text-ivory placeholder:text-mauve/60 focus:outline-none focus:ring-2 focus:ring-brass/40 transition-all ${

      hasError ? 'border-red-500' : 'border-ivory/15'

    }`;

  return (

    <>

      <PageHeader

        eyebrow={t.contact.headerEyebrow}

        title={t.contact.headerTitle}

        subtitle={t.contact.headerSubtitle}

        crumb={t.contact.crumb}

      />

      <section className="bg-obsidian px-6 py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

            {}

            <Reveal className="lg:col-span-5">

              <Eyebrow className="text-sage-light">{t.contact.infoEyebrow}</Eyebrow>

              <h2 className="mt-5 font-serif text-3xl font-light leading-tight text-ivory sm:text-4xl lg:text-5xl">

                {t.contact.infoTitle}

              </h2>

              <div className="mt-10 space-y-7">

                <div className="flex gap-4">

                  <MapPin className="mt-1 flex-shrink-0 text-brass" size={20} />

                  <div>

                    <p className="text-[11px] font-semibold uppercase tracking-wide-3 text-ivory/45">{t.contact.address}</p>

                    <p className="mt-1.5 text-base leading-relaxed text-ivory/75">{siteConfig.address}</p>

                    <a href={siteConfig.directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-flex items-center gap-1 text-sm text-sage-light transition-colors hover:text-ivory">

                      {t.contact.directions} <ArrowRight size={14} />

                    </a>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Phone className="mt-1 flex-shrink-0 text-brass" size={20} />

                  <div>

                    <p className="text-[11px] font-semibold uppercase tracking-wide-3 text-ivory/45">{t.contact.phone}</p>

                    <a href={`tel:${siteConfig.phoneRaw}`} className="mt-1.5 block font-serif text-2xl font-light text-ivory transition-colors hover:text-sage-light">{siteConfig.phone}</a>

                    <p className="mt-1 text-xs text-ivory/45">{t.contact.reservationNote}</p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Mail className="mt-1 flex-shrink-0 text-brass" size={20} />

                  <div>

                    <p className="text-[11px] font-semibold uppercase tracking-wide-3 text-ivory/45">{t.contact.email}</p>

                    <a href={`mailto:${siteConfig.email}`} className="mt-1.5 block text-base text-ivory/75 transition-colors hover:text-sage-light">{siteConfig.email}</a>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Clock className="mt-1 flex-shrink-0 text-brass" size={20} />

                  <div>

                    <p className="text-[11px] font-semibold uppercase tracking-wide-3 text-ivory/45">{t.contact.hours}</p>

                    <div className="mt-2 space-y-2">

                      {siteConfig.hoursRows.map((row, i) => (

                        <div key={row.key} className="flex items-baseline gap-6 text-sm text-ivory/75">

                          <span className="w-28">{t.visit.days[i]}</span>

                          <span className="text-ivory">{row.time}</span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Instagram className="mt-1 flex-shrink-0 text-brass" size={20} />

                  <div>

                    <p className="text-[11px] font-semibold uppercase tracking-wide-3 text-ivory/45">Instagram</p>

                    <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-1.5 block text-base text-ivory/75 transition-colors hover:text-sage-light">{siteConfig.instagram}</a>

                  </div>

                </div>

              </div>

            </Reveal>

            {}

            <Reveal delay={1} className="lg:col-span-6 lg:col-start-7">

              <div className="border border-ivory/15 bg-obsidian-100 p-6 sm:p-8 lg:p-10">

                {submitted ? (

                  <div className="flex flex-col items-center justify-center py-16 text-center">

                    <CheckCircle className="text-brass" size={44} />

                    <h3 className="mt-5 font-serif text-3xl font-light text-ivory">{t.contact.thanks}</h3>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/60">

                      {t.contact.thanksCopy}

                    </p>

                    <button

                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}

                      className="mt-7 border border-ivory/30 px-7 py-3 text-[12px] font-semibold uppercase tracking-wide-3 text-ivory transition-all hover:border-ivory hover:bg-ivory hover:text-obsidian"

                    >

                      {t.contact.newMessage}

                    </button>

                  </div>

                ) : (

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">

                    <div>

                      <label htmlFor="name" className="mb-2 block text-[11px] font-semibold uppercase tracking-wide-2 text-ivory/60">

                        {t.contact.nameLabel} <span className="text-sage-light">*</span>

                      </label>

                      <input id="name" type="text" autoComplete="name" value={form.name} onChange={(e) => handleChange('name', e.target.value)} className={inputClass(errors.name)} placeholder={t.contact.namePh} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />

                      {errors.name && <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"><AlertCircle size={14} /> {errors.name}</p>}

                    </div>

                    <div>

                      <label htmlFor="email" className="mb-2 block text-[11px] font-semibold uppercase tracking-wide-2 text-ivory/60">

                        {t.contact.emailLabel} <span className="text-sage-light">*</span>

                      </label>

                      <input id="email" type="email" autoComplete="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className={inputClass(errors.email)} placeholder={t.contact.emailPh} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />

                      {errors.email && <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"><AlertCircle size={14} /> {errors.email}</p>}

                    </div>

                    <div>

                      <label htmlFor="subject" className="mb-2 block text-[11px] font-semibold uppercase tracking-wide-2 text-ivory/60">

                        {t.contact.subjectLabel} <span className="text-sage-light">*</span>

                      </label>

                      <input id="subject" type="text" value={form.subject} onChange={(e) => handleChange('subject', e.target.value)} className={inputClass(errors.subject)} placeholder={t.contact.subjectPh} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'subject-error' : undefined} />

                      {errors.subject && <p id="subject-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"><AlertCircle size={14} /> {errors.subject}</p>}

                    </div>

                    <div>

                      <label htmlFor="message" className="mb-2 block text-[11px] font-semibold uppercase tracking-wide-2 text-ivory/60">

                        {t.contact.messageLabel} <span className="text-sage-light">*</span>

                      </label>

                      <textarea id="message" rows={5} value={form.message} onChange={(e) => handleChange('message', e.target.value)} className={`${inputClass(errors.message)} resize-none`} placeholder={t.contact.messagePh} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />

                      {errors.message && <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"><AlertCircle size={14} /> {errors.message}</p>}

                    </div>

                    <button

                      type="submit"

                      disabled={loading}

                      className="sheen group inline-flex w-full items-center justify-center gap-2.5 bg-ivory px-8 py-4 text-[12px] font-semibold uppercase tracking-wide-3 text-obsidian transition-all duration-300 hover:bg-champagne-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"

                    >

                      {loading ? (

                        <>

                          <Loader2 size={15} className="animate-spin" />

                          {t.contact.sending}

                        </>

                      ) : (

                        <>

                          {t.contact.send}

                          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

                        </>

                      )}

                    </button>

                  </form>

                )}

              </div>

            </Reveal>

          </div>

          <Reveal className="mt-20">

            <MapFallback />

          </Reveal>

        </div>

      </section>

    </>

  );

}
