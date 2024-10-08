// index signatures and keyof assertions
//index signature => is structure of keys and values of any object that may be provided in future for any object.
//keyof assertion => used to derive new key's type from and existing 'type object or interface'

interface PizzaBooking {
  [key: string]: number;
  size: number;
  price: number;
  quantity: number;
}
const order1: PizzaBooking = {
  size: 1,
  price: 128,
  quantity: 3,
};

console.log(order1.size);
console.log(order1["price"]);

let printVal: string = "quantity";
console.log(order1[printVal]); // without index signatures, we cant get value or key of any object with a veriable

//example with passing veriable via function
const totalOfOrder1 = (order: PizzaBooking): number => {
  let totalAmount = 0;
  for (const transection in order) {
    if (transection === "quantity") {
      totalAmount = order.price * order[transection];
    }
  }
  return totalAmount;
};
console.log(totalOfOrder1(order1));

//problem index signatures=> we can write code to access property that even not exists in object but TS will allow it due to index signatures
console.log(order1["akram"]); // returning undefined but not issue with TS

//--------------------------------------------------------------------------------//
//complex example and use of keyof assertion
interface Gamer {
  // [key: string]: number | string | boolean | undefined;
  games: number;
  levels?: string;
  online: boolean;
}

const gamer1: Gamer = {
  games: 1,
  levels: "biggner",
  online: false,
};

for (let specs in gamer1) {
  // both these expression are now true
  console.log(`${specs}: ${gamer1[specs as keyof typeof gamer1]}`);
  // console.log(`${specs}: ${gamer1[specs as keyof Gamer]}`);
}

//-----------------------------------------------------------------------//
// solution to the problem in section 1

// if we predifine keys of object as 'literals' then we can solve the problem but TS will give error that you may check in following commented inteface
// interface Car {
//   [key: "honda" | "suzuki" | "united"]: string;
// }

//==> solution is here

type Keys = "honda" | "suzuki" | "united";
type Cars = Record<Keys, string>; // 'Record' is special, 'Keys' are object keys and 'string' is object key's value type

const carCollection: Cars = {
  honda: "City",
  suzuki: "mehran",
  united: "bravo",
};

// console.log(carCollection["kia"]); //the problem is now solved and this line will give error

for (const car in carCollection) {
  console.log(`${car}: ${carCollection[car as keyof Cars]}`);
}
