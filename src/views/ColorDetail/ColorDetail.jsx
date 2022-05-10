import { useEffect, useState } from 'react';
import {
  useParams,
  Redirect,
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom';
import style from './ColorDetail.css';
import dummyData from './dummyData';

export default function ColorDetail() {
  const history = useHistory();
  const { hex } = useParams();
  console.log(hex);
  const [currentColor, setCurrentColor] = useState(dummyData);
  // const [state, setState] = useState([]);
  const [colorStyle, setColorStyle] = useState({});
  const pathname = history.location.pathname;
  let stateArrJson = [];
  let css = {};

  useEffect(() => {
    const stateArr = sessionStorage.getItem('colorData');
    stateArrJson = JSON.parse(stateArr);
    console.log(stateArrJson);
    // setState(stateArrJson);
  }, []);

  // console.log(pathname, state);

  useEffect(() => {
    for (let i = 0; i < stateArrJson.length; i++) {
      // console.log(hex, state[i].hex.clean);
      if (hex === stateArrJson[i].hex.clean) {
        setCurrentColor({ ...stateArrJson[i] });
      }
    }
  }, [stateArrJson]);

  useEffect(() => {
    setColorStyle({
      background: currentColor.rgb.value,
      color: currentColor.contrast.value,
    });
  }, [currentColor]);

  console.log(colorStyle);
  function handleClick(e) {
    e.preventDefault();
    history.push('/colors');
  }

  return (
    // <Link className={style.detailLink} to="/colors">
    <section className={style.detailSection} style={css} onClick={handleClick}>
      <h1>{currentColor.name.value}</h1>
      <p>
        RGB: {currentColor.rgb.r} {currentColor.rgb.g} {currentColor.rgb.b}
      </p>
    </section>
    // </Link>
  );
}
