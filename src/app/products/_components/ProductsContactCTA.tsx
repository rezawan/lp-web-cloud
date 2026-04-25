import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, HeadsetIcon } from 'lucide-react';
import Image from 'next/image';

export function ProductsContactCTA() {
  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-900 overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
        <Image
          src="/assets/images/unamed (4).png"
          alt="Customer Support"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-white mb-6">Do you have any questions?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Our expert team is available 24/7/365 to assist you with any technical hurdles or billing inquiries.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2 font-bold px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              Live Chat
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 flex items-center gap-2 font-bold px-8 py-4"
            >
              <Mail className="w-5 h-5" />
              Email Support
            </Button>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 text-white max-w-xs">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
              <HeadsetIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="font-bold">24/7 Helpdesk</p>
              <p className="text-xs opacity-70">Average response: 15min</p>
            </div>
          </div>
          <p className="text-sm italic">
            &quot;The support team helped me migrate 50+ sites in less than 24 hours. Incredible service!&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
