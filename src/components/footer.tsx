export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aazar Shaikh. Crafted with intent.
        </div>
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          AI · ML · Systems
        </div>
      </div>
    </footer>
  );
}
