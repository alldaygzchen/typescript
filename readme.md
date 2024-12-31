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

# lesson5 (Classes and Interface)

- event handling (overall system) = event + action(callback)
- Normally it is async since the callback is triggered only after event occurs ensuring program not blocking
- Regular function depends on how a function is called (this keyword can change dynamically in callback since it is passed an argument to be executed later)
- event listener regular function binds in the background, thus this keyword represent the element but not undefined or window which is exception
- Arrow function does not have its own this, thus it will capture from lexical scope first to be stable which is normally outer scope or global
- Arrow function
  - In objects, arrow function inherits this keyword from the surrounding context (global or outer function)
  - In classes, arrow functiom is bound to the instance because it is defined as an instance property
- When encounter callbacks, check it is a regular function or arrow function defined in objects or classes

- creating objects has two method: classes and object literal

```
class Department {
  name: string; // must
  age:number;
  constructor(n: string,a:number) {
    this.name = n;
    this.age = a
  }
}

const accounting = new Department('Accounting');
console.log(accounting);

```

```
const department = {
  name:"luxury",
  age:30
}
```

- typescript class has public and private property (prevent property access from outside)

- shorthand initialization and read only properties (values cannot be changed)

```
class Department{

  constructor(private id readonly:string, public n:string){}

}
```

## Inheritance

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

## static property and method

```
  static fiscalYear = 2024;

  static createEmployee(name: string) {
    return { name: name };
  }

  // access static methods and properties inside the classes
  Department.fiscalYear;
```

## Abstract Classes (blue print for classes)

- Abstract classes are useful when you want all child classes to follow the same rules but allow them to define their own details.
- Do not have to provide the concrete value in the base class but the subclass
- abstract class cannot be instantiated itself

```
abstract class Department {
  abstract propertyName: type;
  abstract describe(this: Department): void;
}
```

## Singletons and Private Constructors

```
class AccountingDepartment extends Department {

    private static instance: AccountingDepartment;
    // private constructor
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

// same
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log("accounting", accounting);
console.log("accounting2", accounting2);
```

## A first interface

- Describe the structure of object
- It is not a blueprint, it is just as a custom type
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

## Using Interfaces with Classes

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

## Extending Interface

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

## interface as function type

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
  // n parameter is optional
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

## typeGuard

- Check certain propterties and methods exists

```

//type guard
//typeof runs on runtime
function add3(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// objects
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges:" + emp.privileges);
  }
}

// instance (Execute in runtime)
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

```

## Discriminated Unions

- works for classes and interface

```
interface Bird {
  type: "bird";
  flyingSpeed: number;
}
```

## Type Casting

- Tell typescript some value are a specific type where ts is not able to detect on its own
- Treat the value as a specific type, regardless of what it actually is at runtime.
- ! means it will never yield null or undefined

```
// HTMLParagraphElement
const paragraph = document.querySelector("p");
// HTMLElement (Suppose the html is an input tag, the type is HTMLElement which is not clear, also properties and methods can not be used)
const testInput = document.getElementById("user-input");

// sol1:
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );

// sol2:
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hola";

// examples
const userInputElement2 = document.getElementById("user-input");

if (userInputElement2) {
  (userInputElement2 as HTMLInputElement).value = "Hi there!";
}


```

## Index properties

```
interface ErrorContainer {
  //   id: number; violate the rule
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};

```

## Function Overload

- Function overload is a way to define multiple versions of a function in TypeScript with different input types or parameter combinations, but only one implementation of the function.

```
function addd(a: number, b: number): number;
function addd(a: string, b: string): string;
function addd(a: number, b: string): string;
function addd(a: string, b: number): string;
function addd(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// ts is not really good enough for analyzing code
// const result = addd("alex", "li") as string;
const result = addd("alex", "li");
result.split("");

```

## Optional Chaining

```
const fetchedUserData = {
  id: "ul",
  name: "Max",
  //   job: {
  //     title: "CEO",
  //     description: "My own company",
  //   },
} as {
  id: string;
  name: string;
  job?: {
    title: string;
    description: string;
  };
};

// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title);

```

## Nullish coalescing

```
const userInput = "";
const storedData = userInput || "DEFAULT"; // storedData = 'DEFAULT'
const storedData2 = userInput ?? "DEFAULT"; // storedData = ''

```

## Exercise Error

