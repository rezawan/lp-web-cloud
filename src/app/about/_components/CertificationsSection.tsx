import { SectionContainer } from '@/components/SectionContainer';
import Image from 'next/image';
import Link from 'next/link';

interface CertificationLogo {
  name: string;
  logoSrc: string;
  href?: string;
}

interface CertificationsSectionContent {
  heading: string;
  description: string;
  certifications?: CertificationLogo[];
  items?: Array<{ title: string; description: string }>;
}

interface CertificationsSectionProps {
  content?: CertificationsSectionContent;
  sectionId?: string;
}

export function CertificationsSection({ content, sectionId }: CertificationsSectionProps) {
  const certifications: CertificationLogo[] = content?.certifications ?? [
    { name: 'ISO 9001', logoSrc: '/assets/icons/iso_9001.webp', href: '/about#about-certifications' },
    { name: 'ISO 14001', logoSrc: '/assets/icons/iso_14001.webp', href: '/about#about-certifications' },
    { name: 'ISO 37001', logoSrc: '/assets/icons/iso_37001.webp', href: '/about#about-certifications' },
    { name: 'ISO 20000-1', logoSrc: '/assets/icons/iso_20000_1.webp', href: '/about#about-certifications' },
    { name: 'ISO 45001', logoSrc: '/assets/icons/iso_45001.webp', href: '/about#about-certifications' },
    { name: 'ISO 27001', logoSrc: '/assets/icons/iso_27001.webp', href: '/about#about-certifications' },
  ];

  const heading = content?.heading ?? 'Certified & Recognized Excellence';
  const description = content?.description ?? 'Meeting and exceeding global standards for security and reliability.';

  return (
    <SectionContainer bgColor="lighter" className="py-24 border-y border-slate-200 dark:border-slate-800">
      <div id={sectionId} className="scroll-mt-24" />
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">{heading}</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {certifications.map((cert) => (
          <Link
            key={cert.name}
            href={cert.href ?? '/about#about-certifications'}
            className="group text-center"
            aria-label={cert.name}
          >
            <div className="bg-card p-5 rounded-2xl shadow-sm border border-border mb-3 transition-all group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="aspect-square flex items-center justify-center">
                <Image
                  src={cert.logoSrc}
                  alt={cert.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              {cert.name}
            </span>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
