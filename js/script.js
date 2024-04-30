// Navbar fixed saat scroll
const nav = document.querySelector("nav");

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    header.classList.add("shadow");
    nav.classList.add("shadow");
  } else {
    header.classList.remove("navbar-fixed");
    header.classList.remove("shadow");
    nav.classList.remove("shadow");
  }
};

//hamburger menu
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("block");
});
