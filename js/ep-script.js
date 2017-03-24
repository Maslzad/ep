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
      
  $('.navbar').offcanvas({
    disableScrolling: false
  })    
          
  });