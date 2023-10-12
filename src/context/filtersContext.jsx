import { useState, createContext, useMemo } from 'react';

const context = {};

export const FiltersContext = createContext(context);

export function FiltersContextProvider(props) {
  const [filterToggle, setFilterToggle] = useState(false);

  const toggleFilter = () => {
    setFilterToggle(!filterToggle);
  };

  const contextValues = useMemo(
    () => ({
      filterState: filterToggle,
      toggleFilter,
      setFilterToggle,
    }),
    [filterToggle, toggleFilter],
  );

  return <FiltersContext.Provider value={contextValues}>{props.children}</FiltersContext.Provider>;
}
