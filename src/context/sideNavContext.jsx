import { useState, createContext, useMemo } from 'react';

const context = {};

export const SideNavContext = createContext(context);

export function SideNavContextProvider(props) {
  const [sideNavToggle, setSideNavToggle] = useState(true);

  const toggleSideNav = () => {
    setSideNavToggle(!sideNavToggle);
  };
  const contextValues = useMemo(
    () => ({
      sideNavState: sideNavToggle,
      toggleSideNav,
    }),
    [sideNavToggle],
  );

  return <SideNavContext.Provider value={contextValues}>{props.children}</SideNavContext.Provider>;
}
