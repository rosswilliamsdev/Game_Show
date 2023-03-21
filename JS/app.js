let qwerty = document.querySelector('#qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let btn_reset = document.querySelector('.btn__reset');
let overlay = document.getElementById('overlay');
let letters = document.getElementsByClassName('letter');
let phrases = [
    "commit",
    "burnout",
    "self taught",
    'programmer',
    'marathon'
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
        } else {
            newLi.className = "space";
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
            //add a class to add transition
            matchingLetter.style.transform = 'rotate(360deg)';
        } 
    }
    return matchingLetter;
};

btn_reset.addEventListener('click', () => {
    //This if statement is for the inital landing page, before the user has played the game at all
    if (overlay.className === 'start'){
    overlay.style.display = "none";
    } else {
        //Brings you to new game from endgame
        overlay.style.display = "none";
        //Reset random phrase
        addPhraseToDisplay(getRandomPhrases(phrases));
        //Make used buttons clickable again
        let chosen = document.getElementsByClassName('chosen');
        chosenArray = Array.from(chosen);
        chosenArray.forEach(element => {
            element.disabled = false;
            element.classList.remove('chosen');
            console.log('check chosen list')
        });
        //Reset hearts after endgame
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
        phrase.innerHTML = '';
        overlay.style.display = 'flex';
        overlay.className = 'win';
        overlay.children[0].textContent = "Congrats!";
    }
    else if (missed >= 5){
        phrase.innerHTML = '';
        overlay.style.display = 'flex';
        overlay.className = 'lose';
        overlay.children[0].textContent = "Good try!";
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