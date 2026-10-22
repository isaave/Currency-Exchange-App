import { useEffect, useState } from 'react';
import { getLatestRates } from '../api/frankfurter.js';

export function useExchangeRate(base, target) {
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    let ignore = false;

    async function load() {
      setState({ data: null, loading: true, error: null });

      try {
        const data = await getLatestRates({ base, symbols: [target] });

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
  }, [base, target]);

  const data = state.data;
  const rate = data?.rates?.[target] ?? null;

  return { rate, data, loading: state.loading, error: state.error };
}
