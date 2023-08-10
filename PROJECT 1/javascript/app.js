const menu = document.querySelector('.menu')
const nav = document.querySelector('.subnav')
menu.addEventListener('click', ()=> {
    nav.classList.toggle('none')
})