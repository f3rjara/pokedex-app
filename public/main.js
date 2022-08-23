document.addEventListener('DOMContentLoaded', () => { 
  const POKEMON_PRIMARY = getRandomInt(150);
  getPokemon( POKEMON_PRIMARY )
  othersPokemons()
})

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max) + 1;
}

const getPokemon = async ( id ) => {
  try {
    const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    showPokemonPrimary( data );
  }
  catch (e) {
    console.log(e)
  }
}

const showPokemonPrimary = ( pokemon ) => {
  console.log( pokemon );
  const pokemonData = {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
    image_bg: pokemon.sprites.other['official-artwork'].front_default,
    height: pokemon.height,
    weight: pokemon.weight,
    type: pokemon.types[0].type.name,
    level: pokemon.base_experience,
    hability: pokemon.abilities[0].ability.name,
  }

  const MAIN =  document.querySelector('#app');
  const image_pokemon =  document.querySelector('#image-pokemon');
  const name_pokemon =  document.querySelector('#name-pokemon');
  const id = document.querySelector('#id');
  const level = document.querySelector('#level');
  const type = document.querySelector('#type');
  const hability = document.querySelector('#hability');
  const height = document.querySelector('#height');
  const weight = document.querySelector('#weight');

  MAIN.style.backgroundImage = `url(${pokemonData.image_bg})`;
  image_pokemon.src = pokemonData.image;
  image_pokemon.alt = pokemonData.name;
  image_pokemon.title = pokemonData.name.toUpperCase();
  name_pokemon.innerHTML = pokemonData.name;
  id.innerHTML = pokemonData.id;
  level.innerHTML = pokemonData.level;
  type.innerHTML = pokemonData.type.toUpperCase();;
  hability.innerHTML = pokemonData.hability.toUpperCase();;
  height.innerHTML = `${(pokemonData.height)/10} Mts`;
  weight.innerHTML = `${(pokemonData.weight)/10} Kg`;
}

const othersPokemons = () => {
  for (let index = 0; index < 4; index++) {
    const element = getRandomInt(150);
    const list_pokemons = document.querySelector('#list-pokemon');
    const item = document.createElement('li');
    item.className = 'pokemon-item';
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    item.appendChild(button);
    const image = document.createElement('img');
    image.className = 'image';
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${element}.svg`;
    image.alt = 'Other Pokemon';
    image.loading = "lazy"
    button.appendChild(image);
    list_pokemons.appendChild(item);
  }
}