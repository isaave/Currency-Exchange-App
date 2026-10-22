import { useState } from 'react';
import Header from './components/Header.jsx';
import Converter from './components/Converter.jsx';
import ExchangeChart from './components/ExchangeChart.jsx';
import HistoryTable from './components/HistoryTable.jsx';
import { useConversions } from './hooks/useConversions.js';

export default function App() {
  const { conversions, addConversion, clearConversions } = useConversions();
  const [base, setBase] = useState('USD');
  const [target, setTarget] = useState('BRL');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6">
        <Converter
          base={base}
          target={target}
          onBaseChange={setBase}
          onTargetChange={setTarget}
          onAddConversion={addConversion}
        />
        <ExchangeChart base={base} target={target} />
        <HistoryTable conversions={conversions} onClear={clearConversions} />
      </main>
      <footer className="mx-auto max-w-6xl px-4 pb-10 text-center text-xs text-muted sm:px-6">
        React 19 · Vite 8 · Tailwind CSS 4 · Frankfurter API
      </footer>
    </div>
  );
}
