// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  console.log(!!value);
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(lado) {
  let perimento = lado / 4;
  console.log(perimento);
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function iD(nome, sobrenome) {
  let nomeCompleto = nome + sobrenome;
  console.log(nomeCompleto);
}
// Crie uma função que verifica se um número é par
function isEven(numero) {
  if (numero % 2 === 0) {
    console.log('é um numero par')
  } else {
    console.log('é um numero impar')
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function seeType(value) {
  console.log(typeof value);
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function verNome() {

  const nome = 'Victor';
  console.log(nome);
}
addEventListener('click', verNome);
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
