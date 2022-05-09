import { Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useColorContext } from './context/ColorProvider';
import fetchColorInfo from './services/fetchColor';
import Colors from './views/Colors/Colors';
import style from './App.css';

export default function App() {
  const { colorArr, setColorArr, colorData, setColorData } = useColorContext();
  const history = useHistory();
  // const [data, setData] = useState

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

  function promises() {}

  useEffect(() => {
    const colorInfoArr = [];
    const data = async () => {
      const array = await Promise.all(
        colorArr.map(async (color) => {
          return await fetchColorInfo(color);
        })
      );
      setColorData(array);
    };
    data();
  }, [colorArr]);

  return (
    <main>
      <nav>RandoColor Generator</nav>

      <Switch>
        <Route path="/colors">
          <Colors />
        </Route>
        <Route path="/">
          <Redirect to="/colors" />
        </Route>
      </Switch>
    </main>
  );
}
