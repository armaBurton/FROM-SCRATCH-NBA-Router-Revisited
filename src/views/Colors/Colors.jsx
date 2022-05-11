import { useColorContext } from '../../context/ColorProvider';
import style from './Colors.css';
import Color from '../Color/Color';

export default function Colors() {
  const { colorData } = useColorContext();

  return (
    <section className={style.colorPallet}>
      {colorData.map((color, i) => (
        <Color key={`${color}${i}`} color={color} />
      ))}
    </section>
  );
}
