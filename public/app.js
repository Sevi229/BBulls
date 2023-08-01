const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#game-page');
  const about = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#road-page');
 
  const navbarItems = document.querySelectorAll('.navbar_links');
  const team = document.querySelector('#team-page');


   

  let scrollPos = window.scrollY;
   //console.log(scrollPos);
   //console.log("Innerdith" + window.innerWidth);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');

    aboutMenu.classList.remove('highlight');
    about.classList.remove('highlight');
    servicesMenu.classList.remove('highlight')
    team.classList.remove('highlight');;
    
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2400) {
    aboutMenu.classList.add('highlight');

    homeMenu.classList.remove('highlight');
    about.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    team.classList.remove('highlight');

    return;
  } else if (window.innerWidth > 960 && scrollPos < 3000) {
    about.classList.add('highlight');
    
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    team.classList.remove('highlight');
    return;
  }

  else if (window.innerWidth > 960 && scrollPos < 5100) {
    
    servicesMenu.classList.add('highlight');
    
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    about.classList.remove('highlight');
    team.classList.remove('highlight');
    return;
  }

  else if (window.innerWidth > 960) {
    team.classList.add('highlight');

    servicesMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    about.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};



window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
