const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const skeleton = document.querySelector('.custom-modal');

console.log(burger, navMenu);

const openBurger = () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    skeleton.classList.toggle('active');
    document.body.classList.toggle('active');
}

burger.addEventListener('click', openBurger);
