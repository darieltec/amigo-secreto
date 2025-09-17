// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar duplicados
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    // Agregar al arreglo
    amigos.push(nombre);

    // Actualizar lista
    mostrarLista();

    // Limpiar input
    input.value = "";
    input.focus();
}

// Mostrar lista
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón eliminar individual ❌
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.onclick = () => {
            amigos.splice(index, 1);
            mostrarLista();
        };

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Sortear amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`;
}

// Nueva función: borrar todo
function borrarTodo() {
    amigos = []; // Vaciar arreglo
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

// Permitir agregar con tecla Enter
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita enviar formulario
        agregarAmigo();
    }
});
