// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagensAnimais);
// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2');
// Selecione o último p do site
const paragrafo = document.querySelectorAll('p');

console.log(paragrafo[paragrafo.length - 1]);
