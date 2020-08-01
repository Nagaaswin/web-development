const button = document.querySelector('button');
const output = document.querySelector('p');

//promisifying a traditional api
const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (sucess) => {
        resolve(sucess);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

//creation of Promise
const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

//async await function
async function trackUserHandler() {
  // navigator.geolocation.getCurrentPosition(
  //   (posdata) => {
  //     //using promise for nesting of data
  //     setTimer(2000).then((data) => {
  //       console.log(data, posdata);
  //     });
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  //mutiple chaining promises
  // .then((posdata) => {
  //   positionData = posdata;
  //   return setTimer(2000);
  // })
  // .catch((error) => {
  //   console.log(error);
  // })
  // .then((data) => {
  //   console.log(data, positionData);
  // });

  //callback function or async code excuted by the browser
}
setTimer(0).then(() => {
  console.log('Timer!!');
});

console.log('Getting position');
button.addEventListener('click', trackUserHandler);

//More promise functions

Promise.race([getPosition(), setTimer(1000)]).then((data) => {
  console.log(data);
});

Promise.all([getPosition(), setTimer(1000)]).then((data) => {
  console.log(data);
});

Promise.allSettled([getPosition(), setTimer(1000)]).then((data) => {
  console.log(data);
});
