let menu = document.querySelector('.menu-bar');
let navbar = document.querySelector('.navbar');
let container = document.querySelector('.container');
const scrollDownBtn = document.querySelector('.scroll-down');
const aboutSection = document.querySelector('#about');

menu.onclick = () => {
    navbar.classList.toggle('active');
    container.classList.toggle('active');
}

scrollDownBtn.onclick = () => {
    aboutSection.scrollIntoView({behavior: 'smooth'});
}
