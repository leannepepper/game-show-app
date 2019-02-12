const qwerty = document.querySelector('#qwerty'); 
const phrase = document.querySelector('#phrase'); 
let missed = 0; 

const resetButton = document.querySelector('.btn__reset'); 

resetButton.addEventListener('click', function (){
    document.querySelector('#overlay').style.display = 'none'; 
})

const phraseArray = ['when pigs fly','once in a blue moon','piece of cake','kill two birds with one stone','best of both worlds'];

function getRandomPhraseAsArray(arr) {
    return arr[Math.floor(Math.random() * phraseArray.length)].split(''); 
}
console.log(getRandomPhraseAsArray(phraseArray)); 

