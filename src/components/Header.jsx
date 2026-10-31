export default function Header({ screen, onNavigate }) {
  const navItems = [
    { id: 'conversao', label: 'Conversão' },
    { id: 'analise', label: 'Análise' },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
        <p className="text-xs font-bold tracking-wide text-blue-600 uppercase">
          Projeto 02 · Frankfurter API
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Currency Exchange</h1>
            <p className="text-sm text-muted">
              Converta valores entre moedas e analise a evolução das taxas de câmbio.
            </p>
          </div>
          <nav className="flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  screen === item.id
                    ? 'bg-primary text-white hover:bg-primary-strong'
                    : 'border border-border bg-surface text-foreground hover:bg-subtle'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
