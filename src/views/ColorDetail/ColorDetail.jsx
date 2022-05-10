import { useEffect, useState } from 'react';
import {
  useParams,
  Redirect,
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom';
import style from './ColorDetail.css';
import { useColorContext } from '../../context/ColorProvider';
import dummyData from './dummyData';

export default function ColorDetail() {
  const { colorData } = useColorContext();
  const history = useHistory();
  const { hex } = useParams();
  const [currentColor, setCurrentColor] = useState(dummyData);
  const [colorStyle, setColorStyle] = useState({});
  const pathname = history.location.pathname;
  const location = useLocation();
  location.state = pathname;
  console.log(location);

  // useEffect(() => {
  //   const stateArr = sessionStorage.getItem('colorData');
  //   stateArrJson = JSON.parse(stateArr);

  //   setState(stateArrJson);
  // }, []);

  useEffect(() => {
    for (let i = 0; i < colorData.length; i++) {
      if (hex === colorData[i].hex.clean) {
        setCurrentColor({ ...colorData[i] });
      }
    }
  }, []);

  console.log(currentColor);

  useEffect(() => {
    setColorStyle({
      background: currentColor.rgb.value,
      color: currentColor.contrast.value,
    });
  }, [currentColor]);

  function handleClick(e) {
    e.preventDefault();
    history.push('/colors');
  }

  return (
    // <Link className={style.detailLink} to={handleClick}>
    <section
      className={style.detailSection}
      style={colorStyle}
      onClick={handleClick}
    >
      <h1>{currentColor.name.value}</h1>
      <p>
        RGB: {currentColor.rgb.r} {currentColor.rgb.g} {currentColor.rgb.b}
      </p>
    </section>
    // </Link>
  );
}
