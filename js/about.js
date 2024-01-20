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

var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = currentDateTime.getMonth()+1;
var date = currentDateTime.getDate()+1;

if(date < 10){
    date = '0'+date;
}

if(month < 10){
    month = '0'+month;
}

var dateTomorrow = year + '-' + month+ '-' + date;
var reservationDate = document.querySelector('#datetime');
reservationDate.setAttribute('min', dateTomorrow+'T00:00');

const reservationBtn = document.querySelector('#open-reservation');
const closeBtn = document.querySelector('#close-btn');
const submitBtn = document.querySelector('#submit-btn');
const reservationForm = document.querySelector('#reservation');
const nameField = document.querySelector('#name');
const phoneNumberField = document.querySelector('#phone_number');
const dateTimeField = document.querySelector('#datetime');
const numberOfPeopleField = document.querySelector('#number_of_people');

reservationBtn.onclick = () => {
    reservationForm.style.display = "block";
    reservationForm.style.filter = "blur(0px)";
    document.getElementById('header').style.filter = "blur(10px)";
    document.getElementById('header').style.filter = "brightness(30%)";
    document.getElementById('title').style.filter = "blur(10px)";
    document.getElementById('title').style.filter = "brightness(30%)";
    document.getElementById('ourStory').style.filter = "blur(10px)";
    document.getElementById('ourStory').style.filter = "brightness(30%)";
    document.getElementById('ourMenu').style.filter = "blur(10px)";
    document.getElementById('ourMenu').style.filter = "brightness(30%)";
    document.getElementById('footer').style.filter = "blur(10px)";
    document.getElementById('footer').style.filter = "brightness(30%)";
}

closeBtn.onclick = () => {
    reservationForm.style.display = "none";
    document.getElementById('header').style.filter = "none";
    document.getElementById('title').style.filter = "none";
    document.getElementById('ourStory').style.filter = "none";
    document.getElementById('ourMenu').style.filter = "none";
    document.getElementById('footer').style.filter = "none";
}

submitBtn.onclick = () => {
  if (nameField.checkValidity() && phoneNumberField.checkValidity() && dateTimeField.checkValidity() && numberOfPeopleField.checkValidity()) {
      confirm("Your reservation has been made!");
  }
}
