import { SkeletonCard } from "./SkeletonCard";

const LOADING_CARDS = 6;

export function LoadingGrid() {
  return (
    <div
      className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
      aria-label="Loading user"
      aria-busy="true"
    >
      {Array.from({ length: LOADING_CARDS }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
