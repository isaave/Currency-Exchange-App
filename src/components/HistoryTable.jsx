import { useMemo, useState } from 'react';
import { downloadCSV, toCSV } from '../utils/csv.js';
import { formatCurrency, formatDate, formatRate } from '../utils/format.js';

const SORTABLE_COLUMNS = [
  { key: 'date', label: 'Data' },
  { key: 'amount', label: 'Valor' },
  { key: 'rate', label: 'Taxa' },
  { key: 'convertedAmount', label: 'Valor convertido' },
];

export default function HistoryTable({ conversions, onClear }) {
  const [sortKey, setSortKey] = useState('date');
  const [sortDir, setSortDir] = useState('desc');
  const [search, setSearch] = useState('');

  const visibleConversions = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filteredConversions = conversions.filter((conversion) => {
      if (!query) {
        return true;
      }

      const haystack = [
        conversion.base,
        conversion.target,
        conversion.date,
        conversion.amount,
        conversion.rate,
        conversion.convertedAmount,
      ]
        .map((value) => String(value ?? '').toLowerCase())
        .join(' ');

      return haystack.includes(query);
    });

    const sortedConversions = [...filteredConversions].sort((a, b) => {
      const direction = sortDir === 'asc' ? 1 : -1;

      if (sortKey === 'amount') {
        return direction * (a.amount - b.amount);
      }
      if (sortKey === 'rate') {
        return direction * (a.rate - b.rate);
      }
      if (sortKey === 'convertedAmount') {
        return direction * (a.convertedAmount - b.convertedAmount);
      }

      return direction * String(a.date ?? '').localeCompare(String(b.date ?? ''));
    });

    return sortedConversions;
  }, [conversions, search, sortKey, sortDir]);

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir((currentDir) => (currentDir === 'asc' ? 'desc' : 'asc'));
      return;
    }

    setSortKey(key);
    setSortDir(key === 'date' ? 'desc' : 'asc');
  }

  function handleExportCSV() {
    downloadCSV('conversoes.csv', toCSV(visibleConversions));
  }

  return (
    <section className="card space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-foreground">Histórico de conversões</h2>
          <p className="text-sm text-muted">{conversions.length} registro(s) realizados.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Filtrar histórico…"
            className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          />
          <button type="button" onClick={handleExportCSV} className="btn-secondary">
            Exportar CSV
          </button>
          {conversions.length > 0 && (
            <button
              type="button"
              onClick={onClear}
              className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Limpar histórico
            </button>
          )}
        </div>
      </div>

      {visibleConversions.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-surface p-6 text-center text-sm text-muted">
          {conversions.length === 0 ? 'Nenhuma conversão realizada ainda.' : 'Nenhum registro encontrado para o filtro.'}
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs font-semibold tracking-wide text-muted uppercase">
                {SORTABLE_COLUMNS.map((column) => (
                  <th key={column.key} className="px-3 py-2">
                    <button type="button" onClick={() => handleSort(column.key)} className="font-semibold text-muted hover:text-foreground">
                      {column.label}
                      {sortKey === column.key ? (sortDir === 'asc' ? ' ▲' : ' ▼') : ''}
                    </button>
                  </th>
                ))}
                <th className="px-3 py-2 font-semibold text-muted uppercase">Conversão</th>
              </tr>
            </thead>
            <tbody>
              {visibleConversions.map((conversion) => (
                <tr key={conversion.id} className="border-t border-border">
                  <td className="px-3 py-2 text-foreground">{formatDate(conversion.date)}</td>
                  <td className="px-3 py-2 text-foreground">{formatCurrency(conversion.amount, conversion.base)}</td>
                  <td className="px-3 py-2 text-body">{conversion.base} → {conversion.target}</td>
                  <td className="px-3 py-2 text-foreground">{formatRate(conversion.rate)}</td>
                  <td className="px-3 py-2 text-foreground">{formatCurrency(conversion.convertedAmount, conversion.target)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
