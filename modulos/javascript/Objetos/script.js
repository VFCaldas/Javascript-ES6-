// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const civil = {
  nome: 'victor',
  sobrenome: 'Caldas',
  id: 0000,
  // Crie um método no objeto anterior, que mostre o seu nome completo
  nomeCompleto: function () {
    console.log(this.nome + this.sobrenome);
  }
}
console.log(civil.nomeCompleto());
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco);
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir: function (pessoa) {
    if (pessoa === 'homem') {
      console.log('Albert vai latir');
    } else if (pessoa === 'mulher') {
      console.log('Albert abana o rabo');
    } else {
      console.log('Albert fica a vigiar');
    }
  }
}
