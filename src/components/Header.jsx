export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
        <p className="text-xs font-bold tracking-wide text-blue-600 uppercase">
          Projeto 02 · Frankfurter API
        </p>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Currency Exchange</h1>
        <p className="text-sm text-muted">
          Converta valores entre moedas e analise a evolução das taxas de câmbio.
        </p>
      </div>
    </header>
  );
}
