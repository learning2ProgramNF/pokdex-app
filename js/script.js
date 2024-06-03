/*
'array' 'declared' and named pokemonList
5 'objects' are in the array with 3 'properties' each
*/
let pokemonList = [
  { name: "Bulbasaur", height: 0.7, type: ["grass", "posion"] },
  { name: "Charizard", height: 1.7, type: ["fire", "flying"] },
  { name: "Sandslash", height: 1, type: ["ground"] },
  { name: "Ninetales", height: 1.1, type: ["fire"] },
  { name: "Muk", height: 1.2, type: ["posion"] },
];
let pokemonList2 = [
  { name: "Magmar", height: 1.3, type: ["fire"] },
  { name: "Gyarados", height: 6.5, type: ["water", "flying"] },
  { name: "Dragonite", height: 2.2, type: ["dragon", "flying"] },
  { name: "Diglett", height: 0.2, type: ["ground"] },
  { name: "Porygon", height: 0.8, type: ["normal"] },
];
/*
'for loop' created in order to 'iterate' through each of the 'objects' in the 'Array'.
1 at a time and print them to the 'DOM' as well as 'conditionally' adding a special message,
when they are of a certain size.

'function' created to re-use thise bit of code that print the array multiple times instead of typing it out. 
*/

function printArrayDetails(list) {
  for (let i = 0; i < list.length; i++) {
    document.write("<p>" + list[i].name + " ");
    document.write(" Height: " + list[i].height);
    if (list[i].height > 1.1) {
      document.write(" Wow that's a big Pokemon " + "<p>");
    } else {
      document.write("<p>");
    }
  }
}

//'Calls' to the 'function' that prints out the 'array'
printArrayDetails(pokemonList);

printArrayDetails(pokemonList2);
