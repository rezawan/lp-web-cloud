import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone } from 'lucide-react';

export function ContactInquirySection() {
  return (
    <section className="py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface">
              Tell us about your infrastructure goals.
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Our experts are available to discuss colocation, managed cloud
              services, or dedicated high-performance server deployments.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-on-surface">Global Headquarters</h4>
                <p className="text-on-surface-variant text-sm">100 Tech Plaza, Palo Alto, CA 94301</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-on-surface">Priority Support Line</h4>
                <p className="text-on-surface-variant text-sm">+1 (800) Cloud Host-OPS</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl h-64 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 p-8 flex items-end">
            <p className="text-slate-200 text-sm max-w-xs">
              Global operations center with around-the-clock monitoring and
              infrastructure specialists on standby.
            </p>
          </div>
        </div>

        <div className="bg-surface-container-low p-8 lg:p-10 rounded-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-bold text-on-primary-fixed-variant uppercase tracking-wider">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="h-auto w-full bg-surface-container-lowest rounded-xl p-4 text-sm outline-none border border-transparent focus-visible:border-primary/40 focus-visible:ring-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold text-on-primary-fixed-variant uppercase tracking-wider">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className="h-auto w-full bg-surface-container-lowest rounded-xl p-4 text-sm outline-none border border-transparent focus-visible:border-primary/40 focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs font-bold text-on-primary-fixed-variant uppercase tracking-wider">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="h-auto w-full bg-surface-container-lowest rounded-xl p-4 text-sm outline-none border border-transparent focus-visible:border-primary/40 focus-visible:ring-0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs font-bold text-on-primary-fixed-variant uppercase tracking-wider">
                Message
              </Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="How can we assist with your infrastructure?"
                className="w-full bg-surface-container-lowest rounded-xl p-4 text-sm outline-none border border-transparent focus-visible:border-primary/40 focus-visible:ring-0 resize-none"
              />
            </div>

            <Button className="w-full py-6 bg-linear-to-r from-blue-600 to-blue-800 text-white font-bold hover:from-blue-700 hover:to-blue-900">
              Send Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
