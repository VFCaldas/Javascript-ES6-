// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
const age = 23;
const uncleAge = 37;
const untAgle = 32;
if (age > uncleAge || untAgle) {
  console.log('É maior')
} else if (age = uncleAge || untAgle) {
  console.log("É igual");
} else {
  console.log('É menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log('Sim é maior');
} else {
  console.log("Não, não é")
}
// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}/* Se ambas as declarações de if forem verdadeiras o console ira falar verdadeiro, como o Gato === gato não são a mesma coisa, o console resulta em valor Falso */

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} /* Se uma das  declarações de if forem verdadeiras o console ira falar verdadeiro, neste caso como 5 é maior que 2, if é truthy loco o console mostra Gato e Cão */
