mybutton = document.querySelector(".auto-top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const boxHearts = document.querySelectorAll('.product__top')

boxHearts.forEach(boxHeart => {
  boxHeart.onclick = (e) => {
    boxHeart.classList.toggle('main__top--active')
  } 
})
// user js----------------------------------------------------------------

const userItems = document.querySelectAll('.user__item')

console.log(userItems);