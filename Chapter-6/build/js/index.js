"use strict";
//how to define classes in TS and how to assign specific modifiers 'i.e. public, private etc' to them
class Gamers {
    constructor(name, age, favCategory) {
        this.name = name;
        this.age = age;
        this.favCategory = favCategory;
        this.name = name;
        this.age = age;
        this.favCategory = favCategory;
    }
    getAge() {
        return `${this.name} is ${this.age}`;
    }
}
const firstGamer = new Gamers("akram", 24, "racing");
console.log(firstGamer.getAge());
//---------------------------------------------------------------------------------//
