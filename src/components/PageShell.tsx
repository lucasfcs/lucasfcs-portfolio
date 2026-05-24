type PageShellProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <header className="mb-10 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-lg text-white/60">{subtitle}</p>
          )}
        </header>
        {children}
      </div>
    </main>
  );
}
