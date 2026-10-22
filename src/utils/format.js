const formatterCache = new Map();

function getCurrencyFormatter(currency) {
  let formatter = formatterCache.get(currency);

  if (formatter === undefined) {
    formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    });

    formatterCache.set(currency, formatter);
  }

  return formatter;
}

export function formatCurrency(value, currency) {
  const numericValue = Number(value);

  if (value === null || value === undefined || Number.isNaN(numericValue)) {
    return '—';
  }

  return getCurrencyFormatter(currency).format(numericValue);
}

export function formatRate(value) {
  const numericValue = Number(value);

  if (value === null || value === undefined || Number.isNaN(numericValue)) {
    return '—';
  }

  return numericValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });
}

export function formatDate(isoDate) {
  if (!isoDate) {
    return '—';
  }

  const date = new Date(`${isoDate}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return '—';
  }

  return date.toLocaleDateString('pt-BR');
}
