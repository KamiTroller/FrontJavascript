document.addEventListener('DOMContentLoaded', function () {

    const button = document.getElementById("fetch-cat-button");

    const catContainer = document.getElementById("cat-container");

    const loadingElement = document.getElementById("loading");

    async function fetchCat() {
        loadingElement.classList.remove("hidden");
        catContainer.innerHTML = "";

        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");

            const data = await response.json();

            if (data.length > 0) {

                const catUrl = data[0].url;

                const imgElement = document.createElement("img");
                imgElement.src = catUrl;
                imgElement.alt = "Gato aleatorio";
                imgElement.style.maxWidth = "400px";
                imgElement.style.borderRadius = "8px";

                catContainer.appendChild(imgElement);
            } else {
                catContainer.innerText = "Não foi possivel buscar o gato";
            }
            
        } catch (error) {
            catContainer.innerHTML = "Ocorreu um erro ao buscar a imagem.";
        } finally {
            loadingElement.classList.add("hidden");
        }

    }

    fetchCat();

    button.addEventListener("click", fetchCat);
});