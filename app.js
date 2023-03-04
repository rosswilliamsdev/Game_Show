let qwerty = document.querySelector('#qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let btn_reset = document.querySelector('.btn__reset');

btn_reset.addEventListener('click', () => {
    let overlay = document.getElementById('overlay');

    overlay.style.display = "none";
});

console.log(qwerty);

// qwerty.addEventListener('click', (e) => {
//     if () {
        
//     } else {

//     }
// });