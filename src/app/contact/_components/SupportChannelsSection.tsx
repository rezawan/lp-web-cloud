import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Headset } from 'lucide-react';

interface SupportChannel {
  title: string;
  description: string;
  action: string;
  featured: boolean;
}

interface SupportChannelsSectionProps {
  content: {
    items: SupportChannel[];
  };
}

const getChannelIcon = (title: string) => {
  const normalizedTitle = title.toLowerCase();
  if (normalizedTitle.includes('email')) {
    return Mail;
  }
  if (normalizedTitle.includes('helpdesk') || normalizedTitle.includes('support')) {
    return Headset;
  }
  return MessageCircle;
};

export function SupportChannelsSection({ content }: SupportChannelsSectionProps) {
  return (
    <section className="py-12 -mt-10 lg:-mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.items.map((channel) => {
          const Icon = getChannelIcon(channel.title);

          return (
            <article
              key={channel.title}
              className={
                channel.featured
                  ? 'bg-blue-600 text-white p-8 rounded-xl shadow-lg shadow-blue-600/20'
                  : 'bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/40'
              }
            >
              <div
                className={
                  channel.featured
                    ? 'w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6'
                    : 'w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center mb-6'
                }
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
              <p
                className={
                  channel.featured
                    ? 'text-blue-100 text-sm leading-relaxed mb-6'
                    : 'text-on-surface-variant text-sm leading-relaxed mb-6'
                }
              >
                {channel.description}
              </p>

              {channel.featured ? (
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold">
                  {channel.action}
                </Button>
              ) : (
                <button className="text-primary font-semibold text-sm hover:opacity-80 transition-opacity">
                  {channel.action}
                </button>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
