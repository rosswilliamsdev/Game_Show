let qwerty = document.querySelector('#qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let btn_reset = document.querySelector('.btn__reset');
let phrases = [
    "superficial commit",
    "burnout",
    "self taught",
    'programmer',
    'marathon not a sprint'
];


function getRandomPhrases(arr) {
    //choose a phrase from the phrases array
    let randomPhrase = phrases[Math.floor(Math.random()*phrases.length)];
    //split that phrase into a new array of characters 
    randomPhrase = randomPhrase.split('');
    //return the new array of characters
    return randomPhrase;
};

function addPhraseToDisplay(arr) {
    // Create an addPhraseToDisplay function that loops through an array of characters. Inside the loop, for each character in the array, you’ll create a list item, put the character inside of the list item, and append that list item to the #phrase ul in your HTML. If the character in the array is a letter and not a space, the function should add the class “letter” to the list item. 
    for (let i = 0; i < arr.length; i++) {
        let newLi = document.createElement('li');
        newLi = newLi.textContent(arr[i]);
        phrase.appendChild(newLi);
        if (arr[i] != " ") {
            newLi.className("letter");
        };
    };
};

let phraseArray = getRandomPhrases(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(button) {
    // The checkLetter function will be used inside of the event listener you’ll write in the next step.
    // This function should have one parameter: the button the player has clicked when guessing a letter.
    // The checkLetter function should get all of the
    // elements with a class of “letter” (remember that we added the letter class to all of the letters and none of the spaces when we made the game display). The function should loop over the letters and check if they match the letter in the button the player has chosen.
    // If there’s a match, the function should add the “show” class to the list item containing that letter, store the matching letter inside of a variable, and return that letter.
    // If a match wasn’t found, the function should return null.

    let letters = document.querySelectorAll('.letter');

    for (let i = 0; i < letters.length; i++) {
        if (button.textContent === letters[i]) {
            let matchingLetter = letters[i];
            matchingLetter.className = 'show';
            return matchingLetter;
        } else {
            return null;
        }
    }

};

btn_reset.addEventListener('click', () => {
    let overlay = document.getElementById('overlay');

    overlay.style.display = "none";
});




























// qwerty.addEventListener('click', (e) => {
//     if () {
        
//     } else {

//     }
// });