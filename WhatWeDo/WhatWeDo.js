window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  let burger = document.querySelector(".burger");
  
    navbar.classList.toggle("scrolling-active", window.scrollY > 0);
    burger.classList.toggle("burger2", window.scrollY > 0);
});


const responsiveNavbar = document.querySelector('.responsive-navbar')
const burgerMenu = document.querySelector('.burger')
const xBtn = document.querySelector('.xBtn')

burgerMenu.addEventListener('click', () => {
responsiveNavbar.style.transform = "translateX(0%)"
})


xBtn.addEventListener('click', () => {
  responsiveNavbar.style.transform = "translateX(100%)"
})