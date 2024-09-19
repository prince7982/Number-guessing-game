
const containerEL = document.querySelector(".container");
const btnPlayEl = document.querySelector(".btn_again");
const btnChckEL = document.querySelector(".btn_check");
const hideNumEL = document.querySelector(".hide_num");
const msgEL = document.querySelector(".message");
const inputNumEL = document.querySelector(".input_number");
const scoreEL = document.querySelector(".score");

// generate random number from 1 to 10
let scretNum = Math.trunc(Math.random() * 10 + 1);
let score = 5;
let highScore = 0;

console.log(scretNum);  //for testing purposes

//check the user guess
btnChckEL.addEventListener("click", () => {
    const guess = Number(inputNumEL.value);

    //if input is not empty
    if (guess) {

        //if the guess is incorrect
        if (guess != scretNum) {

            if (score > 1) {

                score--;
                scoreEL.textContent = score;

                msgEL.textContent = guess > scretNum ? "Number is Too High" : "Number is Too Low"
                // scoreEL.textContent = score;
            } else {
                displayMessage("You've Lossed the Game");
                containerEL.style.backgroundColor = "#fff";
                scoreEL.textContent = 0
            }


        } else { //if the guess is correct
            hideNumEL.textContent = scretNum;
            hideNumEL.style.width = "50%"
            hideNumEL.style.backgroundColor = "#008000"
            hideNumEL.style.transition = "all 0.5s ease-in"
            containerEL.style.backgroundColor = "#e0d8d3";
            displayMessage("Chin Dabak Dam Dam Jeet Gaye..... :)")
        }

    } else {
        displayMessage("Please Enter the Number :(")
    }
});

//function to display a message
const displayMessage = function (message) {
    msgEL.textContent = message;
};

//Reset the game
btnPlayEl.addEventListener("click", () => {
    score = 5;
    scretNum = Math.trunc(Math.random()*10)+1;          //Regenerate the secret number
    scoreEL.textContent = score;
    hideNumEL.textContent = "?";                      //Reset hidden number display
    hideNumEL.style.width = "25%";
    hideNumEL.style.backgroundColor = "";           //Reset background color
    // hideNumEL.style.transition = "all 0.5s ease-in";
    inputNumEL.value = "";                        //clear input field
    containerEL.style.backgroundColor = "#ddd";  //Reset container background
    displayMessage("Start Guessing..........")  //Reset message
    console.log(scretNum);                     //for testing purposes
});
