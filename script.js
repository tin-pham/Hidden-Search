const inputContainer = document.querySelector('.input-container');
const searchIcon = document.querySelector('.fa-search');

searchIcon.addEventListener('click', () => {
  inputContainer.classList.toggle('active');
});
