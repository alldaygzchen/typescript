// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }

// @Logger
// class Person {
//   name = 'Max';
//   constructor() {
//     // console.log('Creating person object');
//   }
// }

// const pers = new Person();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// decorator factory
// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }
// @Logger('Logging-person')
// class Person {
//   name = 'Max';
//   constructor() {
//     console.log('Creating person object');
//   }
// }

// const pers = new Person();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     console.log('Template');
//     // console.log(constructor);
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//   name = 'Max';
//   constructor() {
//     console.log('Creating person object');
//   }
// }
// const pers = new Person();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function Logger(logString: string) {
//   console.log('logger decorator function');
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log('withTemplate decorator function');
//   return function (constructor: any) {
//     // console.log(constructor);
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }
// @Logger('Logging')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//   name = 'Max';
//   constructor() {
//     console.log('Creating person object');
//   }
// }
// const pers = new Person();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function Log(target: any, propertyName: string | Symbol) {
//   console.log('Property decorator');
//   console.log(target, propertyName); // prototype of object and property name
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log('Accessor decorator');
//   console.log(target); // prototype of object
//   console.log(name); // accessor name
//   console.log(descriptor); //description
// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log('Method decorator');
//   console.log(target); // prototype of object
//   console.log(name); // accessor name
//   console.log(descriptor); //description
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log('Parameter decorator');
//   console.log(target); // prototype of object
//   console.log(name); // accessor name
//   console.log(position); // accessor name
// }
// class Product {
//   @Log
//   title: string;
//   private _price: number;
//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//     console.log('Creating Product object');
//   }
//   // constructor(@Log public title: string, private _price: number) {}
//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error('Invalid price - should be positive');
//     }
//   }
//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this.price * (1 + tax);
//   }
// }

// const p1 = new Product('Book', 19);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function WithTemplate(template: string, hookId: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     console.log('WithTemplate decorator');
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         console.log('Template');
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector('h1')!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//   name = 'Max';
//   constructor() {
//     console.log('Creating person object');
//   }
// }
// const pers = new Person();
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
If one overrides the value property directly, the this reference would not be the desired object. 
Remember that decorators run when a class is defined. If you reference this right away, 
you will get undefined(since use strict is implemented in the transpiled JS code). 
With getters however, when we reference the method like this: p.methodName, 
the getter function runs automatically and the this keyword here gets a proper 
reference to the p object.
*/

// function AutoBind(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log('descriptior', descriptor);
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };
//   console.log('adjDescriptor', adjDescriptor);
//   return adjDescriptor;
// }

// class Printer {
//   message = 'This works';
//   @AutoBind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const p = new Printer();
// const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
