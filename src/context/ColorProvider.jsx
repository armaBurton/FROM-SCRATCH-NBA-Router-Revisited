import { createContext, useContext, useState, useEffect } from 'react';
import fetchColorInfo from '../services/fetchColor';

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [colorArr, setColorArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colorData, setColorData] = useState([]);
  const [thisColor, setThisColor] = useState([]);
  const [url, setUrl] = useState({});

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const rgb = { r, g, b };
      arr.push(rgb);
    }
    setColorArr(arr);
  }, []);

  useEffect(() => {
    console.log(thisColor);
    const data = async () => {
      const array = await Promise.all(
        colorArr.map(async (color) => {
          return await fetchColorInfo(color);
        })
      );
      setColorData(array);
      window.sessionStorage.setItem('colorData', JSON.stringify(colorData));
      const cookie = sessionStorage.getItem('colorData');
      const cookieData = JSON.parse(cookie);
      console.log(cookieData);
    };
    data();
  }, [colorArr]);

  const colorState = {
    colorArr,
    setColorArr,
    loading,
    setLoading,
    colorData,
    setColorData,
    thisColor,
    setThisColor,
    url,
    setUrl,
  };

  return (
    <ColorContext.Provider value={colorState}>{children}</ColorContext.Provider>
  );
}

export function useColorContext() {
  return useContext(ColorContext);
}
