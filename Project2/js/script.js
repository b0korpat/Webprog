const gameContainer = document.body
const menuElement = document.getElementsByClassName('menu')
const game = document.getElementById('game')
const cardsDiv = document.getElementById('cards')
const stopwatch = document.getElementById('stopwatch')
const highestscore = "00:00:00"
var currentTime
document.getElementById('highestScore').innerHTML = highestscore

let stopwatchInterval;
let seconds = 0, minutes = 0, hours = 0;

function startStopwatch() {
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateStopwatch();
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  currentTime = formattedTime; 
  document.getElementById('stopwatch').innerText = formattedTime;
}

function pad(value) {
  return value < 10 ? '0' + value : value;
}








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
  startStopwatch();
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
  stopwatch.style.display = "block";
  let cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  shuffle(cards)
  let out = "";

  for (let i = 0; i < 12; i++) {
    out += `<div class="card-container" onclick="flipCard(this)" data-value="${cards[i]}" data-index="${i}" data-flipped="0"><div class="card"><div class="card-face front"></div><div class="card-face back">${cards[i]}</div></div></div>`
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
  if (cardContainer.dataset.flipped == 0) {

    cardContainer.dataset.flipped = 1

    card.classList.toggle('flipped');


    cards.push(card)
    flipCardsValue.push(cardContainer.dataset.value)


    console.log(flipCardsValue)
    console.log(score)



    if (flipCardsValue.length >= 2) {
      setTimeout(() => {
        document.querySelectorAll('.card-container').forEach(element => {
          element.dataset.flipped = 1;
        });
        if (flipCardsValue[0] === flipCardsValue[1]) {
          console.log("jo")
          console.log(flipCardsValue)
          console.log(score)
          score++;




          cards[0].parentNode.style.opacity = 0;
          cards[1].parentNode.style.opacity = 0;

          setTimeout(() => {
            cards[0].style.display = "none"
            cards[1].style.display = "none"
            flipCardsValue.splice(0, flipCardsValue.length);
            cards.splice(0, cards.length);
            document.querySelectorAll('.card-container').forEach(element => {
              element.dataset.flipped = 0;
            });
          }, 500);

        } else {
          console.log("nem jo")
          console.log(flipCardsValue)
          console.log(score)

          setTimeout(() => {
            for (let j = 0; j < cards.length; j++) {
              cards[j].classList.toggle('flipped');
            }

            flipCardsValue.splice(0, flipCardsValue.length);
            cards.splice(0, cards.length);

            document.querySelectorAll('.card-container').forEach(element => {
              element.dataset.flipped = 0;
            });
          }, 500);




        }
      }, 700);
    }
  }

  if (score >= 6) {
    setTimeout(() => {
      stopStopwatch();
      if (highestscore < currentTime) {
        highestscore = currentTime;

      }
      alert("Nyertél!")
    }, 2000);
  }
}



