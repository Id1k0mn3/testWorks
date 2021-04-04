const inputUser = document.getElementById('inputCardsNumber')
const buttons = Array.from(document.getElementsByClassName('btn-number'))
const more = document.getElementById('more')
const less = document.getElementById('less')
const card = document.getElementById('card')
const tableCard = document.getElementById('containerCards')
const moves = document.getElementById('moves')
const restartGame = document.getElementById('restart')
let array = []
let content = 0
let counter = 0
let counterMoves = 1
/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    console.log(currentIndex)
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
  }
  
  /*
  *  First of all You should use MVC-like pattern to solve this task.
  *  Game maker must be customizable. For example if You pass count of cells of the gameboard // This is what we call (M)odel
  *  to input in .html file script should generate field accordingly: (2) => 2 x 2, (10) => 10 x 10 and so on. // This is what we call (C)ontroller
  *  In .html file is generated static gameboard. You must replace it with your own dynamic gameboard. // This is what we call (V)iew.
  */

 //function for createCarts
// restart game
restartGame.addEventListener('click', e => {
  tableCard.innerHTML = ''
  setTimeout(() => {
    alert('YOU LOSE.')
  }, 500)
})
 
 function createCards() {
  //clear cadrs
  while(tableCard.firstChild) {
    tableCard.removeChild(tableCard.firstChild)
  }
  //add carts cadrs
  for(let i = 0; i < counter*(counter/2); i++) {
    content++
    for(let j = 0; j < 2; j++) {
      const clonCard = card.cloneNode(true)
      clonCard.setAttribute('id', '')
      clonCard.innerHTML = content
      tableCard.append(clonCard)
      array.push(clonCard)
    }
  }
}

//function findElements(element,content,name) {
//  element = name
//  content = name.innerHTML
//}
//this function change cards when user click on card
function changeCarts() {
  let counterClick = 0
  let firstCard,secondCard,firstCardClass,secondCardClass
  array.forEach(e => {
    e.addEventListener('click', el => {
      counterClick++;
      e.classList.add("open")
      //find first click on card
      if(counterClick === 1 ) {
        firstCardClass = e
        firstCard = e.innerHTML
        //findElements(firstCardClass, firstCard, e)
        //find second click on card
      } else if(counterClick === 2 ) {
        secondCardClass = e
        secondCard = e.innerHTML
        //findElements(secondCardClass, secondCard, e)
      }
      if(counterClick >= 2) {
        counterClick = 0
        // whis if work when first card = second card
        if(firstCard === secondCard) {
          moves.innerHTML = counterMoves++ // count player`s moves
          let elemenstWithOpen = Array.from(document.getElementsByClassName('open'))
          firstCardClass.classList.add("match")
          secondCardClass.classList.add("match")
          // if all cards are open, the game ends and the field is cleared
          if(elemenstWithOpen.length === counter * counter) {
            setTimeout(() => {
              counterMoves--
              alert('YOU WIN, You made ' + counterMoves + ' moves')
              tableCard.innerHTML = ''
            }, 1000)
          }
        } else {
          // if cards not the same classes are reset
          moves.innerHTML = counterMoves++
          setTimeout(() => {
            firstCardClass.classList.remove("open")
            secondCardClass.classList.remove("open")
          }, 500)       
        }
      }
    })
  })
}
// random generation cards and appen them on container with cards 
function swap(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr.sort(() => Math.random() - 0.5);
  }
  arr.forEach(el => {
    tableCard.append(el)
  })
}


// add event for count cards
buttons.forEach( e => {
  e.addEventListener('click', el => {
    array=[]
    if(el.path[0] == more) {
      inputUser.value = counter += 2
      createCards()
      changeCarts()
      swap(array)
    } else {
      if(counter > 0) {
        inputUser.value = counter -= 2
        createCards()
        changeCarts()
        swap(array)
      }
    }
  })
})

console.log(array)

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol 
 *  - add the card to a *list* of "open" cards 
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position 
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol 
 *    + increment the move counter and display it on the page 
 *    + if all cards have matched, display a message with the final score 
 */
