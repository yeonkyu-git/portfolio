'use strict';


//1.TODO: Make navbar transparent when it is in the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;  // Element 의 요소 반환 

document.addEventListener('scroll', () => {

  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})


//2.TODO: Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  } 

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"});


})