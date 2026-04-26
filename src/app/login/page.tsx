import loginPageContent from '@/content/cms/login.json';
import { LoginView } from '@/app/login/_components/LoginView';

type LoginSections = (typeof loginPageContent.sections)[number];

function getSection<TType extends LoginSections['type']>(type: TType) {
  return loginPageContent.sections.find((section): section is Extract<LoginSections, { type: TType }> => section.type === type);
}

export default function LoginPage() {
  const promo = getSection('promo-panel');
  const form = getSection('login-form');
  const footer = getSection('auth-footer');

  if (!promo || !form || !footer) {
    return null;
  }

  return <LoginView promo={promo} form={form} footer={footer} />;
}
