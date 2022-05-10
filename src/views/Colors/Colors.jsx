import { useColorContext } from '../../context/ColorProvider';
import style from './Colors.css';
import Color from '../Color/Color';
import { useEffect } from 'react';

export default function Colors() {
  const { colorData } = useColorContext();
  useEffect(() => {
    const stateArr = sessionStorage.getItem('colorData');
    const stateArrJson = JSON.parse(stateArr);
  }, []);

  return (
    <section className={style.colorPallet}>
      {colorData.map((color, i) => (
        <Color key={`${color}${i}`} color={color} />
      ))}
    </section>
  );
}
