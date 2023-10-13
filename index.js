import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// createCharacterCard();

//Task 2
async function fetchCharacters() {
  //Empty cardContainer
  cardContainer.innerHTML = "";

  const url = "https://rickandmortyapi.com/api/character";
  try {
    const response = await fetch(url);
    const characterData = await response.json();
    // console.log(characterData);
    // console.log("TEST: ", characterData.results);

    const characters = characterData.results;

    characters.forEach((character) => {
      cardContainer.append(createCharacterCard(character));
    });
  } catch (error) {
    console.log("Error message: ", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Sorry we failed :((((((";
    cardContainer.append(errorMessage);
  }
}

fetchCharacters();
