$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          pagination: '.swiper-pagination',//
//           effect: 'cube',
          grabCursor: false,          //
          // autoplay: 10000,
          keyboardControl: true,
          mousewheelControl: true,
          loop: true// ,
//           cube: {
//           shadow: false,
//           slideShadows: false
//           }
      });
  
  var team_swiper = new Swiper('.team-swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplayDisableOnInteraction: true,
    breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
      
  $('.navbar').offcanvas({
    disableScrolling: false
  })    
          
  });