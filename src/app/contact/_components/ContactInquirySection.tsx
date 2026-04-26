import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone } from 'lucide-react';

interface ContactInfoItem {
  title: string;
  value: string;
}

interface InquiryField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
}

interface InquiryContent {
  heading: string;
  description: string;
  contactInfo: ContactInfoItem[];
  opsCenterNote: string;
  form: {
    fields: InquiryField[];
    submitLabel: string;
  };
}

interface ContactInquirySectionProps {
  content: InquiryContent;
}

export function ContactInquirySection({ content }: ContactInquirySectionProps) {
  const topFields = content.form.fields.filter((field) => field.name === 'name' || field.name === 'email');
  const phoneField = content.form.fields.find((field) => field.name === 'phone');
  const messageField = content.form.fields.find((field) => field.type === 'textarea');

  return (
    <section className="py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface">
              {content.heading}
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              {content.description}
            </p>
          </div>

          <div className="space-y-6">
            {content.contactInfo.map((item) => {
              const Icon = item.title.toLowerCase().includes('line') ? Phone : MapPin;

              return (
                <div key={item.title} className="flex gap-4">
                  <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl h-64 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 p-8 flex items-end">
            <p className="text-slate-200 text-sm max-w-xs">
              {content.opsCenterNote}
            </p>
          </div>
        </div>

        <div className="bg-surface-container-low p-8 lg:p-10 rounded-xl">
          <h3 className="text-2xl font-extrabold tracking-tight text-on-surface mb-6">
            Send us a message
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topFields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label htmlFor={field.name} className="text-xs font-bold text-on-primary-fixed-variant uppercase tracking-wider">
                    {field.label}
                  </Label>
                  <Input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="h-auto w-full bg-surface-container-lowest rounded-xl p-4 text-sm outline-none border border-outline-variant/50 focus-visible:border-primary/40 focus-visible:ring-0"
                  />
                </div>
              ))}
            </div>

            {phoneField && (
              <div className="space-y-2">
                <Label htmlFor={phoneField.name} className="text-xs font-bold text-on-primary-fixed-variant uppercase tracking-wider">
                  {phoneField.label}
                </Label>
                <Input
                  id={phoneField.name}
                  type={phoneField.type}
                  placeholder={phoneField.placeholder}
                  className="h-auto w-full bg-surface-container-lowest rounded-xl p-4 text-sm outline-none border border-outline-variant/50 focus-visible:border-primary/40 focus-visible:ring-0"
                />
              </div>
            )}

            {messageField && (
              <div className="space-y-2">
                <Label htmlFor={messageField.name} className="text-xs font-bold text-on-primary-fixed-variant uppercase tracking-wider">
                  {messageField.label}
                </Label>
                <Textarea
                  id={messageField.name}
                  rows={5}
                  placeholder={messageField.placeholder}
                  className="w-full bg-surface-container-lowest rounded-xl p-4 text-sm outline-none border border-outline-variant/50 focus-visible:border-primary/40 focus-visible:ring-0 resize-none"
                />
              </div>
            )}

            <Button className="w-full py-6 bg-linear-to-r from-blue-600 to-blue-800 text-white font-bold hover:from-blue-700 hover:to-blue-900">
              {content.form.submitLabel}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
