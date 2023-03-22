const toggleMenuButton = document.querySelector('.toggle-menu-button');
const menu = document.querySelector('.menu');

toggleMenuButton.addEventListener('click', function() {
  menu.classList.toggle('show-menu');
});