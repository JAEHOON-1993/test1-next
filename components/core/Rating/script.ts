export const makeStars = (value: number, max: number): number[] => {
  const stars = [];

  const [whole, part] = value
    .toFixed(1)
    .split('.')
    .map((item) => parseInt(item));

  for (let i = 0; i < whole; i++) stars.push(1);

  if (part > 5) {
    stars.push(1);
  } else if (part > 0) {
    stars.push(0.5);
  }

  for (let i = whole; i < (part ? max - 1 : max); i++) stars.push(0);

  return stars;
};
