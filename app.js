// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosArray = [];

function agregarAmigo() {
    //toma el valor del input
    const amigoNuevo = document.getElementById('amigo').value.trim();
    console.log(amigoNuevo);

    //si no ingreso un valor
    if (amigoNuevo === '') {
        alert('Debes ingresar un nombre');
    } else {
        //agrega el amigo nuevo al aray
        amigosArray.push(amigoNuevo);
        agregarElementoALista(amigoNuevo, 'listaAmigos');
    }

}

function agregarElementoALista(amigo, nombreLista) {
    let lista = document.getElementById(nombreLista);
    //crea cada list item con el amigo que se pasa por parametro
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
}

function sortearAmigo() {
    //cantidad de amigos
    let max = amigosArray.length;

    //numero de 0 a cantidad de amigos - 1 
    let numeroRandom = Math.floor(Math.random() * max);

    // amigo segun el indice random
    let amigoElegido = amigosArray[numeroRandom];

    let parrafo = document.getElementById('resultado');
    parrafo.textContent = `Tu amigo secreto es: ${amigoElegido}`

    //deshabilita el boton de añadir y sortear
    document.getElementById('agregar').setAttribute('disabled', 'true');
    document.getElementById('botonSortear').setAttribute('disabled', 'true');


}
