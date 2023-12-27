let menu = document.querySelector('.menu-bar');
let navbar = document.querySelector('.navbar');
let container = document.querySelector('.container');
const scrollDownBtn = document.querySelector('.scroll-down');
const ourStorySection = document.querySelector('.ourStory');

menu.onclick = () => {
    navbar.classList.toggle('active');
    container.classList.toggle('active');
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  scrollDownBtn.onclick = () => {
    ourStorySection.scrollIntoView({behavior: 'smooth'});
}

  