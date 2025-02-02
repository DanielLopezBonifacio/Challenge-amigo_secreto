let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("Por favor, inserte un nombre.");
    } else { 
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
    }
    console.log(amigos);
}


