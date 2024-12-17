"use strict";
// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
let user1 = {
    name: "gz",
    greet(phrase) {
        console.log(phrase);
    },
};
// we can implement multiple interface
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + "" + this.name);
    }
}
let user2 = new Person("Max", 30);
user1.greet("hello world");
