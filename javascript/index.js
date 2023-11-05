const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const close = document.querySelector(".close");
const body = document.querySelector(".body");
menu.addEventListener("click", () => {
  nav.classList.toggle("nav--active");
  menu.classList.toggle("menu--hidden");
  close.classList.toggle("close--active");
  body.classList.toggle("body--no-scroll");
});
close.addEventListener("click", () => {
  nav.classList.toggle("nav--active");
  menu.classList.toggle("menu--hidden");
  close.classList.toggle("close--active");
  body.classList.toggle("body--no-scroll");
});
