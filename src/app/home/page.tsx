import { HeroSection } from './_components/HeroSection';
import { SolutionsGrid } from './_components/SolutionsGrid';
import { SecuritySection } from './_components/SecuritySection';
import { CTASection } from './_components/CTASection';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <SolutionsGrid />
      <SecuritySection />
      <CTASection />
    </main>
  );
}
