import type { Metadata } from 'next';
import registerPageContent from '@/content/cms/register.json';

export const metadata: Metadata = {
  title: registerPageContent.meta.title,
  description: registerPageContent.meta.description,
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
