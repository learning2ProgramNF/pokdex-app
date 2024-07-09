// script.js

let pokemonRepository = (function () {
  // Local object variable, with keys indicating name, height, and type for a database.
  let pokemonList = [
    { name: "Bulbasaur", height: 0.7, types: ["grass", "poison"] },
    { name: "Charizard", height: 1.7, types: ["fire", "flying"] },
    { name: "Sandslash", height: 1.0, types: ["ground"] },
    { name: "Ninetales", height: 1.1, types: ["fire"] },
    { name: "Muk", height: 1.2, types: ["poison"] },
    { name: "Magmar", height: 1.3, types: ["fire"] },
    { name: "Gyarados", height: 6.5, types: ["water", "flying"] },
    { name: "Dragonite", height: 2.2, types: ["dragon", "flying"] },
    { name: "Diglett", height: 0.2, types: ["ground"] },
    { name: "Porygon", height: 0.8, types: ["normal"] },
  ];

  // Function to add a Pokemon and check if it is a valid object.
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
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

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

// forEach loop to display all Pokemon
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
