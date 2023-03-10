// Get the element with the ID of qwerty and save it to a variable
let qwerty = document.querySelector('#qwerty');
// Get the element with the ID of phrase and save it to a variable.
let phrase = document.getElementById('phrase');
// Create a missed variable, initialized to 0 to keep track of the number of guesses the player has missed
let missed = 0;
let btn_reset = document.querySelector('.btn__reset');
// Create a phrases array that contains at least 5 different phrases as strings
let phrases = [
    "superficial commit",
    "burnout",
    "self taught",
    'programmer',
    'marathon not a sprint'
];

// Create a getRandomPhraseAsArray function
function getRandomPhrases(arr) {
    //choose a phrase from the phrases array
    let randomPhrase = phrases[Math.floor(Math.random()*phrases.length)];
    //split that phrase into a new array of characters 
    randomPhrase = randomPhrase.split('');
    //return the new array of characters
    return randomPhrase;
};

// Create an addPhraseToDisplay function that loops through an array of characters.
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        // for each character in the array, you’ll create a list item
        let newLi = document.createElement('li');
        // put the character inside of the list item
        newLi.textContent = arr[i];
        // and append that list item to the #phrase ul in your HTML
        phrase.appendChild(newLi);
        // If the character in the array is a letter and not a space, the function should add the class “letter” to the list item
        if (arr[i] !== " ") {
            newLi.className = "letter";
        };
    };
};

let phraseArray = getRandomPhrases(phrases);
addPhraseToDisplay(phraseArray);

// The checkLetter function will be used inside of the event listener you’ll write in the next step.
    // This function should have one parameter: the button the player has clicked when guessing a letter.
function checkLetter(button) {

    // Get all of the elements with a class of “letter”
    let letters = document.getElementsByClassName('.letter');
    // The function should loop over the letters
    for (let i = 0; i < letters.length; i++) {
        //and check if they match the letter in the button the player has chosen.
        if (button.textContent === letters[i]) {
            // store the matching letter inside of a variable
            let matchingLetter = letters[i];
            // If there’s a match, the function should add the “show” class to the list item containing that letter
            matchingLetter.className = 'show';
            // and return that letter
            
            return matchingLetter;
        } else {
            // If a match wasn’t found, the function should return null.
            return null;
        }
    }
};

// Attach an event listener to the “Start Game” button to hide the start screen overlay
btn_reset.addEventListener('click', () => {
    let overlay = document.getElementById('overlay');
    overlay.style.display = "none";
});

// Use event delegation to listen only to button events from the keyboard
qwerty.addEventListener('click', (e) => {
    let target = e.target;
    // When a player chooses a letter, add the “chosen” class to that button so the same letter can’t be chosen twice. 
    target.className = "chosen";
    // Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks
    target.setAttribute('disabled', true);
    // Pass the button to the checkLetter function, and store the letter returned inside of a variable called letterFound
    let letterFound = checkLetter(target);
});