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
  readonly name: string;
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
  constructor(public name: string, public age: number) {}
  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  }
}

let user2 = new Person("Max", 30);
user1.greet("hello world");
