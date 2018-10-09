export default function solve(x, y) {
  // Define as numbers
  x = Number(x);
  y = Number(y);

  // Check for NaN
  if (x !== x || y !== y) return null;

  // Use euclidean distance
  const distanceToDart = Math.sqrt(x*x + y*y);

  // Define points for each section of the target
  if (distanceToDart > 10) return 0;
  else if (distanceToDart > 5) return 1;
  else if (distanceToDart > 1) return 5;
  return 10;
}