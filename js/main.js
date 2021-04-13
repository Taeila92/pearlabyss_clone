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