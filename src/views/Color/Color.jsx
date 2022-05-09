import style from './color.css';

export default function Color({ color }) {
  console.log(color);
  console.log(color.contrast.value);
  const colorStyle = {
    background: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
    color: `${color.contrast.value}`,
  };
  return (
    <section className={style.colorCard} style={colorStyle}>
      <p className={`${style.colorName} ${style.outline}`}>
        {color.name.value}
      </p>
      <p className={`${style.rgb} ${style.outline}`}>
        R: {color.rgb.r} G: {color.rgb.g} B: {color.rgb.b}
      </p>
    </section>
  );
}
