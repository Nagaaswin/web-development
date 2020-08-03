const listItems = document.querySelector('.posts');
const singlePostTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHTTPRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();
  // xhr.setRequestHeader('Content-Type', 'application/json');
  //   // sendig a get request
  //   xhr.open(method, url);

  //   xhr.responseType = 'json';

  //   xhr.onload = function () {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  //       reject(new Error('Smthng wnt wrong!'));
  //     }
  //     //resolve(JSON.parse(xhr.response));
  //   };

  //   xhr.onerror = function () {
  //     reject(new Error('Technical error on ur side!!'));
  //   };

  //   xhr.send(JSON.stringify(data));
  // });

  // return promise;

  /* Fetch API*/
  return fetch(url, {
    method: method,
    body: data,
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error('smthng went wrng!!');
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

async function fetchPosts() {
  try {
    const reponseData = await sendHTTPRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );

    const listOfPosts = reponseData;
    for (const post of listOfPosts) {
      const postEl = document.importNode(singlePostTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listItems.append(postEl);
    }
  } catch (error) {
    alert(error);
  }
}

// Sending data to a sever in json format
async function createPost(Title, content) {
  const userID = Math.random();
  const post = {
    title: Title,
    body: content,
    userID: userID,
  };
  /* Default form data like traditional data from HTML */
  const fd = new FormData(form);
  fd.append('userID', userID);
  sendHTTPRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;
  createPost(enteredTitle, enteredContent);
});

//createPost('DummyPost!', 'This is a learning post');

postList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHTTPRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
