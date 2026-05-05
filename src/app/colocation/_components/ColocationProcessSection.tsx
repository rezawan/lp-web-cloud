import { SectionContainer } from '@/components/SectionContainer';

interface ProcessStep {
  title: string;
  description: string;
}

interface ColocationProcessContent {
  heading: string;
  steps: ProcessStep[];
}

interface ColocationProcessSectionProps {
  content: ColocationProcessContent;
}

export function ColocationProcessSection({ content }: ColocationProcessSectionProps) {
  return (
    <SectionContainer bgColor="lighter">
      <h2 className="text-center text-3xl font-extrabold text-on-surface md:text-4xl">{content.heading}</h2>
      <div className="relative mt-16 grid gap-12 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-outline-variant/30 md:block" />
        {content.steps.map((step, index) => (
          <div key={step.title} className="relative flex flex-col items-center text-center">
            <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-blue-800 text-3xl font-bold text-white shadow-xl">
              {index + 1}
            </div>
            <h3 className="text-lg font-bold text-on-surface">{step.title}</h3>
            <p className="mt-3 text-sm text-on-surface-variant">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
