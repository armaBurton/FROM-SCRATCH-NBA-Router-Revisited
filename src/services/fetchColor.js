export default async function fetchColorInfo(color) {
  const info = await fetch(
    `https://www.thecolorapi.com/id?rgb=rgb(${color[0]},${color[1]},${color[2]})`
  );
  const infoJson = info.json();

  return infoJson;
}
