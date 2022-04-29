const iconMenu = document.querySelector('.header__icon-menu')
const menu = document.querySelector('.header__menu')
const close = document.querySelector('.header__menu span')

iconMenu.onclick = () => {
  menu.classList.add('header__menu--active')
}

close.onclick = () => {
  menu.classList.remove('header__menu--active')
}