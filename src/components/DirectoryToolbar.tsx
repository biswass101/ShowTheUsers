import { Search } from "lucide-react";

type DirectoryToolbarProps = {
  isLoading: boolean;
  query: string;
  onQueryChange: (query: string) => void;
};

export function DirectoryToolbar({
  isLoading,
  query,
  onQueryChange,
}: DirectoryToolbarProps) {
  return (
    <div className="mb-7 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-[22px] tracking-tighter text-(--ink)">
          User index <span className="ml-1 font-mono text-xs font-normal text-(--muted)">{isLoading ? "—" : "48"}</span>
        </h2>
        <p className="mt-1.5 text-xs text-(--muted)">Find a name, and see.</p>
      </div>
      <label className="flex w-full items-center gap-2 border-b border-(--ink) px-0.5 py-2 text-(--muted) sm:w-[235px]">
        <Search size={17} aria-hidden="true" />
        <input
          className="w-full bg-transparent text-xs text-(--ink) outline-none placeholder:text-[#9aa69f]"
          type="search"
          placeholder="Search by name..."
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          aria-label="Search user by name"
        />
      </label>
    </div>
  );
}
