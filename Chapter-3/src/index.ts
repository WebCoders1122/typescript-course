// Arrays

let stringArray = ["string", "string2", "str 3"]; //TS infers that it is string array

let numArr = [12, 44, 87];

let strNumArr = ["str1", 12, "str2"]; // TS infers that it this array has union type

let mixArr = ["str", 33, true]; // this is also a union type

// tuple => this is strict array with fixed length and data

let tuple: [string, boolean, number] = ["str", true, 22]; //this array has fixed length of 3 and web have to pass string on '0' index, boolean on '1' index and number on '3' index. and it is compulsory

//Objects
