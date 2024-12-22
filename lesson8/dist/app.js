"use strict";
// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function AutoBind(target, methodName, descriptor) {
    console.log('descriptior', descriptor);
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            console.log('this', this);
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    console.log('adjDescriptor', adjDescriptor);
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'This works';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
