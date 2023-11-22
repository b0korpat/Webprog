// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Generate an array with pairs of numbers
const numbers = Array.from({ length: 6 }, (_, index) => index + 1);
const pairs = [...numbers, ...numbers];
shuffleArray(pairs);

// Create cards dynamically based on the shuffled pairs
const gameContainer = document.getElementById('game-container');
pairs.forEach((number, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.index = index;
  card.dataset.ertek = number;

  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');

  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');
  cardFront.textContent = number;

  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back');

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);

  card.addEventListener('click', () => flipCard(card));

  gameContainer.appendChild(card);
});

let flippedCards = [];
let flipCardsValue = [];

function flipCard(card) {
  if (!card.classList.contains('flipped') && flippedCards.length < 2) {
    card.classList.toggle('flipped');

    flippedCards.push(card.dataset.index);
    flipCardsValue.push(card.dataset.ertek);

    if (flippedCards.length === 2) {
      if (flipCardsValue[0] === flipCardsValue[1]) {
        console.log("Match!");
        flippedCards.length = 0;
        flipCardsValue.length = 0;
      } else {
        console.log("No Match!");

        setTimeout(() => {
          flippedCards.forEach((index) => {
            const cardElement = document.querySelector(`[data-index="${index}"]`);
            cardElement.classList.toggle('flipped');
          });

          flippedCards.length = 0;
          flipCardsValue.length = 0;
        }, 1000);
      }
    }
  }
}
