import Image from 'next/image';
import { SectionContainer } from '@/components/SectionContainer';

export function ClientLogosSection() {
  const clients = [
    {
      name: 'Google',
      logo: '/assets/images/unamed (4).png',
    },
    {
      name: 'IBM',
      logo: '/assets/images/unamed (4).png',
      
    },
    {
      name: 'Netflix',
            logo: '/assets/images/unamed (4).png',

    },
    {
      name: 'Microsoft',
           logo: '/assets/images/unamed (4).png',

    },
    {
      name: 'Slack',
            logo: '/assets/images/unamed (4).png',

    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-center text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-16">
          Powering the world&apos;s most innovative teams
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 hover:opacity-100 transition-opacity">
          {clients.map((client) => (
            <a
              key={client.name}
              href="#"
              className="relative h-8 w-24 flex items-center justify-center hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              aria-label={client.name}
            >
              <Image src={client.logo} alt={client.name} fill className="object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
