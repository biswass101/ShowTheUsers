import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="mx-auto flex max-w-310 justify-between py-7 pb-8.5 font-mono text-[10px] uppercase text-(--muted)"
      id="about"
    >
      <span>© {new Date().getFullYear()} nbnstar</span>
    </footer>
  );
}
