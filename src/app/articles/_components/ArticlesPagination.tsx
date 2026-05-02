import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ArticlesPaginationContent {
  current: number;
  total: number;
}

interface ArticlesPaginationProps {
  content: ArticlesPaginationContent;
}

export function ArticlesPagination({ content }: ArticlesPaginationProps) {
  const { current, total } = content;
  const pageNumbers = [1, 2, 3];
  const showEllipsis = total > 4;

  return (
    <div className="bg-surface pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="outline" className="h-11 w-11 rounded-xl">
            <ChevronLeft className="size-4" />
          </Button>
          {pageNumbers.map((page) => (
            <Button
              key={page}
              variant="ghost"
              className={`h-11 w-11 rounded-xl text-sm font-bold ${
                page === current
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {page}
            </Button>
          ))}
          {showEllipsis && <span className="px-2 text-sm font-bold text-outline-variant">...</span>}
          {showEllipsis && (
            <Button
              variant="ghost"
              className="h-11 w-11 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high"
            >
              {total}
            </Button>
          )}
          <Button variant="outline" className="h-11 w-11 rounded-xl">
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
