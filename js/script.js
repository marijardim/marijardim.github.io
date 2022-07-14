import MenuMobile from "./modules/menu-mobile.js"
import ScrollSuave from "./modules/scroll-suave.js";


const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const scrollSuave = new ScrollSuave('[data-menu="list"] a')
scrollSuave.init();



/**************** Show more  ************/
const btn = document.querySelector('.show-btn');
const div = document.querySelectorAll('.show-div');
const quartoElemento = document.querySelector('.flipbox:nth-child(4)')
function showMore(e) {
  e.preventDefault();
  quartoElemento.classList.toggle('ativo');
  div.forEach((item)=>{
    item.classList.toggle('active');
  })
  quartoElemento.classList.contains('ativo') ? btn.innerText  = "Ver menos" : btn.innerText  = "Ver mais";
}

btn.addEventListener('click', showMore)

/*********** scroll menu ************/
window.onscroll = function() {myFunction()};

const menu = document.querySelector('.menu')
const classActive = 'active'
const mobileMenu = document.querySelector('[data-menu="list"]')

function myFunction() {
  if (window.pageYOffset > 20) {
    menu.classList.add(classActive);
  } else {
    menu.classList.remove(classActive);
  }
}
