import { ContactHeroSection } from './_components/ContactHeroSection';
import { SupportChannelsSection } from './_components/SupportChannelsSection';
import { ContactInquirySection } from './_components/ContactInquirySection';
import { TrustedBySection } from './_components/TrustedBySection';

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ContactHeroSection />
      <SupportChannelsSection />
      <ContactInquirySection />
      <TrustedBySection />
    </main>
  );
}
