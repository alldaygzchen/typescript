function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

function hi(): void {
  console.log("hi");
}
const a = hi();
console.log("a", a); //undefined
generateError("http error code", 404);
