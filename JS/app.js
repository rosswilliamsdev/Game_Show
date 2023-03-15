let qwerty = document.querySelector('#qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let btn_reset = document.querySelector('.btn__reset');
let overlay = document.getElementById('overlay');
let letters = document.getElementsByClassName('letter');
let phrases = [
    "superficial commit",
    "burnout",
    "self taught",
    'programmer',
    'marathon not a sprint'
];

function getRandomPhrases(arr) {
    let randomPhrase = phrases[Math.floor(Math.random()*phrases.length)];
    randomPhrase = randomPhrase.split('');
    return randomPhrase;
};

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let newLi = document.createElement('li');
        newLi.textContent = arr[i];
        phrase.appendChild(newLi);
        if (arr[i] !== " ") {
            newLi.className = "letter";
        };
    };
};

let phraseArray = getRandomPhrases(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(button) {
    let matchingLetter = null;
    for (let i = 0; i < letters.length; i++) {
        if (button.textContent === letters[i].textContent) {
            //if a guess is correct, show it in the phrase display
            matchingLetter = letters[i];
            matchingLetter.classList.add('show');
        } 
    }
    return matchingLetter;
};

btn_reset.addEventListener('click', () => {
    //This if statement is for the inital landing page, before the user has played the game at all
    if (overlay.className === 'start'){
    overlay.style.display = "none";
    } else {
        //Brings you back to landing page from endgame
        overlay.className = 'start';
        //Reset random phrase
        phrase.innerHTML = '';
        addPhraseToDisplay(phraseArray);
        console.log(phrase);
        //Make used buttons clickable again
        let chosen = document.getElementsByClassName('chosen');
        chosenArray = Array.from(chosen);
        chosenArray.forEach(element => {
            element.disabled = false;
            element.classList.remove('chosen');
        });
        //Reset hearts after endgame
        let allTries = document.querySelectorAll('.tries');
        let allMisses = document.querySelectorAll('.missed');
        for (i = 0; i<allMisses.length; i++){
            allMisses[i].src = 'images/liveHeart.png';
            allMisses[i].classList.remove('missed');
            allMisses[i].classList.add('tries');
            }
        //Reset missed
        missed = 0;
    }
});

function checkWin() {
    let showClass = document.querySelectorAll('.show');

    if (showClass.length === letters.length) {
        overlay.style.display = 'block';
        overlay.className = 'win';
        overlay.firstChild.innerHTML = `
        Congratulations!`;
    }
    else if (missed >= 5){
        overlay.style.display = 'block';
        overlay.className = 'lose';
        overlay.firstChild.innerHTML = `
        You lost, but that's alright!`;
    }
}


qwerty.addEventListener('click', (e) => {
    let target = e.target;

    if (target.tagName === 'BUTTON') {
    //Makes clicked buttons unclickable
    target.classList.add('chosen');
    target.setAttribute('disabled', true);

    let oneTry = document.querySelector('.tries');
    let letterFound = checkLetter(target);

    if (letterFound === null) {
        //Ticks a heart off each time user misses a guess
        missed++;
        oneTry.src = 'images/lostHeart.png';
        oneTry.classList.remove('tries');
        oneTry.classList.add('missed');
    }
}
    checkWin();
});