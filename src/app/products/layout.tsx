import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Hosting Plans | Cloud Host',
  description:
    'Choose the perfect hosting plan with NVMe storage, enterprise-grade security, and 24/7 support. From basic web hosting to advanced enterprise solutions.',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
