import { AboutHeroSection } from '@/app/about/_components/AboutHeroSection';
import { AboutSection } from '@/app/about/_components/AboutSection';
import { MissionVisionSection } from '@/app/about/_components/MissionVisionSection';
import { TimelineSection } from '@/app/about/_components/TimelineSection';
import { CertificationsSection } from '@/app/about/_components/CertificationsSection';
import { ClientLogosSection } from '@/app/about/_components/ClientLogosSection';
import { CTASection } from '@/app/home/_components/CTASection';
import aboutPageContent from '@/content/cms/about.json';

type AboutSections = (typeof aboutPageContent.sections)[number];

function getSection<TType extends AboutSections['type']>(type: TType) {
  return aboutPageContent.sections.find((section): section is Extract<AboutSections, { type: TType }> => section.type === type);
}

export default function AboutPage() {
  const hero = getSection('hero');
  const aboutOverview = getSection('about-overview');
  const missionVision = getSection('mission-vision');
  const timeline = getSection('timeline');
  const certifications = getSection('certifications');
  const clients = getSection('client-logos');
  const cta = getSection('cta');

  if (!hero || !aboutOverview || !missionVision || !timeline || !certifications || !clients || !cta) {
    return null;
  }

  return (
    <main className="flex flex-col min-h-screen">
      <AboutHeroSection content={hero} />
      <AboutSection content={aboutOverview} />
      <MissionVisionSection content={missionVision} />
      <TimelineSection content={timeline} />
      <CertificationsSection content={certifications} sectionId="about-certifications" />
      <ClientLogosSection content={clients} />
      <CTASection content={cta} />
    </main>
  );
}
