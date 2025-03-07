const headwordElement = document.querySelector(".affirmation-headword");
const quoteElement = document.querySelector(".affirmation-quote");
const generatebtn = document.getElementById("generateBtn");
const addaffirmationpage = document.getElementById("add-affirmation-overlay");
const viewAffirmationsPage = document.getElementById(
  "view-affirmations-overlay"
);
const addpageopener = document.querySelector(".plus-affirmation");
const addPageRemove = document.querySelector(".add-page-submit");
const viewPageOpener = document.querySelector(".view-affirmations");
const affirmationsList = document.querySelector(".affirmations-list");

// Add Affirmation Page
const headwordInput = document.getElementById("headword-input");
const quoteInput = document.getElementById("quote-input");
const submitButton = document.getElementById("submit-button");

// Close Button
const closeButtons = document.querySelectorAll(".close-button");

const soothingColors = [
  "#b6d0e2",
  "#cfe0e8",
  "#d5e8d4",
  "#fdebd3",
  "#e6dad2",
  "#f4e1d2",
];

let affirmations = [
  {
    headword: "I am proud of myself",
    quote: "I believe in my goals and dreams, and I can get through anything",
    id: 1,
  },
  {
    headword: "I am loved and worthy",
    quote: "I am more than my circumstances dictate, and I am open to healing",
    id: 2,
  },
  {
    headword: "I feel at peace",
    quote: "I am at peace with who I am, and I make a difference in the world",
    id: 3,
  },
  {
    headword: "I am beautiful inside and out",
    quote:
      "I trust that everything is going to work out for me, and I am grateful for all the experiences I've had",
    id: 4,
  },
  {
    headword: "I am confident",
    quote:
      "I deserve a successful career, and I am confident in my knowledge and abilities",
    id: 5,
  },
  { headword: "I am enough", quote: "I am confident and I am enough", id: 6 },
  {
    headword: "I am strong",
    quote: "I make wise choices, and I am forgiving",
    id: 7,
  },
  {
    headword: "I am worthy",
    quote:
      "I am confident that I am worthy of great things, and I never lose sight of how fearless and hardworking I am",
    id: 8,
  },
];

generatebtn.addEventListener("click", () => {
  generatequotehandler();
  randomSoothingColor();
});
addpageopener.addEventListener("click", addPage);
addPageRemove.addEventListener("click", removeAddPage);

viewPageOpener.addEventListener("click", viewPage);
submitButton.addEventListener("click", addAffirmation);

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", closeAllPages);
});

function addAffirmation() {
  const headword = headwordInput.value;
  const quote = quoteInput.value;

  const id = affirmations.length + 1;

  const newAffirmation = { headword: headword, quote: quote, id: id };

  affirmations.push(newAffirmation);
  affirmationsList.innerHTML = "";
  headwordInput.value = "";
  quoteInput.value = "";
  removeAddPage();
}

function randomAffirmationGenerator() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const randomAffirmation = affirmations[randomIndex];
  console.log(randomAffirmation);
  console.log(quoteElement);
  console.log(headwordElement);
  headwordElement.innerHTML = randomAffirmation.headword;
  quoteElement.innerHTML = randomAffirmation.quote;
}
function generatequotehandler() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const randomAffirmation = affirmations[randomIndex];
  headwordElement.innerHTML = randomAffirmation.headword;
  quoteElement.innerHTML = randomAffirmation.quote;
}
function addPage() {
  addaffirmationpage.classList.add("add-affirmation-enable");
  addaffirmationpage.classList.remove("add-affirmation-hide");
}
function removeAddPage() {
  addaffirmationpage.classList.add("add-affirmation-hide");
  addaffirmationpage.classList.remove("add-affirmation-enable");
}
function randomSoothingColor() {
  const randomIndex = Math.floor(Math.random() * soothingColors.length);
  const randomColor = soothingColors[randomIndex];
  document.body.style.backgroundColor = randomColor;
}
function viewPage() {
  viewAffirmationsPage.classList.add("view-affirmations-enable");
  viewAffirmationsPage.classList.remove("view-affirmations-hide");
  populateAffirmations();
}
function removeViewPage() {
  viewAffirmationsPage.classList.add("view-affirmations-hide");
  viewAffirmationsPage.classList.remove("view-affirmations-enable");
}

function populateAffirmations() {
  affirmations.forEach((affirmation) => {
    const affirmationElement = document.createElement("div");
    affirmationElement.innerHTML = `
    <h3>${affirmation.headword}</h3>
    <p>${affirmation.quote}</p>
    <button data-id="${affirmation.id}" class="delete-affirmation-button">Delete</button>
    `;
    affirmationsList.appendChild(affirmationElement);
  });

  document.querySelectorAll(".delete-affirmation-button").forEach((button) => {
    button.addEventListener("click", deleteAffirmation);
  });
}

function deleteAffirmation(event) {
  const id = event.target.getAttribute("data-id");
  const newAffirmations = affirmations.filter(
    (affirmation) => affirmation.id !== parseInt(id)
  );

  affirmations = newAffirmations;
  affirmationsList.innerHTML = "";
  populateAffirmations();
}

function closeAllPages() {
  removeViewPage();
  removeAddPage();
  affirmationsList.innerHTML = "";
}

randomAffirmationGenerator();
randomSoothingColor();
