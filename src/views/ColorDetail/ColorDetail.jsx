import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import style from './ColorDetail.css';
import { useColorContext } from '../../context/ColorProvider';

export default function ColorDetail() {
  const { thisColor, setThisColor } = useColorContext();
  const history = useHistory();
  const { hex } = useParams();
  const [colorStyle, setColorStyle] = useState({});

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
  const [c, setC] = useState('');
  const [m, setM] = useState('');
  const [y, setY] = useState('');
  const [k, setK] = useState('');
  const [h, setH] = useState('');
  const [s, setS] = useState('');
  const [l, setL] = useState('');
  const [name, setName] = useState('');
  const [hexValue, setHexValue] = useState('');

  useEffect(() => {
    const hexStyle = async () => {
      setColorStyle({
        background: await thisColor.rgb.value,
        color: await thisColor.contrast.value,
      });
      setR(thisColor.rgb.r);
      setG(thisColor.rgb.g);
      setB(thisColor.rgb.b);
      setC(thisColor.cmyk.c);
      setM(thisColor.cmyk.m);
      setY(thisColor.cmyk.y);
      setK(thisColor.cmyk.k);
      setH(thisColor.hsl.h);
      setS(thisColor.hsl.s);
      setL(thisColor.hsl.l);
      setName(thisColor.name.value);
      setHexValue(thisColor.hex.value);
    };
    hexStyle();
  }, [thisColor]);

  function handleClick(e) {
    e.preventDefault();
    history.push('/colors');
  }

  return (
    <section
      className={style.detailSection}
      style={colorStyle}
      onClick={handleClick}
    >
      <h1 className={style.detailName}>{name}</h1>
      <p>HEX: {hexValue}</p>
      <p>
        RGB: {r} {g} {b}
      </p>
      <p>
        CMYK: {c} {m} {y} {k}
      </p>
      <p>
        HSL: {h} {s} {l}
      </p>
    </section>
  );
}
