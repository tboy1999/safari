// user js----------------------------------------------------------------

const userItems = document.querySelectorAll('.user__item')
const userTags = document.querySelectorAll('.user__tag')
const userPains = document.querySelectorAll('.user__pain')

userTags.forEach((userTag, index) => {
  userTag.onclick = () => {
    document.querySelector('.user__item.user__item--active').classList.remove('user__item--active');
    document.querySelector('.user__item.user__item--prev').classList.remove('user__item--prev');
    document.querySelector('.user__item.user__item--next').classList.remove('user__item--next');
    document.querySelector('.user__pain.pain--active').classList.remove('pain--active');
    userTag.classList.add('user__item--active')
    userPains[index].classList.add('pain--active')
    userItems[index].classList.add('user__item--prev')
    userItems[index+2].classList.add('user__item--next')
    userToggle.classList.remove('toggle--active')
    userList.classList.remove('user__list--active')

  }
})

const userToggle = document.querySelector('.user__item-toggle')
const userList = document.querySelector('.user__list')

userToggle.onclick = () => {
  userToggle.classList.toggle('toggle--active')
  userList.classList.toggle('user__list--active')
}