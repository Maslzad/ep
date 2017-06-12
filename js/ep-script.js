$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          pagination: '.swiper-pagination',
          effect: 'cube',
          grabCursor: false,
          autoplay: 10000,
          keyboardControl: true,
          mousewheelControl: true,
          loop: true,
          cube: {
          shadow: false,
          slideShadows: false
          }
      });
  
  var team_swiper = new Swiper('.team-swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: true
    });
      
  $('.navbar').offcanvas({
    disableScrolling: false
  })    
          
  });