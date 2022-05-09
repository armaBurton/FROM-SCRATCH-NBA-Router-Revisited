import { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [colorArr, setColorArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colorData, setColorData] = useState([]);

  const colorState = {
    colorArr,
    setColorArr,
    loading,
    setLoading,
    colorData,
    setColorData,
  };

  return (
    <ColorContext.Provider value={colorState}>{children}</ColorContext.Provider>
  );
}

export function useColorContext() {
  return useContext(ColorContext);
}
