'use client';

import {
  Cloud,
  Cpu,
  GlobeLock,
  Leaf,
  Shield,
  Radio,
} from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { SolutionCard } from './SolutionCard';

export function SolutionsGrid() {
  return (
    <SectionContainer bgColor="lighter">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Precision Engineered Solutions
        </h2>
        <p className="text-slate-600 dark:text-slate-300">
          We offer a range of products designed to handle everything from light blog traffic to massive enterprise-scale
          data processing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cloud Hosting - Featured */}
        <SolutionCard
          variant="featured"
          icon={Cloud}
          title="Cloud Hosting"
          description="Optimized for CMS like WordPress and custom React/Next.js applications. Scalable resources with automated backups and NVMe SSD storage."
          features={['Unlimited Bandwidth', 'Free SSL Certificates']}
          cta={{ text: 'Explore Plans' }}
          className="md:col-span-2"
        />

        {/* VPS Elite - Primary */}
        <SolutionCard
          variant="primary"
          icon={Cpu}
          title="VPS Elite"
          description="Dedicated resources with full root access. Choose your OS and scale instantly as your user base grows."
          cta={{ text: '$12.99/mo • Configure Server' }}
        />

        {/* Bare Metal */}
        <SolutionCard
          variant="default"
          icon={Radio}
          title="Bare Metal"
          description="Maximum performance with raw hardware access. No virtualization layer overhead for compute-intensive workloads."
          cta={{ text: 'Custom Quote' }}
        />

        {/* Global Presence - Image Card */}
        <SolutionCard
          variant="image-wide"
          title="Global Infrastructure"
          description="24 data centers strategically located across 5 continents to ensure your content is always close to your users."
          image={"/assets/images/home2.png"}
          imageAlt="World map with data connection nodes"
        />

        {/* Security */}
        <SolutionCard
          variant="default"
          icon={Shield}
          title="Fortified Security"
          description="Multi-layer DDoS protection, automatic backups, and hardware-level encryption are standard features."
        />

        {/* Support */}
        <SolutionCard
          variant="default"
          icon={GlobeLock}
          title="Expert Support"
          description="Real humans. Real engineers. 24/7/365 availability with a 15-minute response guarantee."
        />

        {/* Tier III Infrastructure - Dark Wide */}
        <SolutionCard
          variant="dark"
          icon={Radio}
          title="Tier III Certified Infrastructure"
          description="Our data centers meet the highest global standards for availability and power redundancy, featuring N+1 configurations."
          className="md:col-span-2"
        />

        {/* Green Cloud */}
        <SolutionCard
          variant="default"
          icon={Leaf}
          title="Green Cloud"
          description="Committed to carbon-neutral operations by 2030 through renewable energy."
        />
      </div>
    </SectionContainer>
  );
}
