import { Rocket, Eye } from 'lucide-react';
import Image from 'next/image';
import { SectionContainer } from '@/components/SectionContainer';

export function MissionVisionSection() {
  return (
    <SectionContainer className="py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="relative group h-125 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/assets/images/unamed (4).png"
            alt="Innovation"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-12 text-white">
            <Rocket className="text-blue-200 h-12 w-12 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-200 text-lg max-w-md leading-relaxed">
              To democratize high-performance cloud computing by providing world-class infrastructure that is
              accessible, secure, and infinitely scalable for businesses of all sizes.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="relative group h-125 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/assets/images/unamed (4).png"
            alt="Future Technology"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-12 text-white">
            <Eye className="text-white h-12 w-12 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-blue-100 text-lg max-w-md leading-relaxed">
              Becoming the leading global backbone for the digital economy, recognized for unparalleled performance and
              innovation in cloud architecture.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
