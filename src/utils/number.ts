export const getNumber = (number: string | number) => {
  return new Intl.NumberFormat("ru").format(+number);
};
