// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const clone = menu.cloneNode(true);

copy.appendChild(clone);
// Selecione o primeiro DT da dl de Faq
const trabel = document.querySelector('.faq-lista');
console.log(trabel.children[0]);

// Selecione o DD referente ao primeiro DT
console.log(trabel.nextSibling);
// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');

trabel.innerHTML = animais.innerHTML;