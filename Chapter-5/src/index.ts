// Assertions or casting in TypeScript => telling TS that you know more that it and type you are assiging is OK. But keep in mind that it may lead to some errors. So make an assertion with complete presence of mind.

// how to make an assertion
type str = string;
type union = number | string;
type lit = "hello";

let a: string = "hello";
let b = a as union;
let c = a as lit; // as keyword make an assertion and tell typescript that you know better then him

//====================================================================================//

// assertions should be used with html DOM element when we select them in TS
const image = document.querySelector("img")!; //=> that '!' mark makes remove 'Null' from image
const myImage = document.getElementById("#myImage") as HTMLImageElement;

image.src;
myImage.src;
