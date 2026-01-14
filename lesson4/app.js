const API_URL = "https://rickandmortyapi.com/api/character";

const charactersContainer = document.getElementById("characters");
const loadingText = document.getElementById("loading");

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModal");

let nextPageUrl = API_URL;
let isLoading = false;

async function loadCharacters() {
  if (!nextPageUrl || isLoading) return;

  isLoading = true;
  loadingText.style.display = "block";

  const response = await fetch(nextPageUrl);
  const data = await response.json();

  renderCharacters(data.results);
  nextPageUrl = data.info.next;

  loadingText.style.display = "none";
  isLoading = false;
}

function renderCharacters(characters) {
  characters.forEach(character => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = character.id;

    card.innerHTML = `
      <img src="${character.image}">
      <div>
        <h3>${character.name}</h3>
        <p>${character.species}</p>
      </div>
    `;

    charactersContainer.appendChild(card);
  });
}

charactersContainer.addEventListener("click", async (event) => {
  const card = event.target.closest(".card");
  if (!card) return;

  event.stopPropagation();

  const id = card.dataset.id;
  openModal(id);
});

async function openModal(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const character = await response.json();

  modalBody.innerHTML = `
    <img src="${character.image}" width="200">
    <h2>${character.name}</h2>
    <p>Status: ${character.status}</p>
  `;

  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  modalBody.innerHTML = "";
}

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loadCharacters();
  }
});

loadCharacters();