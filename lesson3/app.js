const API_URL = "https://rickandmortyapi.com/api/character";

const charactersContainer = document.getElementById("characters");
const loadingText = document.getElementById("loading");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageText = document.getElementById("page");

let currentUrl = API_URL;

async function loadCharacters(url) {
  loadingText.style.display = "block";
  charactersContainer.innerHTML = "";

  const response = await fetch(url);
  const data = await response.json();

  renderCharacters(data.results);
  updatePagination(data.info);

  loadingText.style.display = "none";
}

function renderCharacters(characters) {
  characters.forEach(character => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${character.image}" width="100">
      <h3>${character.name}</h3>
      <p>${character.species}</p>
    `;

    charactersContainer.appendChild(card);
  });
}

function updatePagination(info) {
  prevButton.disabled = !info.prev;
  nextButton.disabled = !info.next;

  let currentPage;
  if (info.next) {
    const url = new URL(info.next);
    currentPage = Number(url.searchParams.get("page")) - 1;
  } else {
    currentPage = info.pages;
  }

  pageText.textContent = `Page ${currentPage}`;

  prevButton.onclick = () => {
    if (info.prev) loadCharacters(info.prev);
  };

  nextButton.onclick = () => {
    if (info.next) loadCharacters(info.next);
  };
}

loadCharacters(currentUrl);
