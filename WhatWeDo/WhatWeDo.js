window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".nav");

  navbar.classList.toggle("scrolling-active", window.scrollY > 0);
});

// window.addEventListener('scroll', function () {
//     let logo = document.querySelector('.logo')
//     let links = document.querySelector('.links')
//     let windowPosition = window.scrollY > 0;

//     if(windowPosition){
//         logo.style.width = "100%"
//         // logo.style.transition = "0.1s"
//         links.style.display = "none"
//     }
//     else{
//         logo.style.width = "120px"
//         links.style.display = "block"
//     }
// logo.classList.toggle('scrolling-active', window.scrollY > 0)
// })


