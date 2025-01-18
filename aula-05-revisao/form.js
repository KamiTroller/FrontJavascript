// json-webserver
const apiUrl = "http://localhost:3000/clientes";

const clienteForm = document.getElementById("clienteForm");
const nomeClienteForm = document.getElementById("clienteNome");
const listaCliente = document.getElementById("clienteLista");
const btnCadastrarCliente = document.getElementById("btn-enviar");

clienteForm.addEventListener("submit", async (e) => {
    // e = evento
    e.preventDefault(); // cancelar o recarregar pagina

    const nomeCliente = nomeCliente.value;

    if (!nomeCliente) {
        alert("Preencha todos os campos!");
    }

    // enviar para o jsonwebserver

    try {

        await fetch("http://localhost:3000/clientes")
        method: "POST",
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nomeCliente })
    } catch (error) {
        console.error("Deu erro ao criar o cliente", error);
    }

});

async function loadClientes() {
    try {
        const response = await fetch("http://localhost:3000/clientes");
        const data = await response.json();

        data.forEach((cliente) => {
            const linhaCliente = document.createElement("p");

            linhaCliente.textContent = cliente.nomeCliente;

            listaCliente.appendChild(linhaCliente);

        });
    } catch (error) {
        console.error("Erro ao carregar os clientes: ", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadClientes();
});