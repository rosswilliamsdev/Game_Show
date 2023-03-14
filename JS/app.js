let qwerty = document.querySelector('#qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let btn_reset = document.querySelector('.btn__reset');
let overlay = document.getElementById('overlay');
let letters = document.getElementsByClassName('letter');
let chosen = document.querySelectorAll('.chosen');
let oneTry = document.querySelector('.tries');
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
            matchingLetter = letters[i];
            matchingLetter.classList.add('show');
        } 
    }
    return matchingLetter;
};

btn_reset.addEventListener('click', () => {
    //button needs to change overlay class from 'win'/'lose' back to 'start'
    //need to reset all changes: put missed to 0, new phrase, un-select letters, possibly more?
    if (overlay.className === 'start'){
    overlay.style.display = "none";
    console.log('We reached the if statement')
    } else {
        overlay.className = 'start';
        missed = 0;
        chosen.classList.remove('chosen');
        addPhraseToDisplay(phraseArray);
        console.log('We reached the else statement');

            for (let i= 0; i < oneTry.length; i++) {
                oneTry[i].setAttribute('src', 'images/liveHeart.png');
                oneTry[i].classList.remove('missed');
                oneTry[i].classList.add('tries');
                console.log('The for loop is looping');
        }
    }
});

function checkWin() {
    let showClass = document.querySelectorAll('.show');

    if (showClass.length === letters.length) {
        overlay.style.display = 'block';
        overlay.className = 'win';
        overlay.innerHTML = `
        <h1>Congratulations!</h1>
        <h3>You won the game!</h3>
        <a class='btn__reset'>Reset</a>`;
    }
    else if (missed >= 5){
        overlay.style.display = 'block';
        overlay.className = 'lose';
        overlay.innerHTML = `
        <h1>You lost!</h1>
        <h3>It's just a game though!</h3>
        <a class='btn__reset'>Reset</a>`;
    }
}


qwerty.addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName === 'BUTTON') {
    target.classList.add('chosen');
    target.setAttribute('disabled', true);
    let letterFound = checkLetter(target);

    if (letterFound === null) {
        missed++;
        oneTry.setAttribute('src', 'images/lostHeart.png');
        oneTry.classList.remove('tries');
        oneTry.classList.add('missed');
    }
}
    checkWin();
});