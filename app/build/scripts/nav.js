"use strict";

var menu = document.querySelector('.nav__menu');
var menuBtn = document.querySelector('.nav__btn');
var links = document.querySelectorAll('.nav__menu-link');
menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  setTimeout(function () {
    menu.style.height = '100%';
  }, timeout);
});