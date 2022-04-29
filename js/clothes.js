const sidebarMenu = document.querySelector('.clothes__sidebar-menu')
const sideBar = document.querySelector('.clothes__sidebar')
const sidebarClose = document.querySelector('.clothes__close span')


sidebarMenu.onclick = () => sideBar.classList.add('clothes__sidebar--active')
sidebarClose.onclick = () => sideBar.classList.remove('clothes__sidebar--active')
