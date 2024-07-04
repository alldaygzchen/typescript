// type alias
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text"; //literal type(exact value)

function add2(
  num1: Combinable,
  num2: Combinable,
  resultType: ConversionDescriptor
) {
  let result: Combinable;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    resultType === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  //   if (resultType === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
  return result;
}

const combineAges = add2(20, 31, "as-number");
console.log(combineAges);
const combineStringAges = add2("20", "31", "as-number");
console.log(combineStringAges);
const combineNames = add2("gz", "chen", "as-text");
console.log(combineNames);
