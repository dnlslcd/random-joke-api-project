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


// Errores comunes

// 1. No poner bien la URL de la APIs de la cual quieres recibir la información
//  await fetch("https://api.chucknorris.io/jokes/random");

// 2. No saber interpretar el tipo de dato que os viene de la API
// La forma más fácil de interpertar la estructura de datos que te devuelve la API-->
// 1. console.log(data) --> Mostrar por consola los datos de la API antes de hacer nada
// 2. En la página Web de la API, existe documentación con los campos y estructura de datos que devuelve la API

// 3. No usar el ejercicio de chuck norris como base. Esta bien mirar como se hace el fetch en otros ejercicios. 
//    No copiar y pegar, escribirlo todo para que se vaya quedando e interorizando