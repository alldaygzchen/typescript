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

- event handling (overall system) = event + action(callback)
- Normally it is async since the callback is triggered only after event occurs ensuring program not blocking
- Regular function depends on how a function is called (this keyword can change dynamically in callback since it is passed an argument to be executed later)
- event listener regular function binds in the backgorund, thus this keyword represent the element not undefined or window which is exception
- Arrow function does not have its own this, thus it will capture from lexical scope first to be stable
- Arrow function
  - In objects, arrow function inherits this keyword from the surrounding context (global or outer function)
  - In classes, arrow functiom is bound to the instance because it is defined as an instance property
- When encounter callbacks, check it is a regular function or arrow function defined in objects or classes

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

- typescript class has public and private property (prevent property access from outside)

- shorthand initialization and read only properties (values cannot be changed)

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

- private properties inside the class cannot be inherited (use protected)
- static and non static methods are inherited to the subclass and can be used directly unless overridden

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

- getter and setter used for encapsulation
- they are also computed properties

```
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valud value");
    }
    this.addReport(value);
  }

  // outside the class
  accounting.mostRecentReport = "Hello world";
  console.log("accounting.mostRecentReport", accounting.mostRecentReport);

```

- static property and method

```
  static fiscalYear = 2024;

  static createEmployee(name: string) {
    return { name: name };
  }

  // access static methods and properties inside the classes
  Department.fiscalYear;
```

- Abstract Classes (blue print for classes)
- Abstract classes are useful when you want all child classes to follow the same rules but allow them to define their own details.
- Do not have to provide the concrete value in the base class but the subclass
- abstract class cannot be instantiated itself

```
abstract class Department {
  abstract propertyName: type;
  abstract describe(this: Department): void;
}
```

- Singletons and Private Constructors

```
class AccountingDepartment extends Department {

    private static instance: AccountingDepartment;
    private constructor(id: string, private reports: string[]) {
      super(id, "Accounting");
      this.lastReport = reports[0];
    }

    static getInstance() {
      if (AccountingDepartment.instance) {
        return AccountingDepartment.instance;
      }
      AccountingDepartment.instance = new AccountingDepartment("d2", []);
      return AccountingDepartment.instance;
    }

}

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log("accounting", accounting);
console.log("accounting2", accounting2);
```

- A first interface
- Describe the structure of object
- It is not a blueprint, is is just as a custum type
- Do not enter concrete value
- Use interface when you want to define a shape of an object that might be extended later.
- Use type when you need more complex type compositions like unions, intersections, or mapped types.

```
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

// type Person = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };

let user1: Person = {
  name: "gz",
  age: 31,
  greet(phrase: string) {
    console.log(phrase);
  },
};

```

- Using Interfaces with Classes
- interface and abstract class (can contain parts of concrete implementation)
- interface can be used as a contract of class

```
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

// cannot add age property
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

```

- readonly interface properties
- readonly set to the interface just like base class

```
interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}

```

- Extending Interface

```
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
```

- interface as function type

```

// functions are objects
interface AddFn2 {
  (a: number, b: number): number;
}

let add2: AddFn2;
add2 = (n1: number, n2: number) => {
  return n1 + n2;
};

```

- Optional Parameter and Properties

```
interface Named {
  readonly name: string;
  outputName?: string;
}


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

```

# Advance types

## Intersection types

```

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

```

- 85
