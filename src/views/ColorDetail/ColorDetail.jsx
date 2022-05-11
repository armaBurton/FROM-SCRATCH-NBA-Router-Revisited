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
  const { colorData, url, setUrl, thisColor, setThisColor } = useColorContext();
  const history = useHistory();
  const { hex } = useParams();
  const [currentColor, setCurrentColor] = useState(dummyData);
  const [colorStyle, setColorStyle] = useState({});
  const pathname = history.location.pathname;
  const location = useLocation();
  location.state = pathname;

  // if (thisColor.length === 0) setThisColor(hex);
  setUrl(pathname);

  useEffect(() => {
    const found = colorData.find((color) => color.hex.clean === hex);
    setCurrentColor(found);
  }, []);

  useEffect(() => {
    const fetchHex = async () => {
      const hexData = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`);
      const hexDataJson = await hexData.json();

      await setThisColor({ ...hexDataJson });
    };
    fetchHex();
  }, []);

  const [r, setR] = useState('');
  const [g, setG] = useState('');
  const [b, setB] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const hexStyle = async () => {
      setColorStyle({
        background: await thisColor.rgb.value,
        color: await thisColor.contrast.value,
      });
      setR(thisColor.rgb.r);
      setG(thisColor.rgb.g);
      setB(thisColor.rgb.b);
      setName(thisColor.name.value);
    };
    hexStyle();
  }, [thisColor]);

  function handleClick(e) {
    e.preventDefault();
    history.push('/colors');
  }
  console.log(currentColor.name.value);

  return (
    // <Link className={style.detailLink} to={handleClick}>
    <section
      className={style.detailSection}
      style={colorStyle}
      onClick={handleClick}
    >
      <h1>{name}</h1>
      <p>
        RGB: {r} {g} {b}
      </p>
    </section>
    // </Link>
  );
}
