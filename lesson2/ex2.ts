// const personTest:object = {
//     name: "gz",
//     age: 30,
//   };
const personTest: { name: string; age: number } = {
  name: 'gz',
  age: 30,
};
const person = {
  name: 'gz',
  age: 30,
};

console.log(person.name);
console.log(personTest.name);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// assign labels to enum values
enum Role {
  ADMIN = 0,
  READ_ONLY = 1,
  AUTHOR = 2,
}
console.log(Role[2]);

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
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
  remark: ['this is a test', 1, true],
  role: [1, '1'],
  roleTest: [2, 3],
  remarkTest: [1, '1'],
  roleTest1: Role.ADMIN, //0
  // roleTest1: Role[Role.ADMIN], // error:trying to access the enum value using its own value
  // roleTest1: 0, //0
  favoriteActivities: [2.3, 3],
};

for (const tag of test.tags) {
  console.log(tag.toUpperCase());
  //   console.log(tag.map()); //show error
}
console.log(test);

enum RoleTest {
  ADMIN = 'hello',
  READ_ONLY = 'world',
  AUTHOR = 7,
}

console.log(RoleTest.ADMIN);
console.log(RoleTest.AUTHOR);
console.log(RoleTest[RoleTest.AUTHOR]);
