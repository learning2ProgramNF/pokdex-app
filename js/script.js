//Defines IIFE (Immediately Invoked Function Expression) to create a module for managing
//Pokemon repository
let pokemonRepository = (function () {
  
//pokemonList creates array to store list of Pokemon  
  let pokemonList = [];

//endpoint to fetch list of Pokemon
//modalContainer references the modal container
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let modalContainer = document.querySelector("#modal-container");

//showModal is a function that displays a modal with Pokemon details
  function showModal(name, text, img) {
//starts by clearing the existing content in modal container    
    modalContainer.innerHTML = "";

//create a div element and assigns it the class 'modal'
    let modal = document.createElement("div");
    modal.classList.add("modal");

//Creates a close button, adds the class 'modal-close', set its text to 'Close',
//and add event listener to close modal when clicked
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

//creates an h1 element for the Pokemon name and sets its text
    let titleElement = document.createElement("h1");
    titleElement.innerText = name;

//creates an p element for the Pokemon name and sets its text
    let contentElement = document.createElement("p");
    contentElement.innerText = text;

//Creates an img element for the Pokemon image and sets its attributes
    let imageElement = document.createElement("img");
    imageElement.setAttribute("src", img);
    imageElement.setAttribute("width", "200");
    imageElement.setAttribute("height", "200");
    imageElement.setAttribute("alt", "Image of Pokemon");

//Appends the close button, title, content, and image to the modal, then appends the modal to the modal container    
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

//adds 'is-visible' class to the modal container to dispay it
    modalContainer.classList.add("is-visible");
  }

//'hideModal' is a function that hides the modal by removing the 'is-visible' class from the modal container
  function hideModal() {
    modalContainer.classList.remove("is-visible");
  }

 //Adds event listener to 'window' object to list for the 'Escape' key press, if the modal is visible, it hides the modal 
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

// Add event listener to the modal container to hide the modal if the user clicks outisde the modal (on the overaly)  
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      hideModal();
    }
  });

//'add' is a function that adds a Pokemon to the 'pokemonList' if it is an object with a 'name' property. Otherwise it logs an error   
  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.error("Invalid Pokémon data");
    }
  }

//'getAll' is a function that returns the pokemonList   
  function getAll() {
    return pokemonList;
  }

//'addListItem' is a function that creates a list item and button for each Pokemon, appends the button to the list item,
//and the list item to the list element. It also adds an event listnener to show Pokemon details when clicked  
  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);

    button.addEventListener("click", () => {
      showDetails(pokemon);
    });
  }

//'showLoadingMessage' creates a paragraph element with the text "Loading..." and appends it to the body
  function showLoadingMessage() {
    let loadingMessage = document.createElement("p");
    loadingMessage.innerText = "Loading...";
    loadingMessage.id = "loading-message";
    document.body.appendChild(loadingMessage);
  }

//Removes loading message paragraph from the body if it exists
  function hideLoadingMessage() {
    let loadingMessage = document.getElementById("loading-message");
    if (loadingMessage) {
      document.body.removeChild(loadingMessage);
    }
  }

//'loadList' fetches the list of Pokemon from the API, shows the loading message, processes the response to extract Pokemon data, adds each Pokemon to 
//'pokemonList', and hides the loading message. If there's an error, it logs it.
  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        hideLoadingMessage();
        json.results.forEach((item) => {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch((e) => {
        hideLoadingMessage();
        console.error("Error loading Pokémon list:", e);
      });
  }

//'loadDetails' fetches the details of a specific Pokemon from its 'detailsUrl', shows the loading message --> processes the response to extract
// and set the Pokemon's image URL, height, and types --> and hides loading message --> If there is an error, it logs it. 
  function loadDetails(item) {
    showLoadingMessage();
    return fetch(item.detailsUrl)
      .then((response) => response.json())
      .then((details) => {
        hideLoadingMessage();
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types
          .map((typeInfo) => typeInfo.type.name)
          .join(", ");
      })
      .catch((e) => {
        hideLoadingMessage();
        console.error("Error loading Pokémon details:", e);
      });
  }

//'showDetails' fetches the details of a specific Pokemon and then shows the modal with those details.  
  function showDetails(item) {
    loadDetails(item).then(() => {
      showModal(
        item.name,`Height: ${item.height}\nTypes: ${item.types}`, item.imageUrl);
    });
  }

//This returns an object exposing the functions 'add', 'getAll', 'addListItem', 'loadList', 'loadDetails', and 'showDetails'  
//to be accessible outside the IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

//This calls 'loadList' to fetch the Pokemonlist and then iterates through the list, adding each pokemon as a list
pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});
