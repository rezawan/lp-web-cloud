import { ProductsHeroSection } from '@/app/products/_components/ProductsHeroSection';
import { PricingPlans } from '@/app/products/_components/PricingPlans';
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
  const pricing = getSection('pricing-plans');
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
      <PricingPlans content={pricing} />
      <ComparisonTable content={comparison} />
      <FeaturesGrid content={features} />
      <AdvantageSection content={advantages} />
      <FAQSection content={faq} />
      <ProductsContactCTA content={contactCta} />
    </main>
  );
}
