let pokemonRepository = (function () {
  // Local object variable, with keys indicating name, height, and type for a database.
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

  // Function to add a Pokemon and check if it is a valid object.
  function add(pokemon) {
    if (!pokemon) {
      console.log("Pokemon is undefined!");
    } else if (Array.isArray(pokemon)) {
      console.log("Pokemon has a value, but it is not an object. It is an array.");
    } else if (typeof pokemon !== "object") {
      console.log("Pokemon has a value, but it is not an object. It is a", typeof pokemon, ".");
    } else {
      let requiredKeys = ["name", "height", "type"];
      let pokemonKeys = Object.keys(pokemon);
      let valid = true;

      requiredKeys.forEach((key) => {
        if (!pokemonKeys.includes(key)) {
          valid = false;
          document.write(`Pokemon object is missing the required key: ${key}`);
        }
      });

      if (valid) {
        document.write(
          "Yes! Go you! Pokemon is a valid object! Your new Pokemon is: " +
            pokemon.name +
            " " +
            pokemon.height +
            " " +
            pokemon.type
        );
        pokemonList.push(pokemon);
      }
    }
  }

  // Function to get all Pokemon
  function getAll() {
    return pokemonList;
  }

  // Function to filter Pokemon by height
  function filterByHeight(minHeight) {
    let filteredPokemon = pokemonList.filter(
      (pokemon) => pokemon.height > minHeight
    );
    document.write("<p> Here are the Pokémon larger than: " + minHeight);
    filteredPokemon.forEach((pokemon) => {
      document.write(
        "<p>" +
          pokemon.name +
          " " +
          pokemon.height +
          " " +
          pokemon.type.join(", ")
      ); // join adds all elements of an Array into a string separated by commas
    });
    return filteredPokemon;
  }

  // Function to show Pokemon details
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  // Function to add event listener to a button
  function addButtonEventListener(button, pokemon) {
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  // Function to add list item and button for each Pokemon
  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonListElement.appendChild(listPokemon);

    // Add event listener to the button
    addButtonEventListener(button, pokemon);
  }

  // Public Interface: these are the only ways to interact with the functions within the IIFE
  return {
    getAll: getAll,
    add: add,
    filterByHeight: filterByHeight,
    addListItem: addListItem
  };
})();

// Test: Log all Pokemon and add a new Pokemon
console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: 0.3, type: ["electric"] });
console.log(pokemonRepository.getAll());

// forEach loop to display all Pokemon
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
