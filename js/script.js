/*
'array' 'declared' and named pokemonList
5 'objects' are in the array with 3 'properties' each
*/
let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbasaur", height: 0.7, type: ["grass", " posion"] },
    { name: "Charizard", height: 1.7, type: ["fire", " flying"] },
    { name: "Sandslash", height: 1, type: ["ground"] },
    { name: "Ninetales", height: 1.1, type: [" fire"] },
    { name: "Muk", height: 1.2, type: ["posion"] },
    { name: "Magmar", height: 1.3, type: ["fire"] },
    { name: "Gyarados", height: 6.5, type: ["water", " flying"] },
    { name: "Dragonite", height: 2.2, type: ["dragon", " flying"] },
    { name: "Diglett", height: 0.2, type: [" ground"] },
    { name: "Porygon", height: 0.8, type: [" normal"] },
  ];
  function add(pokemon) {
    if (!pokemon) {
      document.write("pokemon is undefined!");
    } else if (Array.isArray(pokemon)) {
      document.write(
        "pokemon has a value, but it is not an object,Pokemon is an array."
      );
    } else if (typeof pokemon !== "object") {
      document.write(
        "pokemon has a value, but it is not an object, Pokemon is a",
        typeof pokemon,
        "."
      );
    } else if (typeof pokemon === "object") {
      document.write(
        "<p> " +
          "Yes!  Go you!  pokemon is an object! <p> Your new pokemon is: " +
          pokemon.name +
          " " +
          pokemon.height +
          " " +
          pokemon.type
      );
      pokemon.List.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }
  return {
    getAll: getAll,
    add: add,
  };
})();

/*
'forEach loop' created in order to 'iterate' through each of the 'objects' in the 'Array'.
1 at a time and print them to the 'DOM' as well as 'conditionally' adding a special message,
when they are of a certain size.
*/

// forEach loop to replace above with more effiecient functionality.
pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(
    "<p>" + pokemon.name + " " + pokemon.height + " " + pokemon.type
  );
  if (pokemon.height > 1.1) {
    document.write(" - Wow!!! that's a big Pokemon  " + "<p>");
  }
});

// Use add to see if it works
pokemonRepository.add({ name: "Vulpix", height: 0.6, type: ["fire"] });
