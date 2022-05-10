import style from './color.css';
import { Link } from 'react-router-dom';

export default function Color({ color }) {
  const colorStyle = {
    background: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
    color: `${color.contrast.value}`,
  };

  return (
    <Link to={`/colors/${color.name.value}`}>
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
//saw
