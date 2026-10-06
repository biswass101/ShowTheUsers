import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  page: number;
  totalPages: number;
  isLoading: boolean;
  onPageChange: (page: number) => void;
};

export function Pagination({
  page,
  totalPages,
  isLoading,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      className="mt-[33px] flex items-center justify-center"
      aria-label="Directory pages"
    >
      <button
        className="flex size-[30px] items-center justify-center rounded-full border border-(--line) bg-transparent text-(--ink) disabled:cursor-not-allowed disabled:opacity-40"
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1 || isLoading}
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
      </button>
      <div className="mx-[15px] flex gap-1">
        {pages.map((pageNumber) => (
          <button
            className={`flex size-[30px] items-center justify-center border-0 bg-transparent text-xs text-(--muted) disabled:cursor-not-allowed disabled:opacity-40 ${pageNumber === page ? "rounded-full bg-(--forest) text-white" : ""}`}
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            disabled={isLoading}
            aria-current={pageNumber === page ? "page" : undefined}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="flex size-[30px] items-center justify-center rounded-full border border-(--line) bg-transparent text-(--ink) disabled:cursor-not-allowed disabled:opacity-40"
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages || isLoading}
        aria-label="Next page"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}
