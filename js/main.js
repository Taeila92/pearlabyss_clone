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
const menuBarEl = document.querySelector('header .inner')
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 68){
    menuBarEl.classList.add('white');
  }else{
    menuBarEl.classList.remove('white');
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

