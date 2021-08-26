//selectors/////////////////////////////////
const nav = document.querySelector('.navbar')
const menuBtn = document.querySelector('.menu--active')
const closeBtn = document.querySelector('.menu--close')






//menu///////////////////////////////
//////////////////////////////////////////////////
menuBtn.addEventListener('click',()=>{
    nav.classList.add('active')

})

closeBtn.addEventListener('click',() => {
    nav.classList.remove('active')

})


//dropdown///////////////////////////////////////
/////////////////////////////////////////////

const dropDown = document.querySelectorAll('.dropdown')
const allDropdowns = document.querySelectorAll('.navbar__items')
const DROP_CLASS = 'drop';
const navbar = document.querySelector('.navbar');


navbar.addEventListener('click', ({target}) => {
  if (!target.classList.contains('dropdown')) return;
  
  const parent = target.parentNode;
  const navItems = parent
    .querySelector('.navbar__items');

  allDropdowns.forEach(el => el !== navItems && el.classList.remove(DROP_CLASS));
  
  if (navItems) {
    navItems.classList.toggle(DROP_CLASS);  
  }
});




 