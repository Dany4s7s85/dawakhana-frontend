import { useState, createContext, useEffect, useMemo } from 'react';

const context = {};

export const LoadingContext = createContext(context);

export function LoadingContextProvider(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

  const contextValues = useMemo(
    () => ({
      isLoading: loading,
    }),
    [],
  );

  return <LoadingContext.Provider value={contextValues}>{props.children}</LoadingContext.Provider>;
}
