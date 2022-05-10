import { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useColorContext } from '../../context/ColorProvider';
import style from './ColorDetail.css';

export default function ColorDetail() {
  const { name } = useParams();
  const { colorData } = useColorContext();
  console.log(name, colorData);

  let currentColor = {};
  if (colorData === []) {
    <Redirect to="/" />;
  } else {
    for (let i = 0; i < colorData.length; i++) {
      console.log(colorData[i]);
      if (name === colorData[i].name.value) {
        currentColor = colorData[i];
      }
    }
    const { value } = currentColor.rgb;
    console.log(currentColor.rgb);
    // const rgb = currentColor.rgb.value;
  }

  // console.log(currentColor);
  // console.log(currentColor.rgb.value);

  // const colorStyle = {
  //   background: `${rgb}`,
  // };

  return <></>;

  // return <section className={style.detailSection} style={colorStyle}></section>;
}

// {
//     "hex": {
//         "value": "#E71D96",
//         "clean": "E71D96"
//     },
//     "rgb": {
//         "fraction": {
//             "r": 0.9058823529411765,
//             "g": 0.11372549019607843,
//             "b": 0.5882352941176471
//         },
//         "r": 231,
//         "g": 29,
//         "b": 150,
//         "value": "rgb(231, 29, 150)"
//     },
//     "hsl": {
//         "fraction": {
//             "h": 0.90016501650165,
//             "s": 0.8079999999999999,
//             "l": 0.5098039215686274
//         },
//         "h": 324,
//         "s": 81,
//         "l": 51,
//         "value": "hsl(324, 81%, 51%)"
//     },
//     "hsv": {
//         "fraction": {
//             "h": 0.90016501650165,
//             "s": 0.8744588744588744,
//             "v": 0.9058823529411765
//         },
//         "value": "hsv(324, 87%, 91%)",
//         "h": 324,
//         "s": 87,
//         "v": 91
//     },
//     "name": {
//         "value": "Frostbite",
//         "closest_named_hex": "#E936A7",
//         "exact_match_name": false,
//         "distance": 1266
//     },
//     "cmyk": {
//         "fraction": {
//             "c": 0,
//             "m": 0.8744588744588744,
//             "y": 0.35064935064935066,
//             "k": 0.09411764705882353
//         },
//         "value": "cmyk(0, 87, 35, 9)",
//         "c": 0,
//         "m": 87,
//         "y": 35,
//         "k": 9
//     },
//     "XYZ": {
//         "fraction": {
//             "X": 0.5204305882352941,
//             "Y": 0.31639764705882356,
//             "Z": 0.5901572549019609
//         },
//         "value": "XYZ(52, 32, 59)",
//         "X": 52,
//         "Y": 32,
//         "Z": 59
//     },
//     "image": {
//         "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=E71D96",
//         "named": "https://www.thecolorapi.com/id?format=svg&hex=E71D96"
//     },
//     "contrast": {
//         "value": "#000000"
//     },
//     "_links": {
//         "self": {
//             "href": "/id?hex=E71D96"
//         }
//     },
//     "_embedded": {}
// }
