import Joke from './module/joke.js';

// iniciando a classe exportada
const jokes = new Joke('https://api.chucknorris.io/jokes/random', '.btnJokes', '.joke');
jokes.init();