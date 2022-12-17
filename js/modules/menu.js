//Otenemos los elementos del DOM
const menuButton = document.getElementById('menu-button');
const mainHeader = document.getElementById('main-header');
const overlay = document.getElementById('main-overlay');
const activeClass = 'is-active';

const toggleMenu = () => mainHeader.classList.toggle(activeClass);
const closeMenu = () => mainHeader.classList.remove(activeClass);
const closeMenuClickLink = (event)=>{
   
    if(event.target.tagName === 'A')closeMenu()
}

const closeWhenTypeScape=(event)=>{
    if(event.code === 'Escape')closeMenu()
}

menuButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click',closeMenu);
mainHeader.addEventListener('click', closeMenuClickLink);
mainHeader.addEventListener('keydown',closeWhenTypeScape);