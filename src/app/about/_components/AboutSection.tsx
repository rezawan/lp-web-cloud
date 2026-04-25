import Image from 'next/image';
import { SectionContainer } from '@/components/SectionContainer';

export function AboutSection() {
  return (
    <SectionContainer bgColor="light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <label className="text-blue-600 dark:text-blue-400 font-bold text-sm tracking-widest uppercase mb-4 block">
            About Cloud Host
          </label>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 leading-tight">
            Reliability isn&apos;t a feature. <br />
            It&apos;s our foundation.
          </h2>

          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            <p>
              Founded in 2014, Cloud Host emerged from a simple realization: the cloud was becoming too complex and too
              slow. We set out to build an infrastructure company that prioritizes high-performance.
            </p>
            <p>
              Today, we operate multiple Tier III certified data centers across Indonesia and global points of presence
              with N+1 redundancy at every layer.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-4xl font-extrabold text-blue-600 mb-1">99.99%</h4>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                  Uptime SLA
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-4xl font-extrabold text-blue-600 mb-1">250+</h4>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                  Peering Points
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden z-10">
            <Image
              src={"/assets/images/unamed (4).png"}
              alt="Data Center"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600/10 rounded-2xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-400/30 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </SectionContainer>
  );
}
