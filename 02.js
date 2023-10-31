let names = ["Steve", "John"];
let students = ["Tom", names];
console.log(students);

let tom = {
  name: "Tom",
  age: 10,
  region: "Seoul",
};

let steve = {
  ...tom,
  name: "Steve",
};
console.log(tom);
console.log(steve);
