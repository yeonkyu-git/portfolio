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

  scrollIntoView(link);
})

//3.TODO: Handle scrolling when tapping "Contact me"
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', (event) => {
  scrollIntoView("#contact");
})

//4.TODO: Make home slowly fade to transparent as the window scrolls down 
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const opacityRate = (homeHeight - window.scrollY)/homeHeight;

  if (opacityRate >= 0) {
    home.style.opacity = opacityRate;
  } 
})

//5.TODO: Show "arrow up" button when scrolling down 
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight/2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
})

//6.TODO: Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView("#home");
})



// Function: Scroll to specific element 
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
}