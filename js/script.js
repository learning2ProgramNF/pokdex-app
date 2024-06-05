let pokemonRepository = (function () {
  //local object variable, with 3 keys indicating name, height, and type for a database.
  let pokemonList = [
    { name: "Bulbasaur", height: 0.7, type: ["grass", "poison"] },
    { name: "Charizard", height: 1.7, type: ["fire", "flying"] },
    { name: "Sandslash", height: 1.0, type: ["ground"] },
    { name: "Ninetales", height: 1.1, type: ["fire"] },
    { name: "Muk", height: 1.2, type: ["poison"] },
    { name: "Magmar", height: 1.3, type: ["fire"] },
    { name: "Gyarados", height: 6.5, type: ["water", "flying"] },
    { name: "Dragonite", height: 2.2, type: ["dragon", "flying"] },
    { name: "Diglett", height: 0.2, type: ["ground"] },
    { name: "Porygon", height: 0.8, type: ["normal"] },
  ];
//function that adds pokemon and checks whether or not the object is an object first and then if the keys are valid before adding it to the pokemonList pbject
  function add(pokemon) {
//conditional to check if the the item being passed through the argument is an object.
    if (!pokemon) {
      console.log("pokemon is undefined!");
    } else if (Array.isArray(pokemon)) {
      console.log("pokemon has a value, but it is not an object, Pokemon is an array.");
    } else if (typeof pokemon !== "object") {
      console.log("pokemon has a value, but it is not an object, Pokemon is a", typeof pokemon, ".");
    /*
    another conditional that runs the code through Object.keys(); to obtain the keys of the item of the value being passed through the argument
    then validate them against a copy of the correct keys to ensure the item has the correct keys.
    */
    } else {
      let requiredKeys = ['name', 'height', 'type'];
      let pokemonKeys = Object.keys(pokemon);
      let valid = true;

      requiredKeys.forEach(key => {
        if (!pokemonKeys.includes(key)) {
          valid = false;
          document.write(`Pokemon object is missing the required key: ${key}`);
        }
      });

      if (valid) {
        document.write("Yes! Go you! pokemon is a valid object! Your new pokemon is: " + pokemon.name + " " + pokemon.height + " " + pokemon.type);
        pokemonList.push(pokemon);
      }
    }
  }

  function getAll() {
    return pokemonList;
  }

  function filterByHeight(minHeight) {
    let filteredPokemon = pokemonList.filter(pokemon => pokemon.height > minHeight);
    document.write("<p> Here are the Pokémon larger than: " + minHeight );
    filteredPokemon.forEach(pokemon => {
      document.write("<p>" + pokemon.name + " " + pokemon.height + " " + pokemon.type.join(", ")); //join adds all elements of an Array into a string separated by ,
    });
    return filteredPokemon;
  }
//Public Interface these are the only ways to interact with the functions within the IIFE
  return {
    getAll: getAll,
    add: add,
    filterByHeight: filterByHeight
  };
})();

// Testing filterByHeight function
let bigPokemon = pokemonRepository.filterByHeight(1.1);

// Display all Pokémon
pokemonRepository.getAll().forEach(function (pokemon) {
  document.write("<p>" + pokemon.name + " " + pokemon.height + " " + pokemon.type.join(", ") + "</p>");
  if (pokemon.height > 1.1) {
    document.write("<p>Wow!!! That's a big Pokémon!</p>");
  }
});

// Use add to see if it works
pokemonRepository.add({ name: "Vulpix", height: 0.6, type: ["fire"] });
