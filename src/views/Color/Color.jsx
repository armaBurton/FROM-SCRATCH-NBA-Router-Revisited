import style from './color.css';
import { Link } from 'react-router-dom';

export default function Color({ color }) {
  const colorStyle = {
    background: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
    color: `${color.contrast.value}`,
  };

  console.log(color);

  return (
    <Link to={`/colors/${color.hex.clean}`} className={style.colorLink}>
      <section className={style.colorCard} style={colorStyle}>
        <p className={`${style.colorName} ${style.underline}`}>
          {color.name.value}
        </p>
        <p>HEX: {color.hex.value}</p>
        <p>
          R: {color.rgb.r} G: {color.rgb.g} B: {color.rgb.b}
        </p>
        <p>
          C: {color.cmyk.c} M: {color.cmyk.m} Y: {color.cmyk.y} K:{' '}
          {color.cmyk.k}
        </p>
        <p>
          H: {color.hsl.h} S: {color.hsl.s} L: {color.hsl.l}
        </p>
      </section>
    </Link>
  );
}
