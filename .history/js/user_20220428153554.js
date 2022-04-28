// user js----------------------------------------------------------------

const userItems = document.querySelectorAll('.user__item')

userItems.forEach((userItems, index) => {
  userItems.onclick = () => {
    document.querySelector('.user__item.user__item--active').classList.remove('active');
    document.querySelector('.user__item.user__item--prev').classList.remove('prev');
    document.querySelector('.user__item.user__item--next').classList.remove('next');
    this.classList.add('active')
    userItems[index-1].classList.add('prev')
    userItems[index+1].classList.add('next')
  }
})