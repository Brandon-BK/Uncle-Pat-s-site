window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    let burger = document.querySelector(".burger");
  
    navbar.classList.toggle("scrolling-active", window.scrollY > 0);
    burger.classList.toggle("burger2", window.scrollY > 0);
  });
  
  
  const dark = document.querySelector('.black')
  const burgerMenu = document.querySelector('.burger')
  const xBtn = document.querySelector('.xBtn')
  
  burgerMenu.addEventListener('click', () => {
  dark.style.transform = "translateX(0%)"
  })

  
  xBtn.addEventListener('click', () => {
    dark.style.transform = "translateX(100%)"
  })