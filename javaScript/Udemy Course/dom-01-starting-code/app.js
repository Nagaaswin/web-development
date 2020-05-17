const h1 = document.getElementById('main-title');

h1.textContent = 'Some things has changed!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + '(changed)';

const body = document.body;

const listItemsElements = document.getElementsByTagName('li');

for (const listItemsEle of listItemsElements) {
  console.dir(listItemsEle);
}

const section = document.querySelector('section');
const button = document.querySelector('button');

section.style.backgroundColor = 'blue';

section.className = 'red-bg';

button.addEventListener('click', () => {
  /*if (section.className === 'red-bg visible') {
    section.className = 'red-bg invisible';
  } else {
    section.className = 'red-bg visible';
  }*/

  //section.classList.toggle('visible');
  section.classList.toggle('invisible');
});
