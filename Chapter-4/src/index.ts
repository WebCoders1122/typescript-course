// what are type Aliases
type Student2 = {
  name: string;
  age: number;
  selected: boolean;
};
type strOrNum = string | number;
type strOrNumArray = string | number[];

//all the types listed above are 'Aliases' and one alias can be use in other like example below

type Student = {
  name: string;
  age: number;
  details: strOrNumArray; // this is type within type
};
//but in interfaces, we can't do that.

//literal types => special types like below

let myName: "abc" | "cde" | "xyz";
// myName = 'sdfs' //this will not be assignable because we can assign only the above 3 values

//================================================================================//

//functions

// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  // this is how to write interface for function
  (a: number, b: number): number;
}

const add: mathFunction = (a, b) => {
  return a + b;
};

console.log(add(2, 3));

// optional argument passed like this in any function
const sumAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};

//never type => happens when type can't be returned like below

// const name: number & string = "never"; // uncomment this and this is never type

const createError = (msg: string) => {
  //bacause of this error, TS infers 'never' type for this function
  throw new Error(msg);
};

const neverType = (value: string | number): string => {
  if (typeof value === "string") return "String";
  if (typeof value === "number") return "Number";
  return createError("false Value"); // this function has never type
};
