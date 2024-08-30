

document.addEventListener("keyup", function (event) {

    let keyEvent = event.key;
    
    if(keyEvent === " "){
        gameOver();
    }

    let keyEventLower = keyEvent.toLowerCase();
    let innerTextKey = addInnerText("output-text");
    let lowerCase = innerTextKey.toLowerCase();

    if (keyEventLower === lowerCase) {

        let scoreIncrease = addInnerTextToNumber("score-increase");
        let numValue = scoreIncrease + 1;
        showScore("score-increase", numValue);


        removeColor(innerTextKey);
        continueGame();

    }

    else {

        let scoreDecrease = addInnerTextToNumber("score-decrease");

        let numValueStuff = scoreDecrease - 1;

        showScore("score-decrease", numValueStuff);


        if (numValueStuff === 0) {
           /*  addHidden("second-sec");
            removeHidden("third-sec");

           let scoreIncreaseValue = addInnerTextToNumber("score-increase");
           showScore("final-result-output", scoreIncreaseValue);

           removeColor(addInnerText("output-text"));
 */

           gameOver();
        }

    }

})



/* play again btn */

document.getElementById("play-again-btn").addEventListener("click", function () {
    startPlayGame()
})





/* 
game start
*/


document.getElementById("play-btn").addEventListener("click", function () {
    
    startPlayGame()
})



/* 
function only
*/

function continueGame() {
    let alphabet = setAlphabets();
    let outputElement = document.getElementById("output-text");
    outputElement.innerText = alphabet;

    addBgColor(alphabet);

}

function startPlayGame() {
    addHidden("first-sec");
    addHidden("third-sec");
    removeHidden("second-sec");

    showScore("score-decrease", 5);
    showScore("score-increase", 0)


    continueGame();
}


function gameOver(){
    addHidden("second-sec");
    removeHidden("third-sec");

   let scoreIncreaseValue = addInnerTextToNumber("score-increase");
   showScore("final-result-output", scoreIncreaseValue);

   removeColor(addInnerText("output-text"));
}