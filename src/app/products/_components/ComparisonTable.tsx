import { SectionContainer } from '@/components/SectionContainer';

interface ComparisonRow {
  feature: string;
  go: string;
  starter: string;
  medium: string;
  advanced: string;
}

interface ComparisonTableContent {
  heading: string;
  rows: ComparisonRow[];
}

interface ComparisonTableProps {
  content?: ComparisonTableContent;
}

export function ComparisonTable({ content }: ComparisonTableProps) {
  const comparisonData: ComparisonRow[] = content?.rows ?? [
    {
      feature: 'CPU Cores',
      go: '1 Core',
      starter: '2 Cores',
      medium: '4 Cores',
      advanced: '8 Cores',
    },
    {
      feature: 'Physical Memory',
      go: '1 GB',
      starter: '2 GB',
      medium: '4 GB',
      advanced: '8 GB',
    },
    {
      feature: 'Disk I/O',
      go: '10 MB/s',
      starter: '25 MB/s',
      medium: '50 MB/s',
      advanced: '100 MB/s',
    },
    {
      feature: 'Entry Processes',
      go: '20',
      starter: '50',
      medium: '100',
      advanced: 'Unlimited',
    },
    {
      feature: 'Inodes',
      go: '100,000',
      starter: '250,000',
      medium: '500,000',
      advanced: '1,000,000',
    },
  ];

  const heading = content?.heading ?? 'Detailed Plan Comparison';

  return (
    <SectionContainer bgColor="light">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{heading}</h2>
        <div className="w-24 h-1.5 bg-linear-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="overflow-x-auto rounded-2xl">
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl bg-white dark:bg-slate-950">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-linear-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800">
                <th className="px-6 py-4 text-white font-bold text-sm uppercase tracking-wide">
                  Features
                </th>
                <th className="px-6 py-4 text-white font-extrabold text-sm uppercase tracking-wide">
                  GO
                </th>
                <th className="px-6 py-4 text-white font-extrabold text-sm uppercase tracking-wide">
                  STARTER
                </th>
                <th className="px-6 py-4 text-white font-extrabold text-sm uppercase tracking-wide">
                  MEDIUM
                </th>
                <th className="px-6 py-4 text-white font-extrabold text-sm uppercase tracking-wide">
                  ADVANCED
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr
                  key={row.feature}
                  className="border-b border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors duration-200"
                >
                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white text-sm">
                    {row.feature}
                  </td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-300 text-sm font-medium">
                    {row.go}
                  </td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-300 text-sm font-medium">
                    {row.starter}
                  </td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-300 text-sm font-medium">
                    {row.medium}
                  </td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-300 text-sm font-medium">
                    {row.advanced}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionContainer>
  );
}
