export const compose = <T>(...functions: any[]) => {
  return (x: T) => functions.reduceRight((v, f) => f(v), x);
};
