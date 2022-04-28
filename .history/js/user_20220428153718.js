// user js----------------------------------------------------------------

const userItems = document.querySelectorAll('.user__item')

userItems.forEach((userItems, index) => {
  userItems.onclick = () => {
    document.querySelector('.user__item.user__item--active').classList.remove('user__item--active');
    document.querySelector('.user__item.user__item--prev').classList.remove('user__item--prev');
    document.querySelector('.user__item.user__item--next').classList.remove('user__item--next');
    this.classList.add('user__item--active')
    userItems[index-1].classList.add('user__item--prev')
    userItems[index+1].classList.add('user__item--next')
  }
})