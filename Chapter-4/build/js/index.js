"use strict";
//but in interfaces, we can't do that.
//literal types => special types like below
let myName;
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 3));
// optional argument passed like this in any function
const sumAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
//never type => happens when type can't be returned like below
// const name: number & string = "never"; // uncomment this and this is never type
const createError = (msg) => {
    //bacause of this error, TS infers 'never' type for this function
    throw new Error(msg);
};
const neverType = (value) => {
    if (typeof value === "string")
        return "String";
    if (typeof value === "number")
        return "Number";
    return createError("false Value"); // this function has never type
};
