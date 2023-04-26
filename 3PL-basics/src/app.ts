import _ from "lodash";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";

console.log(_.shuffle([1, 2, 3]));

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

// const transformedProducts = products.map(it=> new Product(it.title, it.price));

const transformedProducts = plainToClass(Product, products);

for (let product of transformedProducts) {
  console.log(product.getInformation());
}

const newProduct = new Product("", -5.99);
validate(newProduct).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS");
    console.log(errors);
  } else console.log(newProduct.getInformation());
});
