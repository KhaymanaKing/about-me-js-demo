// import functions

// grab DOM elements
const showButton = document.getElementById('animalButton');
const animal = document.getElementById('animalDiv');
const animalTxt = document.getElementById('animalText')

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

showButton.addEventListener('click', () => {
    animalTxt.classList.toggle('hidden');
    animal.classList.toggle('hidden');
});