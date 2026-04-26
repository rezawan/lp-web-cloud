import { ProductsHeroSection } from './_components/ProductsHeroSection';
import { PricingPlans } from './_components/PricingPlans';
import { ComparisonTable } from './_components/ComparisonTable';
import { FeaturesGrid } from './_components/FeaturesGrid';
import { AdvantageSection } from './_components/AdvantageSection';
import { FAQSection } from './_components/FAQSection';
import { ProductsContactCTA } from './_components/ProductsContactCTA';
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
