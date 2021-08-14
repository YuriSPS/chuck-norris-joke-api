export function initJoke() {
    // selecionando o botão e adicionando evento de click
    const btnJoke = document.querySelector('.btnJokes');
    btnJoke.addEventListener('click', handleJoke);

    // selecionando a div onde está localizado o parágrafo que receberá as piadas de forma random da API
    const jokeDiv = document.querySelector('.joke');

    function handleJoke() {
        // criando uma variavel que irá receber a promisse da API
        const joke = fetch('https://api.chucknorris.io/jokes/random')
        joke.then((response) => { //recebendo um objeto chamado response e agora posso ter acesso aos seus métodos
            return response.json(); //retornando uma nova promisse só que dessa vez iremos acessar o Json da resposta que obtivemos para assim termos acesso as propriedades do objeto
        })
        .then((responseJson) => {
            jokeDiv.innerText = responseJson.value;
        })
    }
}