const BASE_URL = 'https://api.frankfurter.dev/v1';

async function getJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Requisição falhou com status ${response.status}`);
  }

  return response.json();
}

/**
 * Busca as taxas de cotação mais recentes.
 * GET /v1/latest?base=USD&symbols=BRL,EUR
 */
export async function getLatestRates({ base, symbols = [] }) {
  const params = new URLSearchParams({ base });

  if (symbols.length > 0) {
    params.set('symbols', symbols.join(','));
  }

  const data = await getJson(`${BASE_URL}/latest?${params.toString()}`);

  return data;
}

/**
 * Busca as taxas históricas de um período.
 * GET /v1/{start_date}..{end_date}?base=USD&symbols=BRL
 */
export async function getHistoricalRates({ base, symbol, startDate, endDate }) {
  const period = `${startDate}..${endDate}`;
  const params = new URLSearchParams({ base, symbols: symbol });
  const data = await getJson(`${BASE_URL}/${period}?${params.toString()}`);

  return data;
}

/**
 * Busca a taxa histórica do dia informado.
 * GET /v1/{date}?base=USD&symbols=BRL
 */
export async function getHistoricalRate({ base, symbol, date }) {
  const params = new URLSearchParams({ base, symbols: symbol });
  const data = await getJson(`${BASE_URL}/${date}?${params.toString()}`);

  return data;
}

/**
 * Lista todas as moedas disponíveis na API.
 * GET /v1/currencies
 */
export async function getCurrencies() {
  const data = await getJson(`${BASE_URL}/currencies`);

  return Object.entries(data).map(([code, name]) => ({ code, name }));
}
