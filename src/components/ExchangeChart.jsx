import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useHistoricalRates } from '../hooks/useHistoricalRates.js';
import { formatRate } from '../utils/format.js';

export default function ExchangeChart({ base, target }) {
  const { points, loading, error } = useHistoricalRates(base, target);

  return (
    <section className="card space-y-4">
      <div>
        <h2 className="text-xl font-bold text-foreground">Evolução da taxa</h2>
        <p className="text-sm text-muted">Histórico de {base} → {target} nos últimos 30 dias.</p>
      </div>

      {loading && <p className="text-sm text-body">Carregando histórico de cotações…</p>}
      {error && <p className="text-sm text-red-600">Não foi possível carregar o histórico: {error}</p>}
      {!loading && !error && points.length === 0 && (
        <p className="text-sm text-body">Nenhum ponto histórico encontrado.</p>
      )}

      {!loading && !error && points.length > 0 && (
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
      )}
    </section>
  );
}
