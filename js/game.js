

document.addEventListener("keyup", function(event){

    let keyEvent = event.key.toLowerCase();
    let innerTextKey = addInnerText("output-text");
    let lowerCase = innerTextKey.toLowerCase();

   if(keyEvent === lowerCase){

    let scoreIncrease = addInnerTextToNumber("score-increase");
    let numValue = scoreIncrease + 1;
    showScore("score-increase", numValue);


    removeColor(innerTextKey);
    continueGame();

   }

   else{
    
    let scoreDecrease = addInnerTextToNumber("score-decrease");
    
    let numValueStuff = scoreDecrease - 1;

    showScore("score-decrease", numValueStuff);
   }


})






function continueGame(){
    let alphabet = setAlphabets();
    let outputElement = document.getElementById("output-text");
    outputElement.innerText = alphabet;

    addBgColor(alphabet);

}

document.getElementById("play-btn").addEventListener("click", function(){
    addHidden("first-sec");

    removeHidden("second-sec");

    continueGame();

})

