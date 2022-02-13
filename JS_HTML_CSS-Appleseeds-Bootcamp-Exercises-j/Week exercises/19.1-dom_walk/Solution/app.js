//1)
const li = document.querySelector('.start-here');
li.innerText = 'main title';
//2)
const ul2 = document.querySelector('ul li ul');
const newSubTitle4 = document.createElement('li');
newSubTitle4.innerText = 'sub title 4';
ul2.appendChild(newSubTitle4);
//3)
newSubTitle4.remove();
//4)
const htmlTitle = 'Master Of The Dom';
document.title = htmlTitle;
//5)
const newP = document.querySelector('p');
newP.innerText = 'Hello my name is Omri Uday'

