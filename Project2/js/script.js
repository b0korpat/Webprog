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

    // Convert HTMLCollection to an array and loop through to add 'hidden' class
    Array.from(menuElements).forEach(function(menuElement) {
      menuElement.classList.add("hidden");
      setTimeout(function() {
        menuElement.style.display = "none";
        gameStart() 
      }, 500);
    });
  }


function gameStart() {
    game.style.display = "flex";
    cardsDiv.style.display = "grid";
    let cards = [1,1,2,2,3,3,4,4,5,5,6,6];
    shuffle(cards);
    console.log(cards);
    let out = "";
    cards.forEach(element => {
        let index = 1
        out += `<div class="card" id="${cards[element]}" data-index="${index}">${cards[element]}</div>`
        index++;
    });
    
    cardsDiv.innerHTML = out;

}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }