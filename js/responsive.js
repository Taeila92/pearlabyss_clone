
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

const itemBtnEls =document.querySelectorAll('.item')

itemBtnEls.forEach(itemBtnEl => {
  itemBtnEl.addEventListener('click',() => {
    itemBtnEl.classList.toggle('active')
  })
})

const btnEl1 = document.querySelector('.culture .btn.culture1')
const btnEl2 = document.querySelector('.culture .btn.culture2')

btnEl1.addEventListener('click', function(){
  document.querySelector('.inner .culture-items').style.transform = 'translateX(0vw)'
})
btnEl2.addEventListener('click', function(){
  document.querySelector('.inner .culture-items').style.transform = 'translateX(-100vw)'
})
