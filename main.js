document.addEventListener('DOMContentLoaded', () => {
    const generateOutputBtn = document.getElementById('generate-output-btn');
    const formattedJsonContainer = document.getElementById('formatted-json');

    generateOutputBtn.addEventListener('click', () => {
        const title = document.getElementById('concept-title').value.replace(/"/g, '\\"');
        const source = document.getElementById('concept-source').value.replace(/"/g, '\\"');
        const definition = document.getElementById('concept-definition').value.replace(/"/g, '\\"');
        const description = document.getElementById('concept-description').value.replace(/"/g, '\\"');

        if (!title || !source || !definition || !description) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        const formattedJSON = `
"${title}": {
    "title": "<h3 style='font-size: 3em;'>${title}</h3>",
    "source": "<p style='color: #007BFF;'>${source}</p>",
    "definition": "<p style='font-style: italic;'>${definition}</p>",
    "description": "<p style='font-style: italic;'>${description}</p>"
},`;

        formattedJsonContainer.textContent = formattedJSON;
    });
});
