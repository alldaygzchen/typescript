# Lesson1 (Getting Started)

Install:

- npm install -g typescript

Advantages:

#### Define schema type and static code is different

- readability
- Prevent unwanted behavior at runtime (if type is defined, the rule is strict and it will be checked)
- Next-gen javascript features

Code:

- const input1 = document.getElementById("num1")! as HTMLInputElement;
  ! => never yield null

- npm init
- npm install --save-dev lite-server
- tsc using-ts.ts

Extentions:

- eslint: code quality check
- path Intellisense: autocomplete filepath
- prettier: format code

# Lesson2 (TypeScript Basics and Basic Types) 13

## all numbers are float in default

## JS is dynamically typed (check at runtime)

```

## The core primitive types in TypeScript are all lowercase!

- numbers (all numbers, no differentiation between integers or floats)
- strings
- booleans (true,false)
- objects
- arrays (sprecific type or flexible)
- tuples (only ts, fix type and length)
- enums (only ts, prevents string identifiers and give scope)
- any (only ts)
- unknown (only ts, need extra type check to compile success)
- never

## if we don't initialize with a value then assign its type, otherwise it uses type inference even in for loop or computations

```

let number1: number;
number = 5

or

let number =5;

or

const number: number = 5;

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
roleTest1: Role.ADMIN,
favoriteActivities: [2.3, 3],
};

```

## type alias and type literal

```

// type literal
const a = "a"

// type alias
type Combinable = number | string; // Union type
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

// undefined is a type of ts,js
let a: undefined

// function:if no return in function use void, if it has return but nothing use undefine
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

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

For variable:

- unknown vs any
- unknown: should add extra code (if else)in order to check

For functions:

- void: The function finishes but does not return a value.
- never: The function does not finish normally and never returns.

```

# Lesson3 (Compiler)

```

# single file

tsc app.ts --watch

# multiple files

tsc --init
tsc --watch

#tsconfig.json
include,exclude,sourceMap,rootDir,outDir,removeComments,noEmitOnError

```

# start 45
```
