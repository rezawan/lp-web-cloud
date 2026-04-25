import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Cloud Host Cloud Hosting',
  description:
    'Learn about Cloud Host cloud hosting company, our mission, vision, and the journey behind building next-generation infrastructure.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
