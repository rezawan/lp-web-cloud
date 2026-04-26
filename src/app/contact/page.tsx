import { ContactHeroSection } from './_components/ContactHeroSection';
import { SupportChannelsSection } from './_components/SupportChannelsSection';
import { ContactInquirySection } from './_components/ContactInquirySection';
import { TrustedBySection } from './_components/TrustedBySection';
import contactPageContent from '@/content/cms/contact.json';

type ContactSections = (typeof contactPageContent.sections)[number];

function getSection<TType extends ContactSections['type']>(type: TType) {
  return contactPageContent.sections.find((section): section is Extract<ContactSections, { type: TType }> => section.type === type);
}

export default function ContactPage() {
  const hero = getSection('hero');
  const supportChannels = getSection('support-channels');
  const inquiry = getSection('inquiry');
  const trustedBy = getSection('trusted-by');

  if (!hero || !supportChannels || !inquiry || !trustedBy) {
    return null;
  }

  return (
    <main className="flex flex-col min-h-screen">
      <ContactHeroSection content={hero} />
      <SupportChannelsSection items={supportChannels.items} />
      <ContactInquirySection content={inquiry} />
      <TrustedBySection content={trustedBy} />
    </main>
  );
}
