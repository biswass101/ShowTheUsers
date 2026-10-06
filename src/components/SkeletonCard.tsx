export function SkeletonCard() {
  return (
    <div className="min-h-[280px] animate-pulse border border-(--line) bg-white p-[18px]">
      <div className="h-2 w-[30%] bg-[#edf2ee]" />
      <div className="mx-auto my-[-6px] h-[106px] w-[106px] rounded-full bg-[#edf2ee]" />
      <div className="mx-auto mt-[116px] h-[15px] w-[45%] bg-[#edf2ee]" />
      <div className="mx-auto mt-2 h-2 w-[30%] bg-[#edf2ee]" />
    </div>
  );
}
