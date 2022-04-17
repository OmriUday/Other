const checkbox = document.querySelector('#checkbox');
const img = document.querySelector('#img');
const text = document.querySelector('#text');

checkbox.addEventListener('mouseup', function () {
  if (checkbox.checked == true) {
    img.style.display = 'none';
  }
  else {
    img.style.display = 'block'
  }
  if (checkbox.checked == false) {
    img.style.display = 'block';
  }
  else {
    img.style.display = 'none'
  }
});