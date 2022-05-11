import { useColorContext } from '../../context/ColorProvider';
import style from './Colors.css';
import Color from '../Color/Color';
import { useEffect } from 'react';

export default function Colors() {
  const { colorData } = useColorContext();
  // useEffect(() => {
  //   const stateArr = sessionStorage.getItem('colorData');
  //   const stateArrJson = JSON.parse(stateArr);
  //   console.log(stateArrJson);
  // }, []);

  return (
    <section className={style.colorPallet}>
      {colorData.map((color, i) => (
        <Color key={`${color}${i}`} color={color} />
      ))}
    </section>
  );
}

// useEffect(() => {
//   let arr = [];
//   for (let i = 0; i < 10; i++) {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     const rgb = { r, g, b };
//     arr.push(rgb);
//   }
//   setColorArr(arr);
// }, []);

// useEffect(() => {
//   const data = async () => {
//     const array = await Promise.all(
//       colorArr.map(async (color) => {
//         return await fetchColorInfo(color);
//       })
//     );
//     console.log(array);
//     setColorData(array);
//   };
//   data();
// }, [colorArr]);
