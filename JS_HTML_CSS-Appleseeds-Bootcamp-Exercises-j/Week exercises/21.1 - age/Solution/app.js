const button = document.getElementById('ageButton');
const number = document.getElementById('myAge');
const massage = document.querySelector('h2')
button.addEventListener('click', (event) => {
  const numberValue = number.value;
  massage.innerText = numberValue >= 18 ? 'You can drink (: ' : 'You’re too young !!'
});