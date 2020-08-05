const strBtn = document.getElementById('store-btn');
const retriveBtn = document.getElementById('retrieve-btn');

const userId = '124';
const user = {
  name: 'Max',
  age: '30',
  hobbies: ['sports', 'gaming'],
};

strBtn.addEventListener('click', () => {
  localStorage.setItem('uId', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retriveBtn.addEventListener('click', () => {
  const extractedId = localStorage.getItem('uId');

  if (extractedId) {
    console.log('Got the id -' + extractedId);
  } else {
    console.log('Could not find id.');
  }
  const extractedUser = localStorage.getItem('user');
  if (extractedUser) {
    console.log(JSON.parse(extractedUser));
  }
});
