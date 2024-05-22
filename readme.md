
# SEMANA 10 S1

## for
for no sirve para iterar

```
 for (let i = 0; i < 5; i++) {
    console.log(i);
 }

```
En el siguiente ejemplo estamos iterando numeros del 0 al 5.

##  forEach y map
1. forEach, tambien nos sirve para iterar, pero en esta ocacion sin modificar el array original

```
 let pokes = ["Pikachu", "Charizard", "Gengar"];

 pokes.forEach(function(pokes, index) {
     console.log(index + ": " + pokes);
 });
```
en este ejemplo forEach recorre el array pokes y usamos el index para que nos muestre la posicion del elemento 

2. map, ma es una funcion de arrays que nos permite modificar o crear un array nuevo sin que el array base sea modificad.

```
let pokes = ["Pikachu", "Charizard", "Gengar"]
let type = ["Electrico", "Fuego", "Fantasma"];
 
let pokemons = pokes.map((poke, index) => {
   return { nombre: poke, tipo: type[index] };
});

console.log(pokemons);
```
en este ejemplo tenemos dos arrays y con la funcion map creamos unos nuevo array sin modificar o cambiar los arrays base que son pokes y type,
el resultado seria  un nuevo array llamado pokemons que contendria la concatenacion de los pokemones con sus tipos.

## Array Methods

Los metodos de array son funciones  especificas para arrays, que nos ayudan a iterar, cambiar, recorrer etc, en generar a manupilar un array

```
const pokemonesIniciales = [
   {
      id: 'POke01',
      name: 'Bulbasaur',
      types: 'planta',
   },
   {
      id: 'POke01',
      name: 'Bulbasaur',
      types: 'planta',
   },
   {
      id: 'POke01',
      name: 'Bulbasaur',
      types: 'planta',
   },
```
tenemos un arreglos de objetos llamado pokemonesIniciales, contiene 3 objetos, con descriciones de los 3 pokemones iniciales de la primera generacion.

Con el metodo  FIND buscaremos un objeto segun un parametro  especifico, en este caso Type : Fuego 

```
const pokemonFuego = pokemonesIniciales.find(pokemon => pokemon.types === 'fuego');
  console.log(pokemonFuego);

```
Con el metodo SOME buscamos si almenos un elemento es verdadero o falso, en este caso es Falso por quye buscamos un pokemon de tipo veneno

let pokesPoison = pokemonesIniciales.some(pokemon => pokemon.types === 'Veneno');

  console.log(pokesPoison);
