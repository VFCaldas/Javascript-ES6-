// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]');

function ativarLink(event) {
  event.preventDefault();
  const linkAtual = event.currentTarget;
  linkAtual.classList.add('ativo');
}
linkInterno.forEach((link) => {
  link.addEventListener('click', ativarLink)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll(' body *');
function showElement(event) {
  event.preventDefault();
  const actualEl = event.currentTarget;
  console.log(actualEl);
}
allElements.forEach((elemento) => {
  elemento.addEventListener('click', showElement)
})
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElement(event) {
  event.preventDefault();
  //event.currentTarget.remove();

}
allElements.forEach((elemento) => {
  elemento.addEventListener('click', removeElement)
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClick(event) {
  if (event.key === 't') {
    console.log('Texto Aumentou')
  }
}
window.addEventListener('keydown', handleClick)