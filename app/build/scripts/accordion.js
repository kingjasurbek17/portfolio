"use strict";

var icon = document.querySelector('.acc__icon');
var btn = document.querySelectorAll('.acc__btn');

for (var i = 0; i <= btn; i++) {
  btn(i).addEventListener('click', function () {
    icon.classList.add('active');
  });
}