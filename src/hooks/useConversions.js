import { useCallback, useState } from 'react';

export function useConversions() {
  const [conversions, setConversions] = useState([]);

  const addConversion = useCallback((conversion) => {
    setConversions((previousConversions) => [conversion, ...previousConversions]);
  }, []);

  const clearConversions = useCallback(() => {
    setConversions([]);
  }, []);

  return { conversions, addConversion, clearConversions };
}
