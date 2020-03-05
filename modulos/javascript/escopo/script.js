// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(cor, marca, portas);/* Por que o contexto de execução em escopo global, enquanto sua variáveis estão em um bloco, ou seja outro contexto */

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {

  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
/* Trocando o problema de escopo porque a var numero passa pelo for loop, e definindo o let para o loop o var numero passa direto e é reconhecido pela const total,
tudo devido ao contexto de execução*/
var numero = 50;
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
