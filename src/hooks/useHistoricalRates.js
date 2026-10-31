import { useEffect, useState } from 'react';
import { getHistoricalRates } from '../api/frankfurter.js';
import { addDaysToISODate, toISODate } from '../utils/dates.js';

const HISTORY_WINDOW_DAYS = 30;

export function useHistoricalRates(base, symbol, fromDate, toDate) {
  const endDate = toDate || toISODate();
  const startDate = fromDate || addDaysToISODate(endDate, -HISTORY_WINDOW_DAYS);
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    let ignore = false;

    async function load() {
      setState({ data: null, loading: true, error: null });

      try {
        const data = await getHistoricalRates({ base, symbol, startDate, endDate });

        if (!ignore) {
          setState({ data, loading: false, error: null });
        }
      } catch (error) {
        if (!ignore) {
          setState({ data: null, loading: false, error: error.message });
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [base, symbol, startDate, endDate]);

  const points = Object.entries(state.data?.rates ?? {})
    .map(([date, rates]) => ({ date, rate: rates?.[symbol] }))
    .filter((point) => point.rate !== undefined)
    .filter((point) => (!fromDate || point.date >= fromDate) && (!toDate || point.date <= toDate))
    .sort((a, b) => a.date.localeCompare(b.date));

  return { points, loading: state.loading, error: state.error };
}
