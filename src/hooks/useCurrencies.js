import { useEffect, useState } from 'react';
import { getCurrencies } from '../api/frankfurter.js';

export function useCurrencies() {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const data = await getCurrencies();

        if (!ignore) {
          setCurrencies(data);
          setLoading(false);
        }
      } catch (error) {
        if (!ignore) {
          setError(error.message);
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  return { currencies, loading, error };
}
