export default class Joke {
    constructor(url, btn, jokeDiv) {
        this.url = url;
        this.btnJoke = document.querySelector(btn);
        // selecionando a div onde está localizado o parágrafo que receberá as piadas de forma random da API
        this.jokeDiv = document.querySelector(jokeDiv);
    }

    async handleJoke(url) {
        // criando uma variavel que irá receber a promisse da API
        const response = await fetch(url);
        const responseJson = await response.json();
        const jokeApi = responseJson.value;
        this.jokeDiv.innerText = jokeApi;

    }

    init() {
        this.btnJoke.addEventListener('click', () => {
            this.handleJoke(this.url);
        });
    }
    
}