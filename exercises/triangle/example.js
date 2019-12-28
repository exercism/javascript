const valid = ([s1, s2, s3]) => {
  const sidesArePositive = (s1 > 0 && s2 > 0 && s3 > 0);
  const validatesTriangleInequality =
    s1 + s2 >= s3 && s1 + s3 >= s2 && s2 + s3 >= s1;
  return sidesArePositive && validatesTriangleInequality;
};

export const equilateral = sides => {
  const [s1, s2, s3] = sides;
  return valid(sides) && (s1 === s2 && s2 === s3 && s1 === s3);
};

export const isosceles = sides => {
  const [s1, s2, s3] = sides;
  return valid(sides) && (s1 === s2 || s1 === s3 || s2 === s3);
};

export const scalene = sides => {
  return valid(sides) && !isosceles(sides);
};
