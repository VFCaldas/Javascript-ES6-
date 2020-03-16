/* O objetivo desse script é linkar as imagens com a descrição elaborando um vinculo com eles, agora qual a forma de fazer? posso selecionar os elementos filhos das divs que seguram os itens e vinculados com uma array e usar o seu index(indice da ordem de imagens) para realizar o efeito */
/* Então primeiro eu seleciono as imagens e a descrição que irá aparecer */

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
if (tabContent.length && tabMenu.length) {
  tabContent[0].classList.add('ativo');
  /* Depois eu crio a função que irá adicionar a classe ativo a descrição, mas tem um problema é preferivel deixar apenas uma descrição ativada enquanto as outras são desativas */
  function activeTab(index) {
    /* Função remover todas as funções ativo */
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    /* adiciona ativo ao item clicado */
    tabContent[index].classList.add('ativo');
  }
  /* Aqui é onde a lista irá usar o seu indice de imagem realizar o vinculo, para isso é necessário dois argumentos, o argumento lista que é a sua imagem, e depois o indice que é o numero que irá vincular com a descrição */
  tabMenu.forEach((lista, index) => {
    /* Adiciona o evento ao clique da imagem, adicionando a classe ativo a descrição */
    lista.addEventListener('click', () => {
      activeTab(index);
    })
  });
}