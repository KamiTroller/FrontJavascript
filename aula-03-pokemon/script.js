const btnCarregarPikomon = document.getElementById("load-pikomon");

btnCarregarPikomon.addEventListener('click', function () {
    const listaPikomons = document.getElementById('list-pikomon');

    listaPikomons.innerHTML = '<li>Carregando pikomons...</li>';

    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao acessar o site');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.results);

            listaPikomons.innerHTML = '';

            data.results.forEach(pikomon => {
                console.log(pikomon);
                const listItem = document.createElement("li");
                listItem.textContent = pikomon.name;


                fetch(pikomon.url).then(response => {
                    return response.json();
                }).then(pikomonDetalhes => {
                    const imagePikomon = document.createElement("img");

                    imagePikomon.src = pikomonDetalhes.sprites.front_default;

                    listItem.appendChild(imagePikomon);

                });
                listaPikomons.appendChild(listItem);
            });
        });
});