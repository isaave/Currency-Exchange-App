import { useMemo, useState } from 'react';
import { downloadCSV, toRatesCSV } from '../utils/csv.js';
import { formatDate, formatRate } from '../utils/format.js';

const SORTABLE_COLUMNS = [
  { key: 'date', label: 'Data' },
  { key: 'rate', label: 'Taxa' },
];

export default function RatesTable({ points, base, target }) {
  const [sortKey, setSortKey] = useState('date');
  const [sortDir, setSortDir] = useState('desc');

  const rows = useMemo(() => {
    const sorted = [...points].sort((a, b) => {
      const direction = sortDir === 'asc' ? 1 : -1;

      if (sortKey === 'rate') {
        return direction * (a.rate - b.rate);
      }

      return direction * String(a.date ?? '').localeCompare(String(b.date ?? ''));
    });

    return sorted;
  }, [points, sortKey, sortDir]);

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir((currentDir) => (currentDir === 'asc' ? 'desc' : 'asc'));
      return;
    }

    setSortKey(key);
    setSortDir(key === 'date' ? 'desc' : 'asc');
  }

  function handleExportCSV() {
    downloadCSV(`taxas_${base}_${target}.csv`, toRatesCSV(points));
  }

  return (
    <section className="card space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-foreground">Taxas históricas</h2>
          <p className="text-sm text-muted">{points.length} registro(s) encontrados.</p>
        </div>
        <button type="button" onClick={handleExportCSV} className="btn-secondary">
          Exportar CSV
        </button>
      </div>

      {rows.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-surface p-6 text-center text-sm text-muted">
          Nenhum registro histórico encontrado.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs font-semibold tracking-wide text-muted uppercase">
                {SORTABLE_COLUMNS.map((column) => (
                  <th key={column.key} className="px-3 py-2">
                    <button
                      type="button"
                      onClick={() => handleSort(column.key)}
                      className="font-semibold text-muted hover:text-foreground"
                    >
                      {column.label}
                      {sortKey === column.key ? (sortDir === 'asc' ? ' ▲' : ' ▼') : ''}
                    </button>
                  </th>
                ))}
                <th className="px-3 py-2 font-semibold text-muted uppercase">Variação (%)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((point, index) => {
                const previous = rows[index - 1];
                const variation = previous ? ((point.rate - previous.rate) / previous.rate) * 100 : 0;

                return (
                  <tr key={point.date} className="border-t border-border">
                    <td className="px-3 py-2 text-foreground">{formatDate(point.date)}</td>
                    <td className="px-3 py-2 text-body">{formatRate(point.rate)}</td>
                    <td className="px-3 py-2 text-foreground">{`${variation >= 0 ? '+' : ''}${variation.toFixed(2)}%`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
