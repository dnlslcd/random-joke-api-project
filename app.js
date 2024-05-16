// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', async function(){
    // 1. hacer petición GET a la API del chiste de Chuck Norris. Existe un método nativo de JS que se llama 'fetch'. En su versión más simple, 
    // tenemos que pasar como parámetro la URL de la API. El metodo 'fetch' devuelve la respuesta de la API
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    // 2. convertir el JSON que nos devuelve la API a algún tipo de dato que entienda JS (normalmente un objeto o array de objetos)
    const data = await response.json();

    // 3. modificar el DOM para mostrar el chiste al usuario
    jokeDIV.textContent = data.value;
});