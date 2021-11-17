var icon = document.querySelector('.acc__icon');
var btn = document.querySelectorAll('.acc__btn');
for (let i = 0; i <= btn; i++) {
   btn(i).addEventListener('click',  () => {
      icon.classList.add('active')
   })
}