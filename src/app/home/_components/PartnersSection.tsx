'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';

type Partner = {
  id?: number;
  name: string;
  logoSrc: string;
};

const partners: Partner[] = [
  { id: 1, name: 'Nexa Systems', logoSrc: '/assets/logo-placeholder.svg' },
  { id: 2, name: 'DataPulse', logoSrc: '/assets/logo-placeholder.svg' },
  { id: 3, name: 'OrbitWare', logoSrc: '/assets/logo-placeholder.svg' },
  { id: 4, name: 'Skyline Apps', logoSrc: '/assets/logo-placeholder.svg' },
  { id: 5, name: 'CoreBit Labs', logoSrc: '/assets/logo-placeholder.svg' },
  { id: 6, name: 'Vertex Cloud', logoSrc: '/assets/logo-placeholder.svg' },
];

interface PartnersSectionContent {
  heading: string;
  description: string;
  items: Partner[];
}

interface PartnersSectionProps {
  content?: PartnersSectionContent;
}

export function PartnersSection({ content }: PartnersSectionProps) {
  const heading = content?.heading ?? 'Our Partners';
  const description = content?.description ?? 'We collaborate with trusted technology and infrastructure brands.';
  const items = content?.items ?? partners;

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface mb-3">
            {heading}
          </h2>
          <p className="text-on-surface-variant">
            {description}
          </p>
        </div>

        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={16}
          loop={items.length > 1}
          speed={700}
          autoplay={{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          aria-label="Partners logo carousel"
        >
          {items.map((partner, index) => (
            <SwiperSlide key={partner.id ?? index}>
              <article className="bg-surface-container-low rounded-2xl border border-outline-variant/25 p-5 flex flex-col items-center text-center gap-3 h-full">
                <div className="relative h-8 w-24">
                  <Image
                    src={partner.logoSrc}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, 120px"
                  />
                </div>
                <p className="text-sm font-semibold text-on-surface leading-tight">{partner.name}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <noscript>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-6">
            {items.map((partner, index) => (
              <article
                key={`noscript-${partner.id ?? index}`}
                className="bg-surface-container-low rounded-2xl border border-outline-variant/25 p-5 flex flex-col items-center text-center gap-3"
              >
                <div className="relative h-8 w-24">
                  <Image
                    src={partner.logoSrc}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, 120px"
                  />
                </div>
                <p className="text-sm font-semibold text-on-surface leading-tight">{partner.name}</p>
              </article>
            ))}
          </div>
        </noscript>
      </div>
    </section>
  );
}
