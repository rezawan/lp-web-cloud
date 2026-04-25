import { SectionContainer } from '@/components/SectionContainer';

interface ComparisonRow {
  feature: string;
  go: string;
  starter: string;
  medium: string;
  advanced: string;
}

export function ComparisonTable() {
  const comparisonData: ComparisonRow[] = [
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

  return (
    <SectionContainer bgColor="light">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Detailed Plan Comparison</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-200 dark:bg-slate-800">
              <th className="p-6 text-slate-900 dark:text-white font-bold border-b border-slate-300 dark:border-slate-700">
                Features
              </th>
              <th className="p-6 text-blue-600 dark:text-blue-400 font-extrabold border-b border-slate-300 dark:border-slate-700">
                GO
              </th>
              <th className="p-6 text-blue-600 dark:text-blue-400 font-extrabold border-b border-slate-300 dark:border-slate-700">
                STARTER
              </th>
              <th className="p-6 text-blue-600 dark:text-blue-400 font-extrabold border-b border-slate-300 dark:border-slate-700">
                MEDIUM
              </th>
              <th className="p-6 text-blue-600 dark:text-blue-400 font-extrabold border-b border-slate-300 dark:border-slate-700">
                ADVANCED
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-950">
            {comparisonData.map((row, idx) => (
              <tr
                key={row.feature}
                className={idx % 2 === 1 ? 'bg-slate-50 dark:bg-slate-900/50' : ''}
              >
                <td className="p-6 border-b border-slate-200 dark:border-slate-800 font-semibold text-slate-900 dark:text-white">
                  {row.feature}
                </td>
                <td className="p-6 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                  {row.go}
                </td>
                <td className="p-6 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                  {row.starter}
                </td>
                <td className="p-6 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                  {row.medium}
                </td>
                <td className="p-6 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                  {row.advanced}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionContainer>
  );
}
