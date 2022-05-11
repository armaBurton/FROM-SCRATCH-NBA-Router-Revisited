import style from './color.css';
import { useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useColorContext } from '../../context/ColorProvider';

export default function Color({ color }) {
  const { setThisColor } = useColorContext();
  const colorStyle = {
    background: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
    color: `${color.contrast.value}`,
  };
  const history = useHistory();

  // function handleClick(e) {
  //   e.preventDefault();

  //   history.push(`/colors/${color.hex.clean}`);
  // }

  // useEffect(() => {
  //   const fetchHex = async () => {
  //     const hexData = await fetch(
  //       `https://www.thecolorapi.com/id?hex=${color.hex.clean}`
  //     );
  //     const hexDataJson = await hexData.json();

  //     console.log(hexDataJson);
  //     setThisColor({ ...hexDataJson });
  //   };
  //   fetchHex();
  // }, []);

  return (
    <Link to={`/colors/${color.hex.clean}`} className={style.colorLink}>
      <section className={style.colorCard} style={colorStyle}>
        <p className={`${style.colorName} ${style.underline}`}>
          {color.name.value}
        </p>
        <p className={`${style.rgb} ${style.underline}`}>
          R: {color.rgb.r} G: {color.rgb.g} B: {color.rgb.b}
        </p>
      </section>
    </Link>
  );
}
