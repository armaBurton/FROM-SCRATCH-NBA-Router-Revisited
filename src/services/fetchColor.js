export default async function fetchColorInfo({ r, g, b }) {
  const info = await fetch(
    `https://www.thecolorapi.com/id?rgb=rgb(${r},${g},${b})`
  );
  const infoJson = await info.json();
  return infoJson;
}
