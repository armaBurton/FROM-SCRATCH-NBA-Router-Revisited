import { createContext, useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import fetchColorInfo from '../services/fetchColor';

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [colorArr, setColorArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colorData, setColorData] = useState([]);
  const [thisColor, setThisColor] = useState([]);
  const [cookie, setCookie] = useState({});
  const [state, setState] = useState();

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
    const data = async () => {
      const array = await Promise.all(
        colorArr.map(async (color) => {
          return await fetchColorInfo(color);
        })
      );
      setColorData(array);
    };
    data();

    // const storage = window.sessionStorage.getItem('colorData');
    // console.log(storage);
    // if (colorData === []) {
    //   sessionStorage.clear();
    //   const data = async () => {
    //     const array = await Promise.all(
    //       colorArr.map(async (color) => {
    //         return await fetchColorInfo(color);
    //       })
    //     );
    //     setColorData(array);

    //     window.sessionStorage.setItem('colorData', JSON.stringify(array));
    //   };

    //   if (storage === null) {
    //     data();
    //   }
    // }

    // history.push('/colors', colorData);
    // } else {
    // console.log(await cookie.json());
    // setColorData(cookie);
    // }
  }, [colorArr]);
  console.log(colorData);

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
