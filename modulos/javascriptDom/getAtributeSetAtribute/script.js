// Adicione a classe ativo a todos os itens do menu
const itemMenu = document.querySelectorAll('.menu a');
itemMenu.forEach((item) => {
  item.classList.add('ativo');
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itemMenu.forEach((item) => {
  item.classList.remove('ativo');
})
itemMenu[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach(item => {
  console.log(item.hasAttribute('alt'));
})
// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https://"]');
linkExterno.setAttribute('href', 'victorcaldas.com')