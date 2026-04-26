import { ProductsHeroSection } from './_components/ProductsHeroSection';
import { PricingPlans } from './_components/PricingPlans';
import { ComparisonTable } from './_components/ComparisonTable';
import { FeaturesGrid } from './_components/FeaturesGrid';
import { AdvantageSection } from './_components/AdvantageSection';
import { FAQSection } from './_components/FAQSection';
import { ProductsContactCTA } from './_components/ProductsContactCTA';

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ProductsHeroSection />
      <PricingPlans />
      <ComparisonTable />
      <FeaturesGrid />
      <AdvantageSection />
      <FAQSection />
      <ProductsContactCTA />
    </main>
  );
}
