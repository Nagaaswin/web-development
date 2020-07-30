const button = document.querySelector('button');

const buttonClickHandler = (event) => {
  //event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

//const boundFn = buttonClickHandler.bind(this);

//button.addEventListener('click', buttonClickHandler);

//removing Event Listener
//setTimeout(() => {
//  button.removeEventListener('click', buttonClickHandler);
//}, 2000);

//buttons.forEach((btn) => {
//  btn.addEventListener('mouseenter', buttonClickHandler);
//});

//Scrollable event
window.addEventListener('scroll', (event) => {
  console.log(event);
});

const form = document.querySelector('form');

//form validation
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

button.addEventListener('click', (event) => {
  // Preventing propogation of event
  event.stopPropagation();
  console.log('Clicked button!!');
  console.log(event);
});

const div = document.querySelector('div');
//making the event listener in capturing phase add a third argument

div.addEventListener('click', (event) => {
  console.log('Clicked div!!');
  console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Traditional way and consumes lots of memory
/*listItems.forEach((listItem) => {
  listItem.addEventListener('click', (event) => {
    event.target.classList.toggle('highlight');
  });
});*/

//Single event listener for all the list elements
list.addEventListener('click', (event) => {
  //Refers to the elements to which the event listener is added
  /*console.log(event.currentTarget);*/
  //causes abrupt behaviour if the elements are nested
  /*event.target.classList.toggle('highlight');*/
  event.target.closest('li').classList.toggle('highlight');
  
  //Programmatically trigging a button
  document.getElementById('submit').click();
});
