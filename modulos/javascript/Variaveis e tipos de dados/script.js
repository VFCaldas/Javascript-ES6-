// Declarar uma variável com o seu nome
const name = 'Victor';
console.log(name);
// Declarar uma variável com a sua idade
let age = 23;
console.log(age);
// Declarar uma variável com a sua comida
// favorita e não atribuir valor
const favFood;
console.log(favFood);// Será Undefined devido ao hoisting
// Atribuir valor a sua comida favorita
favFood = 'Soy'
console.log(favFood); // 'Soy'
// Declarar 5 variáveis diferentes sem valores
const dog;
const car;
let book;
var notebook;
const react;
console.log(dog, car, book, notebook, react); //All of these values, vão retornar undefined pois não foram atribuídos valores.