// Axel Cotón Gutiérrez Copyright 2023


// Define una variable para almacenar las definiciones
let definitions = {};

// Cargar las definiciones desde el archivo JSON
fetch('definitions.json')
    .then(response => response.json())
    .then(data => {
        definitions = data; // Asigna las definiciones cargadas al objeto definitions

        const searchInput = document.getElementById("search-input");
        const searchButton = document.getElementById("search-button");
        const definitionResult = document.getElementById("definition-result");

        searchButton.addEventListener("click", () => {
            const searchTerm = searchInput.value.trim().toLowerCase();
        
            // Busca definiciones cuyo título contenga el término de búsqueda
            const matchingDefinitions = Object.keys(definitions)
                .filter(term => {
                    const definition = definitions[term];
                    return definition.title.toLowerCase().includes(searchTerm);
                })
                .sort(); // Ordena los resultados alfabéticamente
        
            if (matchingDefinitions.length > 0) {
                const resultsHTML = matchingDefinitions.map(term => {
                    const definition = definitions[term];
                    return `
                    <div class="definition">
                        <h3>${definition.title}</h3>
                        <p>${definition.source}</p>
                        <p>${definition.definition}</p>
                        <p><strong style='color: #007BFF;'>Coloquialmente:</strong> ${definition.description}</p>
                        ${definition.link ? `<p><a href="${definition.link}" target="_blank">Enlace a más información</a></p>` : ""}
                    </div>
                `;
                }).join("");
                definitionResult.innerHTML = resultsHTML;
            } else {
                definitionResult.innerHTML = "<p id='no-definition'>No encontramos definiciones relacionadas con ese término.</p>";
            }
        });
    })
    .catch(error => {
        console.error('Error al cargar las definiciones:', error);
    });

