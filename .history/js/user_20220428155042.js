// user js----------------------------------------------------------------

const userItems = document.querySelectorAll('.user__item')
const userTags = document.querySelectorAll('.user__tag')

userTags.forEach((userTag, index) => {
  userTag.onclick = () => {
    document.querySelector('.user__item.user__item--active').classList.remove('user__item--active');
    document.querySelector('.user__item.user__item--prev').classList.remove('user__item--prev');
    document.querySelector('.user__item.user__item--next').classList.remove('user__item--next');
    userTag.classList.add('user__item--active')
    userItems[index].classList.add('user__item--prev')
    userItems[index+2].classList.add('user__item--next')
    
  }
})