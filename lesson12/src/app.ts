// import _ from "lodash";
// console.log(_.shuffle([1, 2, 3, 4, 5]));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";

const products = [
  { title: "A Carpet", price: 12.99 },
  { title: "A Book", price: 14.99 },
];

// #const p1 = new Product("Book", 12.99);
// #console.log(p1.getInformation());

// #const loadedProducts = products.map(
// #  (prodData) => new Product(prodData.title, prodData.price)
// #);

// #for (const prod of loadedProducts) {
// #  console.log(prod.getInformation());
// #}

const loadedProducts = plainToInstance(Product, products);
for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
console.log("new info", newProd.getInformation());
