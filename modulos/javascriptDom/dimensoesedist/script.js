// Verifique a distância da primeira imagem
// em relação ao topo da página
const distanciaImagem = document.querySelector('img');
console.log(distanciaImagem.offsetTop);
// Retorne a soma da largura de todas as imagens
const larguraImagens = document.querySelectorAll('img');
let soma = 0
larguraImagens.forEach(imagem => {
  soma += imagem.offsetWidth;
});
console.log(soma);
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach(link => {
  const alturaLink = link.getBoundingClientRect().height;
  const larguraLink = link.getBoundingClientRect().width;
  if (alturaLink >= 48 && larguraLink >= 48) {
    console.log('Parece estar de acordo');
  } else {
    console.log('Não está de acordo com os padrões web', alturaLink, larguraLink)
  }
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu')
const small = window.matchMedia('(max-width:720px)');
if (small.matches) {
  menu.classList.add('menu-mobile')
} else {
  console.log('classe não adicionada');
}