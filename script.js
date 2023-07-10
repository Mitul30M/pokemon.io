// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/i.png

const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

let pokemonNo = 0;

const newPokemonCaught = () => {
    
    const pokedexNo = Math.floor(Math.random() * 1010) + 1;

    pokemonNo = pokedexNo;

    console.log(`It's Pokemon No. : ${pokedexNo}`);

    return `${baseUrl}${pokedexNo}.png`;

}


const container = document.querySelector('.container');
    
for (let i = 1; i <= 6; ++i) {
    const pokemon = document.createElement('div');
    
    pokemon.classList.add('pokemon');

    container.appendChild(pokemon);
    
    const img = document.createElement('img');

    img.classList.add('img');

    pokemon.appendChild(img);

    img.style.display = 'none';
    
    pokemon.addEventListener('click', (evt) => {
        
    console.log(evt)

    if (evt.target.nodeName === 'DIV') { console.log('A random Pokemon appeared !'); }
        
    img.src = newPokemonCaught();
    img.style.display = 'block';
        
        pokeDex('pokemonCenter')
            .then((msg) => {
                console.log(msg);
                console.log(`The name of the pokemon with Pokedex No #${pokemonNo} : ${pokemonNames[pokemonNo-1]}`)
            })
            .catch((err) => {
                
                console.log(`The name of the pokemon with Pokedex No #${pokemonNo} : ${err}`);
            })

    });

}


// promises


const pokeDex = (pokemonNames) => {
    
    return new Promise((resolve, reject) => {
        

        setTimeout(() => {
            
            if (pokemonNo>898) {
                reject('Sorry we could not find the name of this pokemon in the Pokemon Center Database');
            }
            else {
                resolve(`Here's the data about pokemon #${pokemonNames}`)
            }
        },pokemonNo)
    })
}

    





