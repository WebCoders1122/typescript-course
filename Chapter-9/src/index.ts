// Utility Types ==> used to make changes in original "type" or "interface"

//Patrial ==> select some values of interface

interface Game {
  name: string;
  levels: number;
  users: number;
  online?: boolean;
}

const partialObj: Partial<Game> = {
  name: "Asphalt",
};
//we cant't access partial properties of "Game interface" without using "Partial" utility type
// const gameObject: Game = {
//   name: "Asphalt",
// };

//Required ==> needs all propeties of original object. if you remove any property, TS will give an error
const RequiredObj: Required<Game> = {
  name: "asphalt",
  levels: 10,
  users: 4.5,
  online: true,
};

//Readonly ==> this will work without optional properties like 'online' here in this example
const ReadonlyObj: Readonly<Game> = {
  name: "asphalt",
  levels: 10,
  users: 4.5,
  // online: true,
};

//Record==> Record<keys, values> ==> this is syntax
const games: Record<string, string> = {
  game1: "asphlat",
  game2: "subway surfer",
  game3: "Tekken",
};

//complex examples
type Students = "Akram" | "Aslam" | "Saleem";
type Grades = 2.5 | 3 | 3.5 | 4;

const studentObject: Record<Students, Grades> = {
  Akram: 2.5,
  Aslam: 4,
  Saleem: 2.5,
};

type subjects = {
  specialization: string;
  percentage: number;
};

const studentSubjects: Record<Students, subjects> = {
  Akram: { specialization: "Maths", percentage: 80 },
  Saleem: { specialization: "Science", percentage: 86 },
  Aslam: { specialization: "Bio", percentage: 89 },
};

//Pick ==> make a new "type" from existing type or interface with mentioned values
//Omit ==> make a new "type" from existing type or interface without mentioned values

const pickedObject: Pick<Game, "name" | "online"> = {
  name: "Asphalt",
  online: true,
};

const ommitedObject: Omit<Game, "name" | "online"> = {
  levels: 22,
  users: 33,
};

//Exclude ==> make new type with remaining values from old type beside mentioned value
//Extract ==> make new type with mentioned values from old type
type newGame =
  | "Asphalt"
  | "Tekken"
  | "Street Fighter"
  | "Bubble Shooter"
  | "Subway Surfer";
type excludedValues = Exclude<newGame, "Asphalt">;
type extratedValues = Extract<
  newGame,
  "Street Fighter" | "Bubble Shooter" | "Subway Surfer"
>;

// Nonnullable ==> remove all undefined, null values from a type
type nulled = string | boolean | null | undefined;
type noNulled = NonNullable<nulled>;

// ReturnType ==> created from return type of a function

const returnFun = (
  name: string,
  count: number
): { name: string; count: number } => {
  return { name, count };
};

type returedType = ReturnType<typeof returnFun>;

// Parameters ==> make tupples of a functions parameters

type funParams = Parameters<typeof returnFun>;

//Awaited ==> used with promises to get resolved values
type User = { name: string; balance: number };

const userPromise = (): Promise<User> => {
  return new Promise<User>((resolve) =>
    resolve({ name: "Bashir", balance: 100 })
  );
};

type userPromiseResolved = Awaited<ReturnType<typeof userPromise>>;
