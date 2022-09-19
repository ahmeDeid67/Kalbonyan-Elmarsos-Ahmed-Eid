const name = "Ahmed";
const userAge = 24;

const user = {
  name,
  age: userAge,
  location: "egypt",
};

console.log(user);

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock = 8, rating = 5 } = product;

// console.log(productLabel, stock, rating);
// console.log(product);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
