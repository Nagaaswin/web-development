const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild;

const changeBackdrop = document.getElementById('backdrop');

//const cancelAddMovieButton = document.body.children[1].children[1].firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

//const userInputs = addMovieModal.getElementsByTagName('input');
const userInputs = addMovieModal.querySelectorAll('input');

const entryTextSection = document.getElementById('entry-text');

const Movies = [];

const deleteMovieHandler = (id) => {
  let movieIndex = 0;
  for (const mov of Movies) {
    if (mov.Id === id) break;
    movieIndex++;
  }
  Movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const NewMovieElement = document.createElement('li');
  NewMovieElement.className = 'movie-element';
  NewMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element-info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;
  NewMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(NewMovieElement);
};

const updateUI = () => {
  if (Movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const clearMovieInputs = () => {
  for (let input of userInputs) {
    input.value = '';
  }
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const toggleBackdrop = () => {
  changeBackdrop.classList.toggle('visible');
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const backdropChangeHandler = () => {
  toggleMovieModal();
};

const confirmAddMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imgURLValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imgURLValue.trim() === '' ||
    ratingValue.trim() === '' ||
    ratingValue < 1 ||
    ratingValue > 5
  ) {
    alert('You have entered a invalid input.');
    clearMovieInputs();
    return;
  }

  const newMovie = {
    Id: Math.random().toString(),
    Title: titleValue,
    Image: imgURLValue,
    Rating: ratingValue,
  };
  console.log(newMovie);
  Movies.push(newMovie);
  toggleMovieModal();
  clearMovieInputs();
  updateUI();
  renderNewMovieElement(
    newMovie.Id,
    newMovie.Title,
    newMovie.Image,
    newMovie.Rating
  );
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
changeBackdrop.addEventListener('click', backdropChangeHandler);
confirmAddMovieButton.addEventListener('click', confirmAddMovieHandler);
