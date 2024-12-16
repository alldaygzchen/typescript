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
- debugger for Chrome Extension

# Lesson2 (TypeScript Basics and Basic Types)

## all numbers are float in default

## JS is dynamically typed (check at runtime)

```

## The core primitive types in TypeScript are all lowercase!

- numbers (all numbers, no differentiation between integers or floats)
- strings
- booleans (true,false)
- objects
- arrays (specific type or flexible)
- tuples (only ts, fix typed (multiple) and length)
- enums (only ts, prevents string identifiers and give scope)
- any (only ts)
- unknown (only ts, need extra type check to compile success)
- never

## if we don't initialize with a value then assign its type, otherwise it uses type inference even in for loop or computations

```

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

// let combineValue: Function;
function add(n1: number, n2: number): number {
return n1 + n2;
}
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
- unknown: should add extra code (if else) in order to check
- undefined: variable not initialize

For functions:

- void: The function finishes but does not return a value.
- never: The function does not finish normally and never returns.
- undefined: The function has return statement but nothing was return


primitive vs object
- primitive: immutable and store directly
- object: mutable and stored by reference
- null is a object due to historical issues
- null and undefined are primitive value (e.g. null===null [true])
```

# Lesson3 (Compiler)

```

# single file

tsc app.ts --watch

# multiple files

tsc --init creates tsconfig.json
tsc --watch

#tsconfig.json
include,exclude,target,module,lib,sourceMap,rootDir,outDir,removeComments,noEmitOnError

```

```
## Additional
- CommonJs vs ModuleJs
- commonJs works only for Node.js and it is synchronous (syntax:require/module.exports)
- ModuleJs works on both and it is async (syntax:import/export)
```

```
## Additional
- call: Call the function immediately with a specific this.
- apply: Same as call, but use an array for arguments.
- bind: Create a new function with a specific this for future use
```

# lesson4

- tsc --init
- tsconfig.json: rootDir, outDir, noEmitOnError

```

var: js does not know any other scopes than function and global (var does not have block scope)

```

```

#####################
//default parameter in right
const add= (a:number,b:number=1)=>{
  return a+b
}

// replace curly brace and return
const add = (a:number,b:number=1) => a+b

####################
// function types
let printOutput:(a:number|string)=>void
printOutput = (output) => {
  console.log(output);
};


#####################

const button = document.querySelector('button')

// typescript will not complain
// typecript know what we are infering, so short contax is ok
if (button){
  button.addEventListener('click',event=>console.log(event))
}

##################### Spread Operator

const hobbies = ['Sports','Cooking']
const activeHobbies = ['Hicking']

activeHobbies.push(hobbies[0],hobbies[1])

// spread operator (spread)

activeHobbies.push(...hobbies)
const test =['Hicking',...hobbies]

const person = {name:"Max",age:30}
const copiedPerson = {name2:"gz",age2:31,...person}

##################### Rest Parameters


// rest parameter (gather)
// Gathers arguments into an array of number
// the array of number is spread
const add = (...numbers:number[])=>{
  let result =0
  return numbers.reduce((curResult,curValue)=>{
    retunr curResult+curValue
  },0)
}


const addedNumbers =add(5,10,2,3.7)
console.log(addedNumbers)

##################### Array and Object Destructuring

// with rest operator
const [hob1,hob2,...remainingHob] = hobbies
// rename
const {name:userName,age} = person

```

# lesson5 (Classes and Interface) not done summarize chap 62 + what is prototype + continue 66

- creating objects has two method: classes and object literal

```
class Department {
  name: string; // must
  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department('Accounting');
console.log(accounting);

```

- typescript class has public and private property(prevent property access from outside)

- shorthand initialization and read on;y properties

```
class Department{

  constructor(private id readonly:string, public n:string){}

}
```

- Inheritance

```
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting"); // call the base class constructor function
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}
```

- private properties inside the class cannot be inherited
- static and non staoc methods are inherited to the subclass amd can be used directly unless overridden

```
change employees from private to protected

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addEmployeeExceptMax(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}
```
