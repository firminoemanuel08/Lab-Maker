//Adiciona o menu lateral ao clicar nas 3 barras
const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})
//FIM - Adiciona o menu lateral ao clicar nas 3 barras


//Remove o menu lateral ao clicar em qualquer um dos links
const botaoMenuInicio = document.querySelector('.menu-lateral__link--inicio')
const botaoMenuProjetos = document.querySelector('.menu-lateral__link--projetos')
const botaoMenuContato = document.querySelector('.menu-lateral__link--contato')

botaoMenuInicio.addEventListener('click', () => {
    menu.classList.remove('menu-lateral--ativo')
})

botaoMenuProjetos.addEventListener('click', () => {
    menu.classList.remove('menu-lateral--ativo')
})

botaoMenuContato.addEventListener('click', () => {
    menu.classList.remove('menu-lateral--ativo')
})
//FIM - Remove o menu lateral ao clicar em qualquer um dos links


//Troca de incones ao mudar o tema
var icon = document.getElementById('icon');

icon.onclick = function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = '../../img/Logos/moon.png';
    } else {
        icon.src = '../../img/Logos/sun.png';
    }
}
//FIM - Troca de incones ao mudar o tema

/******************************************************************************
**                                                                           **
**           Developed by Emanuel Firmino & Gabriel Cruz                     **
**                                                                           **
*******************************************************************************/