let userInput: unknown; // need extra type check to compile success
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput == "string") {
  userName = userInput;
}
