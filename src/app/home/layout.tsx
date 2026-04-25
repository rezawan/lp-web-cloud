import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Host | High-Performance Cloud Hosting',
  description:
    'Enterprise-grade cloud hosting solutions powered by cutting-edge hardware and a global fiber-optic network.',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
