import { useState } from 'react';
import Header from './components/Header.jsx';
import Converter from './components/Converter.jsx';
import ExchangeChart from './components/ExchangeChart.jsx';
import HistoryTable from './components/HistoryTable.jsx';
import RatesTable from './components/RatesTable.jsx';
import { useConversions } from './hooks/useConversions.js';
import { useHistoricalRates } from './hooks/useHistoricalRates.js';

const CURRENCIES = [
  { code: 'USD', name: 'Dólar Americano' },
  { code: 'EUR', name: 'Euro' },
  { code: 'BRL', name: 'Real' },
  { code: 'GBP', name: 'Libra Esterlina' },
  { code: 'JPY', name: 'Iene Japonês' },
  { code: 'CHF', name: 'Franco Suíço' },
  { code: 'CAD', name: 'Dólar Canadense' },
  { code: 'AUD', name: 'Dólar Australiano' },
  { code: 'CNY', name: 'Yuan Chinês' },
  { code: 'INR', name: 'Rupia Indiana' },
];

export default function App() {
  const [screen, setScreen] = useState('conversao');
  const [base, setBase] = useState('USD');
  const [target, setTarget] = useState('BRL');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const { conversions, addConversion, clearConversions } = useConversions();
  const { points, loading, error } = useHistoricalRates(base, target, fromDate, toDate);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header screen={screen} onNavigate={setScreen} />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6">
        {screen === 'conversao' ? (
          <>
            <Converter
              base={base}
              target={target}
              onBaseChange={setBase}
              onTargetChange={setTarget}
              onAddConversion={addConversion}
            />
            <HistoryTable conversions={conversions} onClear={clearConversions} />
          </>
        ) : (
          <>
            <section className="card space-y-4">
              <div>
                <h2 className="text-xl font-bold text-foreground">Filtros</h2>
                <p className="text-sm text-muted">Refine a análise por par de moedas e período.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-foreground">Moeda de origem</span>
                  <select
                    value={base}
                    onChange={(event) => setBase(event.target.value)}
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {CURRENCIES.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code} — {currency.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-foreground">Moeda de destino</span>
                  <select
                    value={target}
                    onChange={(event) => setTarget(event.target.value)}
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {CURRENCIES.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code} — {currency.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-foreground">De</span>
                  <input
                    type="date"
                    value={fromDate}
                    onChange={(event) => setFromDate(event.target.value)}
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  />
                </label>
                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-foreground">Até</span>
                  <input
                    type="date"
                    value={toDate}
                    onChange={(event) => setToDate(event.target.value)}
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  />
                </label>
              </div>
            </section>

            <ExchangeChart points={points} loading={loading} error={error} base={base} target={target} />
            <RatesTable points={points} base={base} target={target} />
          </>
        )}
      </main>
      <footer className="mx-auto max-w-6xl px-4 pb-10 text-center text-xs text-muted sm:px-6">
        React 19 · Vite 8 · Tailwind CSS 4 · Frankfurter API
      </footer>
    </div>
  );
}
