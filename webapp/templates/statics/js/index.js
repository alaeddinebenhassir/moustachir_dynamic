var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    centerSlide :'true',
    fade : 'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      520:{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3,
      },
      1200:{
        slidesPerView: 4,
      },
    },
  });




  var caroussel = document.getElementById('carouselExampleInterval');

  function myFunction(x) {
    if (x.matches) { // If media query matches
      //document.body.style.backgroundColor = "yellow";
      caroussel.setAttribute('data-bs-interval','false');
      caroussel.removeAttribute('data-bs-ride');
      console.log(caroussel)

    } else {
     //document.body.style.backgroundColor = "pink";

     caroussel.setAttribute('data-bs-ride','carousel');
     caroussel.removeAttribute('data-bs-interval');
     console.log(caroussel)
    }
  }
  
  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x) // Call listener function at run time
   // Attach listener function on state changes

   
  /*


   
  caroussel.setAttribute('data-bs-interval','false');
  caroussel.removeAttribute('data-bs-ride');
  console.log(caroussel)

*/

   //data-bs-interval="false"
   //data-bs-ride="carousel"