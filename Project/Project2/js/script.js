const gameContainer = document.body
const menuElement = document.getElementsByClassName('menu')
const game = document.getElementById('game')
const cardsDiv = document.getElementById('cards')

let timer;
let startTime;
let totalStoppedTime = 0;
let leastStoppedTime = Infinity;

document.addEventListener('DOMContentLoaded', () => {
  const savedRecord = localStorage.getItem('stopwatchRecord');
  if (savedRecord !== null) {
    leastStoppedTime = parseInt(savedRecord, 10);
    document.getElementById('record').textContent = formatTime(leastStoppedTime);
  }
});


function startStop() {
  if (timer) {
    clearInterval(timer);
    const stoppedTime = Date.now() - startTime;
    totalStoppedTime += stoppedTime;

    if (stoppedTime < leastStoppedTime) {
      leastStoppedTime = stoppedTime;
      document.getElementById('record').textContent = formatTime(leastStoppedTime);

      localStorage.setItem('stopwatchRecord', leastStoppedTime.toString());
    }
  } else {
    startTime = Date.now();
    timer = setInterval(updateStopwatch, 1000);
  }
}

function updateStopwatch() {
  const elapsed = Date.now() - startTime - totalStoppedTime;
  document.getElementById('stopwatch').textContent = formatTime(elapsed);
}

function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const formattedSeconds = String(seconds % 60).padStart(2, '0');
  return `${minutes}:${formattedSeconds}`;
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
  startStop();
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
      document.querySelectorAll('.card-container').forEach(element => {
        element.dataset.flipped = 1;
      });
      setTimeout(() => {
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
        if (score >= 6) {
          startStop();
          var duration = 5 * 1000;
          var animationEnd = Date.now() + duration;
          var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

          function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
          }

          var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
              return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
          }, 250);
          setTimeout(() => {
            location.reload();
          }, 5000);
        }
      }, 700);
    }
  }
}



