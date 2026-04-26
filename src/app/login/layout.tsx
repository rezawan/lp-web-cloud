import type { Metadata } from 'next';
import loginPageContent from '@/content/cms/login.json';

export const metadata: Metadata = {
  title: loginPageContent.meta.title,
  description: loginPageContent.meta.description,
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
