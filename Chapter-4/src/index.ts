// what are type Aliases
type Student2 = {
  name: string;
  age: number;
  selected: boolean;
};
type strOrNum = string | number;
type strOrNumArray = string | number[];

//all the types listed above are 'Aliases' and one alias can be use in other like example below

type Student = {
  name: string;
  age: number;
  details: strOrNumArray; // this is type within type
};
