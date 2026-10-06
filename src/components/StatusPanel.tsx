import { AlertCircle, RefreshCw, Search } from "lucide-react";

type StatusPanelProps = {
  type: "error" | "empty";
  message?: string;
  onRetry?: () => void;
};

export function StatusPanel({ type, message, onRetry }: StatusPanelProps) {
  if (type === "empty") {
    return (
      <div className="flex min-h-75 flex-col items-center justify-center border border-dashed border-[#b8c8bf] text-center text-(--muted)">
        <Search size={28} />
        <h2 className="mb-2 mt-[14px] text-xl text-(--ink)">
          No user found with this nam
        </h2>
      </div>
    );
  }

  return (
    <div
      className="flex min-h-75 flex-col items-center justify-center border border-dashed border-[#b8c8bf] text-center text-[#a24f42]"
      role="alert"
    >
      <AlertCircle size={28} />
      <h2 className="mb-2 mt-[14px] text-xl text-(--ink)">
        Something went wrong
      </h2>
      <p className="text-[13px]">{message}</p>
      <button
        className="mt-5 flex items-center gap-2 border-0 bg-(--forest) px-4 py-2.5 text-xs text-white"
        type="button"
        onClick={onRetry}
      >
        <RefreshCw size={16} /> Try again
      </button>
    </div>
  );
}
