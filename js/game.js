
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