```
function size(input: string | number) {
  if (<string>input) { //  It just makes the compiler think input is a string.
    return input.length; // Runtime error if `input` is a number
  }
  return input;
}
```

# Generics

- generics are a way to create flexible and type-safe components, classes, or functions that can work with a variety of types
- the following are the result of using generic types => ensures type safety, and provides better developer experience by catching errors at compile time.

```
const names: string[] = ["a", "b"];
const names2: Array<string> = ["a", "b"];
console.log(names[0].split(" "));

// default is Promise<unknown>
// change to Promise<string> and ts will help us
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((data) => {
  data.split("");
});

```

- placeholders allow TypeScript to understand that objA and objB can be of different types, and they will keep their specific types.

```
function merge<T extends Object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// ts will infer the types for us
const mergedObj = merge({ name: "Max" }, { age: 30 });
```

- generics are often used for both objects and arrays in TypeScript because they allow you to work with more specific types, especially when those types are nested or dynamic.

```
function printFirstElement<T>(arr: T[]): T {
  return arr[0];
}
const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];

printFirstElement(numbers);
printFirstElement(strings);

```

- working with constraints

```
function merge2<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

```

- another generic function (Quite good example)

```
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got' + element.length + ' elements.';
  }

  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there'));
console.log(countAndDescribe('Sports cooking'));

```

## the keyof constraint

```
function extractAndConvert<T extends object, U extends keyof T>(obj:T,key:U){
return 'Value: '+obj[key]
}

extractAndConvert({},'name')
```

## Generic Classes

```
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
```

## Additional Examples

```
type InputType = "text" | "number" | "select";

interface InputProps<T> {
  type: InputType;
  value: T; // The value's type depends on the input
  onChange: (value: T) => void;
}

function Input<T>({ type, value, onChange }: InputProps<T>) {
  return (
    <div>
      {type === "text" || type === "number" ? (
        <input
          type={type}
          value={String(value)}
          onChange={(e) => onChange(e.target.value as unknown as T)}
        />
      ) : type === "select" ? (
        <select
          value={String(value)}
          onChange={(e) => onChange(e.target.value as unknown as T)}
        >
          {/* Example options */}
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
      ) : null}
    </div>
  );
}

// Example Usage
<Input<string>
  type="text"
  value="Hello"
  onChange={(value) => console.log(value)}
/>;

<Input<number>
  type="number"
  value={42}
  onChange={(value) => console.log(value)}
/>;

```

## Generic Utility Types

- Partial<>, Readonly<>

```
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

```

```
const namesTest: Readonly<string[]> = ['Max', 'Anna'];
```

## Generic Types vs Union Types

- data: T[] vs data: (string | number | boolean) []
  - where <T extends string | number | boolean>
- Union types are not stricted as generic types

# Decorator

- useful for meta programming
- Meta-programming: Meta-programming (with decorators) is a way to add or change behavior dynamically without modifying the original code directly.
  - Decorators provide a structured and reusable way to achieve this.
  - Add behavior (e.g., log something).
  - Modify behavior (e.g., validate input).
  - Change how code works (e.g., attach metadata).
- tsconfig.json => "experimentalDecorators": true
- decorator is a function and it is excuted when it is defined not instantiated

## introduction

### constructor function for Class

```
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Max';
  constructor() {
    // console.log('Creating person object');
  }
}

const pers = new Person();

```

## decorator factory

```
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
@Logger('Logging-person')
class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object');
  }
}

const pers = new Person();

```

## Buiding more useful decorators

```
An example of Angular

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log('Template');
    // console.log(constructor);
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object');
  }
}
const pers = new Person();

```

## Adding Multiple Decorators

- Execute bottom up

```
function Logger(logString: string) {
  console.log('logger decorator function');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('withTemplate decorator function');
  return function (constructor: any) {
    // console.log(constructor);
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}
@Logger('Logging')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object');
  }
}
const pers = new Person();

```

## Diving into Property Decorators

### review of prototype

- only constructor function have prototype property
- person(instance) -> person.＿＿proto＿＿ [Person.prototype (instance)] -> person.＿＿proto＿＿.＿＿proto\_\_[Object.prototype (instance)]

### target(prototype of the object), propertyName

```
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator');
  console.log(target, propertyName); // prototype of object and property name
}

class Product {
  @Log
  title: string;
  private _price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
    console.log('Creating Product object');
  }
  // constructor(public title: string, private _price: number) {}
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive');
    }
  }
  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);

```

