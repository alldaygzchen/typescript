# Lesson1 (Getting Started)

Advantages:

- Detect error early and avoid some runtime errors (e.g. sanity check of your code by checking types)
- Next-gen javascript features
- Interfaces and generics
- Decorations
- Configuration options
- Use typescript under the hood without explicitly using typescript

# Lesson2 (TypeScript Basics and Basic Types)

## all numbers are float in default

## JS is dynamically typed (check at runtime)

JS downside: some errors can be avoided in runtime

why is it useful =>  
TS: use types in development to detect errors early and avoid some runtime errors

the following example cannot fully compile

```
console.log("start");
function add(number1, number2) {
    return number1 + number2;
}

const number1 = "5";
const number2 = 2.8;

const result = add(number1, number2); // checking types (wrong)
console.log(result);

```

## The core primitive types in TypeScript are all lowercase!

- numbers
- strings
- booleans
- objects
- arrays
- tuples (only ts, fix type and length)
- enums (only ts, prevents string identifiers and give scope)
- any (only ts)
- unknown (only ts, need extra type check to compile success)
- never

## if we dont initialize with a value then assign its type, otherwise it uses type inference even in for loop or computations

```
let number1: number;
number = 5

or

let number =5;
```

```

enum Role {
  ADMIN = 0,
  READ_ONLY = 1,
  AUTHOR = 2,
}

let test: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
  remark: any[];
  remarkTest: (string | number)[];
  role: [number, string];
  roleTest: [2, 3];
  roleTest1: Role;
  favoriteActivities: any[];
};

test = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
  remark: ["this is a test", 1, true],
  role: [1, "1"],
  roleTest: [2, 3],
  remarkTest: [1, "1"],
  //   roleTest1: Role.AUTHOR,
  roleTest1: Role.ADMIN,
  favoriteActivities: [2.3, 3],
};
```

## type alias and type literal

```
// type literal
const a = "a"

// type alias
type Combinable = number | string;
type User = { name: string; age: number };
```

## Function types

```
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let combineValue: Function;
let combineValue: (a: number, b: number) => number;
combineValue = add;
console.log(combineValue(8, 8));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
```

# Lesson3 (Compiler)

```
tsc app.ts --watch

tsc --init
tsc --watch

```
