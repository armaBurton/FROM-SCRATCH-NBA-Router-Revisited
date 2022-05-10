import { createContext, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [colorArr, setColorArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colorData, setColorData] = useState([]);
  const [thisColor, setThisColor] = useState([]);

  const colorState = {
    colorArr,
    setColorArr,
    loading,
    setLoading,
    colorData,
    setColorData,
    thisColor,
    setThisColor,
  };

  return (
    <ColorContext.Provider value={colorState}>{children}</ColorContext.Provider>
  );
}

export function useColorContext() {
  return useContext(ColorContext);
}
