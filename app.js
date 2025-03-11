//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){

    let amigo = document.getElementById('amigo');

    if(amigo.value == '' || amigo.value == ','){
        alert('Informe o nome do amigo');
        return;
    }

    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado');
        return;
    }

    let lista = document.getElementById('listaAmigos');
    amigos.push(amigo.value);    

    atualizarListaAmigos();

    amigo.value = '';
}

function atualizarListaAmigos() {

    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("Não há amigos cadastrados para sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
}
