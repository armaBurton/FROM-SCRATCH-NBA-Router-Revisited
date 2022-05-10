import { useEffect, useState } from 'react';
import { useParams, Redirect, Link, useHistory } from 'react-router-dom';
import { useColorContext } from '../../context/ColorProvider';
import style from './ColorDetail.css';
import dummyData from './dummyData';

export default function ColorDetail() {
  const { hex } = useParams();
  console.log(hex);
  const [currentColor, setCurrentColor] = useState(dummyData);
  const [state, setState] = useState([]);
  const [colorStyle, setColorStyle] = useState({});

  useEffect(() => {
    const stateArr = sessionStorage.getItem('colorData');
    const stateArrJson = JSON.parse(stateArr);

    setState(stateArrJson);
  }, []);

  useEffect(() => {
    // state.map(console.log);
    for (let i = 0; i < state.length; i++) {
      console.log(hex, state[i].hex.clean);
      if (hex === state[i].hex.clean) {
        setCurrentColor({ ...state[i] });
      }
    }
  }, [state]);

  console.log(currentColor);

  useEffect(() => {
    setColorStyle({
      background: currentColor.rgb.value,
      color: currentColor.contrast.value,
    });
  }, [currentColor]);

  console.log(colorStyle);

  // return <></>;

  return (
    <Link className={style.detailLink} to="/colors">
      <section className={style.detailSection} style={colorStyle}>
        <h1>{currentColor.name.value}</h1>
        <p>
          RGB: {currentColor.rgb.r} {currentColor.rgb.g} {currentColor.rgb.b}
        </p>
      </section>
    </Link>
  );
}
