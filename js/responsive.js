
const headerLanguageEl = document.querySelector('header .header_option')
const headerBtn = document.querySelector('header .header__btn')
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY)
  if(window.scrollY > 68){
    headerLanguageEl.classList.add('gray');
    headerBtn.classList.add('black')
  }else{
    headerLanguageEl.classList.remove('gray');
    headerBtn.classList.remove('black')
  }
}, 300))