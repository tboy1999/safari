// user js----------------------------------------------------------------

const userItems = document.querySelectorAll('.user__item')

userItems.forEach((userItems, index) => {
  userItems.onclick = () => {
    document.querySelectorAll('.user__item.user__item--active').classList.remove('active');
    document.querySelectorAll('.user__item.user__item--prev').classList.remove('prev');
    document.querySelectorAll('.user__item.user__item--next').classList.remove('next');
  }
})