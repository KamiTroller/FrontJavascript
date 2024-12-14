const btnEnviar = document.getElementById("enviar");

btnEnviar.style.backgroundColor = "red";

btnEnviar.addEventListener("click", function () {
    console.log("Clicou no botao!");

    const inputTarefa = document.getElementById("nomeTarefa");
    console.log(inputTarefa.value);

    if (inputTarefa.value == "") {
        alert("Digite alguma informação válida");
        window.location.reload();
    }

    //document -> arquivo html
    //getElementById -> Buscar elemento com base no id

    const listaItens = document.getElementById("listaItens");

    const h2 = document.createElement("h2"); // h2 -> titulo, h1, h2, h3, h4, h5, h6

    //adicionando no h2 o texto digitado pela pessoa

    h2.textContent = inputTarefa.value;

    //adicionando filho a div lista

    listaItens.appendChild(h2);

});