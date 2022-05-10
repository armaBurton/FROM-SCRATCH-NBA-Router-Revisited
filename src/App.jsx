import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { useColorContext } from './context/ColorProvider';
import fetchColorInfo from './services/fetchColor';
import Colors from './views/Colors/Colors';
import ColorDetail from './views/ColorDetail/ColorDetail';
import Cookies from 'universal-cookie';
import style from './App.css';
import Color from './views/Color/Color';

export default function App() {
  const { colorArr, setColorArr, colorData, setColorData } = useColorContext();
  const [search, setSearch] = useState();
  const history = useHistory();

  //create randomly generated array of colors
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

      window.sessionStorage.setItem('colorData', JSON.stringify(array));
    };

    data();

    history.push('/colors', colorData);
  }, [colorArr]);

  function handleRefresh(e) {
    e.preventDefault();
    location.reload();
  }

  return (
    <main>
      <nav>
        <h1 className={style.title}>RandoColor Generator</h1>
        <div className={style.interactions}>
          <form onSubmit={handleSubmit}>
            <input
              name="search"
              id="search"
              type="text"
              data-testId="search"
              placeholder="rgb values, ie: 123, 217, 13"
            />
          </form>
          <button onClick={handleRefresh} className={style.refreshColors}>
            Refresh Colors
          </button>
        </div>
      </nav>

      <Switch>
        <Route path="/colors/:hex">
          <ColorDetail />
        </Route>
        <Route path="/colors">
          <Colors />
        </Route>
        <Route path="/">{history.push('/colors')}</Route>
      </Switch>
    </main>
  );
}
