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
    let charactersArr = randomPhrase.split('');
    //return the new array of characters
    return charactersArr;
};

console.log(getRandomPhrases(phrases));