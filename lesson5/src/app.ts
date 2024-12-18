// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// type Person = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };

// let user1: Person = {
//   name: "gz",
//   age: 31,
//   greet(phrase: string) {
//     console.log(phrase);
//   },
// };

interface Named {
  readonly name?: string;
  outputName?: string;
}
// we can extend multiple interface
interface Greetable extends Named {
  greet(phrase: string): void;
}

let user1: Greetable = {
  name: "gz",
  greet(phrase: string) {
    console.log(phrase);
  },
};

// we can implement multiple interface
class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    this.name = n;
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + "" + this.name);
    } else {
      console.log("HI");
    }
  }
}

let user2 = new Person();
user1.greet("hello world");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

// functions are objects
interface AddFn2 {
  (a: number, b: number): number;
}

let add2: AddFn2;

add2 = (n1: number, n2: number) => {
  return n1 + n2;
};
