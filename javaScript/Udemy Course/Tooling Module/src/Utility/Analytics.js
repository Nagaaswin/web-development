const timeTimer = 2000;

const intervalId = setInterval(() => {
  console.log('Sending analytics data...');
}, timeTimer);
document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId);
});
