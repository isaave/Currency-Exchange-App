import { useState } from 'react';
import { useCurrencies } from '../hooks/useCurrencies.js';
import { useExchangeRate } from '../hooks/useExchangeRate.js';
import { formatCurrency, formatDate, formatRate } from '../utils/format.js';

export default function Converter({ base, target, onBaseChange, onTargetChange, onAddConversion }) {
  const { currencies, loading: currenciesLoading, error: currenciesError } = useCurrencies();
  const [amount, setAmount] = useState('1');
  const { rate, data, loading, error } = useExchangeRate(base, target);

  const numericAmount = Number(amount);
  const convertedAmount = rate !== null && Number.isFinite(numericAmount) ? numericAmount * rate : null;

  function handleSwap() {
    onBaseChange(target);
    onTargetChange(base);
  }

  function handleConvert() {
    const value = Number(amount);

    if (!Number.isFinite(value) || value <= 0 || rate === null) {
      return;
    }

    onAddConversion({
      id: String(Date.now()),
      amount: value,
      base,
      target,
      rate,
      convertedAmount: value * rate,
      date: data?.date ?? null,
    });
  }

  return (
    <section className="card space-y-6">
      <div>
        <h2 className="text-xl font-bold text-foreground">Conversor de moedas</h2>
        <p className="text-sm text-muted">Informe o valor e as moedas para consultar a cotação.</p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-4">
        <label className="block flex-1 space-y-2">
          <span className="text-sm font-semibold text-foreground">Valor</span>
          <input
            type="number"
            min="0"
            step="any"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="0,00"
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          />
        </label>

        <label className="block flex-1 space-y-2">
          <span className="text-sm font-semibold text-foreground">Moeda de origem</span>
          <select
            value={base}
            onChange={(event) => onBaseChange(event.target.value)}
            disabled={currenciesLoading}
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {(currencies ?? []).map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code} — {currency.name}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={handleSwap}
          className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          ⇄ Trocar
        </button>

        <label className="block flex-1 space-y-2">
          <span className="text-sm font-semibold text-foreground">Moeda de destino</span>
          <select
            value={target}
            onChange={(event) => onTargetChange(event.target.value)}
            disabled={currenciesLoading}
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {(currencies ?? []).map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code} — {currency.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex justify-end">
        <button type="button" onClick={handleConvert} className="btn-primary">
          Converter
        </button>
      </div>

      <div className="rounded-xl border border-border bg-panel p-4">
        {loading && <p className="text-sm text-body">Buscando cotação em tempo real…</p>}
        {error && <p className="text-sm text-red-600">Não foi possível obter a taxa: {error}</p>}
        {currenciesError && <p className="text-sm text-red-600">Não foi possível carregar as moedas: {currenciesError}</p>}
        {!loading && !error && rate !== null && convertedAmount !== null && (
          <div className="space-y-1">
            <p className="text-sm text-body">
              {formatCurrency(numericAmount, base)} = {formatCurrency(convertedAmount, target)}
            </p>
            <p className="text-lg font-bold text-foreground">
              1 {base} equivale a {formatRate(rate)} {target}
            </p>
            <p className="text-xs text-muted">Cotação de {formatDate(data?.date)}</p>
          </div>
        )}
        {!loading && !error && rate === null && (
          <p className="text-sm text-body">Aguardando cotação…</p>
        )}
      </div>
    </section>
  );
}
