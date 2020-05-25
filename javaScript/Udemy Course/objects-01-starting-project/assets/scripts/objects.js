/*const person = {
  'first-name': 'ma',
  age: '22',
  greeet: () => {
    alert(`Hello ${person.name} you are ${person.age} years old`);
  },
  1.5: 'hello', // key can be a number 
};

//person.greeet();

person.age = 31; //modifying a property of the object

person.isAdmin = true; //adding new property to object

delete person.age; //deleting a property from object

console.log(person['first-name']); // a key of the object can be accessed through []*/

//Actual Code for application

const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (searchTerm = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !searchTerm
    ? movies
    : movies.filter((movie) => movie.info.title.includes(searchTerm));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    let text = '';
    const { info, ...Other } = movie;
    console.log(Other);
    const { getFormattedTitle } = movie;
    //getFormattedTitle = getFormattedTitle.bind(movie);
    for (const key in info) {
      if (key === '_title') continue;
      if (key === 'title') text = `${getFormattedTitle.call(movie)} - `;
      // above is the alternative statment using object destructuring
      else text += `${key}: ${info[key]}`;
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extraValue === '')
    return;

  const newMovie = {
    info: {
      //title, // adds the key and value pair with same name and value
      set title(val) {
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle: function () {
      return this.info.title.toUpperCase(); //This always refers to what called that function not where it belongs
    },
  };
  newMovie.info.title = title;
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const searchTerm = document.getElementById('filter-title').value;
  renderMovies(searchTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler);
