import { Award, Lock, CheckCircle, Trophy, Leaf } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';

interface Certification {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function CertificationsSection() {
  const certifications: Certification[] = [
    {
      icon: Award,
      title: 'ISO 27001',
      description: 'Information Security',
    },
    {
      icon: Lock,
      title: 'SOC 2 TYPE II',
      description: 'Data Integrity',
    },
    {
      icon: CheckCircle,
      title: 'Tier III',
      description: 'Certified Facility',
    },
    {
      icon: Trophy,
      title: 'IDC 2023',
      description: 'Innovation Winner',
    },
    {
      icon: Leaf,
      title: 'Green Tech',
      description: 'Carbon Neutral',
    },
  ];

  return (
    <SectionContainer bgColor="lighter" className="py-24 border-y border-slate-200 dark:border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Certified & Recognized Excellence</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Meeting and exceeding global standards for security and reliability.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {certifications.map((cert) => {
          const Icon = cert.icon;

          return (
            <div key={cert.title} className="group text-center">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 mb-6 transition-all group-hover:shadow-xl group-hover:-translate-y-2">
                <div className="aspect-square flex items-center justify-center">
                  <Icon className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                {cert.title}
              </span>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 mt-1">{cert.description}</p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
