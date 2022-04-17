const buttonRight = document.getElementById('pluse');
const buttonLeft = document.getElementById('minus');
const p = document.querySelector('p')

buttonRight.addEventListener('click', (event) => {
  let sizeStr = p.style.fontSize ;
  sizeStr = sizeStr.slice(0, sizeStr.length - 2);
  let sizeInt = parseInt(sizeStr);
  p.style.fontSize = sizeInt <= 99 ? (sizeInt + 1) + 'px' : '100px';
});

buttonLeft.addEventListener('click', (event) => {
  let sizeStr = p.style.fontSize;
  sizeStr = sizeStr.slice(0, sizeStr.length - 2);
  let sizeInt = parseInt(sizeStr);
  p.style.fontSize = sizeInt >= 7 ? (sizeInt - 1) + 'px' : '6px';
});

