window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
  
    navbar.classList.toggle("scrolling-active", window.scrollY > 0);
  });
  
  // window.addEventListener('scroll', function () {
  //     let logo = document.querySelector('.logo')
  //     let links = document.querySelector('.links')
  //     let windowPosition = window.scrollY > 0;
  
  //     if(windowPosition){
  //         logo.style.width = "100%"
  //         logo.style.transition = "0.4s"
  //         links.style.display = "none"
  //     }
  //     else{
  //         logo.style.width = "250px"
  //         links.style.display = "block"
  //     }
  // logo.classList.toggle('scrolling-active', window.scrollY > 0)
  // })
  
  const responsiveNavbar = document.querySelector('.responsive-navbar')
  const burgerMenu = document.querySelector('.burger')
  const xBtn = document.querySelector('.xBtn')
  
  burgerMenu.addEventListener('click', () => {
  responsiveNavbar.style.transform = "translateX(0%)"
  })
  
  
  xBtn.addEventListener('click', () => {
    responsiveNavbar.style.transform = "translateX(100%)"
  })