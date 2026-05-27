/*let userName = window.prompt("Please enter your name:", "John Doe");

const grid = document.getElementById("grid-container");
grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.maxWidth = "600px";
grid.style.width = "100%";
grid.style.marginTop = "20px";
grid.style.border = "1px solid red";

const frag = document.createDocumentFragment();

for(let i = 1; i<=100;i++){

    let div = document.createElement('div');
    div.classList.add("box");
    div.textContent = i;
    frag.appendChild(div);

}
grid.appendChild(frag)

//returns HTML collection
let boxes = document.getElementsByClassName("box");

//converts into array so we can use regular array methods
Array.from(boxes).forEach((element,index) => {
    console.log(element);
    element.style.backgroundColor = "rgb(154, 218, 255)";
    element.style.outline = "1px solid black";
    element.style.flex = "10%";
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
    element.style.height = "50px";

// if(checkPrime(index)){
// element.style.fontWeight = "100"
// element.style.backgroundColor = "green"
// }

});



/*1 - 100    3 corrcte answer math random
count = 1;
window.prompt 1-100 : 2  
collect guess[2] 
if (2 === 3)
    close the prompt then display the message " You are right 3"
}else{
    display the message " the number is between " 3 - 100
}
 hint = 3 - 100 
if (++count == 10){
    reviel the answer 3 end the system.    
}

window.prompt  7  guess[2, 7] 
 hint = 3 - 6
 display the message " the number is between " 3 - 6
 
 window.prompt  5  guess[2, 5] 
 hint = 3 - 4

 window.prompt  4  guess[2, 4] 
hint = 3



console.log(userName);*/


// select the div with id grid
const grid = document.getElementById('app');

// create the game grid
for (let i = 1; i <= 100; i++) {
    // create a div in memory
    const div = document.createElement('div');
    div.classList.add('box');
    div.textContent = i;
    // add the div to the page
    grid.appendChild(div);
}


// generate a number 1-100
const randomNumber = 55

// number of guesses
let numOfGuesses = 3;
let betweenNumbs = [];
let guess = 0;
// delay a second or 1000ms loading
setTimeout(guessNumberGame, 1000);
function guessNumberGame() {

    guess = Number(prompt('Guess a number from 1-100'));

    if (guess === randomNumber) {
        window.alert(`The number is ${guess}. You win!`);

        return;

    } else if (guess < randomNumber) {
        guess = Number(window.prompt(`The number ${guess} is too low! Try again. 
                \n ${numOfGuesses} guesses remain.`));
    } else {
        guess = Number(window.prompt(`The number ${guess} is too high! Try again. 
                \n ${numOfGuesses} guesses remain.`));
    }

    if (guess > betweenNumbs[0]) {
        betweenNumbs[0] = guess;

    } else{
        betweenNumbs[1] = guess;
    }
    paintBoxes(betweenNumbs);

    //Run out guess check
    if (numOfGuesses === 0) {
        window.alert(`Run out of ${numOfGuesses} guesses. You lose!`);
        return;
    }
    numOfGuesses--;

    setTimeout(guessNumberGame, 1000);
}

function paintBoxes(betweenNumbs) {


    // selecting all boxes by class "box"
    const boxes = document.querySelectorAll('.box')

    // loop over the boxes array and give us one box at a time
    for (let box of boxes) {

        // grab the number from the box (and convert it into a number data type)
        let boxNum = Number(box.textContent)

        // check if the box number is more than or equal the guessed number
        if (boxNum >= guess) {
            // change the box background color to red
            box.style.backgroundColor = 'red';
        }
    }
}
