const headwordElement = document.querySelector(".affirmation-headword");
const quoteElement = document.querySelector(".affirmation-quote");
const affirmations = [
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

// function affirmationsArray() {
//   const affirmationsHeadword = affirmations.map(
//     (affirmation) => affirmation.headword
//   );
//   const affirmationsQuote = affirmations.map(
//     (affirmation) => affirmation.quote
//   );
//   const affirmationsId = affirmations.map((affirmation) => affirmation.id);

//   console.log(affirmationsHeadword);
//   console.log(affirmationsQuote);
//   console.log(affirmationsId);
// }

function randomAffirmationGenerator() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const randomAffirmation = affirmations[randomIndex];
  console.log(randomAffirmation);
  console.log(quoteElement);
  console.log(headwordElement);
  headwordElement.innerHTML = randomAffirmation.headword;
  quoteElement.innerHTML = randomAffirmation.quote;
}
// affirmationsArray();
randomAffirmationGenerator();
