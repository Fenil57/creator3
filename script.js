const burger = document.querySelector(".header__menu");
const burgerFirst = document.querySelector(".header__menu--line:first-child");
const burgerSecond = document.querySelector(".header__menu--line:nth-child(2)");
const burgerThird = document.querySelector(".header__menu--line:last-child");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", function (e) {
  burgerFirst.classList.toggle("line-1");
  burgerSecond.classList.toggle("line-2");
  burgerThird.classList.toggle("line-3");
  nav.classList.toggle("open");
});
