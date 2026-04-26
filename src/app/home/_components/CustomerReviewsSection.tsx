import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

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
];

export function CustomerReviewsSection() {
  return (
    <section className="py-20 bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-4">
          <p className="text-5xl md:text-6xl font-black tracking-tight text-blue-600 mb-3">5000+</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-4">Clients believe in us</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            Trusted by startups, agencies, and enterprises running websites and mission-critical apps.
          </p>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-6">
            Get Started
          </Button>
        </div>

        <div className="lg:col-span-8 space-y-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-surface-container-lowest rounded-2xl p-7 md:p-8 shadow-sm border border-outline-variant/20"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
