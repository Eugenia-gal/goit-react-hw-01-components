export function getRandomColor() {
  const randomColor =
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  return randomColor;
}
