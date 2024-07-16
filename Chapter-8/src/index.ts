// Generics ==> they used when we dont know data type to be assigned to any variable

const myFunction = <T>(value: T): T => {
  return value;
};

console.log(myFunction<string>("a"));
console.log(myFunction<boolean>(true));
// in easy words, generics are room for variable data types

class NewGames<T> {
  name;
  rounds;
  online;
  constructor(name: T, rounds: number, online: boolean) {
    this.name = name;
    this.rounds = rounds;
    this.online = online;
  }
}

const game1 = new NewGames("a", 23, true);
const game2 = new NewGames<number>(123, 23, true);
const game3 = new NewGames<boolean>(true, 23, true);
const game4 = new NewGames<string | number | boolean>(true, 23, true); // this will allow 3 types in name

console.log(game1.name);
console.log(game2.name);
console.log(game3.name);

// complex examples
interface HasID {
  id: number;
}
//<T extends HasID> ==> shows that 'T' type must have "id:number"
type obj = { id: number; name: string };
const printUser = <T extends HasID>(user: T): T => {
  return user;
};
console.log(printUser({ id: 1, name: "akram" }));

//more complex example
const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

const printSpecificUserValue = <T extends HasID, K extends keyof T>(
  users: T[],
  value: K
): T[K][] => {
  return users.map((user) => user[value]);
};

console.log(printSpecificUserValue(usersArray, "address"));
