import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Cloud Host',
  description:
    'Get in touch with Cloud Host for hosting, server, and infrastructure support. Reach our team via live chat, email, or priority helpdesk.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
