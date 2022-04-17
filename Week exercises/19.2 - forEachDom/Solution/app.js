const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const body = document.querySelector('body');
const newOl = document.createElement('ol');
body.appendChild(newOl);

//1)
users.forEach(function (fullName) {
  const newLi = document.createElement('li');
  newLi.innerText = fullName.firstName;
  newLi.innerText += ' ';
  newLi.innerText += fullName.lastName;
  newOl.appendChild(newLi);
})

//2)
newOl.classList.add('olClass');
newOl.style.listStyle = 'none'

//3)  console.dir(document.all)
const arrLi = document.getElementsByTagName('li');
for (let i = 0; i < arrLi.length; i++) {
  arrLi[i].id = users[i].id
}



