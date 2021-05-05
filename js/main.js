'use strict';

new Swiper('.banner .swiper-container',{
  slidesPerView:1,
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.banner .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl: '.banner .swiper-prev',
    nextEl: '.banner .swiper-next'
  }
});
const headerEl = document.querySelector('header')
const menuBarEl = document.querySelector('header .inner')
const toTopEl = document.querySelector('.to-top');
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 68){
    headerEl.classList.add('white');
    menuBarEl.classList.add('white');
  }else{
    headerEl.classList.remove('white');
    menuBarEl.classList.remove('white');
  }
  if(window.scrollY > 1800){ 
    toTopEl.classList.add('up')
  }else{
    toTopEl.classList.remove('up')
  }
}, 300))

const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .9 // 뷰포트의 top 0  bottom 1 사이의 값 입력
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

toTopEl.addEventListener('click',function(){
  gsap.to(window, .5,{
    scrollTo: 0
  });
});