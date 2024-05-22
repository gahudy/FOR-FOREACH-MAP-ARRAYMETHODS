//FOR
 for (let i = 0; i < 5; i++) {
    console.log(i);
 }

 //forEach
 let pokes = ["Pikachu", "Charizard", "Gengar"];

 pokes.forEach(function(pokes, index) {
     console.log(index + ": " + pokes);
 });

 //map

 let type = ["Electrico", "Fuego", "Fantasma"];

 let pokemons = pokes.map((poke, index) => {
   return { nombre: poke, tipo: type[index] };
});

console.log(pokemons);

//Metodos de arrays

const pokemonesIniciales = [
   {
      id: 'POke01',
      name: 'Bulbasaur',
      types: 'planta',
   },
   {
      id: 'POke02',
      name: 'Charmander',
      types: 'fuego',
   },
   {
      id: 'POke03',
      name: 'Squirtle',
      types: 'agua',
   },
]

const pokemonFuego = pokemonesIniciales.find(pokemon => pokemon.types === 'fuego');
  console.log(pokemonFuego);

  
let pokesPoison = pokemonesIniciales.some(pokemon => pokemon.types === 'Veneno');

  console.log(pokesPoison);
