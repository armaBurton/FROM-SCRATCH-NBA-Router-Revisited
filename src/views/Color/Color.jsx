import style from './color.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Color({ color }) {
  const colorStyle = {
    background: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
    color: `${color.contrast.value}`,
  };
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    console.log('click');
    history.push(`/colors/${color.hex.clean}`, color);
  }

  return (
    <button onClick={handleClick} className={style.colorLink}>
      <section className={style.colorCard} style={colorStyle}>
        <p className={`${style.colorName} ${style.underline}`}>
          {color.name.value}
        </p>
        <p className={`${style.rgb} ${style.underline}`}>
          R: {color.rgb.r} G: {color.rgb.g} B: {color.rgb.b}
        </p>
      </section>
    </button>
  );
}
//sawsassafra0l
// to={`/colors/${color.name.value}/${color.rgb.r}/${color.rgb.g}/${color.rgb.b}`}
