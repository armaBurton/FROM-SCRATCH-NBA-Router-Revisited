import style from './color.css';

export default function Color({ color }) {
  console.log(color);
  const colorStyle = {
    background: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
  };
  return (
    <section className={style.colorCard} style={colorStyle}>
      <p className={style.colorName}>{color.name.value}</p>
    </section>
  );
}
