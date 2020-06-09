const intervalId = setInterval(() => {
  console.log('timer running');
}, 2000);

document.getElementById('analytics').addEventListener('click', () => {
  clearInterval(intervalId);
});
