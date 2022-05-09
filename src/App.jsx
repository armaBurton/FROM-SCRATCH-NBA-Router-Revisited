import { Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useColorContext } from './context/ColorProvider';
import fetchColorInfo from './services/fetchColor';
import Colors from './views/Colors/Colors';
import style from './App.css';

export default function App() {
  const { colorArr, setColorArr, colorData, setColorData } = useColorContext();
  const history = useHistory();

  //create randomly generated array of colors
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const rgb = [r, g, b];
      arr.push(rgb);
    }
    setColorArr(arr);
  }, []);

  useEffect(() => {
    const colorInfoArr = [];
    Promise.all(
      colorArr.map(async (color) => {
        const colorInfo = await fetchColorInfo(color);
        setTimeout(() => {}, 200);

        colorInfoArr.push(colorInfo);
      })
    );
    setColorData(colorInfoArr);
  }, [colorArr]);

  return (
    <main>
      <nav>RandoColor Generator</nav>
      {/* <section className={style.colorPallet}> */}
      <Switch>
        <Route path="/colors">
          <Colors />
        </Route>
        <Route path="/">
          <Redirect to="/colors" />
        </Route>
      </Switch>
      {/* </section> */}
    </main>
  );
}
