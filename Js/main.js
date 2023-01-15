const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})


// Remove o menu lateral ao clicar em qualquer um dos links
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

var icon = document.getElementById('icon');

icon.onclick = function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'img/Logos/sun.png';
    } else {
        icon.src = 'img/Logos/moon-icon-32.png';
    }
}
