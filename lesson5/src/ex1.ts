// class Department {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }

//   describe(detail: string) {
//     console.log('Department: ' + this.name + ' - ' + detail);
//   }
// }

// const accounting = new Department('Accounting');
// accounting.describe('test');

// const accountingCopy = {describe:accounting.describe}
// accountingCopy.describe('test') // undefined

class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department, detail: string) {
    console.log('Department: ' + this.name + ' - ' + detail);
  }
}

const accounting = new Department('Accounting');
accounting.describe('test');

const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe('test'); // error
