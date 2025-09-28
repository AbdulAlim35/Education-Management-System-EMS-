import React, { createContext, useContext, useEffect, useState } from "react";
export const TheemProvider = createContext();
const ThemeContext = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const getData = localStorage.getItem("authUser");
    if (getData) {
      setAuth(true);
    }
  }, []);

  let datalist = {
    isAuth,
    setAuth,
  };
  return (
    <TheemProvider.Provider value={datalist}>{children}</TheemProvider.Provider>
  );
};
export default ThemeContext;
export function useTheme() {
  return useContext(TheemProvider);
}
