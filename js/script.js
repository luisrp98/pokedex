const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
}
const pokeapi_url = 'https://pokeapi.co/api/v2/pokemon/' // Add num or name
const pokemon_img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/` //Add name + .png

async function getPokemonImg(pokemon_input) {
    fetch(pokeapi_url + pokemon_input)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('pokemon_img').src =
                data.sprites.other.home.front_default
            console.log(data.sprites.other.home.front_default)
        })
}
async function getPokemonData(pokemon_input) {
    fetch(pokeapi_url + pokemon_input)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('pokemon_name').innerHTML =
                'Nombre: ' + capitalize(data.species.name)
            //     data.sprites.other.home.front_default
            console.log(data)
        })
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1)
}
const btn_search = document.getElementById('btn_search')
btn_search.addEventListener('click', () => {
    pokemon_input = document.getElementById('pokemon_input').value
    getPokemonImg(pokemon_input)
    getPokemonData(pokemon_input)
})

// addEventListener('pokemon_input')
// getPokemonImg()
// document.getElementById('pokemon').attribute =
// console.log(a.sprites)
// a.sprites.other.home.front_default

// fetch(pokeapi_url)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         console.log(data.sprites.other.home.front_default)
//         // document.getElementById('pokemon_img').src =
//         //     data.sprites.other.home.front_default
//     })
