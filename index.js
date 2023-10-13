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
let maxPage = 1;
let page = 1;
let searchQuery = "";

//createCharacterCard();

//Task 2
async function fetchCharacters() {
  //Empty cardContainer
  cardContainer.innerHTML = "";

  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  try {
    const response = await fetch(url);
    const characterData = await response.json();
    console.log(characterData);
    // console.log("TEST: ", characterData.results);
    maxPage = characterData.info.pages;
    console.log(maxPage);
    console.log(page);

    const characters = await characterData.results;
    pagination.textContent = `${page} / ${maxPage}`;

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
// Task 3
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

// Task 4

searchBar.addEventListener("submit", () => {});

fetchCharacters();
