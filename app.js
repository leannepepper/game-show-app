const qwerty = document.querySelector('#qwerty'); 
const phraseUl = document.querySelector('#phrase ul'); 
const resetButton = document.querySelector('.btn__reset');
const title = document.querySelector('.title');
const tries = document.querySelectorAll('.tries');
const scoreBoard = document.querySelector('#scoreboard ol');
const buttons = document.getElementsByTagName('button');
const overlay = document.querySelector('#overlay');
let missed = 0; 

// function to remove overlay on Start
resetButton.addEventListener('click', function (){
    overlay.style.display = 'none'; 
})

const phrases = [
    'when pigs fly',
    'once in a blue moon',
    'piece of cake',
    'kill two birds with one stone',
    'best of both worlds'
]
// get a random phrase from the array, then split letters into another array 
function getRandomPhraseAsArray(arr) {
    return arr[Math.floor(Math.random() * phrases.length)].split(''); 
}
// display the random phrase letters array to the document 
const addPhraseToDisplay = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li'); 
            li.textContent = arr[i]; 
            phraseUl.appendChild(li); 
            if(arr[i] === " ") {
                li.className = "space"; 
            } else {
                li.className = "letter"; 
            }
    }
} 
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// checkLetter function to add classes to correctly clicked letters 

function checkLetter (letterButtons) {
    let check = null; 

    const letters = document.querySelectorAll('.letter');
    for(let i=0; i < letters.length; i++) {
        if(letterButtons.textContent === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add("show");
            letters[i].classList.add("flip");
            check = true;  
        } 
    }
    return check;
}

function checkWin() {
    if(document.querySelectorAll('.letter').length == document.querySelectorAll('.show').length) {
        overlay.style.display = "block";
        overlay.innerHTML ="YOU WIN";
        overlay.style.fontSize = "40px";
        overlay.style.paddingTop = "100px";
        overlay.classList.remove('start', 'lose'); 
        overlay.classList.add('win');

        resetGame ();
    }
    else if(missed >= 5){
        overlay.style.display = "block";
        overlay.innerHTML ="GAME OVER";
        overlay.style.fontSize = "40px";
        overlay.style.paddingTop = "100px";
        overlay.classList.remove('start', 'win'); 
        overlay.classList.add('lose');

        resetGame ();
     }
}
// add classes to buttons that are clicked, remove heart if click is incorrect 
qwerty.addEventListener('click', (e) => {
    let letterFound = checkLetter(e.target); 
    
    if(e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen'); 
        e.target.disabled = true; 

        if(letterFound === null) {
            missed += 1; 
            console.log(missed);
            tries[missed-1].style.display = "none"; 
        }
    }   
    checkWin();     
})

// The following functions are to reset the game. 
// This inclueds resetting the random phrase, the hearts, and the keyboard functions. 

// remove the previous phrase and fetch another random phrase 
function removeLetters () {
    phraseUl.innerHTML = " ";
    addPhraseToDisplay(getRandomPhraseAsArray(phrases)); 
}
// replace the "tries" for reseting the game 
function heartReplace () {
    let newHeart = Array.from(tries);
      newHeart.forEach(function(hrt) {
        hrt.style.display ="inline-block"
    });
    missed= 0;
}
// reset the key to restore normal function
  function keysReplace () {
	for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("chosen");
        buttons[i].disabled = false;
    }

};

// create the reset button, remove the overlay and call resetting functions 
function resetGame () {
  const startAgain = document.createElement('button'); 
  startAgain.classList.add('startAgain'); 
  startAgain.innerHTML = "Restart Game";

  overlay.appendChild(startAgain); 
  
    startAgain.addEventListener("click", function (){
        overlay.style.display = "none";
         
        removeLetters();
        heartReplace();    
        keysReplace ();    
    })

}



 