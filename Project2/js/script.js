const gameContainer = document.body
const menuElement = document.getElementsByClassName('menu')
const game = document.getElementById('game')
const cardsDiv = document.getElementById('cards')

function toggleFullscreen() {
  if (document.fullscreenElement) {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  } else {
    // Go fullscreen
    if (gameContainer.requestFullscreen) {
      gameContainer.requestFullscreen();
    }
  }
}

function menuHide() {
  const menuElements = document.getElementsByClassName("menu");

  Array.from(menuElements).forEach(function (menuElement) {
    menuElement.classList.add("hidden");
    setTimeout(function () {
      menuElement.style.display = "none";
      gameStart()
    }, 500);
  });
}


function gameStart() {
  game.style.display = "flex";
  cardsDiv.style.display = "grid";
  let cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  shuffle(cards)
  let out = "";

  for (let i = 0; i < 12; i++) {
    out += `<div class="card-container" onclick="flipCard(this)" data-value="${cards[i]}" data-index="${i}"><div class="card"><div class="card-face front">XD</div><div class="card-face back">${cards[i]}</div></div></div>`
  }

  cardsDiv.innerHTML = out;

}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


let score = 0;
let cards = []
let flipCardsValue = []

function flipCard(cardContainer) {
  const card = cardContainer.querySelector('.card');
  card.classList.toggle('flipped');

  cards.push(card)
  flipCardsValue.push(cardContainer.dataset.value)


  console.log(flipCardsValue)
  console.log(score)



  if (flipCardsValue.length >= 2) {
    if (flipCardsValue[0] === flipCardsValue[1]) {
      console.log("jo")
      console.log(flipCardsValue)
      console.log(score)
      score++;

      cards[0].style.animation = "dim 1s";
      cards[1].style.animation = "dim 1s";
      
      setTimeout(() => {
      cards[0].style.display = "none"
      cards[1].style.display = "none"
        flipCardsValue.splice(0, flipCardsValue.length);
        cards.splice(0, cards.length);
      }, 500);
    } else {
      console.log("nem jo")
      console.log(flipCardsValue)
  console.log(score)

      setTimeout(() => {
        for (let j = 0; j < cards.length; j++){
          cards[j].classList.toggle('flipped');
        }
        
        flipCardsValue.splice(0, flipCardsValue.length);
        cards.splice(0, cards.length);
      }, 700);


    }
  }



  if(score >= 6){
    setTimeout(() => {
      alert("Nyertél!")
    }, 2000);
  }
}