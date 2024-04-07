const menuBtn = document.querySelector('.menu-button')
const navlinks = document.querySelector('.navlinks')

menuBtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('mobile-menu')
})