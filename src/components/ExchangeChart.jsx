import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { formatRate } from '../utils/format.js';

export default function ExchangeChart({ points, loading, error, base, target }) {
  const rates = points.map((point) => point.rate);
  const currentRate = rates.length > 0 ? rates[rates.length - 1] : null;
  const firstRate = rates.length > 0 ? rates[0] : null;
  const highRate = rates.length > 0 ? Math.max(...rates) : null;
  const lowRate = rates.length > 0 ? Math.min(...rates) : null;
  const variation = firstRate ? ((currentRate - firstRate) / firstRate) * 100 : 0;

  return (
    <section className="card space-y-4">
      <div>
        <h2 className="text-xl font-bold text-foreground">Evolução da taxa</h2>
        <p className="text-sm text-muted">Histórico de {base} → {target}.</p>
      </div>

      {loading && <p className="text-sm text-body">Carregando histórico de cotações…</p>}
      {error && <p className="text-sm text-red-600">Não foi possível carregar o histórico: {error}</p>}
      {!loading && !error && points.length === 0 && (
        <p className="text-sm text-body">Nenhum ponto histórico encontrado.</p>
      )}

      {!loading && !error && points.length > 0 && (
        <>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={points} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <XAxis dataKey="date" />
                <YAxis dataKey="rate" tickFormatter={(value) => formatRate(value)} />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#2563eb" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-panel p-4">
              <span className="text-xs font-semibold tracking-wide text-muted uppercase">Taxa atual</span>
              <strong className="mt-1 block text-lg font-bold text-foreground">{formatRate(currentRate)}</strong>
            </div>
            <div className="rounded-xl border border-border bg-panel p-4">
              <span className="text-xs font-semibold tracking-wide text-muted uppercase">Variação</span>
              <strong className="mt-1 block text-lg font-bold text-foreground">{`${variation >= 0 ? '+' : ''}${variation.toFixed(2)}%`}</strong>
            </div>
            <div className="rounded-xl border border-border bg-panel p-4">
              <span className="text-xs font-semibold tracking-wide text-muted uppercase">Máxima</span>
              <strong className="mt-1 block text-lg font-bold text-foreground">{formatRate(highRate)}</strong>
            </div>
            <div className="rounded-xl border border-border bg-panel p-4">
              <span className="text-xs font-semibold tracking-wide text-muted uppercase">Mínima</span>
              <strong className="mt-1 block text-lg font-bold text-foreground">{formatRate(lowRate)}</strong>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
