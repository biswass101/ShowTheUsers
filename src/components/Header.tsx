import { Users } from "lucide-react";

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1240px] items-center justify-between border-b border-(--line) py-[26px]">
      <a
        className="flex items-center gap-2.5 text-lg font-extrabold tracking-[-0.06em] text-(--ink) no-underline"
        href="/"
        aria-label="Northstar home"
      >
        <span className="flex size-[31px] items-center justify-center rounded-full bg-(--lime)">
          <Users size={17} strokeWidth={2.5} />
        </span>
        <span>nbnstar</span>
      </a>
      <nav
        className="ml-auto mr-0 flex gap-3.5 sm:mr-[42px] sm:gap-[25px]"
        aria-label="Primary navigation"
      >
        <a
          className="text-xs text-(--ink) after:mt-1.5 after:block after:h-0.5 after:w-[18px] after:bg-(--forest)"
          href="#directory"
        >
          User
        </a>
      </nav>
    </header>
  );
}
