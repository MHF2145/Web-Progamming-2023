fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000000')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('pokecard');
        data.results.forEach(pokemon => {
            const card = document.createElement('div');
            card.className = 'col-6 pt-4';
            card.innerHTML = `
                    <div class="card mb-3 shadow border-primary">
                        <div class="card-body text-center">
                            <h5 class="card-title text-capitalize">${pokemon.name}</h5>
                            <a href="${pokemon.url}" class="btn btn-primary ">Details</a>
                        </div>
                    </div>
                `;
            cardContainer.appendChild(card);
        });
    })
    .catch(error => console.error('The Pokemon is too strong...:', error));
