import { ProductsHeroSection } from '@/app/products/_components/ProductsHeroSection';
import { ProductTabsSection } from '@/app/products/_components/ProductTabsSection';
import { PricingPlans } from '@/app/products/_components/PricingPlans';
import { IncludedFeaturesSection } from '@/app/products/_components/IncludedFeaturesSection';
import { AvailableOSSection } from '@/app/products/_components/AvailableOSSection';
import { ComparisonTable } from '@/app/products/_components/ComparisonTable';
import { FeaturesGrid } from '@/app/products/_components/FeaturesGrid';
import { AdvantageSection } from '@/app/products/_components/AdvantageSection';
import { FAQSection } from '@/app/products/_components/FAQSection';
import { ProductsContactCTA } from '@/app/products/_components/ProductsContactCTA';
import productsPageContent from '@/content/cms/products.json';

type ProductSections = (typeof productsPageContent.sections)[number];

function getSection<TType extends ProductSections['type']>(type: TType) {
  return productsPageContent.sections.find((section): section is Extract<ProductSections, { type: TType }> => section.type === type);
}

export default function ProductsPage() {
  const hero = getSection('hero');
  const tabs = getSection('product-tabs');
  const pricing = getSection('pricing-plans');
  const includedFeatures = getSection('included-features');
  const osGrid = getSection('os-grid');
  const comparison = getSection('comparison-table');
  const features = getSection('features-grid');
  const advantages = getSection('advantages');
  const faq = getSection('faq');
  const contactCta = getSection('contact-cta');

  if (!hero || !pricing || !comparison || !features || !advantages || !faq || !contactCta) {
    return null;
  }

  return (
    <main className="flex flex-col min-h-screen">
      <ProductsHeroSection content={hero} />
      <ProductTabsSection content={tabs} />
      <PricingPlans content={pricing} />
      <IncludedFeaturesSection content={includedFeatures} />
      <AvailableOSSection content={osGrid} />
      <ComparisonTable content={comparison} />
      <FeaturesGrid content={features} />
      {/* <AdvantageSection content={advantages} /> */}
      <FAQSection content={faq} />
      <ProductsContactCTA content={contactCta} />
    </main>
  );
}
