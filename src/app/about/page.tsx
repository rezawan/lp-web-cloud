import { AboutHeroSection } from './_components/AboutHeroSection';
import { AboutSection } from './_components/AboutSection';
import { MissionVisionSection } from './_components/MissionVisionSection';
import { TimelineSection } from './_components/TimelineSection';
import { CertificationsSection } from './_components/CertificationsSection';
import { ClientLogosSection } from './_components/ClientLogosSection';
import { CTASection } from '../home/_components/CTASection';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <AboutHeroSection />
      <AboutSection />
      <MissionVisionSection />
      <TimelineSection />
      <CertificationsSection />
      <ClientLogosSection />
      <CTASection />
    </main>
  );
}
