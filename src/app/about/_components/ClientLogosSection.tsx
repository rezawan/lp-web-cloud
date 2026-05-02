'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';

interface ClientLogosSectionContent {
  heading: string;
  items: Array<{ name: string; logoSrc?: string; logo?: string }>;
}

interface ClientLogosSectionProps {
  content?: ClientLogosSectionContent;
}

export function ClientLogosSection({ content }: ClientLogosSectionProps) {
  const clients = content?.items ?? [
    {
      name: 'Google',
      logoSrc: '/assets/logo-placeholder.svg',
    },
    {
      name: 'IBM',
      logoSrc: '/assets/logo-placeholder.svg',
    },
    {
      name: 'Netflix',
      logoSrc: '/assets/logo-placeholder.svg',
    },
    {
      name: 'Microsoft',
      logoSrc: '/assets/logo-placeholder.svg',
    },
    {
      name: 'Slack',
      logoSrc: '/assets/logo-placeholder.svg',
    },
  ];

  const heading = content?.heading ?? "Powering the world's most innovative teams";

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-center text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-16">
          {heading}
        </h2>

        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={20}
          loop={clients.length > 1}
          speed={700}
          autoplay={{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          aria-label="Client logos carousel"
        >
          {clients.map((client) => {
            const logoSrc = client.logoSrc ?? client.logo ?? '/assets/logo-placeholder.svg';

            return (
              <SwiperSlide key={client.name}>
                <article className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-4 flex flex-col items-center justify-center gap-2 h-full">
                  <div className="relative h-8 w-24 grayscale hover:grayscale-0 transition-all">
                    <Image src={logoSrc} alt={`${client.name} logo`} fill className="object-contain" sizes="(max-width: 768px) 96px, 120px" />
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-on-surface-variant text-center">{client.name}</p>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <noscript>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-8">
            {clients.map((client) => {
              const logoSrc = client.logoSrc ?? client.logo ?? '/assets/logo-placeholder.svg';

              return (
                <article key={`noscript-${client.name}`} className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-4 flex flex-col items-center justify-center gap-2">
                  <div className="relative h-8 w-24">
                    <Image src={logoSrc} alt={`${client.name} logo`} fill className="object-contain" sizes="(max-width: 768px) 96px, 120px" />
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-on-surface-variant text-center">{client.name}</p>
                </article>
              );
            })}
          </div>
        </noscript>
      </div>
    </section>
  );
}
