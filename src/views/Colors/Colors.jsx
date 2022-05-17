import { useColorContext } from '../../context/ColorProvider';
import style from './Colors.css';
import Color from '../Color/Color';

export default function Colors() {
  const { colorData, loading } = useColorContext();

  return (
    <section className={style.colorPallet}>
      {loading ? (
        <h1>LOADING!</h1>
      ) : (
        colorData.map((color, i) => (
          <Color key={`${color}${i}`} color={color} />
        ))
      )}
    </section>
  );
}
