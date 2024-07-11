//union data type => accepts both data types
let isActive: number | boolean = 1;
isActive = true;

//function
const sum = (a: number, b: number): string => {
  return a + b + "c";
};
const sum2 = (a: number, b: number): number => {
  return a + b;
};
const sum3 = (a: number, b?: number): number => {
  // b is optional parameter
  return b ? a + b : a;
};