## Diving into others

- class: constructor: Function
- property: target(prototype of object), propertyName(property name)
- accessor: targe(prototype of object), name(accessor name), descriptor: PropertyDescriptor
- method: target(prototype of object), name(method name), descriptor: PropertyDescriptor
- parameter:target(prototype of object), name(parameter name), position: number

```
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator');
  console.log(target, propertyName); // prototype of object and property name
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(target); // prototype of object
  console.log(name); // accessor name
  console.log(descriptor); //description
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator');
  console.log(target); // prototype of object
  console.log(name); // method name
  console.log(descriptor); //description
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator');
  console.log(target); // prototype of object
  console.log(name); // parameter name
  console.log(position);
}
```

## Additional

- at least these properties

```
type HasName = { name: string };

const obj: HasName = { name: 'Alice', age: 25, city: 'NYC' }; // This is valid.
```

## Additional

- Instance : creating using class or constructor function, it is an object

## Return a class in a class decorator

- the return class will run only if it is initialize
- extend something that can new() [originalConstructor ] and return an instance that contains original property

```
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object');
  }
}
const pers = new Person();

```

- class, methods, accessors decorator can be returned

```
The getter ensures that the method is bound to the instance (p) before it’s passed to the event listener.
Use get instead of replacing the description.value
```

### autobind example

```
class Example {
  value = 'I am bound';

  get boundMethod() {
    return function () {
      console.log(this.value);
    }.bind(this);
  }
}

const obj = new Example();
const unbound = obj.boundMethod; // Getter runs, binding happens here
unbound(); // Logs: "I am bound"
```

```
function AutoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log('descriptior', descriptor);
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  console.log('adjDescriptor', adjDescriptor);
  return adjDescriptor;
}

class Printer {
  message = 'This works';
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage); //callback

```

### Additional

```
The arrow function does not rebind this to the element that triggered the event.
```

### Using decorator in validations

```
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  console.log("objValidatorConfig", objValidatorConfig);
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}
const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});

```

### Additional

- ts class validators (https://github.com/typestack/class-validator)

### Exercise

- Html template tag

```
Not Rendered: Content inside the <template> tag is not displayed on the page.
Reusable: You can clone and insert the content into the DOM using JavaScript.

```

- addProject and moveProject contains this.updateListeners() (project-state.ts)
  which means adding and updating will cause re-rendering

# Modules and Namespace

- Splitting code into multiple files
  - Namespaces and file bundling(multiple to one) vs ES6 Imports/Exports
- Advantage of ES6 imports and exports
  - per-file compilation but single script import
  - we can still bundle all the files uaing third party such as web-pack
- Example for Es6 Imports/Exports
- "target": "es6" , "module": "es2015" in tsconfig.json
- Both import the files that are needed not all

```
import { Component } from './base-component.js';
```

- export vs export default
- export :
  - Used to export multiple named values from a module.
  - Each exported value must be imported using the same name.
- export default
  - Used to export a single value from a module.
  - The default export can be imported with any name without curly braces.

```
export const myFunction = () => { /* code */ };
export const myVariable = 42;
const myDefaultFunction = () => { /* code */ };
export default myDefaultFunction;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import myDefaultFunc, { myFunction, myVariable } from './module.js';
```

- Without type="module"
  - Global Scope: The code inside the script runs in the global scope. Variables and functions declared in the script are accessible globally.
  - No Imports/Exports: You cannot use import and export statements. All code must be contained within the script or included using traditional script tags.
  - Execution Order: Scripts without type="module" are not deferred by default. They execute immediately when the browser encounters them, unless the defer attribute is used.
  - Scripts are not in strict mode by default, though you can enable it manually by adding "use strict"; at the beginning of the script.

```
import * as Validation from "<filepath>"
=> Validation.Validatable.......

import {autobind as Autobind} from  "<filepath>"
=> @Autobind
```

- Does the following run once if inported in multiple files
  - yes

```
export const projectState = ProjectState.getInstance();
```

- webpack advantage: less requests (single file) and browser support

# Using webpack with typescript

## Why do we need it?

- Code bundles, less import required
- Optimized (minified) code, less code to download
- More build steps can be added easily such as development server

## Install

- npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader

## Adding entry and Output Configuration

```
tscconfig.json => // "rootDir": "./src"
webpack.config.js =>
  const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

```

- 156
