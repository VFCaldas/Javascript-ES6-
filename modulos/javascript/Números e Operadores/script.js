// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; /* Baseia na ordem aritmética logo começa por * , / , - , +  */
console.log(total);//35
// Crie duas expressões que retornem NaN
let isNan = 0 / 0;
let isNan2 = 'hi' / 2;
console.log(isNaN(isNan, isNan2))//Both will return Truthy 
// Somar a string '200' com o número 50 e retornar 250
let sumString = +'200' + 50;
console.log(sumString)
// Incremente o número 5 e retorne o seu valor incrementado
let num = 5;
num++;
console.log(num);
// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso);
