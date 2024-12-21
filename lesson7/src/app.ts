const names: string[] = ['a', 'b'];
const names2: Array<string> = ['a', 'b'];
console.log(names[0].split(' '));

// default is Promise<unknown>
// change to Promise<string> and ts will help us
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done');
  }, 2000);
});

promise.then((data) => {
  data.split('');
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function mergeLegacy(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
// const mergedObjLegacy = merge({ name: "Max" }, { age: 30 });
// mergedObjLegacy.name;

// cumbersome
// const mergedObj = merge({ name: "Max" }, { age: 30 }) as {
//   name: string;
//   age: number;
// };

function merge<T extends Object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// ts will infer the types for us
const mergedObj = merge({ name: 'Max' }, { age: 30 });
const mergedObj2 = merge<{ name: string }, { age: number }>(
  { name: 'Max' },
  { age: 30 }
);

// however type is not constrained
function merge2<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

function printFirstElement<T>(arr: T[]): T {
  return arr[0];
}
const numbers = [1, 2, 3];
const strings = ['a', 'b', 'c'];

printFirstElement(numbers);
printFirstElement(strings);

let a: (string | number)[];
a = ['hi', 7];
function printElements<T>(arr: T[]): void {
  arr.forEach((element) => {
    console.log(element);
  });
}

const arrayy: (string | number)[] = ['Alice', 30, 'Bob', 40];
printElements(arrayy); // Works fine: 'Alice', 30, 'Bob', 40
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const storage = new DataStorage<string | number>();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const namesTest: Readonly<string[]> = ['Max', 'Anna'];
// namesTest.push('Manu');
