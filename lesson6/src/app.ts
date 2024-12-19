type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "gz",
  privileges: ["read", "write"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

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

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }
  loadCargo(amount: number) {
    console.log("Loading Cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

// instance (Execute in runtime)
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed:" + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// HTMLParagraphElement
const paragraph = document.querySelector("p");
// HTMLElement (not clear, also properties and methods can not be used)
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

interface ErrorContainer {
  //   id: number; violate the rule
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const userInput = "";
const storedData = userInput || "DEFAULT"; // storedData = 'DEFAULT'
const storedData2 = userInput ?? "DEFAULT"; // storedData = ''
