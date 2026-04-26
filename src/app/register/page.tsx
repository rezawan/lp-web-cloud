import registerPageContent from '@/content/cms/register.json';
import { RegisterView } from '@/app/register/_components/RegisterView';

type RegisterSections = (typeof registerPageContent.sections)[number];

function getSection<TType extends RegisterSections['type']>(type: TType) {
  return registerPageContent.sections.find((section): section is Extract<RegisterSections, { type: TType }> => section.type === type);
}

export default function RegisterPage() {
  const hero = getSection('hero');
  const form = getSection('register-form');
  const footer = getSection('auth-footer');

  if (!hero || !form || !footer) {
    return null;
  }

  return <RegisterView hero={hero} form={form} footer={footer} />;
}
