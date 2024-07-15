//how to define classes in TS and how to assign specific modifiers 'i.e. public, private etc' to them

class Gamers {
  constructor(
    public readonly name: string,
    private age: number,
    protected favCategory: string = "racing"
  ) {
    this.name = name;
    this.age = age;
    this.favCategory = favCategory;
  }
  public getAge() {
    return `${this.name} is ${this.age}`;
  }
}

const firstGamer = new Gamers("akram", 24, "racing");
console.log(firstGamer.getAge());

//extending classes

class onlineGamers extends Gamers {
  constructor(public plateform: string, name: string, age: number) {
    super(name, age);
    this.plateform = plateform;
  }
  public getFavCategory() {
    return `${this.name} like to play ${this.favCategory} games on ${this.plateform}`;
  }
}

const secondGamer = new onlineGamers("Android", "Aslam", 23);
console.log(secondGamer.getFavCategory());
//---------------------------------------------------------------------------------//
//aplying interface to a class
interface GamerData {
  name: string;
  age: number;
  online: boolean;
  play(category: string): string;
}

class topGamers implements GamerData {
  name: string;
  age: number;
  online: boolean;
  constructor(name: string, age: number, online: boolean) {
    this.name = name;
    this.age = age;
    this.online = online;
  }
  play(category: string): string {
    return `${this.name} loves to play ${category} games ${
      this.online ? "online" : "offline"
    }`;
  }
}

const gamer1 = new topGamers("Basheer", 33, true);
const gamer2 = new topGamers("Arsalan", 23, false);
console.log(gamer1.play("racing"));
console.log(gamer2.play("fighting"));

// -------------------------------------------------------------------------- //
// applying static methods to any class
class bestGamers {
  static instenceCount = 0;
  static get() {
    return this.instenceCount;
  }

  name: string;
  public id: number = ++bestGamers.instenceCount;
  constructor(name: string) {
    this.name = name;
  }
}

const gamer3 = new bestGamers("mansoor");
const gamer4 = new bestGamers("ishfaq");
const gamer5 = new bestGamers("bilal");
console.log(bestGamers.instenceCount, gamer3.id);
console.log(bestGamers.instenceCount, gamer4.id);
console.log(bestGamers.instenceCount, gamer5.id);

//--------------------------------------------------------------------------//
//how to get and set states like react in classes
class Games {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public set data(newData: string[]) {
    if (
      Array.isArray(newData) &&
      newData.every((item) => typeof item === "string")
    ) {
      this.dataState = newData;
      return;
    } else throw new Error("Your did not provide an array of strings");
  }
  public get data(): string[] {
    return this.dataState;
  }
}

const game1 = new Games();
game1.data = ["asphalt", "skdfh"];
console.log(game1.data);
