"use client";

import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const reviews = [
  {
    id: 1,
    name: 'Rafi Hasan',
    role: 'Founder, Nova Commerce',
    message:
      'Migration was smooth and uptime has been excellent. Their support team responds quickly and explains technical issues clearly.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mira Dutta',
    role: 'CTO, BrightStack',
    message:
      'We moved our APIs to Cloud Host and saw immediate performance gains. The dashboard and deployment flow are straightforward.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Andra Wijaya',
    role: 'Product Manager, PixelRise',
    message:
      'Provisioning new environments takes minutes, and monitoring gives us clear visibility into every service in production.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Kevin Santoso',
    role: 'Lead Engineer, Orbit Labs',
    message:
      'The managed database offering has been reliable and fast. Backups and restore workflows are simple and dependable.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Nadia Putri',
    role: 'Operations Head, Aruna Digital',
    message:
      'Support quality stands out. We always get actionable recommendations, not generic replies, when something needs attention.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Rizki Mahendra',
    role: 'CTO, Synapse Studio',
    message:
      'Traffic spikes are no longer stressful. Auto-scaling and performance remained stable during our biggest product launch week.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Felicia Tan',
    role: 'Founder, Bloom Cart',
    message:
      'Our storefront latency dropped significantly after migration. Customers notice faster checkout and smoother browsing.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Bagas Pratama',
    role: 'DevOps Engineer, Meridian AI',
    message:
      'Deployment pipelines integrate cleanly with our stack. The platform feels built for teams shipping continuously.',
    rating: 5,
  },
];

interface CustomerReviewsContent {
  summary: {
    stat: string;
    heading: string;
    description: string;
    cta: string;
  };
  items: typeof reviews;
}

interface CustomerReviewsSectionProps {
  content?: CustomerReviewsContent;
}

export function CustomerReviewsSection({ content }: CustomerReviewsSectionProps) {
  const summary = content?.summary ?? {
    stat: '5000+',
    heading: 'Clients believe in us',
    description: 'Trusted by startups, agencies, and enterprises running websites and mission-critical apps.',
    cta: 'Get Started',
  };
  const reviewItems = content?.items ?? reviews;

  return (
    <section className="py-20 bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-4">
          <p className="text-5xl md:text-6xl font-black tracking-tight text-blue-600 mb-3">{summary.stat}</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-4">{summary.heading}</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            {summary.description}
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-7 py-6">
            {summary.cta}
          </Button>
        </div>

        <div className="lg:col-span-8">
          <Swiper
            direction="vertical"
            modules={[Autoplay]}
            loop
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={5000}
            allowTouchMove
            grabCursor
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2.2,
              },
            }}
            className="h-136"
          >
            {reviewItems.map((review) => (
              <SwiperSlide key={review.id}>
                <article className="h-full bg-surface-container-lowest rounded-2xl p-7 md:p-8 shadow-sm border border-outline-variant/20">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-secondary-container/60 mb-5">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-on-surface text-lg leading-relaxed mb-6">“{review.message}”</p>

                  <div>
                    <p className="font-bold text-on-surface">{review.name}</p>
                    <p className="text-sm text-on-surface-variant">{review.role}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
