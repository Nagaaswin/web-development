const strBtn = document.getElementById('store-btn');
const retriveBtn = document.getElementById('retrieve-btn');

strBtn.addEventListener('click', () => {
  const userId = '1244';
  const user = {
    name: 'Max',
    age: '30',
    hobbies: ['sports', 'gaming'],
  };
  /*Setting expiration time */
  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retriveBtn.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  const data = cookieData.map((i) => {
    return i.trim();
  });
  console.log(JSON.parse(data[1].split('=')[1]));
});
