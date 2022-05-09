import style from './color.css';

export default function Color(color) {
  console.log(color);

  return (
    <section className={style.colorCard}>
      <p>{color.name.value}</p>
    </section>
  );
}
