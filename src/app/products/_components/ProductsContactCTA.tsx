import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, HeadsetIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductsContactCTAContent {
  heading: string;
  description: string;
  ctas: Array<{ label: string; href?: string }>;
  helpdeskCard: {
    title: string;
    subtitle: string;
    quote: string;
  };
}

interface ProductsContactCTAProps {
  content?: ProductsContactCTAContent;
}

export function ProductsContactCTA({ content }: ProductsContactCTAProps) {
  const heading = content?.heading ?? 'Do you have any questions?';
  const description =
    content?.description ??
    'Our expert team is available 24/7/365 to assist you with any technical hurdles or billing inquiries.';
  const ctas = content?.ctas ?? [{ label: 'Live Chat', href: '/contact' }, { label: 'Email Support', href: '/contact' }];
  const helpdeskCard = content?.helpdeskCard ?? {
    title: '24/7 Helpdesk',
    subtitle: 'Average response: 15min',
    quote: 'The support team helped me migrate 50+ sites in less than 24 hours. Incredible service!',
  };

  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-900 overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
        <Image
          src="/assets/images/unamed (4).png"
          alt="Customer Support"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-white mb-6">{heading}</h2>
          <p className="text-blue-100 text-lg mb-8">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-white px-7 text-base font-semibold text-blue-700 shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
            >
              <Link href={ctas[0]?.href ?? '/contact'}>
                <MessageCircle className="w-5 h-5" />
                {ctas[0]?.label ?? 'Live Chat'}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-white/35 bg-white/10 px-7 text-base font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-xs transition-colors hover:bg-white/20 hover:text-white"
            >
              <Link href={ctas[1]?.href ?? '/contact'}>
                <Mail className="w-5 h-5" />
                {ctas[1]?.label ?? 'Email Support'}
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 text-white max-w-xs">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
              <HeadsetIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="font-bold">{helpdeskCard.title}</p>
              <p className="text-xs opacity-70">{helpdeskCard.subtitle}</p>
            </div>
          </div>
          <p className="text-sm italic">
            &quot;{helpdeskCard.quote}&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
