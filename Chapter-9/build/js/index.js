"use strict";
// Generics ==> they used when we dont know data type to be assigned to any variable
const myFunction = (value) => {
    return value;
};
console.log(myFunction("a"));
console.log(myFunction(true));
// in easy words, generics are room for variable data types
class NewGames {
    constructor(name, rounds, online) {
        this.name = name;
        this.rounds = rounds;
        this.online = online;
    }
}
const game1 = new NewGames("a", 23, true);
const game2 = new NewGames(123, 23, true);
const game3 = new NewGames(true, 23, true);
const game4 = new NewGames(true, 23, true); // this will allow 3 types in name
console.log(game1.name);
console.log(game2.name);
console.log(game3.name);
const printUser = (user) => {
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
const printSpecificUserValue = (users, value) => {
    return users.map((user) => user[value]);
};
console.log(printSpecificUserValue(usersArray, "address"));
