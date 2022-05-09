import { useColorContext } from '../../context/ColorProvider';
import style from './Colors.css';
import Color from '../Color/Color';

export default function Colors() {
  const { colorData } = useColorContext();
  // console.log(colorData);
  console.log(colorData.length);
  colorData.forEach((c) => console.log(c));
  colorData.map((color) => console.log(color));
  return <section className={style.colorPallet}></section>;
}

/* <Color key={`${color.name.value}${i}`} color={color} /> */
