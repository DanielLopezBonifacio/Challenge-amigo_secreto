let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("Por favor, inserte un nombre.");
    } else { 
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
        actualizarListaHTML();
    }
    console.log(amigos);
}

function actualizarListaHTML(){
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    amigos.forEach((amigo) => {
        listaHTML.innerHTML += `<li>${amigo}</li>`;
    });
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Por favor, inserte al menos un amigo.");
    }
    else if (amigos.length < 2) {
        alert("Por favor, inserte al menos dos amigos.");
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").innerHTML = amigoSorteado;
    }
}