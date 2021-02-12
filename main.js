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
// const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');

navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  } 

  // // 선택한 버튼에 active 주기 __ css에서 적용 안함 
  // navbarMenuItems.forEach((item) => {
  //   if (item.dataset.link === link) {
  //     item.classList.add('active');
  //   } else {
  //     item.classList.remove('active');
  //   }
  // })

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

//7.TODO: Sepcify Project when click the project category menu
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
const workBtns = document.querySelectorAll('.category__btn');

workBtnContainer.addEventListener('click', (event) => {
  const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;  // 콘솔 창에서 source에서 디버깅하면서 찾음
  if (filter == null) {
    return;
  }


  // Remove selection from the previous item and select the new one 
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;  // span 클릭하면 안되던거 해결
  target.classList.add('selected');

  console.log(event);


  projectContainer.classList.add('anim-out');
  // 블럭안에 있는 애들은 0.3초 후에 실행된다. 
  setTimeout(() => {
    projects.forEach((project) => {
      // work project 보이게 안보이게 하기 
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    })
    projectContainer.classList.remove('anim-out');
    },300)
    
  // // Button Active 제거 및 추가 
  // workBtns.forEach((button) => {
  //   if (button.dataset.filter === filter) {
  //     button.classList.add('active');
  //   } else {
  //     button.classList.remove('active');
  //   }
  // })
})


// Function: Scroll to specific element 
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
}