
const headerLanguageEl = document.querySelector('header .header_option')
const headerBtn = document.querySelector('header .header__btn')
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 68){
    headerLanguageEl.classList.add('gray');
    headerBtn.classList.add('black')
  }else{
    headerLanguageEl.classList.remove('gray');
    headerBtn.classList.remove('black')
  }
}, 300))

const leftMenuEl = document.querySelector('header .inner .left-menu')
const headerBtnToggleEl = document.querySelector('header .inner .header__btn')

headerBtnToggleEl.addEventListener('click', function(){
  leftMenuEl.classList.toggle('active')
  headerBtn.classList.toggle('black')
  headerBtn.classList.toggle('active')
})

headerLanguageEl.addEventListener('click', function(){
  headerLanguageEl.classList.toggle('active')
})