window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
  
    navbar.classList.toggle("scrolling-active", window.scrollY > 0);
  });
  
  
  const responsiveNavbar = document.querySelector('.dark')
  const burgerMenu = document.querySelector('.burger')
  const xBtn = document.querySelector('.xBtn')
  
  burgerMenu.addEventListener('click', () => {
  responsiveNavbar.style.transform = "translateX(0%)"
  })
  
  
  xBtn.addEventListener('click', () => {
    responsiveNavbar.style.transform = "translateX(100%)"
  })