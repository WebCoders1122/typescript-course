// Arrays

let stringArray = ["string", "string2", "str 3"]; //TS infers that it is string array

let numArr = [12, 44, 87];

let strNumArr = ["str1", 12, "str2"]; // TS infers that it this array has union type

let mixArr = ["str", 33, true]; // this is also a union type

// tuple => this is strict array with fixed length and data

let tuple: [string, boolean, number] = ["str", true, 22]; //this array has fixed length of 3 and web have to pass string on '0' index, boolean on '1' index and number on '3' index. and it is compulsory

// Objects ---------------------------------------------------------------------
let obj: object;

// in this object, TS infers data types
let object = {
  name: "akram",
  age: 23,
  selected: true,
};

//how to assign a type to any object
//both 'type' and 'interface' methods can be used but some differences are there. they will be explained in coming chapters
type Student = {
  name: string;
  age?: number; //that '?' will make this key optional. we can not apply any javascript methods on optional properties without '?'. ie age?.ciel()
  selected: boolean;
};

interface Student2 {
  name: string;
  age: number;
  selected: boolean;
}

let object2: Student = {
  name: "waqas",
  age: 30,
  selected: false,
};

// Enums ----------------------------------------------------------------------

enum sample {
  a = 100, // to provide default starting value else value will be '0'
  b,
  c,
  d,
  e,
  g,
}

console.log(sample.a);
