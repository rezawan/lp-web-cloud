type Partner = {
  id: number;
  name: string;
  logoText: string;
};

const partners: Partner[] = [
  { id: 1, name: 'Nexa Systems', logoText: 'NX' },
  { id: 2, name: 'DataPulse', logoText: 'DP' },
  { id: 3, name: 'OrbitWare', logoText: 'OW' },
  { id: 4, name: 'Skyline Apps', logoText: 'SA' },
  { id: 5, name: 'CoreBit Labs', logoText: 'CB' },
  { id: 6, name: 'Vertex Cloud', logoText: 'VC' },
];

interface PartnersSectionContent {
  heading: string;
  description: string;
  items: Partner[];
}

interface PartnersSectionProps {
  content?: PartnersSectionContent;
}

export function PartnersSection({ content }: PartnersSectionProps) {
  const heading = content?.heading ?? 'Our Partners';
  const description = content?.description ?? 'We collaborate with trusted technology and infrastructure brands.';
  const items = content?.items ?? partners;

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface mb-3">
            {heading}
          </h2>
          <p className="text-on-surface-variant">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {items.map((partner, index) => (
            <article
              key={partner.id || index}
              className="bg-surface-container-low rounded-2xl border border-outline-variant/25 p-5 flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-blue-800 text-white font-extrabold text-sm flex items-center justify-center">
                {partner.logoText}
              </div>
              <p className="text-sm font-semibold text-on-surface leading-tight">{partner.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
