const qwerty = document.querySelector('#qwerty'); 
const phraseUl = document.querySelector('#phrase ul'); 
const resetButton = document.querySelector('.btn__reset');
const title = document.querySelector('.title');
// const letters = document.querySelectorAll('.letter');
let missed = 0; 

// function to remove overlay on Start
resetButton.addEventListener('click', function (){
    document.querySelector('#overlay').style.display = 'none'; 
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

// checkLetter function 
// const letterButtons = document.querySelectorAll('.keyrow button'); 

function checkLetter (letterButtons) {
    let check = null; 

    const letters = document.querySelectorAll('.letter');
    for(let i=0; i < letters.length; i++) {
        if(letterButtons.textContent === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add("show");
            check = true;  
        }
    }
    return check;
}

qwerty.addEventListener('click', (e) => {
    let letterFound = checkLetter(e.target); 
    
    if(e.target.tagName === 'BUTTON'){
        e.target.classList.add('chosen'); 
        e.target.disabled = true; 

    }
   
})