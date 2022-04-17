const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const ageInput = document.querySelector('#age');
const submitClick = document.querySelector('#submit');
// jump window
const jump_window = document.querySelector('#jump_window');
const confirmClick = document.querySelector('#confirm');
const changeClick = document.querySelector('#change');
// ok window
const jump_ok = document.querySelector('#jump_ok');
const okClick = document.querySelector('#ok');
const nameConfirm = document.querySelector('#nameConfirm');
const emailConfirm = document.querySelector('#emailConfirm');
const ageConfirm = document.querySelector('#ageConfirm');

nameInput.addEventListener('keypress', function(e) {
  nameConfirm.innerText = this.value;
});
emailInput.addEventListener('keypress', function(e) {
  emailConfirm.innerText = this.value;
});
ageInput.addEventListener('keypress', function(e) {
  ageConfirm.innerText = this.value;
});


submitClick.addEventListener('mouseup', function(e) {
  jump_window.style.display = 'block'
});

confirmClick.addEventListener('mouseup', function(e) {
  jump_ok.style.display = 'block'
});

okClick.addEventListener('mouseup', function(e) {
  form_title.style.display = 'none'
  jump_ok.style.display = 'none'
  jump_window.style.display = 'none';
});


changeClick.addEventListener('mouseup', function (e) {
  jump_window.style.display = 'none'
});

