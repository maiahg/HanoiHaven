let menu = document.querySelector('.menu-bar');
let navbar = document.querySelector('.navbar');
let container = document.querySelector('.container');

menu.onclick = () => {
    navbar.classList.toggle('active');
    container.classList.toggle('active');
}

scrollDownBtn.onclick = () => {
    aboutSection.scrollIntoView({behavior: 'smooth'});
}
