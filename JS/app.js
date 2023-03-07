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

let phraseArray = getRandomPhrases(phrases);

function addPhraseToDisplay(arr) {
    // Create an addPhraseToDisplay function that loops through an array of characters. Inside the loop, for each character in the array, you’ll create a list item, put the character inside of the list item, and append that list item to the #phrase ul in your HTML. If the character in the array is a letter and not a space, the function should add the class “letter” to the list item. 
    for (let i = 0; i < arr.length; i++) {
        let newLi = document.createElement('li');
        newLi = newLi.textContent(arr[i]);
        if (arr[i] != " ") {
            newLi.className("letter");
        };
        phrase.appendChild(newLi);
    };
}



btn_reset.addEventListener('click', () => {
    let overlay = document.getElementById('overlay');

    overlay.style.display = "none";
});

// qwerty.addEventListener('click', (e) => {
//     if () {
        
//     } else {

//     }
// });