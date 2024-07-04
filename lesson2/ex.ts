function add(
  num1: number,
  num2: number,
  printResult: boolean,
  resultPhrase: string
) {
  if (printResult) {
    console.log(resultPhrase + (num1 + num2));
  } else {
    const result = num1 + num2;
    return result;
  }
}

const number1 = 5;
// [some errors can be avoided in runtime]
// const number1 = 0;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "The result is ";

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
